import { Injectable } from '@nestjs/common';
import {
    InjectModel
  } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentDocument } from 'src/schema/student.schema';

@Injectable()
export class StudentService {

    constructor(@InjectModel('Student') private readonly studentModel: Model < StudentDocument > ) {}
}

