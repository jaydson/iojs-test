'use strict';

(function() {

	// Block scoping
	const version = '1.0.0';
	let name = 'Jaydson';
	let age = 30;


	// Template strings
	console.log(`Name: ${name}, Age:${age}`);
	console.log(`Version: ${version}`);

	// Map
	let map = new Map();
	let a = {};
	let b = 'foo';
	let c = 'bar';
	map.set(a, 'aaaaaa');
	map.set(b, 'bbbbbb');
	map.set(c, 'cccccc');
	console.log(map.size);
	console.log(map.get(b));
	console.log(map.get('foo'));

	// Binary and Octal literals
	let mybin = 0b10;
	let myoct = 0o644;
	console.log(mybin);
	console.log(myoct);

	// Promises
	let mypromise = new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve('native promises on iojs');
		}, 500);
	});
	mypromise.then(function(data) {
		console.log(data);
	});

	// New String methods
	let s = 'foo bar baz';
	console.log(s.includes('foo'));
	console.log('x'.repeat(10));
	console.log(s.startsWith('fo'));
	console.log(s.endsWith('baz'));

	// Symbols
	let key = Symbol();
	console.log(typeof key);

	// Generators
	function* id() {
		let index = 0;
		while(true) {
			yield index++;
		}
	}
	let gen = id();
	console.log(gen.next().value);
	console.log(gen.next().value);
	console.log(gen.next().value);

	// Classes (--es-staging)
	class Animal {
		constructor(name) {
			this.name = name;
		}

		breathe() {
			console.log('Breathing...');
		}
	}

	class Dog extends Animal {
		constructor(name) {
			super(name);
		}
		bark() {
			console.log('woff woff...');
		}
	}

	let dog = new Dog('snoop');
	dog.breathe();
	dog.bark();
	
}());