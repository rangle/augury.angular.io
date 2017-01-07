const build = require('./build');
const fileCopy = require('./file-copy');
const path = require('path');

const dependencies = [
  {
    destination: path.join(__dirname, '..', 'www', 'examples'),
    name: 'augury-examples',
    repository: "git@github.com:rangle/augury-examples.git",
    branch: 'master',
    ignore: [
      'LICENSE',
      'README.md',
      '/**/src/',
      '/**/source/',
      '/**/.gitignore',
      '/**/.editorconfig',
      '/**/package.json',
      '/**/README.md',
      '/**/angular-cli.json',
      '/**/tsconfig.json',
      '/**/webpack.config.js',
      '/**/tslint.json',
      'www/demo'
    ]
  }
];

dependencies.forEach(build);

const files = {
  'www/examples/kitchen-sink-demo/app': 'www/demo',
  'src/pages/docs/guide/augury/images/**': 'www/pages/guides/images',
  'src/pages/docs/guide/architecture/images/**': 'www/pages/guides/images'
};

fileCopy(files);

