import Roles from "App/Models/Roles";
import Mongoose from 'mongoose'

export default class roleServices {
    static async addRole(name, groupId) {
        let addRole = await Roles.create({
            name: name,
            groupId: groupId
        });
        return addRole;
    }
    static async listRole() {

        const listCategory = await Roles.find(
            { isActive: true },
        );
        return listCategory;
    }
    static async getRole(_id) {

        const getRole = await Roles.find(
            { _id: _id },
        );
        return getRole;
    }
    static async updateRole(_id, name, groupId, modifiedBy) {
        var time = {
            time: new Date(),
            name: modifiedBy
        }
        const updateRole = await Roles.findOne({ _id: _id });
        if (updateRole) {
            updateRole.name = name
            updateRole.groupId = groupId
            updateRole.updatedAt.push(time)
            await updateRole.save();
        }
        return updateRole
    }
    static async deleteRole(_id) {
        const deleteRole = await Roles.findOne({ _id: _id });
        if (deleteRole) {
            deleteRole.isActive = false
            await deleteRole.save();
        }
    }
    static async getRolePermission(_id) {
        let getRolePermission = Roles.aggregate([
            {
                $match: {
                    "_id": new Mongoose.Types.ObjectId(_id.toString()),
                }
            },
            {
                $lookup: {
                    from: "permissions",
                    localField: "_id",
                    foreignField: "rolesId",
                    as: "permissions",
                },
            },
        ])
        // console.log(getRolePermission, "vhjkl;kjh")
        return getRolePermission;
    }
    static async listtRolePermission() {
        let listtRolePermission = Roles.aggregate([

            {
                $lookup: {
                    from: "permissions",
                    localField: "_id",
                    foreignField: "rolesId",
                    as: "permissions",
                },
            },
        ])
        return listtRolePermission;
    }
}
