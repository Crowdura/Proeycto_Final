import { By, Builder,  WebElementCondition, until} from 'selenium-webdriver'
import assert from 'assert'
import { Driver } from 'selenium-webdriver/chrome.js';

( async function homeTest() {
    let driver;

    try{

        driver = new Builder().forBrowser('chrome').build();
        await driver.get('https://admlucid.com/')

        let title = await driver.getTitle();
        console.log('**** Prueba de titulo ' + title)
        assert.equal("Home Page - Admlucid", title)

        await driver.manage().setTimeouts({implicit: 500})
        await driver.manage().window().maximize()

        let url = await driver.getCurrentUrl();
        console.log("*********** current Url*******"+url)

        await driver.navigate().to('https://admlucid.com/Home/selenium')
        
        let message =  await driver.findElement(By.xpath('//*[@id="Selenium"]/h1'))
        await driver.wait(until.elementIsEnabled(message), 2000)

        let value =  ( await message.getText()).trim()
        assert.equal("Selenium Automation Testing", value)
        
        console.log("**********Page Header**********"+value)


    }catch (e){
        console.log(e)
    }finally{
        await Driver.Q;
    }
}())