'use strict'
// Este sistema servira para criar os jogos entre os times

const Time = function(id =0, nome = 'A', pontos = 0){
	this.id = id;
	this.nome = nome;
	this.pontos = pontos;
};

const Jogos = function(id = 0, time1, time2, data){
	this.id = id;
	this.time1 = time1;
	this.time2 = time2;
	this.data = data;
};

const name = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let times = [];

//const time = new Time();

const createTimes = (quant)=>{
	for(let i = 0; i < quant; i++){
		const time = new Time(i, name[i], 0);
		times[i] = time;		
	}
	return times;
};


console.log( createTimes(5) );
