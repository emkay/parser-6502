const mona = require('mona')
const parameters = require('./parameters').parameters

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

function directive () {
  return mona.sequence((s) => {
    const d = s(directiveName())
    const space = s(mona.spaces())
    const args = s(parameters())
    const nl = s(mona.eol())

    return mona.value({
      directive: d,
      args: args
    })
  })
}

module.exports = directive
