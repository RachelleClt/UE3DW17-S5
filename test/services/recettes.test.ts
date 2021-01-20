import app from '../../src/app';

describe('\'recettes\' service', () => {
  it('registered the service', () => {
    const service = app.service('recettes');
    expect(service).toBeTruthy();
  });
});
