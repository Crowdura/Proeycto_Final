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


        let delectButton = driver.findElement(By.id('proyectDelect'))
        await delectButton.click()

        await new Promise(resolve => setTimeout(resolve, 5000));

        let delectButtonF = driver.findElement(By.id('delectProyect'))
        await delectButtonF.click()

        await new Promise(resolve => setTimeout(resolve, 5000));

        await driver.close()

    }catch (e){
        console.log(e)
    }finally{
        await Driver.Q;
    }
}())