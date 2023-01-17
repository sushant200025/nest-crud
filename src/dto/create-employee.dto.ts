import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

import {
  Employee
} from "../entities/employee.entity";

export class CreateEmployeeDto {


  @IsString()
  @IsNotEmpty() 
  FirstName: String


  @IsString()
  @IsNotEmpty()
   SurName:string

   @IsNumber()
   Age:number



}