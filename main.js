const App = new Vue({
	el: '#app',
	data: {
		damage: '',
		items: '',
		lives: '',
		character: '',
		damageOptions: [50, 100, 200],
		itemOptions: ['none', 'very low', 'low', 'middle', 'high', 'very high'],
		liveOptions: ['2 min', '3 stock'],
		characterOptions: [
			'Luigi', 'Mario', 'Donkey Kong', 'Link', 'Samus', 'Captain Falcon',
			'Ness', 'Yoshi', 'Kirby', 'Fox', 'Pikachu', 'Jigglypuff',
		],
	},
	created: function created() {
		this.randomizeValues();
	},
	methods: {
		randomInt(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
		},
		randomizeValues() {
			const damageResult = this.randomInt(0, this.damageOptions.length);
			const itemResult = this.randomInt(0, this.itemOptions.length);
			const liveResult = this.randomInt(0, this.liveOptions.length);
			const characterResult = this.randomInt(0, this.characterOptions.length);

			this.damage = this.damageOptions[damageResult];
			this.items = this.itemOptions[itemResult];
			this.lives = this.liveOptions[liveResult];
			this.character = this.characterOptions[characterResult];
		}
	}
});
