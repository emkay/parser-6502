const mona = require('mona')

const directive = require('./parsers/directive')
const instruction = require('./parsers/instruction')
const label = require('./parsers/label')

function assembler (input) {
  return mona.parse(
    mona.collect(
      mona.or(
        directive(),
        instruction(),
        label(),
        mona.eol(),
        mona.eof()
      )
    ),
    input
  )
}

module.exports = assembler
// const result = mona.parse(mona.collect(assembler()), c)
// console.log(result)
