import { AngularTesteAula1a10Page } from './app.po';

describe('angular-teste-aula1a10 App', function() {
  let page: AngularTesteAula1a10Page;

  beforeEach(() => {
    page = new AngularTesteAula1a10Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
