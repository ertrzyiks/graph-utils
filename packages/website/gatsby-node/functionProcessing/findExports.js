const ts = require('typescript')

const printer = ts.createPrinter({
  removeComments: true,
  omitTrailingSemicolon: true
})

const analyzeExportedFn = (node) => {
  node.body = null
  node.modifiers = null

  let jsDoc = null

  if (node.jsDoc && node.jsDoc.length > 0) {
    const doc = node.jsDoc[0]
    jsDoc = {
      comment: doc.comment,
      tags: doc.tags.map(tag => ({
        tagName: tag.tagName.getText(),
        name: tag.name ? tag.name.getText() : undefined,
        type: tag.typeExpression ? tag.typeExpression.type.getText() : undefined,
        comment: tag.comment || ''
      }))
    }
  }

  const name = node.name.getText()
  const params = node.parameters.map(param => {
    return param.name.escapedText
  })

  const signatureDoc = jsDoc && jsDoc.tags.find(tag => tag.tagName === 'signature')

  return {
    name,
    returnType: node.type ? printer.printNode(ts.EmitHint.Unspecified, node.type, node.parent) : undefined,
    params: node.parameters.map(param => ({
      name: printer.printNode(ts.EmitHint.Unspecified, param.name, node.parent),
      type: printer.printNode(ts.EmitHint.Unspecified, param.type, node.parent)
    })),
    jsDoc,
    signature: signatureDoc ? signatureDoc.comment : `${node.name.getText()}(${params.join(', ')})`
  }
}

const analyzeNode = (node, pushExport) => {
  switch (node.kind) {
    case ts.SyntaxKind.ExportKeyword:
      if (node.parent.kind === ts.SyntaxKind.FunctionDeclaration) {
        const exportedFn = analyzeExportedFn(node.parent)
        pushExport(exportedFn)
      }
      break;
  }

  ts.forEachChild(node, nextNode => analyzeNode(nextNode, pushExport))
}

exports.findExports = (fileName, content) => {
  const node = ts.createSourceFile(fileName, content, undefined, true)

  const exportedFunctions = []
  analyzeNode(node, (fn) => exportedFunctions.push(fn))
  return exportedFunctions
}
