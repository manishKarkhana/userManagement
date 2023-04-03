import Route from '@ioc:Adonis/Core/Route'

Route.post("/user/createUser", "userController.createUser")
Route.post("/user/updateUser", "userController.updateUser")
Route.get("/user/getUser", "userController.getUser")
Route.get("/user/getUserList", "userController.getUserList")
Route.delete("/user/deleteUser", "userController.deleteUser")
Route.post("/user/login", "userController.login")
Route.post("/user/logout", "userController.logout")



