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

//DRY
function file_data(framework, crud, number){
  let data = "\r\n" + framework + "," + crud + "," + number
      appendFile(data);
}


describe("React Tests", function(){
    this.timeout(5000);
    let driver;

      //duplicate code up here
    beforeEach(async function(){
      await driver.get("http://localhost:3006/");
      let title = await driver.getTitle();
      expect(title).to.equal("React App");
    });

    afterEach(async function(){
      
    });

    before(async function(){
      driver= await new Builder().forBrowser('chrome').build();
      await driver.manage().setTimeouts( {implicit: 1000} );//this applies the wait for the whole driver session
    });

    after(async function(){//only once per test suite
      //teardown 
      await driver.quit();
    })

    it("React create button", async function(){
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
      
      file_data("React" , "Create", loginMeasure.duration.toString() )
      //let data = "\r\n" + "React" + "," + "Create" + "," + loginMeasure.duration.toString() 
      //appendFile(data);  
    });

    it("React update list item", async function(){
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
      
      file_data("React" , "Update" , loginMeasure.duration.toString() )
      //writeInFile("React update time", loginMeasure.duration.toString());
  
      
    });

    it("React delete button", async function(){
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
      
      file_data("React" , "Delete" , loginMeasure.duration.toString() )

    });
  });

  describe("Angular Tests", function(){
      this.timeout(5000);
      let driver;

      //duplicate code up here
      beforeEach(async function(){
        await driver.get("http://localhost:4200/");

        let title = await driver.getTitle();
        expect(title).to.equal("Angular WishList");
      })

      afterEach(async function(){
      
      });
  
      before(async function(){
        driver= await new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts( {implicit: 1000} );//this applies the wait for the whole driver session
      });
  
      after(async function(){//only once per test suite
        //teardown 
        await driver.quit();
      })

    it("Angular create button", async function(){
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
      
      file_data("Angular" , "Create" , loginMeasure.duration.toString() )

    });

    it("Angular Update list item", async function(){
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
      
      file_data("Angular" , "Update" , loginMeasure.duration.toString() );
        
    });

    it("Angular delete button", async function(){
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
      
      file_data("Angular" , "Delete" , loginMeasure.duration.toString() );

    });
});

