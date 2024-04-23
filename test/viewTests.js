import {expect} from "chai";
import { Builder, By, Select } from "selenium-webdriver";
import fs from "fs";

function writeInFile(data){
    fs.writeFileSync("H:/dis_test/performance.txt", data, err => {
        if (err) {
        console.error(err);
        };
    });
};

function appendFile(data){
  fs.appendFile("H:/dis_test/performance.txt", data, err => {
      if (err) {
      console.error(err);
      };
  });
};

//const observer = new PerformanceObserver((list) => {
//    list.getEntries().forEach((entry) => {
//        writeInFile(entry.toJSON());
//    });
//  });
  
//  observer.observe({ type: "event", buffered: true }); 


describe("CRUD Tests", function(){
    this.timeout(5000);

    it("React create button", async function(){
        

        let driver= await new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts( {implicit: 1000} );

        await driver.get("http://localhost:3006/");

        let title = await driver.getTitle();
        expect(title).to.equal("React App");

        // performance marker for React Create functionality
        performance.mark("React-create-start");

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

       // performance marker at the end of React Create functionality
       performance.mark("React-create-end");

       const loginMeasure = performance.measure(
        "react-create-duration",
        "React-create-start",
        "React-create-end",
      );
      
      let data = "\r\n" + "React" + "," + "Create" + "," + loginMeasure.duration.toString() 
      appendFile(data);
       
       //teardown 
       await driver.quit();
    });



    it("React update list item", async function(){
        //setup
        //console.beginLog();
        //Selenium Build operation needs to be asychronous
        let driver= await new Builder().forBrowser('chrome').build();
        //implicit wait, letting selenium hold the DOM for this duration
        await driver.manage().setTimeouts( {implicit: 1000} );

        //opening the website 
        await driver.get("http://localhost:3006/");
 
        //getting the current page title from the browser
        let title = await driver.getTitle();
        expect(title).to.equal("React App");

        // performance marker for React Create functionality
        performance.mark("React-update-start");

        //act
        //using findElement and by to find the button
        let editButtonElement= await driver.findElement(By.id("Selenium"));
        await editButtonElement.click(); //wait fo the click to happen
        //console.log(editButtonElement);

        //assert
        let toEditElement = await driver.findElement(By.id("update-button"));
        let inputField = await driver.findElement(By.id("update-text"));
        await inputField.sendKeys('s');
        let inputElement = await driver.findElement(By.id("update-text")).getAttribute("value");
        expect(inputElement).to.equal("Seleniums");
        await toEditElement.click();

        // performance marker at the end of React Create functionality
       performance.mark("React-update-end");

       const loginMeasure = performance.measure(
        "react-update-duration",
        "React-update-start",
        "React-update-end",
      );
      
      //writeInFile("React update time", loginMeasure.duration.toString());
      let data = "\r\n" + "React" + "," + "Update" + "," + loginMeasure.duration.toString() 
      appendFile(data);
        
        //teardown 
        await driver.quit();
    });


    it("React delete button", async function(){
        let driver= await new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts( {implicit: 1000} );

        await driver.get("http://localhost:3006/");

        let title = await driver.getTitle();
        expect(title).to.equal("React App");

        // performance marker for React Create functionality
        performance.mark("React-delete-start");

        //act 
        let deleteButtonElement= await driver.findElement(By.id("Delete Seleniums")); 
        await deleteButtonElement.click();

         // performance marker at the end of React Create functionality
       performance.mark("React-delete-end");

       const loginMeasure = performance.measure(
        "react-delete-duration",
        "React-delete-start",
        "React-delete-end",
      );
      
      let data = "\r\n" + "React" + "," + "Delete" + "," + loginMeasure.duration.toString() 
      appendFile(data);

       //teardown 
       await driver.quit();
    });

    it("Angular create button", async function(){
        let driver= await new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts( {implicit: 1000} );

        await driver.get("http://localhost:4200/");

        let title = await driver.getTitle();
        expect(title).to.equal("Angular WishList");

        // performance marker at the end of React Create functionality
       performance.mark("angular-create-start");

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

       // performance marker at the end of React Create functionality
       performance.mark("angular-create-end");

       const loginMeasure = performance.measure(
        "angular-create-duration",
        "angular-create-start",
        "angular-create-end",
      );
      
      let data = "\r\n" + "Angular" + "," + "Create" + "," + loginMeasure.duration.toString()
      appendFile(data);
      //File.writeTextFile( "H:/dis_test/logfile.log", console.endLog().toString() );

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

        // performance marker at the end of React Create functionality
       performance.mark("angular-update-start");

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

        // performance marker at the end of React Create functionality
       performance.mark("angular-update-end");

       const loginMeasure = performance.measure(
        "angular-update-duration",
        "angular-update-start",
        "angular-update-end",
      );
      
      let data = "\r\n" +  "Angular" + "," + "Update" + "," + loginMeasure.duration.toString()
      appendFile(data);
      //File.writeTextFile( "H:/dis_test/logfile.log", console.endLog().toString() );
        
        //teardown 
        await driver.quit();
    });

    it("Angular delete button", async function(){
        let driver= await new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts( {implicit: 1000} );

        await driver.get("http://localhost:4200/");

        let title = await driver.getTitle();
        expect(title).to.equal("Angular WishList");

        // performance marker at the end of React Create functionality
       performance.mark("angular-delete-start");

        //act 
        let deleteButtonElement= await driver.findElement(By.className("Seleniums")); 
        await deleteButtonElement.click();

        // performance marker at the end of React Create functionality
       performance.mark("angular-delete-end");

       const loginMeasure = performance.measure(
        "angular-delete-duration",
        "angular-delete-start",
        "angular-delete-end",
      );
      
      let data = "\r\n" +  "Angular" + "," + "Delete" + "," + loginMeasure.duration.toString()
      appendFile(data);
      //File.writeTextFile( "H:/dis_test/logfile.log", console.endLog().toString() );

       //teardown 
       await driver.quit();
    });
});