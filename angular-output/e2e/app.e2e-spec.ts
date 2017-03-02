import { AngularOutputPage } from './app.po';

describe('angular-output App', function() {
  let page: AngularOutputPage;

  beforeEach(() => {
    page = new AngularOutputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
