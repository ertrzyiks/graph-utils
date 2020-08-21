export interface JsDoc {
  comment: string
  tags: {
    comment: string
    tagName: string
    name?: string
    type?: string
  }[]
}
