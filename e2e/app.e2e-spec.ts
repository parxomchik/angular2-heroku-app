import { Angular2HerokuPage } from './app.po';

describe('angular2-heroku App', () => {
  let page: Angular2HerokuPage;

  beforeEach(() => {
    page = new Angular2HerokuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
