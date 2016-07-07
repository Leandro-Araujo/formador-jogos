'use strict'
// Este sistema servira para criar os jogos entre os times

const Time = function(id =0, nome = 'A', pontos = 0){
	this.id     = id;
	this.nome   = nome;
	this.pontos = pontos;
};

const Jogo = function(id = 0, time1, time2, data){
	this.id     = id;
	this.time1  = time1;
	this.time2  = time2;
	this.data   = data;
};

const name = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let times = [];
let jogos = [];

//const time = new Time();

const createTimes = (quant)=>{
	for(let i = 0; i < quant; i++){
		const time = new Time(i, name[i], 0);
		times[i] = time;		
	}
	return times;
};

const createJogos = (quant)=>{
	let times = createTimes(quant);
	let partidas = quant -1;
	console.log(times);
};

createJogos(5);
