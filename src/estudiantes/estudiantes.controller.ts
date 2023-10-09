import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @Post('create')
  registrarEstudiante(@Body() createEstudianteDto: CreateEstudianteDto) {
    return this.estudiantesService.registrarEstudiante(createEstudianteDto);
  }

  @Get()
  obtenerEstudiantes() {
    return this.estudiantesService.obtenerEstudiantes();
  }

  @Get('eliminados')
  obtenerEstudiantesEliminados() {
    return this.estudiantesService.obtenerEstudiantesEliminados();
  }

  @Get(':id')
  buscarUnEstudiante(@Param('id') id: string) {
    return this.estudiantesService.buscarUnEstudiante(+id);
  }

  @Patch(':id')
  actualizarUnEstudiante(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEstudianteDto: UpdateEstudianteDto,
  ) {
    return this.estudiantesService.actualizarUnEstudiante(
      id,
      updateEstudianteDto,
    );
  }

  @Delete(':id')
  eliminarUnEstudiante(@Param('id', ParseIntPipe) id: number) {
    return this.estudiantesService.eliminarUnEstudiante(id);
  }

  @Patch('restaurar-estudiante/:id')
  restaurarUnEstudiante(@Param('id', ParseIntPipe) id: number) {
    return this.estudiantesService.restaurarUnEstudiante(id);
  }
}
