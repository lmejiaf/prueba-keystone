import EmployeeType from "../entidades/EmployeeType";
export default interface ICreateEmployeeTypeRepository {
  createEmployeeType(name: String, color: String): Promise<any>;
}
