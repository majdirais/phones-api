import { IsInt, IsNotEmpty, IsPositive, IsString, MinLength } from "class-validator";

export class CreatePhoneDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    nom: string;

    @IsString()
    @IsNotEmpty()
    couleur: string;

    @IsInt()
    @IsPositive()
    stockage: number;
}