const path = require('path');
const { name, version } = require('./package.json');

/** @type {import('caz').Template} */
module.exports = {
  name,
  version,
  metadata: {
    year: new Date().getFullYear(),
  },
  prompts: [],
  // init: true,
  // emit: async ctx => {
  //   ctx.config.install = ctx.answers.install && ctx.answers.pm
  // },
  complete: async (ctx) => {
    console.clear();
    console.log(`Created a new project in ${ctx.project} by the ${ctx.template} template.\n`);
    console.log('Getting Started:');
    if (ctx.dest !== process.cwd()) {
      console.log(`  $ cd ${path.relative(process.cwd(), ctx.dest)}`);
    }
    if (ctx.config.install === false) {
      console.log('  $ npm install');
    }
    console.log(`  $ ${ctx.config.install ? ctx.config.install : 'npm'} run dev`);
    console.log('\nHappy hacking :)\n');
  },
};
