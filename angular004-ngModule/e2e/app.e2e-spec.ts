import { Angular004NgModulePage } from './app.po';

describe('angular004-ng-module App', function() {
  let page: Angular004NgModulePage;

  beforeEach(() => {
    page = new Angular004NgModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
