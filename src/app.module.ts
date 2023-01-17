import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeController } from './employee/employee.controller';
import { StudentModule } from './student/student.module';
import { ConfigModule } from '@nestjs/config';
import { config, env } from 'process';




@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),MongooseModule.forRoot(process.env.MONGO_URL),EmployeeModule, StudentModule ],
  // imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 