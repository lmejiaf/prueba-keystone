import { Schema, model } from "mongoose";

const employeeTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  color: {
    type: String,
    required: true,
    unique: true,
  },
  creation_date: {
    type: Date,
    default: Date.now(),
    required: false,
  },
});
const EmployeeTypeModel = model("EmployeeTypeModel", employeeTypeSchema);
export default EmployeeTypeModel;
