// Enum
export const Genero = Object.freeze({
    M: "M",
    F: "F",
    OUTRO: "Outro"
})

// classe
export class Usuario{
    id;
    nome;
    senha;
    dataNascimento;
    genero;
    isAdmin;
    // metodo construtor
    constructor(id, nome,senha,dataNascimento,genero){
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.dataNascimento = new Date(dataNascimento);
        this.genero= genero;
        this.isAdmin = false;
    }
    // metodos de classe --> função
    perfil(){
        return "Nome: " + this.nome + " --- Data de Nacimento: " + this.dataNascimento.toString();
    }
}
/*
const user1 =new Usuario(1, "Ana Pereira","ABC123","2005-05-19T00:00:00",Genero.F)
const user2 =new Usuario(2, "Luan Martins","AB3","2015-10-03:00:00",Genero.M)
console.log(user1)
user1.nome = "Ana Pereira Santos"
console.log(user1)
console.log(user1.perfil())
console.log(user2.perfil())

*/