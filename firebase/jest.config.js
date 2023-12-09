module.exports = {
  verbose: true,bail: 1,
	testEnvironment: 'node',
	testMatch: [
		'**/__tests__/**/*.test.ts'
		//   "**/?(*.)+(spec|test).[tj]s?(x)"
	],
	testPathIgnorePatterns: ['/node_modules/', '/src/'],
	transform: { '\\.jsx?$': 'babel-jest' },
};
