(() => {

	function randomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}

	function randomizeValues() {
		const damageResult = randomInt(0, damageOptions.length);
		const itemResult = randomInt(0, itemOptions.length);
		const liveResult = randomInt(0, liveOptions.length);
		const characterResult = randomInt(0, characterOptions.length);

		damage.innerText = damageOptions[damageResult];
		items.innerText = itemOptions[itemResult];
		lives.innerText = liveOptions[liveResult];
		character.innerText = characterOptions[characterResult];
	}

	const damageOptions = [
		50,
		100,
		200,
	];
	const itemOptions = [
		'none',
		'very low',
		'low',
		'middle',
		'high',
		'very high',
	];
	const liveOptions = [
		'2 min',
		'3 stock'
	];
	const characterOptions = [
		'Luigi',
		'Mario',
		'Donkey Kong',
		'Link',
		'Samus',
		'Captain Falcon',
		'Ness',
		'Yoshi',
		'Kirby',
		'Fox',
		'Pikachu',
		'Jigglypuff',
	];

	const damage = document.getElementById('damage');
	const items = document.getElementById('items');
	const lives = document.getElementById('lives');
	const character = document.getElementById('character');
	const randomize = document.getElementById('randomize');

	randomize.addEventListener('click', randomizeValues);
	randomizeValues();
})();
