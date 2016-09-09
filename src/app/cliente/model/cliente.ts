export class Cliente {

//[{"id":1,"nome":"josemalyson","cpf":8726099446,"email":"josemalyson@gmail.com"}]

    public id: Number;
    public nome: String;
    public cpf: String;
    public email: String;


    constructor(id: Number, nome: String, cpf: String, email: String){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
    }
}
