const ts = require('typescript')

const printer = ts.createPrinter({
  newLine: ts.NewLineKind.LineFeed,
  removeComments: true,
  omitTrailingSemicolon: false
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
        name: tag.name.getText(),
        comment: tag.comment || ''
      }))
    }
  }

  return {
    name: node.name.getText(),
    jsDoc,
    signature: printer.printNode(ts.EmitHint.Unspecified, node, node.parent)
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
