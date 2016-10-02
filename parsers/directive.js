const mona = require('mona')
const parameters = require('./parameters')

function directiveName () {
  return mona.oneOf([
    '.inesprg',
    '.ineschr',
    '.inesmap',
    '.inesmir',
    '.bank',
    '.org',
    '.db',
    '.byte',
    '.dw',
    '.word',
    '.incbin',
    '.rsset',
    '.rs'
  ])
}

// <directive> ::= <directive-name> [<spaces> <parameter>]*
function directive () {
  return mona.sequence((s) => {
    const d = s(directiveName())
    const args = s(mona.map((a) => (a[0]), parameters()))
    // const nl = s(mona.eol())

    return mona.value({
      directive: d,
      args: args
    })
  })
}

module.exports = directive
