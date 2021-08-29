module.paths = require.main.paths

const path = require('path');
const chalk = require('chalk');

const {
  name,
  version
} = require('./package.json');

module.exports = {
  name,
  version,
  prompts: [
    {
      name: 'name',
      type: 'text',
      message: 'Project name'
    },
    {
      name: 'version',
      type: 'text',
      message: 'Project version'
    },
    {
      name: 'description',
      type: 'text',
      message: 'Project description'
    },
    {
      name: 'author',
      type: 'text',
      message: 'Project author'
    },
    {
      name: 'email',
      type: 'text',
      message: 'Project author email'
    },
    {
      name: 'url',
      type: 'text',
      message: 'Project author url'
    },
    {
      name: 'github',
      type: 'text',
      message: 'Github username',
      initial: 'zhyuanzhu'
    },
    {
      name: 'features',
      type: 'multiselect',
      message: 'Choose features need',
      instructions: false,
      choices: [
        { title: 'Automatic test', value: 'test', selected: true },
        { title: 'Foo', value: 'foo' }
      ]
    },
    {
      name: 'install',
      type: 'confirm',
      message: 'Install dependencies',
      initial: true,
    },
    {
      name: 'pm',
      type: prev => process.env.NODE_ENV === 'test' || prev ? 'select' : null,
      message: 'Package manager tools',
      hint: '',
      choices: [
        { title: 'npm', value: 'npm' },
        { title: 'yarn', value: 'yarn' },
      ]
    }
  ],
  filters: {
    // 过滤掉测试文件
    'src/*.test.js': answers => answers.features.includes('test')
  },
  helpers: {
    upper: input => input.toUpperCase()
  },
  setup: async ctx => {
    ctx.config.install = ctx.answers.install && ctx.answers.pm
  },
  complete: async ctx => {
    console.log(chalk` complete !!!`)
  }
}