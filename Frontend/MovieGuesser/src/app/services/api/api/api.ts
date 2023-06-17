export * from './intento.service';
import { IntentoService } from './intento.service';
export * from './peliculasFecha.service';
import { PeliculasFechaService } from './peliculasFecha.service';
export * from './usuario.service';
import { UsuarioService } from './usuario.service';
export const APIS = [IntentoService, PeliculasFechaService, UsuarioService];
