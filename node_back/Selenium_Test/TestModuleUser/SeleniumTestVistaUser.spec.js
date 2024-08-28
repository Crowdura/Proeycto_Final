import { By, Builder, WebElementCondition, until } from 'selenium-webdriver'
import assert from 'assert'
import { Select } from 'selenium-webdriver'
import { Driver } from 'selenium-webdriver/chrome.js'

(async function createUser() {
    try{
        let driver;

        driver = await new Builder().forBrowser('chrome').build()
        await driver.get('http://localhost:3000/user/U')

        await driver.manage().setTimeouts({implicit: 5000})
        await driver.manage().window().maximize();

        let createButton = driver.findElement(By.id('showUser'))
        await createButton.click()

    }catch (e){
        console.log(e)
    }finally{
        await Driver.Q;
    }
}())