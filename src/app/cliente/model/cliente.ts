export class Cliente {

    id: number;
    nome: string;
    cpf: string;
    email: string;


    constructor(id: number, nome: string, cpf: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
    }
}
