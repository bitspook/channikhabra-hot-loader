Package.describe({
  name: 'channikhabra:hot-loader',
  version: '0.1.0',
  summary: 'Package for hot-loading code while developing meteor apps. Require meteor-hot-load installed globally',
  git: 'https://github.com/channikhabra/channikhabra-hot-loader',
  documentation: 'readme.org'
});

Package.onUse(function(api) {
  api.use([
    'jquery',
    "nucleuside:live-update@0.3.1",
  ]);

  api.addFiles('hot-loader.js', 'client');

  api.export(['LiveUpdate'], 'client');
});
