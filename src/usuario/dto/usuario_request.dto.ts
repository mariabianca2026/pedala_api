export class UsuarioRequestDto {
    
    @IsNotEmpty({massage: "Campo nome e obrigatorio"})
    @MinLength(6, {
    message: (args: ValidationArguements) => `O Campo '${args:property}' deve conter no minimo ${args:contraints[0]} caracteres.`,
    })
    nome: string

    @IsNotEmpty({massage: "Campo email e obrigatorio"})
    email: string
    telefone: string
}