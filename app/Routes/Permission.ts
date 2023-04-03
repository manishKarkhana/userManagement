import Route from '@ioc:Adonis/Core/Route'

Route.post("/permission/addPermission", "permissionController.addPermission"),
    Route.get("/permission/listPermission", "permissionController.listPermission")
Route.get("/permission/getPermission", "permissionController.getPermission")
Route.post("/permission/updatePermission", "permissionController.updatePermission")
Route.delete("/permission/deletePermission", "permissionController.deletePermission")

