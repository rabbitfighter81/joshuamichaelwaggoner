import { AppMaterialModule } from './app-material.module';

describe('AppMaterialModule', () => {
  let materialModule: AppMaterialModule;

  beforeEach(() => {
    materialModule = new AppMaterialModule();
  });

  it('should create an instance', () => {
    expect(materialModule).toBeTruthy();
  });
});
