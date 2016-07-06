'use strict'
// Este sistema servira para criar os jogos entre os times

const Time = function(){
	this.id = 0;
	this.nome = '';
	this.pontos = 0;
};
const name = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let times = [];

//const time = new Time();

const createTimes = (quant)=>{
	for(let i = 0; i < quant; i++){
		const time = new Time();
		time.id = i;
		time.nome = name[i];
		times[i] = time;		
	}
	return times;
};


console.log( createTimes(5) );
