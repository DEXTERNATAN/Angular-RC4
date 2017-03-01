import { AngularInputPage } from './app.po';

describe('angular-input App', function() {
  let page: AngularInputPage;

  beforeEach(() => {
    page = new AngularInputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
