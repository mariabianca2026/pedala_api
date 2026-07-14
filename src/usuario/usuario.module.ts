import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([UsuarioModule])],
  controllers: [UsuarioController],
  providers: [UsuarioService]
})
export class UsuarioModule {}
