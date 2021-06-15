import ICreateEmployeeTypeRepository from "../repositorios/ICreateEmployeeTypeRepository";

const createEmployeeType =
  (ICreateEmployeeType: ICreateEmployeeTypeRepository) =>
  async (name: String, color: String) => {
    let employeeType = await ICreateEmployeeType.createEmployeeType(name, color)
      .then((response) => ({ response }))
      .catch((err) => ({ err }));

    return employeeType;
  };
export default createEmployeeType;