const mona = require('mona')

function quotedChar () {
  return mona.or(
    mona.noneOf('"'),
    mona.and(
      mona.string('""'),
      mona.value('"')))
}

function digit () {
  return mona.text(mona.digit(), {min: 1})
}

function string () {
  return mona.between(
    mona.string('"'),
    mona.string('"'),
    mona.text(quotedChar(), {min: 1})
  )
}

function hex () {
  return mona.and(
    mona.string('#$'),
    mona.text(mona.digit(16), {min: 1})
  )
}

function binary () {
  return mona.and(
    mona.maybe(mona.string('#')),
    mona.string('%'),
    mona.text(mona.digit(2), {min: 1})
  )
}

function address () {
  return mona.and(
    mona.string('$'),
    mona.text(mona.alphanum(), {min: 1})
  )
}

// this is the fallthrough parser
function alphanum () {
  return mona.and(
    mona.not(digit()),
    mona.not(address()),
    mona.not(binary()),
    mona.not(hex()),
    mona.not(string()),
    mona.text(
      mona.alphanum(),
      {min: 1}
    )
  )
}

function parameter () {
  return mona.or(
    mona.tag(address(), 'address'),
    mona.tag(binary(), 'binary'),
    mona.tag(hex(), 'hex'),
    mona.tag(string(), 'string'),
    mona.tag(digit(), 'digit'),
    mona.tag(alphanum(), 'alphanum')
  )
}

function parameters () {
  return mona.split(
    parameter(),
    mona.trim(mona.string(','))
  )
}

module.exports = {
  parameter,
  parameters
}
