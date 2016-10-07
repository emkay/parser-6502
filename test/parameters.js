const tap = require('tap')
const mona = require('mona')
const parsers = require('../parsers/parameters')

tap.test('should parse direct memory address param', (t) => {
  t.plan(1)
  const input = '$C000'
  t.deepEqual(mona.parse(parsers.address(), input), [
    'address',
    'C000'
  ])
})

tap.test('should parse hex param', (t) => {
  t.plan(1)
  const input = '#$FF'
  t.deepEqual(mona.parse(parsers.hex(), input), [
    'hex',
    'FF'
  ])
})

tap.test('should parse binary param', (t) => {
  t.plan(1)
  const input = '#%00000001'
  t.deepEqual(mona.parse(parsers.binary(), input), [
    'binary',
    '00000001'
  ])
})

tap.test('should parse param', (t) => {
  t.plan(1)

  const input = '#%00000001'
  t.deepEqual(mona.parse(parsers.parameter(), input), [
    [
      'binary',
      '00000001'
    ]
  ])
})

tap.test('should parse multiple params', (t) => {
  t.plan(1)

  const input = '$24,$24,$24'
  t.deepEqual(mona.parse(parsers.parameters(), input), [
    [
      'address',
      '24'
    ],
    [
      'address',
      '24'
    ],
    [
      'address',
      '24'
    ]
  ])
})
