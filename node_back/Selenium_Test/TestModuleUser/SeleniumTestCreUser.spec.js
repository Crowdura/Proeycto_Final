import { By, Builder, WebElementCondition, until } from 'selenium-webdriver'

(async function createUser() {
    try{
        let driver;

        driver = await new Builder().forBrowser('chrome').build()
        await driver.get('http://localhost:3000/user/create')

        await driver.manage().setTimeouts({ implicit: 5000})
        await driver.manage().window().maximize();

        const inputName = await driver.findElement(By.id('name'))
        await inputName.sendKeys('Federico')

        let inputNameL = await driver.findElement(By.id('nameL'))
        await inputNameL.sendKeys('Cuervo')

        let inputUser = await driver.findElement(By.id('username'))
        await inputUser.sendKeys('Crow')

        let inputEmail = await driver.findElement(By.id('email'))
        await inputEmail.sendKeys('crowdura29@gmail.com')
    
        let inputTel = await driver.findElement(By.id('Tel'))
        await inputTel.sendKeys('3204620908')
    
        let inputAndress = await driver.findElement(By.id('andress'))
        await inputAndress.sendKeys('cra 28 PRUEBA')

        let inputPassword = await driver.findElement(By.id('password'))
        await inputPassword.sendKeys('1234567')

        let createButton = driver.findElement(By.id('buttonIngre'))
        await createButton.click()

        await driver.manage().setTimeouts({ implicit: 60000})

        driver.close()

        
    }catch (e){
        console.log(e)
    }finally{
    }
}())