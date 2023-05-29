export function syncThemeToCssVariable(theme: { color: string }) {
  const { color } = theme
  const oCssVarStyle = document.getElementById('theme-css-variable')!
  const alpha = {
    '09': 'E5',
    '08': 'CC',
    '07': 'B2',
    '06': '99',
    '05': '7F',
    '04': '66',
    '03': '4C',
    '02': '33',
    '01': '19',
  }
  oCssVarStyle.innerHTML = `:root {
--primary-color: ${color};
${Object.entries(alpha).map(([key, val]) => `--primary-color-${key}: ${color + val}`).join(';\n')};
}`
}
