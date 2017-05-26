'use strict';

class Fighter {
	constructor(name ='Fighter', power= 10, health=700) {
		this.name = name;
		this.power = power;
		this.health = health;
	}

	setDamage(damage) {
		this.health -= damage;
		console.log( `damage: ${damage}` ); 		
		console.log(`\"${this.name}\"'s current health status: ${this.health}`);    
    }
	hit(enemy, point) {
		let damage = enemy.power*point;		
		enemy.setDamage(damage);		   
    }
};

class ImprovedFighter extends Fighter {
	constructor(name='ImprovedFighter', power=10, health=1000){
		super(name, power, health);
	}
	doubleHit(enemy, point) {
		let doublePoint = point*2;	
		super.hit(enemy, doublePoint);		    
  }
}

function fight(fighter=NULL, improvedFighter=NULL, ...points) {
	if (!(fighter && fighter.hit && improvedFighter && improvedFighter.doubleHit && points.length > 0)) {
 		return console.log(`The parameters are incorrectly set!`);
  }
		
	let isNumeric =(n)=>{
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	for(let i = 0, currentPoint; true; i++){	
		currentPoint = points[i % points.length];    
		if (!isNumeric(currentPoint) && currentPoint <= 0){
			console.log(`The parameter \"${fsetcurrentPoint}\" is incorrectly set!`); 
			break;
		}
		
		fighter.hit(improvedFighter, currentPoint);
		
		if (improvedFighter.health <= 0) {		
			console.log(`THE GAME IS OVER!!! The Fighter \"${fighter.name}\" won!`);
			break;
		}
		
		improvedFighter.doubleHit(fighter, currentPoint);
		
		if (fighter.health <= 0){				
			console.log(`THE GAME IS OVER!!! The Fighter \"${improvedFighter.name}\" won!`);
			break;
		}	
	}
};

let fighter = new Fighter('Fighter', 10, 1000);
let improvedFighter = new ImprovedFighter('ImprovedFighter', 10, 1500);

fight(fighter, improvedFighter, 25, 13, 45);