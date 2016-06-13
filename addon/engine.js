import Engine from 'ember-engines/engine';
import Resolver from 'ember-engines/resolver';

export default Engine.extend({
  modulePrefix: 'ember-demo-engine',
  Resolver,

  dependencies: {
    services: [
      'pollboy'
    ]
  }
});
