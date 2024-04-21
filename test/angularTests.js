import {expect} from "chai";
import { Builder, By, Select } from "selenium-webdriver";

describe("CRUD Tests", function(){
    this.timeout(5000);

    it("Angular create button", async function(){
        let driver= await new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts( {implicit: 1000} );

        await driver.get("http://localhost:4200/");

        let title = await driver.getTitle();
        expect(title).to.equal("Angular WishList");

        //act 
        let createButtonElement= await driver.findElement(By.id("create-button")); 
        await createButtonElement.click();

       //assert
       let selectedElement = await driver.findElement(By.id("update-button"));
       let inputField = await driver.findElement(By.id("update-text"));
       await inputField.sendKeys('Selenium');
       let inputElement = await driver.findElement(By.id("update-text")).getAttribute("value");
       expect(inputElement).to.equal("Selenium");
       await selectedElement.click();

       //teardown 
       await driver.quit();
    });

    it("Angular Update list item", async function(){
        //setup
        //Selenium Build operation needs to be asychronous
        let driver= await new Builder().forBrowser('chrome').build();
        //implicit wait, letting selenium hold the DOM for this duration
        await driver.manage().setTimeouts( {implicit: 1000} );

        //opening the website 
        await driver.get("http://localhost:4200/");

        //getting the current page title from the browser
        let title = await driver.getTitle();
        expect(title).to.equal("Angular WishList");

        //act
        //using findElement and by to find the button
        let editButtonElement= await driver.findElement(By.id("Selenium"));
        await editButtonElement.click(); //wait fo the click to happen

        //assert
        let toEditElement = await driver.findElement(By.id("update-button"));
        let inputField = await driver.findElement(By.id("update-text"));
        await inputField.sendKeys('s');
        let inputElement = await driver.findElement(By.id("update-text")).getAttribute("value");
        expect(inputElement).to.equal("Seleniums");
        await toEditElement.click();
        
        //teardown 
        await driver.quit();
    });

    it("Angular delete button", async function(){
        let driver= await new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts( {implicit: 1000} );

        await driver.get("http://localhost:4200/");

        let title = await driver.getTitle();
        expect(title).to.equal("Angular WishList");

        //act 
        let deleteButtonElement= await driver.findElement(By.className("Seleniums")); 
        await deleteButtonElement.click();

       //teardown 
       await driver.quit();
    });

    

});