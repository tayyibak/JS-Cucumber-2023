class Homepage {

    // locators of webElements on Homepage
    createNewAccountBtnLocator = 'a[data-testid=open-registration-form-button]';
    allLinksLocator = '<a>';
    loginEmailLocator = '#email';
    loginPasswordLocator = '#pass';
    loginButtonLocator = '<button>';


    // functions to interact with webElements on Homepage
    async clickCreateNewAccountBtn() {
        await $(this.createNewAccountBtnLocator).click();
    }

    async getLinksCount() {
        const allLinks = await $$(allLinksLocator);
        return allLinks.length;
    }

    async enterLoginEmail(loginEmail) {
        await $(this.loginEmailLocator).setValue(loginEmail);
    }

    async enterLoginPassword(loginPwd) {
        await $(this.loginPasswordLocator).setValue(loginPwd);
    }

    async clickLoginButton() {
        await $(this.loginButtonLocator).click();
    }





}
module.exports = Homepage;