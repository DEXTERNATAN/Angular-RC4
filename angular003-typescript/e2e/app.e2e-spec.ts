import { Angular003TypescriptPage } from './app.po';

describe('angular003-typescript App', function() {
  let page: Angular003TypescriptPage;

  beforeEach(() => {
    page = new Angular003TypescriptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
