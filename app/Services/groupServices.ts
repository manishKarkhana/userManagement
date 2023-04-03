import Groups from "App/Models/Groups";

export default class groupServices {
    static async cerateGroup(groupName) {
        let addItemProperties = await Groups.create({
            groupName: groupName,
        });
        return addItemProperties;
    }
    static async getGroup(_id) {
        const getGroup = await Groups.findOne({ _id: _id });
        return getGroup;
    }
    static async listsGroup() {
        const listsGroup = await Groups.find({ isActive: true });
        return listsGroup;
    }
    static async updateGroup(_id, groupName, modifiedBy) {
        var time = {
            time: new Date(),
            name: modifiedBy
        }
        const updateGroup = await Groups.findOne({ _id: _id });
        if (updateGroup) {
            updateGroup.groupName = groupName
            updateGroup.updatedAt.push(time)
            await updateGroup.save();
        }
    }
    static async deleteGroup(_id) {
        const deleteGroup = await Groups.findOne({ _id: _id });
        if (deleteGroup) {
            deleteGroup.isActive = false

            await deleteGroup.save();
        }
    }
    static async addUserToGroup(_id, userId, modifiedBy) {
        var time = {
            time: new Date(),
            name: modifiedBy
        }
        const addUserToGroup = await Groups.findOne({ _id: _id });
        if (addUserToGroup) {
            addUserToGroup.userId.push(userId)
            addUserToGroup.updatedAt.push(time)
            await addUserToGroup.save();
        }
    }
    static async removeUserFromGroup(_id, userId, modifiedBy) {
        var time = {
            time: new Date(),
            name: modifiedBy
        }
        await Groups.updateOne({ _id: _id }, { "$pull": { "userId": userId } });
        const removeUserFromGroup = await Groups.findOne({ _id: _id });
        if (removeUserFromGroup) {
            removeUserFromGroup.updatedAt.push(time)
            await removeUserFromGroup.save();
        }

    }
}

