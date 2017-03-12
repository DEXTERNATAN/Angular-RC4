import { AngularLibPage } from './app.po';

describe('angular-lib App', function() {
  let page: AngularLibPage;

  beforeEach(() => {
    page = new AngularLibPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
