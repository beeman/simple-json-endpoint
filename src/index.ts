import {Hono} from 'hono'
import {cors} from 'hono/cors'
import {wallets} from "./source";

const app = new Hono()
app.use(cors())

app.get('/', (c) => {
  return c.json(wallets)
})

export default app
