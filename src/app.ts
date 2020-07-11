import express, { Application, Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import _ from 'lodash'
import config from 'config'
import MongoClient from './mongoClient'

const app: Application = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/get_forum', (req: Request, res: Response) => {
  return MongoClient(async (db: any) => {
    const x: [] = await db.collection('forum').find().toArray()
    res.json(x)
  })
})

const change = (name: number): void => {
  console.log(name)
}

const checkArr = (arr: Array<any>): void => {
  console.log(arr)
}

app.get('/', (req: Request, res: Response) => {

  let { name, id } = req.query
  const n: number = parseInt(name as string)
  change(n)

  const users = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 36 }
  ]
  // console.log(_.orderBy(users, ['age'], ['asc']))
  checkArr(users)

  res.json({ data: n, query: req.query, params: req.params })
})
const PORT = config.get('db.port')
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`)
})
