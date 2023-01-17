import {
    Injectable
  } from '@nestjs/common';
  import {
    InjectModel
  } from '@nestjs/mongoose';
  import {
    Model
  } from 'mongoose';
  import {
    CreateEmployeeDto
  } from '../dto/create-employee.dto';
 
  import {
    Employee,
    EmployeeDocument
  } from '../schema/employee.schema';
  
  @Injectable()
  export class EmployeeService {
  
    constructor(@InjectModel('Employee') private readonly employeeModel: Model < EmployeeDocument > ) {}
  
    create(createEmployeeDto: CreateEmployeeDto) {
      const employee = new this.employeeModel(createEmployeeDto);
      return employee.save();
    }
  
    async findAll(): Promise < EmployeeDocument[] > {
      return this.employeeModel.find();
    }
  
    findOne(id: string) {
      return this.employeeModel.findById(id); 
    }
  
    async update(id:string, body:any):Promise<EmployeeDocument>
    {
      console.log('employee updated');
      return this.employeeModel.findByIdAndUpdate(id,body);
      
    }

    async remove(id:string){
      console.log(id);
      
      return this.employeeModel.remove({_id:id});
    }
   
  }