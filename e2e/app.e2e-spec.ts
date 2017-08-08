import { KinderAngularPage } from './app.po';

describe('kinder-angular App', () => {
  let page: KinderAngularPage;

  beforeEach(() => {
    page = new KinderAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
