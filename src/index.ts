import {Hono} from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json([
    { 'key1': 'value1'},
    { 'key2': 'value2'},
    { 'key3': 'value3'}
  ])
})

export default app
