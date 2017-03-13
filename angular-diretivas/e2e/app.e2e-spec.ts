import { AngularDiretivasPage } from './app.po';

describe('angular-diretivas App', function() {
  let page: AngularDiretivasPage;

  beforeEach(() => {
    page = new AngularDiretivasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
