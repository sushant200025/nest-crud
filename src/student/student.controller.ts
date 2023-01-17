import { Controller, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    @Post('/create')
    createStudent():String{
        return "Studnt created";
    }
    

    
    }

