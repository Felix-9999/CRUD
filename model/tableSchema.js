import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: String,
  salary: Number,
  date: String,
});

const UsersTable = models.user || model("user", userSchema);

export default UsersTable;
