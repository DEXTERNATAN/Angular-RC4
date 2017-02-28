import { AngularPropertybindingPage } from './app.po';

describe('angular-propertybinding App', function() {
  let page: AngularPropertybindingPage;

  beforeEach(() => {
    page = new AngularPropertybindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
