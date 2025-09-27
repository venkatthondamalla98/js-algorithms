const convertCamelCase = (str) => {
  if(!str) return ""
  let words = str.match(/[a-zA-Z]+/g)
  return words.map((word, index) => {
    word = word.toLowerCase()
    if(index === 0) return word
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join('')
}



console.log(convertCamelCase("cats AND*Dogs-are Awesome"))
