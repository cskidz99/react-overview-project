module.exports = {
	entry: {
		main: "app/app.component.js",
	},
	output: {
		filename: "bundle.js",
		path: "./public"
	},
	devtools: "sourcemap",
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel"
			}	
		]	
	}

}
