import { By, Builder, WebElementCondition, until } from 'selenium-webdriver'
import assert from 'assert'
import { Select } from 'selenium-webdriver'
import { Driver } from 'selenium-webdriver/chrome.js'

(async function createUser() {
    try{
        let driver;

        driver = await new Builder().forBrowser('chrome').build()
        await driver.get('http://localhost:3000/')

        await driver.manage().setTimeouts({ implicit: 1000})
        await driver.manage().window().maximize();

        let buttonUpdate = await driver.findElement(By.id('proyectUpdate'))
        await buttonUpdate.click()


        await new Promise(resolve => setTimeout(resolve, 5000));

        const inputNameProyect = await driver.findElement(By.id('nameProyect'))
        await inputNameProyect.clear()
        await inputNameProyect.sendKeys('Proyecto de actualización')

        let inputDescripProyect = await driver.findElement(By.id('descripProyect'))
        await inputDescripProyect.clear()
        await inputDescripProyect.sendKeys('Prueba de proyecto de actualización')

        let inputStatusProyect = await driver.findElement(By.id('statusProyect'))
        await inputStatusProyect.clear()
        await inputStatusProyect.sendKeys('Estado del proyecto')
    
        let inputFechIni = await driver.findElement(By.id('fechaIni'))
        await inputFechIni.clear()
        await inputFechIni.sendKeys('27082024')
    
        let inputFechLast = await driver.findElement(By.id('fechaLast'))
        await inputFechLast.clear()
        await inputFechLast.sendKeys('28082024')

        await new Promise(resolve => setTimeout(resolve, 5000));

        let buttonUpdateF = driver.findElement(By.className('buttonUpdate'))
        await buttonUpdateF.click()


        await driver.close()

    }catch (e){
        console.log(e)
    }finally{
        await Driver.Q;
    }
}())