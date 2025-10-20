import { By, Builder, WebElementCondition, until } from 'selenium-webdriver'
import assert from 'assert'
import { Select } from 'selenium-webdriver'

(async function delectUser() {
    try{
        let driver

        driver = await new Builder().forBrowser('chrome').build()
        await driver.get('http://localhost:3000/user/U')

        await driver.manage().setTimeouts({implicit: 5000})
        await driver.manage().window().maximize();

        let buttonDelect = await driver.findElement(By.id('delectUser'))
        await buttonDelect.click()

        await new Promise(resolve => setTimeout(resolve, 5000));

        let buttonDelectF = await driver.findElement(By.id('delectUser'))
        await buttonDelectF.click() 

        await driver.close()


    }catch (e){
        console.log(e)
    }finally{
        await driver.get('http://localhost:3000/user/U')
    }
}())