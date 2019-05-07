module.exports = {
  prompt: ({ prompter }) =>
    prompter
      .prompt([
        {
          type: 'select',
          name: 'namespace',
          message: 'namespaceを選択してください。',
          choices: ['Create new namespace', ...require('fs').readdirSync('./app/usecases')]
        }
      ])
      .then(({ namespace }) =>
        prompter.prompt([
          {
            type: 'input',
            name: 'namespace',
            message: 'namespaceを入力してください。',
            skip: namespace !== 'Create new namespace',
            initial: namespace !== 'Create new namespace' ? namespace : ''
          },
          {
            type: 'input',
            name: 'name',
            message: 'Usecase名を入力してください(例: FetchPets)'
          },
          {
            type: 'select',
            name: 'repository',
            message: 'repositoryを選択してください。',
            result(input) {
              return input.match('(.+).ts$')[1]
            },
            choices: require('fs').readdirSync('./app/repositories')
          }
        ])
      )
}
