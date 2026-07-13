import { Repository } from 'typeorm';
import { UsuarioRequestDto } from './dto/usuario_request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario.module';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioModule)
        private readonly usuarioRepository: Repository<UsuarioModule>
    ){}
    todosUsuarios() {}

    buscarUsuarioPorEmail(email:string){
    }

    async novoUsuario(request: UsuarioRequestDto):Promise<void> {
        const existeUsuario = await this.usuarioRepository.findOne({
            where: {
                email: request.email
            }
        })
        if(existeUsuario) throw new BadRequestException('Usuario ja cadastrado')
        await this.usuarioRepository.save(request)
    }
}
