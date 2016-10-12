const mona = require('mona')
const parameters = require('./parameters').parameters

const instructions = [
  'adc', 'and', 'asl',
  'bcc', 'bcs', 'beq', 'bit', 'bmi', 'bne', 'bpl', 'brk', 'bvc', 'bvs',
  'clc', 'cld', 'cli', 'clv', 'cmp', 'cpx', 'cpy',
  'dec', 'dex', 'dey',
  'eor',
  'inc', 'inx', 'iny',
  'jmp', 'jsr',
  'lda', 'ldx', 'ldy', 'lsr',
  'nop',
  'ora',
  'pha', 'php', 'pla', 'plp',
  'rol', 'ror', 'rti', 'rts',
  'sbc', 'sec', 'sed', 'sei', 'sta', 'stx', 'sty',
  'tax', 'tay', 'tsx', 'txa', 'txs', 'tya'
]

function instructionName () {
  return mona.oneOf(instructions)
}

function instruction () {
  return mona.sequence((s) => {
    const i = s(
      mona.followedBy(
        instructionName(),
        mona.maybe(mona.eol())
      )
    )

    const args = s(
      mona.maybe(
        mona.and(
          mona.spaces(),
          mona.followedBy(
            parameters(),
            mona.maybe(mona.eol())
          )
        )
      )
    )
    return mona.value({
      instruction: i,
      args: args
    })
  })
}

module.exports = instruction
