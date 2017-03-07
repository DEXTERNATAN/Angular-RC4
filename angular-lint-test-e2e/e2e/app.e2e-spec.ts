import { AngularLintTestE2ePage } from './app.po';

describe('angular-lint-test-e2e App', function() {
  let page: AngularLintTestE2ePage;

  beforeEach(() => {
    page = new AngularLintTestE2ePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
