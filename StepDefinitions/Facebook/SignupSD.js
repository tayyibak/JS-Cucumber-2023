const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const moment = require("moment");
const Homepage = require('../../Pages/Facebook/Homepage');
const SignupPage = require('../../Pages/Facebook/SignupPage');

const homepage = new Homepage();
const signuppage = new SignupPage();

Given(/^I am on facebook homepage$/, async function () {
    await browser.url('/');
});

When(/^I click on Create New Account button$/, async function() {
    await homepage.clickCreateNewAccountBtn();
    await signuppage.waitForSignUpForm();
    await browser.pause(20000);
});


Then(/^I verify current month is selected in month dropdown$/, async function () {
  const currentMonth =  await signuppage.selectMonth();
  const currentMonthAbbr = moment().format('MMM');
  expect(currentMonth, '').to.equal(currentMonthAbbr);


   
});


Given(/^I verify current date is selected in date dropdown$/, async function () {
    const currentdate = await signuppage.selectDay();
    expect(currentdate, 'current date is NOT selected in year dropdown').to.be.true;
});


Given(/^I verify current year is selected in year dropdown$/, async function () {
    const currentyear = await signuppage.selectYear();
    expect(currentyear, 'current year is NOT selected in year dropdown').to.be.true;
});




















/**
 * 1. if we want to capture any data from glue-code in a variable
 *  then surround it by a parenthesis, and create variable(s)
 * 
 * 2. If any thing can change in Gherkin. 
 *  So in glue-code, pls replace that with .+
 */
// When(/^I enter "(.+)" as Firstname$/, async function(fname) {
//     await signuppage.enterFirstName(fname);
// });

// When(/^I enter "(.+)" as Lastname$/, async function(lname) {
//     await signuppage.enterLastName(lname);
// });

// When(/^I enter "(.+)" as phone number$/, async function(mobileOrEmail) {
//     await signuppage.enterMobileOrEmail(mobileOrEmail);
// });

// When(/^I enter "(.+)" as New password$/, async function(newPwd) {
//     await signuppage.enterNewPassword(newPwd);
// });

// When(/^I enter "(.+)" as birthdate$/, async function(bDate) {
//     await signuppage.selectBirthDate(bDate);
// });

When(/^I enter "(.+)" as (.+)$/, async function(data, field) {
    switch (field) {
        case 'Firstname':
            await signuppage.enterFirstName(data);
            break;
        case 'Lastname':
            await signuppage.enterLastName(data);
            break;
        case 'phone number':
            await signuppage.enterMobileOrEmail(data);
            break;
        case 'New password':
            await signuppage.enterNewPassword(data);
            break;
        case 'birthdate':
            await signuppage.selectBirthDate(data);
            break;
        default:
            break;
    }
});




//When(/^I click "Sign Up" button$/, async function() {
    //await signuppage.clickSignUpBtn();
//});

//Then(/^I verify gender error is displayed$/, async function () {
   // await browser.pause(20000);
    //const isErrDisplayed = await signuppage.isGenderErrorDisplayed();
    //expect(isErrDisplayed, 'Gender error is NOT displayed').to.be.true;
//});