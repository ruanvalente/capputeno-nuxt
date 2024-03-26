export function checkClothingCategory(text: string): string {
  const lowercaseText = text.toLowerCase()

  if (
    lowercaseText.includes("men's clothing") ||
    lowercaseText.includes("women's clothing")
  ) {
    return 'clothes'
  }
  return text
}
