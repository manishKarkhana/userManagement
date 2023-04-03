import Route from '@ioc:Adonis/Core/Route'

Route.post("/group/cerateGroup", "groupController.cerateGroup")
Route.get("/group/getGroup", "groupController.getGroup")
Route.get("/group/listsGroup", "groupController.listsGroup")
Route.post("/group/updateGroup", "groupController.updateGroup")
Route.delete("/group/deleteGroup", "groupController.deleteGroup")
Route.post("/group/addUserToGroup", "groupController.addUserToGroup")
Route.post("/group/removeUserFromGroup", "groupController.removeUserFromGroup")

