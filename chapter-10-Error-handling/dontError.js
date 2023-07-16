function doTask (amount) {
    console.log('this is amount', amount)
    if (typeof amount !== 'number') throw new TypeError('amount must be a number')
    if (amount <= 0) throw new RangeError('amount must be greater than zero')
    if (amount % 2) throw new OddError('amount')
    return amount / 2
   }

try { 
    setTimeout(() => {
   const result = doTask('test')
   console.log('result', result)
    }, 100)
} catch (err) {
    if (err.code === 'ERR_AMOUNT_MUST_BE_NUMBER') {
   console.error('wrong type')
    } else if (err.code === 'ERRO_AMOUNT_MUST_EXCEED_ZERO') {
   console.error('out of range')
    } else if (err.code === 'ERR_MUST_BE_EVEN') {
   console.error('cannot be odd')
    } else { 
   console.error('Unknown error', err)
    }
}


