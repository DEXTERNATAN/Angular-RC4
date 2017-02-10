import { CriandoComponentesPage } from './app.po';

describe('criando-componentes App', function() {
  let page: CriandoComponentesPage;

  beforeEach(() => {
    page = new CriandoComponentesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
