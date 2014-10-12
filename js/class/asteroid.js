function Asteroid(){
	this.dimension = "a";
}

Asteroid.prototype = Object.create(SpaceElement.prototype);




var asteroide1 = new Asteroid();

console.log(asteroide1);

console.log(asteroide1.dimension + " " + asteroide1.img);