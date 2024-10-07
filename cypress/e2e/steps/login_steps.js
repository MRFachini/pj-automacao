/// <reference types= "cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../pages/login_page";

const loginPage = new LoginPage



Given(/^access home page application$/, () => {
	loginPage.accessHomePage()
});

When(/^insert the email "([^"]*)" and my password "([^"]*)"$/, (email,password) => {
	console.log(email,password);
    loginPage.accessLoginPage()
    loginPage.fillLoginInfo()
});

When(/^click in enter button$/, () => {

    loginPage.submitLogin()
	
});

Then(/^have my access "([^"]*)"$/, (message) => {
	console.log(message);
	
});

