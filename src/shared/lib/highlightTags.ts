export function highlightTags(text: string) {
  return text.replace(/(?<!\w)#\w+/g, '<mark>$&</mark>')
}