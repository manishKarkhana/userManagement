import Mongoose from 'mongoose';
const { Schema } = Mongoose;

const groupSchema = new Schema({
    groupName: { type: String, require: true, maxlength: 250, index: true },
    userId: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    isActive: { type: Boolean, default: true, require: true },
    createdAt: { type: Date, immutable: true, default: () => new Date() },
    updatedAt: [{ time: Date, name: String }],
});
export default Mongoose.model('groups', groupSchema);
