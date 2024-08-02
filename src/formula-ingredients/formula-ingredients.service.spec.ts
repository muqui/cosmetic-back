import { Test, TestingModule } from '@nestjs/testing';
import { FormulaIngredientsService } from './formula-ingredients.service';

describe('FormulaIngredientsService', () => {
  let service: FormulaIngredientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormulaIngredientsService],
    }).compile();

    service = module.get<FormulaIngredientsService>(FormulaIngredientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
