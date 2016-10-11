const mona = require('mona')

function quotedChar () {
  return mona.or(
    mona.noneOf('"'),
    mona.and(
      mona.string('""'),
      mona.value('"')))
}

function bit () {
  return mona.digit(2)
}

function string () {
  return mona.between(
    mona.string('"'),
    mona.string('"'),
    mona.text(quotedChar())
  )
}

function hex () {
  return mona.and(
    mona.string('#$'),
    mona.text(mona.digit(16))
  )
}

function binary () {
  return mona.and(
    mona.maybe(mona.string('#')),
    mona.string('%'),
    mona.text(mona.digit(2))
  )
}

function address () {
  return mona.and(
    mona.string('$'),
    mona.text(mona.alphanum())
  )
}

// this is the fallthrough parser
function alphanum () {
  return mona.and(
    mona.not(bit()),
    mona.not(address()),
    mona.not(binary()),
    mona.not(hex()),
    mona.not(string()),
    mona.text(
      mona.alphanum()
    )
  )
}

function parameter () {
  return mona.or(
    mona.tag(address(), 'address'),
    mona.tag(binary(), 'binary'),
    mona.tag(hex(), 'hex'),
    mona.tag(string(), 'string'),
    mona.tag(bit(), 'bit'),
    mona.tag(alphanum(), 'alphanum')
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
  parameters
}
