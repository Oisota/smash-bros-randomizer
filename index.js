const Metalsmith = require('metalsmith');
const layouts = require('metalsmith-layouts');
const inPlace = require('metalsmith-in-place');
const permalinks = require('metalsmith-permalinks');
const fileMetadata = require('metalsmith-filemetadata');
const collections = require('metalsmith-collections');

Metalsmith(__dirname)
.metadata({
	rootPath: process.env.NODE_ENV === 'production' ? '/smash-bros-randomizer/' : '/',
})
.source('src')
.destination('dist')
.clean(true)
.use(fileMetadata([
	{pattern: 'games/*', metadata: {layout: 'game.njk'}}
]))
.use(inPlace())
.use(collections({
	games: {
		pattern: 'games/*',
		sortBy: 'title',
	},
}))
.use(permalinks({
	relative: true,
	linksets: [{
		match: { collection: 'games' },
		pattern: 'games/:title'
	}]
}))
.use(layouts())
.build((err, files) => {
	if (err) { console.error(err); } 
	else { console.log('W00T, it WORKED!'); }
});
