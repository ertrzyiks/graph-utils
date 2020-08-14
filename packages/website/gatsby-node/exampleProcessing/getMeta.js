const ts = require('typescript')
const Comments = require('parse-comments')

exports.getMeta = (fileName, rawContent) => {
  const commentRanges = ts.getLeadingCommentRanges(rawContent, 0)

  const comments = new Comments()

  const meta = {
    codeStart: 0,
    description: null,
    shortTitle: null,
    title: null
  }

  if (commentRanges && commentRanges.length > 0) {
    const range = commentRanges[0]

    const commentContent = rawContent.slice(range.pos, range.end)
    meta.codeStart = range.end

    const ast = comments.parse(commentContent)

    const node = ast.find(({ type }) => type === 'BlockComment')

    meta.description = node.description

    node.tags.forEach(({ title, description }) => {
      if (title === 'title') {
        meta.title = description
      }
      if (title === 'shortTitle') {
        meta.shortTitle = description
      }
    })
  }

  if (meta.title === null) {
    throw new Error(`${fileName} does not specify example title with @title tag`)
  }

  if (!meta.shortTitle) {
    meta.shortTitle = meta.title
  }

  return meta
}
