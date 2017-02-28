import { AngularClassStylebindingPage } from './app.po';

describe('angular-class-stylebinding App', function() {
  let page: AngularClassStylebindingPage;

  beforeEach(() => {
    page = new AngularClassStylebindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
