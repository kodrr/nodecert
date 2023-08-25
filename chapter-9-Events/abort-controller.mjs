import { once, EventEmitter } from 'events'
import { setTimeout } from 'timers/promises'

// const uneventful = new EventEmitter()
// const ac = new AbortController()
// const { signal } = ac

// setTimeout(500).then(() => ac.abort())

// try { 
// //events.once function returns a promise that resolves once an event has been fired:
//  await once(uneventful, 'ping', { signal })
//  console.log('pinged!')
// } catch (err) {
//  // ignore abort errors:
//  if (err.code !== 'ABORT_ERR') throw err
//  console.log('cancelled', err)
// }

const sometimesLaggy = new EventEmitter()
const ac = new AbortController()
const { signal } = ac

//1/4 pinged, 3/4 aborted depends on the random
setTimeout(2000 * Math.random(), { signal }).then(() => {
 sometimesLaggy.emit('ping')
})

setTimeout(500).then(() => ac.abort())

try { 
 await once(sometimesLaggy, 'ping', { signal })
 console.log('pinged!')
} catch (err) {
 // ignore abort errors:
 if (err.code !== 'ABORT_ERR') throw err
 console.log('cancelled', err)
}