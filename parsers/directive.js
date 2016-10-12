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
    const args = s(
      mona.maybe(
        mona.and(
          mona.spaces(),
          mona.followedBy(
            parameters(),
            mona.eol()
          )
        )
      )
    )

    return mona.value({
      directive: d,
      args: args
    })
  })
}

module.exports = directive
