import mongoose from "mongoose";

import { IUser } from "../../types/dbmodels/User.interface";

// User Config
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide unique Username"],
    unique: [true, "Username Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide a unique email"],
    unique: true,
  },
  firstName: { type: String },
  lastName: { type: String },
  mobile: { type: Number },
  address: { type: String },
  profileImage: { type: String },
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
