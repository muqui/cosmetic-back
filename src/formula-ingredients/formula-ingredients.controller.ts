import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormulaIngredientsService } from './formula-ingredients.service';
import { CreateFormulaIngredientDto } from './dto/create-formula-ingredient.dto';
import { UpdateFormulaIngredientDto } from './dto/update-formula-ingredient.dto';

@Controller('formula-ingredients')
export class FormulaIngredientsController {
  constructor(private readonly formulaIngredientsService: FormulaIngredientsService) {}

  @Post()
  create(@Body() createFormulaIngredientDto: CreateFormulaIngredientDto) {
    return this.formulaIngredientsService.create(createFormulaIngredientDto);
  }

  @Get()
  findAll() {
    return this.formulaIngredientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formulaIngredientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormulaIngredientDto: UpdateFormulaIngredientDto) {
    return this.formulaIngredientsService.update(+id, updateFormulaIngredientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formulaIngredientsService.remove(+id);
  }
}
