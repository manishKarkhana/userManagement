import groupServices from "App/Services/groupServices";
export default class groupController {
    public async cerateGroup({ request, response }) {
        let { groupName } = request.all();
        let cerateGroup = await groupServices.cerateGroup(groupName);
        response.send({
            success: true,
            message: " group created",
            cerateGroup: cerateGroup,
        });
    }
    public async getGroup({ request, response }) {
        let { _id } = request.all();
        let getGroup = await groupServices.getGroup(_id);
        response.send({
            success: true,
            getGroup: getGroup,
        });
    }
    public async listsGroup({ request, response }) {
        let { } = request.all();
        let getGroup = await groupServices.listsGroup();
        response.send({
            success: true,
            getGroup: getGroup,
        });
    }
    public async updateGroup({ request, response }) {
        let { _id, groupName, modifiedBy } = request.all();
        let updateGroup = await groupServices.updateGroup(_id, groupName, modifiedBy);
        response.send({
            success: true,
            message: " group updated",
            updateGroup: updateGroup,
        });
    }
    public async deleteGroup({ request, response }) {
        let { _id } = request.all();
        await groupServices.deleteGroup(_id);
        response.send({
            success: true,
            message: " group deleted",
        });
    }
    public async addUserToGroup({ request, response }) {
        let { _id, userId, modifiedBy } = request.all();
        let addUserToGroup = await groupServices.addUserToGroup(_id, userId, modifiedBy);
        response.send({
            success: true,
            message: "user added to group",
            user: addUserToGroup,
        });
    }
    public async removeUserFromGroup({ request, response }) {
        let { _id, userId, modifiedBy } = request.all();
        let removeUserFromGroup = await groupServices.removeUserFromGroup(_id, userId, modifiedBy);
        response.send({
            success: true,
            message: "user removed from group",
            user: removeUserFromGroup,
        });
    }

}