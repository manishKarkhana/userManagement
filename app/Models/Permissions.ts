import Mongoose from 'mongoose';
const { Schema } = Mongoose;

const permissionSchema = new Schema({
    rolesId: [{ type: Schema.Types.ObjectId, ref: 'roles' }],
    select: { type: Boolean, default: false, require: true },
    create: { type: Boolean, default: false, require: true },
    email: { type: Boolean, default: false, require: true },
    exportPermission: { type: Boolean, default: false, require: true },
    read: { type: Boolean, default: false, require: true },
    deletePermission: { type: Boolean, default: false, require: true },
    report: { type: Boolean, default: false, require: true },
    setUserPermission: { type: Boolean, default: true, require: true },
    write: { type: Boolean, default: false, require: true },
    print: { type: Boolean, default: false, require: true },
    importPermission: { type: Boolean, default: false, require: true },
    share: { type: Boolean, default: false, require: true },
    modifiedBy: { type: String, require: true, maxlength: 250, index: true },
    isActive: { type: Boolean, default: true, require: true },
    createdAt: { type: Date, immutable: true, default: () => new Date() },
    updatedAt: [{ time: Date, name: String }],
});
export default Mongoose.model('permissions', permissionSchema);
