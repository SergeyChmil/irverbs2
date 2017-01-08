import { Irverbs2Page } from './app.po';

describe('irverbs2 App', function() {
  let page: Irverbs2Page;

  beforeEach(() => {
    page = new Irverbs2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
