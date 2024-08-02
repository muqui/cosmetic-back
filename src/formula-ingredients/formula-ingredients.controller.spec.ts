import { Test, TestingModule } from '@nestjs/testing';
import { FormulaIngredientsController } from './formula-ingredients.controller';
import { FormulaIngredientsService } from './formula-ingredients.service';

describe('FormulaIngredientsController', () => {
  let controller: FormulaIngredientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormulaIngredientsController],
      providers: [FormulaIngredientsService],
    }).compile();

    controller = module.get<FormulaIngredientsController>(FormulaIngredientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
