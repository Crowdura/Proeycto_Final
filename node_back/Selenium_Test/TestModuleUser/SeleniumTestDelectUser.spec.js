import { By, Builder, WebElementCondition, until } from 'selenium-webdriver'
import assert from 'assert'
import { Select } from 'selenium-webdriver'
import { Driver } from 'selenium-webdriver/chrome.js'

(async function createUser() {
    try{
        let driver;

        driver = await new Builder().forBrowser('chrome').build()
        await driver.get('http://localhost:3000/create')

        await driver.manage().setTimeouts({ implicit: 500})
        await driver.manage().window().maximize();

        const inputName = await driver.findElement(By.id('nameP'))
        await inputName.sendKeys('Federico')

        let inputNameL = await driver.findElement(By.id('nameL'))
        await inputNameL.sendKeys('Cuervo')

        let inputUser = await driver.findElement(By.id('User'))
        await inputUser.sendKeys('Crow')

        let inputEmail = await driver.findElement(By.id('email'))
        await inputEmail.sendKeys('fedecuervo44@hotmail.com')
    
        let inputTel = await driver.findElement(By.id('tel'))
        await inputTel.sendKeys('3204620908')
    
        let inputAndress = await driver.findElement(By.id('andress'))
        await inputAndress.sendKeys('cra 28')

        let createButton = driver.findElement(By.className('ButtonB'))
        await createButton.click()
    }catch (e){
        console.log(e)
    }finally{
        await Driver.Q;
    }
}())