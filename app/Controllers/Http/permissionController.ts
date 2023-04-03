import permissionServices from "App/Services/permissionServices";
export default class permissionController {
    public async addPermission({ request, response }) {
        let { rolesId, select, create, email, exportPermission, read, deletePermission, report, setUserPermission, write, print, importPermission, share } = request.all();
        let addPermission = await permissionServices.addPermission(rolesId, select, create, email, exportPermission, read, deletePermission, report, setUserPermission, write, print, importPermission, share);
        response.send({
            success: true,
            message: "Permission created",
            Permission: addPermission,
        });
    }
    public async listPermission({ request, response }) {
        let { } = request.all();
        let listPermission = await permissionServices.listPermission();
        response.send({
            success: true,
            listPermission: listPermission,
        });
    }
    public async getPermission({ request, response }) {
        let { _id } = request.all();
        let getPermission = await permissionServices.getPermission(_id);
        response.send({
            success: true,
            getPermission: getPermission,
        });
    }
    public async updatePermission({ request, response }) {
        let { _id, rolesId, select, create, email, exportPermission, read, deletePermission, report, setUserPermission, write, print, importPermission, share, modifiedBy } = request.all();
        let updatePermission = await permissionServices.updatePermission(_id, rolesId, select, create, email, exportPermission, read, deletePermission, report, setUserPermission, write, print, importPermission, share, modifiedBy);
        response.send({
            success: true,
            message: "Permission updated",
            updatePermission: updatePermission,
        });
    }
    public async deletePermission({ request, response }) {
        let { _id } = request.all();
        await permissionServices.deletePermission(_id);
        response.send({
            success: true,
            message: "Permission deleted",

        });
    }

}
