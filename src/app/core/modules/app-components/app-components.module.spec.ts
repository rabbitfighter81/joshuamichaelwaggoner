import { AppComponentsModule } from './app-components.module';

describe('AppComponentsModule', () => {

  let materialModule: AppComponentsModule;

  beforeEach(() => {
    materialModule = new AppComponentsModule();
  });

  it('should create an instance', () => {
    expect(materialModule).toBeTruthy();
  });

});
