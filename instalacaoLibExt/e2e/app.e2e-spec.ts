import { InstalacaoLibExtPage } from './app.po';

describe('instalacao-lib-ext App', function() {
  let page: InstalacaoLibExtPage;

  beforeEach(() => {
    page = new InstalacaoLibExtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
