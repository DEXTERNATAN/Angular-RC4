import { ProjetoTeste0001Page } from './app.po';

describe('projeto-teste0001 App', function() {
  let page: ProjetoTeste0001Page;

  beforeEach(() => {
    page = new ProjetoTeste0001Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
