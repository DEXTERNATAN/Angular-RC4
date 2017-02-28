import { AngularTemplatesPage } from './app.po';

describe('angular-templates App', function() {
  let page: AngularTemplatesPage;

  beforeEach(() => {
    page = new AngularTemplatesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
