import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import typeormConfig from './config/typeorm.config';


@Module({
  imports: [   
    ConfigModule.forRoot({
      isGlobal: true,
      load : [typeormConfig],
    }),
    TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => 
      configService.get('typeorm')
  }),
    
 
    UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
