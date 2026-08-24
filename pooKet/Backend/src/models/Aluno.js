// Enum
export const Turno = Object.freeze({
    MANHA: "Manhã",
    TARDE: "Tarde",
    NOITE: "Noite"
})

// classe
export class Aluno{
    id;
    nome;
    dataMatricula;
    turno;
    estaAtivo;
    // metodo construtor
    constructor(id, nome,dataMatricula,turno){
        this.id = id;
        this.nome = nome;
        this.dataMatricula = new Date(dataMatricula);
        this.turno= turno;
        this.estaAtivo = true;
    }
      cadastro_estudante(){
        return "Nome: " + this.nome + " --- Data de Matricula: " + this.dataMatricula.toString();
    }

}
/*
const Aluno1 =new Aluno(1, "Bella Martins","2025-02-01T00:00:00",Turno.MANHA)
const Aluno2 =new Aluno(2, "Luan Silva","2023-01-30T00:00:00",Turno.TARDE)
console.log(Aluno1)
Aluno1.estaAtivo = false
console.log(Aluno1)
console.log(Aluno2)
*/

