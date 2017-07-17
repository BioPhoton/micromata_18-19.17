import { browser, by, element } from 'protractor';
import {AppTestData} from './app.test-data'

export class AppPage {

  primaryNavId = 'primary-nav';
  brandNameLocator = '.navbar-brand';

  secondaryNavId = 'secondary-nav';
  linkUnitTestsId = 'link-unit-tests';
  linkE2eTestsId = 'link-e2e-tests';

  navigateTo() {
    return browser.get(AppTestData.defaultUrl);
  }

  getPrimaryNav() {

  }

  getBrandText() {

  }

  getSecondaryNav() {

  }

  getLinkUnitTests() {

  }

  getLinkE2eTests() {

  }

}
