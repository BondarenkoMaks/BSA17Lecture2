'use strict';

class Fighter {
	constructor(name ='Fighter', power= 10, health=700) {
		this.name = name;
		this.power = power;
		this.health = health;
	}

	setDamage(damage) {
		this.health -= damage;  
		console.log(`Fighter's name ${this.name} Health: ${this.health}`);    
    }
	hit(enemy, point) {
		let damage = enemy.power*point;
		enemy.setDamage(damage);
	
		console.log( `damage: ${damage}` );    
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
	for(let i = 0; true; i++){	
		let currentPoint = points[i % points.length];
		if (improvedFighter.health > 0) {
			fighter.hit(improvedFighter, currentPoint);
		} else {
			return console.log(`THE GAME IS OVER!!! Fighter \"${fighter.name}\" won!`);
		}
		if (fighter.health > 0){
			improvedFighter.doubleHit(fighter, currentPoint)
		} else {		
			return console.log(`THE GAME IS OVER!!! Fighter \"${improvedFighter.name}\" won!`);
		}	
	}
};

let fighter         = new Fighter('Fighter', 10, 1000);
let improvedFighter = new ImprovedFighter('ImprovedFighter', 10, 1500);

fight(fighter, improvedFighter, 25, 13, 45);

