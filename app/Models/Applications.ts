import Mongoose from 'mongoose';
const { Schema } = Mongoose;

const applicationSchema = new Schema({
    name: { type: String, require: true, maxlength: 250, index: true },
    isActive: { type: Boolean, default: true, require: true },
    createdAt: { type: Date, immutable: true, default: () => new Date() },
    updatedAt: [{ time: Date, name: String }],
});
export default Mongoose.model('applications', applicationSchema);
