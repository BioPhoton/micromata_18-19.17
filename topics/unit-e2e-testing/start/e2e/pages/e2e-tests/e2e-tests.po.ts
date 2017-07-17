import { browser, by, element } from 'protractor';
import {E2eTestsTestData} from './e2e-tests.test-data'

export class E2eTestsPage {

  loginStateId = 'login-state';

  loginFormId = 'my-form';
  usernameInputId = 'my-form--username';
  passwordInputId = 'my-form--password';
  loginButtonId = 'my-form--login-button'

  navigateTo() {
    return browser.get(E2eTestsTestData.baseUrl);
  }

  getLoginFrom() {

  }

  getLoginState() {

  }

  getUsernameInput() {

  }

  enterUsername(input) {

  }

  getPasswordInput() {

  }

  enterPassword(input) {

  }

  getLoginButton() {

  }

  sendLoginForm() {

  }

}
