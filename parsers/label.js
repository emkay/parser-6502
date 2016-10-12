const mona = require('mona')

function label () {
  return mona.sequence((s) => {
    const label = s(
      mona.followedBy(
        mona.text(mona.alphanum(), {min: 1}),
        mona.string(':'),
        mona.eol()
      )
    )

    return mona.value({
      label
    })
  })
}

module.exports = label
