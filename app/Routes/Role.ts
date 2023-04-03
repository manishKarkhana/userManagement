import Route from '@ioc:Adonis/Core/Route'

Route.post("/role/addRole", "roleController.addRole"),
    Route.get("/role/listRole", "roleController.listRole")
Route.get("/role/getRole", "roleController.getRole")
Route.post("/role/updateRole", "roleController.updateRole")
Route.delete("/role/deleteRole", "roleController.deleteRole")
Route.get("/role/getRolePermission", "roleController.getRolePermission")
Route.get("/role/listtRolePermission", "roleController.listtRolePermission")

