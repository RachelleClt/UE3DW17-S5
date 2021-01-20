// Initializes the `recettes` service on path `/recettes`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Recettes } from './recettes.class';
import hooks from './recettes.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'recettes': Recettes & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/recettes', new Recettes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('recettes');

  service.hooks(hooks);
}
