const tap = require('tap')
const mona = require('mona')
const labelParser = require('../parsers/label')

tap.test('should parse a label', (t) => {
  t.plan(1)
  t.deepEqual(mona.parse(labelParser(), 'SOMETHING:\n'), {
    label: 'SOMETHING'
  })
})
