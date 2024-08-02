import { PartialType } from '@nestjs/mapped-types';
import { CreateFormulaIngredientDto } from './create-formula-ingredient.dto';

export class UpdateFormulaIngredientDto extends PartialType(CreateFormulaIngredientDto) {}
