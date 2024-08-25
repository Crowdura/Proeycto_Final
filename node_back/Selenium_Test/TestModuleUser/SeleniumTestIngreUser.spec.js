import { By, Builder, WebElementCondition, until } from 'selenium-webdriver'
import { Driver } from 'selenium-webdriver/chrome.js'

(async function createUser() {
    try{
        let driver;

        driver = await new Builder().forBrowser('chrome').build()
        await driver.get('http://localhost:3000/')

        await driver.manage().setTimeouts({ implicit: 500})
        await driver.manage().window().maximize();

        const inputName = await driver.findElement(By.id('username'))
        await inputName.sendKeys('fedecuervo44@hotmail.com')

        let inputNameL = await driver.findElement(By.id('password'))
        await inputNameL.sendKeys('7Abril20011/F')

        let ingreButton = driver.findElement(By.id('loginIngre'))
        await ingreButton.click()
    }catch (e){
        console.log(e)
    }finally{
        await driver.quit()
    }
}())