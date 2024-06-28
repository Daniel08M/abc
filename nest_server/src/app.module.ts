import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './modulos/usuarios/usuarios.module';
import { JuegosModule } from './modulos/juegos/juegos.module';
import { EquiposModule } from './modulos/equipos/equipos.module';

@Module({
  imports: [UsuariosModule, JuegosModule, EquiposModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
