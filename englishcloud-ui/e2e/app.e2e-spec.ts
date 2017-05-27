import { EnglishcloudUiPage } from './app.po';

describe('englishcloud-ui App', () => {
  let page: EnglishcloudUiPage;

  beforeEach(() => {
    page = new EnglishcloudUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
