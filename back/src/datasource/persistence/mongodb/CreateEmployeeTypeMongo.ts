import ICreateEmployeeTypeRepository from "../../../dominio/repositorios/ICreateEmployeeTypeRepository";
import EmployeeTypeModel from "./models/EmployeeTypeModel";
export default class implements ICreateEmployeeTypeRepository {
  public async createEmployeeType(name: String, color: String) {

    let employeeTypeDocumentId = await new EmployeeTypeModel({name, color}).save().then(employeeSaved => employeeSaved._id).catch(err=>{throw err});

    if (employeeTypeDocumentId) {
       let employeeTypeModel= await EmployeeTypeModel.findById(employeeTypeDocumentId).then(e=>e).catch(err=>err);
       return employeeTypeModel;
    }


    return null;
    
  }
}