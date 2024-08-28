import { By, Builder, WebElementCondition, until } from 'selenium-webdriver'


(async function createUser() {
    try{
        let driver;
        let x = 0;

        driver = await new Builder().forBrowser('chrome').build()
        await driver.get('http://localhost:3000/user/U')

        await driver.manage().setTimeouts({ implicit: 120000})
        await driver.manage().window().maximize();

        let buttonUpdate = await driver.findElement(By.id('updateUser'))
        await buttonUpdate.click()

        await new Promise(resolve => setTimeout(resolve, 5000));

        let inputName = await driver.findElement(By.id('Name'))   
        await inputName.clear()
        await inputName.sendKeys('Federico prueba')

        let inputNameL = await driver.findElement(By.id('last_name'))
        await inputNameL.clear()
        await inputNameL.sendKeys('Cuervo prueba')

        let inputUser = await driver.findElement(By.id('user'))
        await inputUser.clear()
        await inputUser.sendKeys('Crow prueba')

        let inputEmail = await driver.findElement(By.id('email'))
        await inputEmail.clear()
        await inputEmail.sendKeys('crowdura29@gmail.com')
    
        let inputTel = await driver.findElement(By.id('tel'))
        await inputTel.clear()
        await inputTel.sendKeys('3204620908 prueba')
    
        let inputAndress = await driver.findElement(By.id('andress'))
        await inputAndress.clear()
        await inputAndress.sendKeys('cra 28 prueba')

        let buttonUpdateF = driver.findElement(By.id('buttonUserUp'))
        await buttonUpdateF.click()

        await driver.manage().setTimeouts({ implicit: 120000})

        await driver.close()


    }catch (e){
        console.log(e)
    }finally{
    }
}())