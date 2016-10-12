const tap = require('tap')
const parser = require('..')

tap.test('should parse the basics', (t) => {
  t.plan(1)
  const input = '.org $C000\nRESET:\n'
  t.deepEqual(parser(input), [
    {
      directive: '.org',
      args: [
        [
          'address',
          'C000'
        ]
      ]
    },
    {
      label: 'RESET'
    }
  ])
})
