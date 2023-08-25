'use strict'
const { EventEmitter } = require('events')

process.nextTick(console.log, 'passed!')

const ee = new EventEmitter()
//emit is synchornous so place listener .on before .emit
ee.on('error', (err)=>{console.log(err.message)})
ee.emit('error', Error('timeout'))

