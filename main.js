const App = new Vue({
	el: '#app',
	data: {
		damage: '',
		items: '',
		lives: '',
		player1: '',
		player2: '',
		player3: '',
		player4: '',
		damageOptions: [50, 75, 100, 125, 150, 175, 200],
		itemOptions: [
			'none', 'none', 'none', 'none', 'none',
			'very low', 'low', 'middle', 'high', 'very high'
		],
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
			const player1result = this.randomInt(0, this.characterOptions.length);
			const player2result = this.randomInt(0, this.characterOptions.length);
			const player3result = this.randomInt(0, this.characterOptions.length);
			const player4result = this.randomInt(0, this.characterOptions.length);

			this.damage = this.damageOptions[damageResult];
			this.items = this.itemOptions[itemResult];
			this.lives = this.liveOptions[liveResult];
			this.player1 = this.characterOptions[player1result];
			this.player2 = this.characterOptions[player2result];
			this.player3 = this.characterOptions[player3result];
			this.player4 = this.characterOptions[player4result];
		}
	}
});
