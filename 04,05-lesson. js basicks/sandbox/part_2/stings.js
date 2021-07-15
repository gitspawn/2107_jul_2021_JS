// Strings

// ''
// ""
// `` backticks

// `${}`

// let firstName = 'Vova'
// let lastName = 'Johnson'

// let fullName = firstName + ' ' + lastName
// console.log(fullName)

// ==================================
// Tempale sting
// `${}`

// let firstName = 'Vova'
// let lastName = 'Johnson'
// let fullName = `${firstName} ${lastName}`
// console.log(fullName)

// ==============================
// Append
// let product = 'Apple'
// Long way
// product = product + ' ' + 'Samsung'
// product = product + ' ' + 'LG'

// Short way
// product += ' ' + 'Samsung'
// product += ' ' + 'LG'
// console.log(product)

// =================================
// Lenght
// let quote = 'To be or not to be!!! sdvgsdfgsdfg'
// let userName = 'Vova'
// console.log(quote.length)
// console.log(userName.length)

// Symbol position
// let str = 'To be or not to be!'
// let char = str[0]
// char = str[1]
// char = str[2]
// char = str[3]

// console.log(char)

// ===========================
// Find last symbol
// let status = 'To be or not to be!. Thet is the question'
// let lastSymbol = status[status.length - 1] // 5
// console.log(lastSymbol)

// ===================================
// find index
// let greet = 'hello world'
// let showIndex = greet.indexOf('w') // returns index or -1
// console.log(showIndex)

// =========================
// charAt
// let greet = 'hello world'
// let showChar = greet.charAt(greet.length - 1) // d
// console.log(showChar)

//=============================
// Includes - for search in string
// let greet = 'hello world'
// let findSomething = greet.includes('hello') // true / false
// console.log(findSomething)

// ============================
// Substring
// let greet = 'hello world'
// let result = greet.substring() // 'hello world'
// let result = greet.substring(0) // 'hello world'
// let result = greet.substring(1) // 'ello world'
// let result = greet.substring(2) // 'llo world'
// let result = greet.substring(3) // 'lo world'
// let result = greet.substring(0, 1) // 'h'
// let result = greet.substring(0, 2) // 'he'
// let result = greet.substring(0, 3) // 'hel'
// let result = greet.substring(1, 4) // 'hel'
// console.log(result)

// ================================
// Slice
// let greet = 'hello world'
// let result = greet.slice() // 'hello world
// let result = greet.slice(0) // 'hello world
// let result = greet.slice(1) // 'ello world
// let result = greet.slice(0, 3) // 'hel"
// let result = greet.slice(1, 3) // 'el'
// console.log(result)

// ====================================
// split.reverse.join

// let greet = 'hello world'

// let result = greet.split(' ') // converts to array
// console.log(result)
// console.log(typeof result)

// Reverse string
// let result = greet.split('').reverse().join('')
// console.log(result)

// let uri = 'https://www.youtube.com/watch?v=_PgWxvu9rCw&q=pizza&author=mozart'

// let parsUri = uri.split('=')
// console.log(parsUri)

// =======================================
// Replace
// let userMessage = 'hello spam world and spam people'
// let result = userMessage.replace('spam', 'best')
// console.log(result)

// ========================================
''.toUpperCase()
''.toLowerCase()
// ''.toLocaleUpperCase()
// ''.toLocaleLowerCase()

// let greet = 'hello world'
// let newMsg = greet.toUpperCase()
// console.log(newMsg)

// let greet = 'hElLo WoRlD'
// let newMsg = greet.toLowerCase()
// console.log(newMsg)
