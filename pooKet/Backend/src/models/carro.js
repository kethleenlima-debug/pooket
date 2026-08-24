console.log("Criando Classes")

export class Carro{
    id;
    nome;
    cor;
    disponivel;
    anoFabricaçao;
    constructor(id, nome, cor, anoFabricaçao){
        this.id = id;
        this.nome = nome;
        this.cor = cor;
        this.disponivel = true;
        this.anoFabricaçao= anoFabricaçao
    }
        cadastro_carro(){
        return "Nome: " + this.nome + " -- Data de Fabricação: " + this.anoFabricaçao;
    }
}
/*
const Carro1 = new Carro(1, "Chevrolet Celta", "Branco", "2015");
const Carro2 = new Carro(2, "Volkswagen Fox", "Rosa", "2008");
const Carro3 = new Carro(3, "Fiat Mobi", "Vermelho", "2013");


console.log(Carro1);
console.log(Carro2);
console.log(Carro3);
Carro2.disponivel = false;
Carro3.disponivel = false;
console.log(Carro2);
console.log(Carro3);
console.log("Nome Carro: "+ Carro2.nome+ "; Disponivel: " + Carro2.disponivel);
*/