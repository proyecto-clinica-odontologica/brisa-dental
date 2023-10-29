import { PartialType } from '@nestjs/mapped-types';
import { CreateExamengeneralDto } from './create-examengeneral.dto';
import { IsNumber, IsOptional, IsPositive, Length, Matches, Max, Min } from 'class-validator';

export class UpdateExamengeneralDto {
    @IsNumber()
    @IsPositive()
    @IsOptional()
    peso?: number;

    @IsNumber()
    @IsPositive({message: 'La talla Respiratoria no debe ser negativo.'})
    @IsOptional()
    talla?: number;

    @IsNumber()
    @IsPositive({message: 'El indice de masa corporal no debe ser negativo.'})
    @IsOptional()
    IndiceMasaCorporal?: number;
    
    @IsOptional()
    @Matches(/^[a-zA-Z\s]*$/, {
        message: 'La piel solo puede contener letras',
    })
    @Length(3, 50, { message: 'La piel debe tener entre 3 y 50 caracteres' })
    piel?: string;

    @IsOptional()
    @Matches(/^[a-zA-Z\s]*$/, {
        message: 'El anexo del cabello solo puede contener letras',
    })
    @Length(3, 50, { message: 'El anexo del cabello debe tener entre 3 y 50 caracteres' })
    AnexosCabello?: string;

    @IsOptional()
    @Matches(/^[a-zA-Z\s]*$/, {
        message: 'El anexo de uñas solo puede contener letras',
    })
    @Length(3, 50, { message: 'El anexo de uñas debe tener entre 3 y 50 caracteres' })
    AnexosUnias?: string;

    @IsOptional()
    @Length(3, 50, { message: 'La presión arterial debe tener entre 3 y 50 caracteres' })
    presionArterial?: string;

    @IsNumber()
    @IsOptional()
    @IsPositive({message: 'La frecuencia Respiratoria no debe ser negativo.'})
    @Max(40, { message: 'La frecuencia respiratoria no debe exceder de 40 rpm.' })
    @Min(5, { message: 'La frecuencia respiratoria no debe ser inferior a 5 rpm.' })
    frecuenciaRespiratoria?: number;

    @IsNumber()
    @IsOptional()
    @IsPositive({message: 'La frecuencia Respiratoria no debe ser negativo.'})
    @Max(100, { message: 'El pulso no debe exceder de 100 ppm.' })
    @Min(50, { message: 'El pulso no debe ser inferior a 50 ppm.' })
    pulso?: number;

    @IsNumber()
    @IsOptional()
    @IsPositive({message: 'La temperatura no debe ser negativo.'})
    @Max(100, { message: 'La temperatura no debe exceder de 100.' })
    @Min(0, { message: 'La temperatura no debe ser inferior a 0.' })
    temperatura?: number;

    @IsOptional()
    @IsNumber()
    IdPaciente?: number;
}
