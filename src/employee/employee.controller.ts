import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards
} from '@nestjs/common';
import {
  EmployeeService
} from './employee.service';
import {
  CreateEmployeeDto
} from '../dto/create-employee.dto';
import { UpdateEmployeeDto } from 'src/dto/update-employee.dto';
import { AuthGuard } from './employee.guard';

@UseGuards(AuthGuard)
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) { }

  @Post('createRecord')
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    try {
      const createData = await this.employeeService.create(createEmployeeDto);

      return {
        code: 200,
        message: 'Records saved!',
        data: createData
      }

    } catch (error) {
      return {
        code: 400,
        Error: error
      }
    }
  }

  @Get('allRecord')
  async findAll() {
    try {
      const allData = await this.employeeService.findAll();

      return {
        code: 200,
        message: 'all data',
        data: allData,


      }

    } catch (error) {
      return {
        code: 400,
        Error: error
      }

    }
  }

  @Get('findRecord/:id')
  async findOne(@Param('id') id: string) {
    try {
      const findById = await this.employeeService.findOne(id);

      return {
        code: 200,
        message: 'data found',
        data: findById

      }

    } catch (error) {
      return {
        code: 400,
        message: 'data not found',
        // Error: error
      }

    }
  }


  @Put('updateRecord/:id')
  async update(@Param('id') id: string, @Body() body: UpdateEmployeeDto) {
    console.log('update', id, body);

    const updateData = await this.employeeService.update(id, body);
    try {
      return {
        code: 200,
        message: 'data updated',
        data: updateData
      }
    } catch (error) {
      return {
        code: 400,
        Error: error
      }

    }

  }

  @Post('deleteRecord/:id')
  async remove(@Param('id') id: string) {
    const deleteData = await this.employeeService.remove(id);
    try {
      return {
        code: 200,
        message: 'data deleted',
        data: deleteData
      }

    } catch (error) {

    }
  }
}