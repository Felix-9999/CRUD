import { Schema, model, models } from 'mongoose';

const TableuserSchema = new Schema({
  name: String,
  email: String,
  salary: Number,
  date: String,
});

const UsersTable = models.user || model("user", TableuserSchema);

export default UsersTable;
