const tap = require('tap')
const mona = require('mona')
const instructionParser = require('../parsers/instruction')

tap.test('will parse an instruction', (t) => {
  t.plan(1)
  t.deepEqual(mona.parse(instructionParser(), 'sei'), {
    args: null,
    instruction: 'sei'
  })
})

tap.test('will parse an instruction with args', (t) => {
  t.plan(1)
  t.deepEqual(mona.parse(instructionParser(), 'stx $2000'), {
    args: [
      [
        'address',
        '2000'
      ]
    ],
    instruction: 'stx'
  })
})

tap.test('will parse an instruction with multiple args', (t) => {
  t.plan(1)
  t.deepEqual(mona.parse(instructionParser(), 'lda background3, x'), {
    args: ['background3', 'x'],
    instruction: 'lda'
  })
})
