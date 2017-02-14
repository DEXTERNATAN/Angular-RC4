import { PrimeiroProjetoRc5Page } from './app.po';

describe('primeiro-projeto-rc5 App', function() {
  let page: PrimeiroProjetoRc5Page;

  beforeEach(() => {
    page = new PrimeiroProjetoRc5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
