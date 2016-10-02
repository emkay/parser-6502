const mona = require('mona')

function quotedChar () {
  return mona.or(mona.noneOf('"'),
                 mona.and(mona.string('""'),
                          mona.value('"')))
}

// pulled out, because in the future, this might be more detailed!
// <parameter> ::= <alphanum>+
function parameter () {
  const param = () => {
    return mona.or(
      mona.join(
        mona.string('$'),
        mona.alphanum()
      ),
      mona.join(
        mona.string('#'),
        mona.string('$'),
        mona.alphanum()
      ),
      mona.join(
        mona.string('#'),
        mona.string('%'),
        mona.alphanum()
      ),
      mona.join(
        mona.string('%'),
        mona.alphanum()
      ),
      mona.between(
        mona.string('"'),
        mona.string('"'),
        mona.text(quotedChar())
      ),
      mona.alphanum()
    )
  }

  return mona.text(param(), {min: 1})
}

function parameters () {
  return mona.collect(
    mona.and(
      mona.spaces(),
      mona.split(
        parameter(),
        mona.or(
          mona.and(mona.string(','), mona.spaces()),
          mona.string(',')
        )
      )
    )
  )
}

module.exports = parameters
