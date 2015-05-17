Package.describe({
  name: 'channikhabra:hot-loader',
  version: '0.0.1',
  summary: 'Package for hot-loading code while developing meteor apps. Require meteor-hot-load npm module installed globally',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    'jquery',
    "nucleuside:live-update@0.3.1",
  ]);

  api.addFiles('hot-loader.js', 'client');

  api.export(['LiveUpdate'], 'client');
});
