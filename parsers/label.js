const mona = require('mona')

function label () {
  return mona.sequence((s) => {
    const label = s(mona.text(mona.alphanum()))
    const end = s(mona.string(':'))
    // const nl = s(mona.eol())

    return mona.value({
      label: `${label}${end}`
    })
  })
}

module.exports = label
