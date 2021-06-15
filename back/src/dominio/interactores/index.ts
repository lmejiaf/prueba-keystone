import CreateEmployeeTypeInteractor  from "./CreateEmployeeTypeInteractor";
import CreateEmployeeTypeMongo from "../../datasource/persistence/mongodb/CreateEmployeeTypeMongo";
import ICreateEmployeeTypeRepository from "../repositorios/ICreateEmployeeTypeRepository";

const createEmployeeTypeRepository:ICreateEmployeeTypeRepository = new CreateEmployeeTypeMongo();



let createEmployeeTypeInteractor= CreateEmployeeTypeInteractor(createEmployeeTypeRepository);

export {
    createEmployeeTypeInteractor,
}