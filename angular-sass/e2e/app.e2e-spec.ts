import { AngularSassPage } from './app.po';

describe('angular-sass App', function() {
  let page: AngularSassPage;

  beforeEach(() => {
    page = new AngularSassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
