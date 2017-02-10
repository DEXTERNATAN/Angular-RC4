import { DiretivasCLIPage } from './app.po';

describe('diretivas-cli App', function() {
  let page: DiretivasCLIPage;

  beforeEach(() => {
    page = new DiretivasCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
