import { By, Builder, WebElementCondition, until } from 'selenium-webdriver'
import assert from 'assert'
import { Select } from 'selenium-webdriver'
import { Driver } from 'selenium-webdriver/chrome.js'

(async function createUser() {
    try{
        let driver;

        driver = await new Builder().forBrowser('chrome').build()
        await driver.get('http://localhost:3000/CatalogoProy/create')

        await driver.manage().setTimeouts({ implicit: 500})
        await driver.manage().window().maximize();

        const inputNameProyect = await driver.findElement(By.id('nameProyect'))
        await inputNameProyect.sendKeys('Proyecto de prueba')

        let inputDescripProyect = await driver.findElement(By.id('descripProyect'))
        await inputDescripProyect.sendKeys('Descripción de prueba')

        let inputFechIni = await driver.findElement(By.id('fechaIni'))
        await inputFechIni.sendKeys('27082024')

        let inputFechLast = await driver.findElement(By.id('fechaLast'))
        await inputFechLast.sendKeys('29082024')
    
        let inputStatusProyect = await driver.findElement(By.id('statusProyect'))
        await inputStatusProyect.sendKeys('Prueba')
    
        let createButton = driver.findElement(By.id('proyectButtonF'))
        await createButton.click()
    }catch (e){
        console.log(e)
    }finally{
        await Driver.Q;
    }
}())