const ts = require('typescript')

const analyzeNode = (node, pushImport) => {
  switch (node.kind) {
    case ts.SyntaxKind.ImportDeclaration:
      const importSource = node.moduleSpecifier.text

      if (node.importClause && importSource === '@ertrzyiks/graph-utils') {
        node.importClause.namedBindings.elements.map(el => el.name.escapedText).forEach(importFnName => pushImport(importFnName))
      }
      break;
  }

  ts.forEachChild(node, nextNode => analyzeNode(nextNode, pushImport))
}

exports.findImports = (fileName, content) => {
  const node = ts.createSourceFile(fileName, content, undefined, true)


  const importedFunctions = []
  analyzeNode(node, (namedImport) => importedFunctions.push(namedImport))
  return importedFunctions
}
