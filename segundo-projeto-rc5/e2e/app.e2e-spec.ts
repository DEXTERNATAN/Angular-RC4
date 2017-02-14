import { SegundoProjetoRc5Page } from './app.po';

describe('segundo-projeto-rc5 App', function() {
  let page: SegundoProjetoRc5Page;

  beforeEach(() => {
    page = new SegundoProjetoRc5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
