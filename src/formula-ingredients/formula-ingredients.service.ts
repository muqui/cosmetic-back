import { Injectable } from '@nestjs/common';
import { CreateFormulaIngredientDto } from './dto/create-formula-ingredient.dto';
import { UpdateFormulaIngredientDto } from './dto/update-formula-ingredient.dto';

@Injectable()
export class FormulaIngredientsService {
  create(createFormulaIngredientDto: CreateFormulaIngredientDto) {
    return 'This action adds a new formulaIngredient';
  }

  findAll() {
    return `This action returns all formulaIngredients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} formulaIngredient`;
  }

  update(id: number, updateFormulaIngredientDto: UpdateFormulaIngredientDto) {
    return `This action updates a #${id} formulaIngredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} formulaIngredient`;
  }
}
