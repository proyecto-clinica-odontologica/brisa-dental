import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';

@Controller('cita')
export class CitaController {
  constructor(private readonly citaService: CitaService) {}

  @Post()
  create(@Body() createCitaDto: CreateCitaDto) {
    return this.citaService.create(createCitaDto);
  }

  @Get()
  findAll() {
    return this.citaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.citaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCitaDto: UpdateCitaDto) {
    return this.citaService.update(id, updateCitaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.citaService.remove(id);
  }
}
