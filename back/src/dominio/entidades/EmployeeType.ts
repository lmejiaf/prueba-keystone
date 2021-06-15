export default class EmployeeType {
  private _color: String;
  private _name: String;
  private _id: any;
  private _creationDate: Date;

  public get color() {
    return this._color;
  }
  public get name() {
    return this._name;
  }
  public set color(color: String) {
    this._color = color;
  }
  public set name(name: String) {
    this._name = name;
  }
  public get id() {
    return this._id;
  }
  public set id(id: any) {
    this._id = id;
  }
  public set creationDate(creationDate: Date) {
    this._creationDate = creationDate;
  }
  public get creationDate() {
    return this._creationDate;
  }
}
