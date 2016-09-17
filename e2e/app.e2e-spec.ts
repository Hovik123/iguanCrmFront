import { IguanCrmFrontPage } from './app.po';

describe('iguan-crm-front App', function() {
  let page: IguanCrmFrontPage;

  beforeEach(() => {
    page = new IguanCrmFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
