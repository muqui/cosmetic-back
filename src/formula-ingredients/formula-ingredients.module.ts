import { Module } from '@nestjs/common';
import { FormulaIngredientsService } from './formula-ingredients.service';
import { FormulaIngredientsController } from './formula-ingredients.controller';

@Module({
  controllers: [FormulaIngredientsController],
  providers: [FormulaIngredientsService],
})
export class FormulaIngredientsModule {}
