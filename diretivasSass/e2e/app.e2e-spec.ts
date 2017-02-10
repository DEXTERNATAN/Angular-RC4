import { DiretivasSassPage } from './app.po';

describe('diretivas-sass App', function() {
  let page: DiretivasSassPage;

  beforeEach(() => {
    page = new DiretivasSassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
