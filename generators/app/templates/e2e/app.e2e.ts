import { SitePage } from './app.po';

describe('Angular2 App', function() {
  let page: SitePage;

  beforeEach(() => {
    page = new SitePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('site works!');
  });
});
