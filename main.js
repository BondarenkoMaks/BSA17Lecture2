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
		console.log(`Fighter's name ${this.name} Health: ${this.health}`);    
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

let fight = (fighter, improvedFighter, ...points) => {
	let nameWinner = '';
	let currentPoint;
	for(let i = 0; true; i++){	
		currentPoint = points[i % points.length];
		
		fighter.hit(improvedFighter, currentPoint);
		
		if (improvedFighter.health <= 0) {		
			nameWinner = fighter.name;
			break;
		}
		
		improvedFighter.doubleHit(fighter, currentPoint);
		
		if (fighter.health <= 0){			
			nameWinner = improvedFighter.name;
			break;
		}	
	}
	return console.log(`THE GAME IS OVER!!! Fighter \"${nameWinner}\" won!`);
};

let fighter         = new Fighter('Fighter', 10, 1000);
let improvedFighter = new ImprovedFighter('ImprovedFighter', 10, 1500);

fight(fighter, improvedFighter, 25, 13, 45);

