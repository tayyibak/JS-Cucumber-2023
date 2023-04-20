const Commands = require("../../Pages/Commands");

class HotelsSignIn {

    commands = new Commands

    emailLocator = "//*[@id='loginFormEmailInput']"
    passwordLocator = "//*[@id='loginFormPasswordInput']"
    signInErrorLocator = "//div[@class='uitk-error-summary']"
    logInFormSubButton = "//*[@id='loginFormSubmitButton']"
    continueButton = '#loginFormSubmitButton'

    

async typeEmail(userEmail) {
    await this.commands.typeInWebElement(this.emailLocator, userEmail)
}


async clickContinueButton(){
    await this.commands.clickWebElement(this.continueButton)
}

async typePwd(userPwd) {
    await this.commands.typeInWebElement(this.passwordLocator, userPwd)
    await browser.pause(3000);
}

async clickLogInForm() {
    await this.commands.clickWebElement(this.logInFormSubButton)
}

async signInErrorDisplayed() {
    return await this.commands.isWebElementDisplayed(this.signInErrorLocator)
}

}

module.exports = HotelsSignIn