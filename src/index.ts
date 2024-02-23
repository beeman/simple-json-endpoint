import {Hono} from 'hono'
import {wallets} from "./source";

const app = new Hono()

app.get('/', (c) => {
  return c.json(wallets)
})

export default app
