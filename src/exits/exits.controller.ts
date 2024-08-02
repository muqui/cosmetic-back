import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExitsService } from './exits.service';
import { CreateExitDto } from './dto/create-exit.dto';
import { UpdateExitDto } from './dto/update-exit.dto';

@Controller('exits')
export class ExitsController {
  constructor(private readonly exitsService: ExitsService) {}

  @Post()
  create(@Body() createExitDto: CreateExitDto) {
    return this.exitsService.create(createExitDto);
  }

  @Get()
  findAll() {
    return this.exitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exitsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExitDto: UpdateExitDto) {
    return this.exitsService.update(+id, updateExitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exitsService.remove(+id);
  }
}
