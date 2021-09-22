let re;
// Literal characters
re = /hello/;
re = /hello/i; // case insencitive
re = /hello/g; // global, search all matches

// Metacharacters Symhols
re = /^h/i; // must starts with
re = /^hello/i; // must starts with
re = /d$/i; // must ends with
re = /world$/i; // must ends with
re = /^hello$/i; // must begins adn ends with
re = /h.llo$/i; // matches any only ONE character
re = /h*llo$/i; // matches any character 0 or more times
re = /gra?e?y/i; // optional character (a is optional, e is optional)
re = /gra?e?y\?/i; // escape character ('gray?')
let re = /\.css/; // dot symbol

// Brackets [] - character sets
re = /gr[ae]y/i; // Must be inside [a or e]
re = /[GF]ray/i; // Must be inside [G or F]
re = /[^GF]ray/i; // Match anythig exept [G or F]
re = /^[GF]ray/i; // Must be begin with [G or F]
re = /[A-Z]ray/; // Begin's with any uppercase letter
re = /[a-z]ray/; // Begin's with any lowercase letter
re = /[A-Za-z]ray/; // Any letter (case insencitive)
re = /[0-9]ray/; // Any digit number
re = /[0-4]ray/; // Any digit from 0 to 4

// Braces {} Quantifiers
re = /Hel{2}o/i; // Match exacly {n} amount times.
re = /Hel{2,4}o/i; // Match range {form n, to m}.
re = /Hel{2,}o/i; // At least {n timres}.

// Parentheses () Grouping
re = /^([0-9]x){3}$/i;

// Shorthand character classes
re = /\w/; // Word character. Only letter, number, or _ (undrscore).
re = /\w+/; // One ore more word character.  + = one ore more
re = /\W/; // NON word character. () [] {} @
re = /\d/; // Match any digit number
re = /\d+/; // Match any digit number one or more times
re = /\D/; // NON digit number
re = /\s/; // Match whitespace charracter
re = /\S/; // NON whitespace charracter
re = /Hell\b/; // Word boundary. Only  Hell word, Hello is false

// Assertions
re = /x(?=y)/; // Match only if its before y
re = /x(?!y)/; // Match only if NOT before y
