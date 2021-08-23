module.exports = {
	useTabs: true,
	tabWidth: 2,
	singleQuote: true,
	trailingComma: 'all',
	bracketSpacing: true,
	printWidth: 160,
	semi: true,
	arrowParens: 'always',
	endOfLine: 'auto',
	overrides: [
		{
			files: 'src/**/*.ts',
			options: {
				parser: 'typescript',
			},
		},
		{
			files: '*.json',
			options: {
				parser: 'json',
				useTabs: false,
			},
		},
		{
			files: ['*.yaml'],
			options: {
				parser: 'yaml',
				useTabs: false,
				tabWidth: 2,
			},
		},
		{
			files: '.prettierrc',
			options: {
				parser: 'json',
				useTabs: false,
			},
		},
		{
			files: '*.less',
			options: {
				printWidth: 100,
			},
		},
	],
};
