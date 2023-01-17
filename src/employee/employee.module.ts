import {
  Module
} from '@nestjs/common';
import {
  EmployeeService
} from './employee.service';
import {
  EmployeeController
} from './employee.controller';
import {
  Employee,
  EmployeeSchema
} from '../schema/employee.schema';
import {
  MongooseModule
} from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Employee.name,
        schema: EmployeeSchema
      },
    ]),
    ConfigModule
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],

})
export class EmployeeModule { }