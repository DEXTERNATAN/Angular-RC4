import { AngularViewchildPage } from './app.po';

describe('angular-viewchild App', function() {
  let page: AngularViewchildPage;

  beforeEach(() => {
    page = new AngularViewchildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
