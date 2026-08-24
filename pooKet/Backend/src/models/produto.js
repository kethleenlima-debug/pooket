console.log("Criando Classes")

export class Produto{
    id;
    nome;
    ativo;
    constructor(id, nome){
        this.id = id;
        this.nome = nome;
        this.ativo = true
    }
    info(){
        return "Produto: " + this.nome + " - " + (this.ativo?"Em Estoque!": "Em Falta!");
    }
}
/*
const p1 = new Produto(1, "Carregador");
const p2 = new Produto(2, "Capinha");


console.log(p1);
console.log(p2);
p2.ativo = false;
console.log(p2);
console.log("Nome Produto: "+ p2.nome+ "; Status: " + p2.ativo);
p2.ativo = false;

*/