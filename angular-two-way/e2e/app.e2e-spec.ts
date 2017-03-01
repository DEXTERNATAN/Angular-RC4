import { AngularTwoWayPage } from './app.po';

describe('angular-two-way App', function() {
  let page: AngularTwoWayPage;

  beforeEach(() => {
    page = new AngularTwoWayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
