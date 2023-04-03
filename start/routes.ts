/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
// import "App/Routes/Application"
import "App/Routes/Group"
import "App/Routes/Permission"
// import "App/Routes/Resources"
import "App/Routes/Role"
import "App/Routes/User"

const mongoose = require("mongoose")

Route.get('/', async () => {
  return { hello: 'world' }
})
const DB = "mongodb+srv://admin:hello.1234@cluster0.ciea9.mongodb.net/test"
mongoose.connect(DB).then(() => {
  console.log("mongo database connected")
})



