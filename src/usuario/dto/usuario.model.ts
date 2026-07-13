import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("usuario")
export class UsuarioModule{
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    nome: string

    @Column()
    email: string
    
    @Column()
    telefone: string

    dataCriacao: Date
}