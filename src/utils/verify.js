export const verify = (letterInput, pickedWords) => {
  if (!letterInput || !letterInput.match(/[a-z]/i)) {
    return {isValid: false, error: 'Input inválido!'}
  }
  if (pickedWords.includes(letterInput)) {
    return {isValid: false, error: 'Letra ja escolhida!'}
  } 
  return { isValid: true, error: ''}
}
