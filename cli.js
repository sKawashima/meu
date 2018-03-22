#!/usr/bin/env node
const meu = require('./index.js')
process.argv.forEach((obj, i) => {
  if(i > 1) console.log(meu(obj))
})
