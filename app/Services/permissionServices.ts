import Permissions from "App/Models/Permissions";
import Mongoose from 'mongoose'

export default class permissionServices {
    static async addPermission(rolesId, select, create, email, exportPermission, read, deletePermission, report, setUserPermission, write, print, importPermission, share) {
        let addPermission = await Permissions.create({
            rolesId: rolesId,
            select: select,
            create: create,
            email: email,
            exportPermission: exportPermission,
            read: read,
            deletePermission: deletePermission,
            report: report,
            setUserPermission: setUserPermission,
            write: write,
            print: print,
            importPermission: importPermission,
            share: share

        });
        return addPermission;
    }
    static async listPermission() {

        const listPermission = await Permissions.find(
            { isActive: true },
        );
        return listPermission;
    }
    static async getPermission(_id) {

        const getPermission = await Permissions.find(
            { _id: _id },
        );
        return getPermission;
    }
    static async updatePermission(_id, rolesId, select, create, email, exportPermission, read, deletePermission, report, setUserPermission, write, print, importPermission, share, modifiedBy) {
        var time = {
            time: new Date(),
            name: modifiedBy
        }
        const updatePermission = await Permissions.findOne({ _id: _id });
        if (updatePermission) {
            updatePermission.rolesId = rolesId
            updatePermission.select = select
            updatePermission.create = create
            updatePermission.email = email
            updatePermission.exportPermission = exportPermission
            updatePermission.deletePermission = deletePermission
            updatePermission.report = report
            updatePermission.setUserPermission = setUserPermission
            updatePermission.write = write
            updatePermission.print = print
            updatePermission.importPermission = importPermission
            updatePermission.share = share
            updatePermission.updatedAt.push(time)
            await updatePermission.save();
        }
        return updatePermission
    }
    static async deletePermission(_id) {
        const deletePermission = await Permissions.findOne({ _id: _id });
        if (deletePermission) {
            deletePermission.isActive = false
            await deletePermission.save();
        }
    }
}
