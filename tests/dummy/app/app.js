import Ember from 'ember';
import Resolver from 'ember-engines/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,

  engines: {
    emberDemoEngine: {
      dependencies: {
        services: [
          'pollboy'
        ]
      }
    }
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
