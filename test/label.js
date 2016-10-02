const tap = require('tap')
const mona = require('mona')
const labelParser = require('../parsers/label')

tap.test('should parse a label', (t) => {
  t.plan(2)
  t.deepEqual(mona.parse(labelParser(), 'SOMETHING:'), {
    label: 'SOMETHING:'
  })
})
