// 1 - Produto
import { Produto } from './models/produto.js';
const p = new Produto(5,"Guitarra");
const p2 = new Produto(6,"Cordas 09")

console.log(p.nome);
console.log(p2);
console.log(p.info())
p.ativo =false;
console.log(p.info())


// 2 - Usuario
import { Genero,Usuario } from './models/Usuario.js';


const u1 = new Usuario (1, "Cezar", "123", "2000-01-25t00:00", Genero.M);

console.log()
console.log(u1.perfil())
console.log(u1);
// 3 carro --> exportar, importar, instanciar, criar metodo e exibir

import { Carro } from './models/carro.js';

const car1 = new Carro (1, " Chevrolet Onix", "Preto", "2002" )
console.log()
console.log(car1.cadastro_carro())
console.log(car1)
// 4 Aluno --> exportar, importar, instanciar, criar metodo e exibir

import {Turno, Aluno } from './models/Aluno.js';

const Aluno1 =new Aluno(1, "Bianca Ferreira","2025-02-01T00:00:00",Turno.MANHA)
console.log()
console.log(Aluno1.cadastro_estudante())
console.log(Aluno1)