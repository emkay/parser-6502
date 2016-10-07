const mona = require('mona')

function quotedChar () {
  return mona.or(
    mona.noneOf('"'),
    mona.and(
      mona.string('""'),
      mona.value('"')))
}

function bit () {
  return mona.join(
    mona.value('digit'),
    mona.digit(2)
  )
}

function string () {
  return mona.join(
    mona.value('string'),
    mona.between(
      mona.string('"'),
      mona.string('"'),
      mona.text(quotedChar())
    )
  )
}

function hex () {
  return mona.join(
    mona.and(
      mona.string('#$'),
      mona.value('hex')
    ),
    mona.text(
      mona.digit(16)
    )
  )
}

function binary () {
  return mona.join(
    mona.and(
      mona.maybe(mona.string('#')),
      mona.string('%'),
      mona.value('binary')
    ),
    mona.text(
      mona.digit(2)
    )
  )
}

function address () {
  return mona.join(
    mona.and(
      mona.string('$'),
      mona.value('address')
    ),
    mona.text(
      mona.alphanum()
    )
  )
}

// this is the fallthrough parser
function alphanum () {
  return mona.join(
    mona.value('alphanum'),
    mona.and(
      mona.not(bit()),
      mona.not(address()),
      mona.not(binary()),
      mona.not(bit()),
      mona.not(string()),
      mona.text(mona.alphanum())
    )
  )
}

function parameter () {
  return mona.or(
    address(),
    binary(),
    hex(),
    string(),
    bit(),
    alphanum()
  )
}

function parameters () {
  return mona.split(
    parameter(),
    mona.or(
      mona.and(mona.string(','), mona.spaces()),
      mona.string(','),
      mona.spaces()
    )
  )
}

module.exports = {
  parameter,
  parameters,
  address,
  binary,
  hex,
  string,
  bit,
  alphanum
}
