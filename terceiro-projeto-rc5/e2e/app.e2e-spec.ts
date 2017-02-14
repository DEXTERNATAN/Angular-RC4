import { TerceiroProjetoRc5Page } from './app.po';

describe('terceiro-projeto-rc5 App', function() {
  let page: TerceiroProjetoRc5Page;

  beforeEach(() => {
    page = new TerceiroProjetoRc5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
