import { CoreModule } from './core.module';

describe('CoreModule', () => {

  let materialModule: CoreModule;

  beforeEach(() => {
    materialModule = new CoreModule();
  });

  it('should create an instance', () => {
    expect(materialModule).toBeTruthy();
  });

});
