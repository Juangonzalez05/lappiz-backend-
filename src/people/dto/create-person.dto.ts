import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePersonDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString()
  @MaxLength(100)
  name!: string;

  @IsEmail({}, { message: 'El correo no tiene un formato válido' })
  @IsNotEmpty({ message: 'El correo es obligatorio' })
  email!: string;
}