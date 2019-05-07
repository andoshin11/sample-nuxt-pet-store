module.exports = {
  prompt: ({ prompter }) =>
    prompter.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Repository名を入力してください(例: Pet)'
      }
    ])
}
