import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { FormulaIngredientsModule } from './formula-ingredients/formula-ingredients.module';
import { EntriesModule } from './entries/entries.module';
import { FormulasModule } from './formulas/formulas.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { ExitsModule } from './exits/exits.module';
import { AuthModule } from './auth/auth.module';
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
    
 
    UsersModule,
    
 
    ProductsModule,
    
 
    OrdersModule,
    
 
    FormulaIngredientsModule,
    
 
    EntriesModule,
    
 
    FormulasModule,
    
 
    OrderDetailsModule,
    
 
    ExitsModule,
    
 
    AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
