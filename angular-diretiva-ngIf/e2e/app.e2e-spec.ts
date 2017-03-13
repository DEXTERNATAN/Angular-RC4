import { AngularDiretivaNgIfPage } from './app.po';

describe('angular-diretiva-ng-if App', function() {
  let page: AngularDiretivaNgIfPage;

  beforeEach(() => {
    page = new AngularDiretivaNgIfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
