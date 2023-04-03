import roleServices from "App/Services/roleServices";
export default class roleController {
    public async addRole({ request, response }) {
        let { name, groupId } = request.all();
        let addRole = await roleServices.addRole(name, groupId);
        response.send({
            success: true,
            message: "role created",
            role: addRole,
        });
    }
    public async listRole({ request, response }) {
        let { } = request.all();
        let listRole = await roleServices.listRole();
        response.send({
            success: true,
            role: listRole,
        });
    }
    public async getRole({ request, response }) {
        let { _id } = request.all();
        let getRole = await roleServices.getRole(_id);
        response.send({
            success: true,
            role: getRole,
        });
    }
    public async updateRole({ request, response }) {
        let { _id, name, groupId, modifiedBy } = request.all();
        let updateRole = await roleServices.updateRole(_id, name, groupId, modifiedBy);
        response.send({
            success: true,
            message: "role updated",
            role: updateRole,
        });
    }
    public async deleteRole({ request, response }) {
        let { _id } = request.all();
        await roleServices.deleteRole(_id);
        response.send({
            success: true,
            message: "role deleted",

        });
    }
    public async getRolePermission({ request, response }) {
        let { _id } = request.all();
        let getRolePermission = await roleServices.getRolePermission(_id);
        response.send({
            success: true,
            getRolePermission: getRolePermission,
        });
    }
    public async listtRolePermission({ request, response }) {
        let { } = request.all();
        let listtRolePermission = await roleServices.listtRolePermission();
        response.send({
            success: true,
            listtRolePermission: listtRolePermission,
        });
    }

}
