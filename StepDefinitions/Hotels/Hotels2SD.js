const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HotelsHome = require("../../Pages/Hotels/hotelsHome");
const HotelsSignIn =  require("../../Pages/Hotels/HotelsSignIn");

const hotelsSignin = new HotelsSignIn

const hotelsHome = new HotelsHome


// TC21

Given(/^I click on Sign in link$/, async function() {
    await hotelsHome.clickSignInButton();
    await browser.pause(3000);
    await hotelsHome.clickSignInLink();
    await browser.pause(3000);
})

When(/^I enter invalid email$/, async function() {
    await hotelsSignin.typeEmail('abc@abc.com');
    await browser.pause(3000);
})

Then(/^I click Continue button$/, async function() {
    await hotelsSignin.clickContinueButton();
    await browser.pause(10000);
})

When(/^I enter invalid password$/, async function() {
    await hotelsSignin.typePwd('abc');
    await browser.pause(3000);
})

When(/^I click Sign in button$/, async function() {
    await hotelsSignin.clickLogInForm();
    await browser.pause(10000);
})

Then(/^I verify error is displayed$/, async function() {
    expect(await hotelsSignin.signInErrorDisplayed(), 'Login error is NOT displayed').to.be.true;
})




// TC31

When(/^I click on English language$/, async function() {
    await hotelsHome.clickEnglish();
    await browser.pause(3000);       
})

When(/^I select Español in Language dropdown$/, async function() {
    await hotelsHome.selectLanguage('Español (Estados Unidos)');
    await browser.pause(3000);  
})

When(/^I click on Save button$/, async function() {
    await hotelsHome.saveLanguage();
    await browser.pause(3000);       
})

Then(/^I verify Español is displayed$/, async function() {
    expect(await hotelsHome.spanishDisplay(), 'Spanish not displayed').to.include('Español');
})

When(/^I select English in Language dropdown$/, async function() {
    await hotelsHome.clickEspanol();
    await browser.pause(3000); 
    await hotelsHome.selectLanguage('English (United States)');
    await browser.pause(3000); 
})

When(/^I click on Guardar button$/, async function() {
    await hotelsHome.spanishSaveLang();
    await browser.pause(3000);       
})

Then(/^I verify English is displayed$/, async function() {
    expect(await hotelsHome.englishDisplay(), 'English not displayed').to.include('English');
})







// TC29

When(/^I click on List your property$/, async function() {
    await hotelsHome.clickProperty();
    await browser.pause(3000);       
})

Then(/^I verify What would you like to list is displayed$/, async function () {
    await hotelsHome.switchToListTab()
    expect(await hotelsHome.wouldYouLikeDisplayed(), 'Not displayed').to.be.true;
})

Then(/^I verify Lodging and Private residence options are displayed$/, async function () {
    expect(await hotelsHome.isPrivateDisplayed() && await hotelsHome.isLodgingDisplayed(), 'Not displayed').to.be.true;
})

When(/^I click on Private residence$/, async function() {
    await hotelsHome.clickPrivate();
    await browser.pause(3000);       
})

Then(/^I verify Step 1 of 3 is displayed$/, async function () {
    expect(await hotelsHome.isStep1Displayed(), 'Not displayed').to.be.true;
})

Then(/^I verify See how much you could earn! is displayed$/, async function () {
    expect(await hotelsHome.isEarnDisplayed(), 'Not displayed').to.be.true;
})

When(/^I enter 4 bedroom$/, async function() {
    await hotelsHome.clickBedroom();
    await hotelsHome.clickBedroom();
    await hotelsHome.clickBedroom();
    await hotelsHome.clickBedroom();
    await browser.pause(3000);       
})

When(/^I enter 2.5 bathroom$/, async function() {
    await hotelsHome.clickBathroom();
    await hotelsHome.clickBathroom();
    await hotelsHome.clickBathroom();
    await browser.pause(3000);       
})

When(/^I click on Next button$/, async function() {
    await hotelsHome.clickNext();
    await browser.pause(3000);       
})
Then(/^I verify Step 2 of 3 is displayed$/, async function () {
    expect(await hotelsHome.isStep2Displayed(), 'Not displayed').to.be.true;
})

Then(/^I verify Where is your property located is displayed$/, async function () {
    expect(await hotelsHome.isPropertyDisplayed(), 'Not displayed').to.be.true;
})

When(/^I enter 121 in address$/, async function() {
    await hotelsHome.enterAddressText('1211 6th Ave');
    await browser.pause(3000);       
})

When(/^I select 1211 6th Avenue, New York, NY, USA from auto-suggestion$/, async function() {
    await hotelsHome.intoGoingToAddress('1211 6th Avenue, New York, NY, USA');
    await browser.pause(9000);       
})

Then(/^I verify graph is displayed$/, async function () {
    expect(await hotelsHome.isMapDisplayed(), 'Graph not displayed').to.be.true;
})

Then(/^I verify pin in graph is displayed$/, async function () {
    expect(await hotelsHome.isPinInMapDisplayed(), 'Pin not displayed').to.be.true;
})

Then(/^I verify Pin location may not be exact is displayed below graph$/, async function () {
    expect(await hotelsHome.pinUnderVerification(), 'Not displayed').to.be.false;
})


