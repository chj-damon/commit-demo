module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [
			2,
			'always',
			[
				'wip',
        'feat',
        'fix',
        'refactor',
        'docs',
        'test',
        'style',
        'chore',
        'typescript'
			]
		]
  }
};