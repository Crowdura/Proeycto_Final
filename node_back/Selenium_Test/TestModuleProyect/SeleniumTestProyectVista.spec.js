import { By, Builder, WebElementCondition, until } from 'selenium-webdriver'
import assert from 'assert'
import { Select } from 'selenium-webdriver'
import { Driver } from 'selenium-webdriver/chrome.js'

(async function createUser() {
    try{
        let driver;

        driver = await new Builder().forBrowser('chrome').build()
        await driver.get('http://localhost:3000/')

        await driver.manage().setTimeouts({ implicit: 500})
        await driver.manage().window().maximize();

        let showButton = driver.findElement(By.id('showProyect'))
        await showButton.click()

        await new Promise(resolve => setTimeout(resolve, 15000));

        await driver.close()

    }catch (e){
        console.log(e)
    }finally{
        await Driver.Q;
    }
}())