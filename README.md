# parser-6502

[![Greenkeeper badge](https://badges.greenkeeper.io/emkay/parser-6502.svg)](https://greenkeeper.io/)
Parser for 6502 assembler

This is a parser written in javascript that will parse assembler written for the [6502 8-bit microprocessor](https://en.wikipedia.org/wiki/MOS_Technology_6502).

[![Build Status](https://travis-ci.org/emkay/parser-6502.svg?branch=master)](https://travis-ci.org/emkay/parser-6502)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)

## Usage

```javascript
const fs = require('fs')
const parser = require('parser-6502')
const input = fs.readFileSync('./asm.s', 'utf-8')
const result = parser(input)

console.log(result)
```

## API

### result = parser(input)

```javascript
[
  {
    "directive": ".db",
    "args": [
      {
        "binary": "00000001"
      }
    ]
  }
]
```

## Installation

`npm i paser-6502`

## License

MIT
