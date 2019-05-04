import { CoreModule } from './core.module';

describe('CoreModule', () => {

  let module: CoreModule;

  beforeEach(() => {
    module = new CoreModule();
  });

  it('should create an instance', () => {
    expect(module).toBeTruthy();
  });

});
