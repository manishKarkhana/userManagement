import Mongoose from "mongoose";
var jwt = require('jsonwebtoken');

const { Schema } = Mongoose;

const userSchema = new Schema({
  name: { type: String, require: true, maxlength: 250, index: true },
  emailId: { type: String, require: true, maxlength: 250, index: true },
  password: { type: String, require: true, maxlength: 250, index: true },
  applicationsId: [{ type: Schema.Types.ObjectId, ref: 'applications' }],
  groupId: [{ type: Schema.Types.ObjectId, ref: 'groups' }],
  rolesId: [{ type: Schema.Types.ObjectId, ref: 'roles' }],
  addedBY: { type: String, require: true, maxlength: 250, index: true },
  isActive: { type: Boolean, default: true, require: true },
  createdAt: { type: Date, immutable: true, default: () => new Date() },
  updatedAt: [{ time: Date, name: String }],
  other: [{ type: Map, of: String }],
  tokens: [{ token: { type: String, require: true, maxlength: 250, index: true } }]
});
export default Mongoose.model("users", userSchema);
