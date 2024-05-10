import {expect} from "chai";
import { Builder, By, Select } from "selenium-webdriver";
import fs from "fs";
import  ViewPage  from "./page_models/viewPage.js";

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
    let viewPage;
    //let memorySample;
    //let memoryStart;
    //let memoryEnd;
    

      //duplicate code up here
    beforeEach(async function(){
      await driver.get("http://localhost:3006/");
      viewPage = new ViewPage(driver);//passing the current driver to the POM
      await viewPage.validatePage_React();
    });

    before(async function(){
      driver= await new Builder().forBrowser('chrome').build();
      await driver.manage().setTimeouts( {implicit: 1000} );//this applies the wait for the whole driver session
     //memoryStart = performance.memory.usedJSHeapSize;
    });

    after(async function(){//only once per test suite
      //teardown 
      //memoryEnd = performance.memory.usedJSHeapSize;
      //memorySample= memoryEnd - memoryStart;
      //file_data("React" , "Memory", memorySample)
      await driver.quit();
    })

    //REACT CREATE
    it("React create button", async function(){
        // performance marker for React Create functionality
        performance.mark("React-create-start");

        //act 
        await viewPage.selectCreateButton();

       //assert
       await viewPage.getUpdateText("Selenium");
       let inputElement = await viewPage.getUpdateValue();
       expect(inputElement).to.equal("Selenium");
       await viewPage.getUpdateButton();

       // performance marker at the end of React Create functionality
       performance.mark("React-create-end");

       const T_Measure = performance.measure(
        "react-create-duration",
        "React-create-start",
        "React-create-end",
      );
      
      file_data("React" , "Create", T_Measure.duration.toString() )
    });

    // REACT UPDATE
    it("React update list item", async function(){
        // performance marker for React Create functionality
        performance.mark("React-update-start");

        //act
        await viewPage.selectUpdateButton();

        //assert
        await viewPage.getUpdateText('s');
        let inputElement = await viewPage.getUpdateValue();
        expect(inputElement).to.equal("Seleniums");
        await viewPage.getUpdateButton();

        // performance marker at the end of React Create functionality
       performance.mark("React-update-end");

       const T_Measure = performance.measure(
        "react-update-duration",
        "React-update-start",
        "React-update-end",
      );
      
      file_data("React" , "Update" , T_Measure.duration.toString() )
 
    });

      //REACT DELETE
    it("React delete button", async function(){
        // performance marker for React Create functionality
        performance.mark("React-delete-start");

        //act 
        await viewPage.selectDeleteButton();

         // performance marker at the end of React Create functionality
       performance.mark("React-delete-end");

       const T_Measure = performance.measure(
        "react-delete-duration",
        "React-delete-start",
        "React-delete-end",
      );
      
      file_data("React" , "Delete" , T_Measure.duration.toString() )
    });
  });

  describe("Angular Tests", function(){
      this.timeout(5000);
      let driver;
      let viewPage;

      //duplicate code up here
      beforeEach(async function(){
        await driver.get("http://localhost:4200/");
        viewPage = new ViewPage(driver);//passing the current driver to the POM
        await viewPage.validatePage_Angular();
      })
  
      before(async function(){
        driver= await new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts( {implicit: 1000} );//this applies the wait for the whole driver session
      });
  
      after(async function(){//only once per test suite
        //teardown 
        await driver.quit();
      })

      //ANGULAR CREATE
    it("Angular create button", async function(){
        // performance marker at the end of React Create functionality
       performance.mark("angular-create-start");

        //act 
        await viewPage.selectCreateButton();

       //assert
       await viewPage.getUpdateText("Selenium");
       let inputElement = await viewPage.getUpdateValue();
       expect(inputElement).to.equal("Selenium");
       await viewPage.getUpdateButton();

       // performance marker at the end of React Create functionality
       performance.mark("angular-create-end");

       const T_Measure = performance.measure(
        "angular-create-duration",
        "angular-create-start",
        "angular-create-end",
      );
      
      file_data("Angular" , "Create" , T_Measure.duration.toString() )

    });

    //ANGULAR UPDATE
    it("Angular Update list item", async function(){
        // performance marker at the end of React Create functionality
       performance.mark("angular-update-start");

        //act
        await viewPage.selectUpdateButton();

        //assert
        await viewPage.getUpdateText('s');
        let inputElement = await viewPage.getUpdateValue();
        expect(inputElement).to.equal("Seleniums");
        await viewPage.getUpdateButton();

        // performance marker at the end of React Create functionality
       performance.mark("angular-update-end");

       const T_Measure = performance.measure(
        "angular-update-duration",
        "angular-update-start",
        "angular-update-end",
      );
      
      file_data("Angular" , "Update" , T_Measure.duration.toString() ); 
    });

      //ANGULAR DELETE
    it("Angular delete button", async function(){
        // performance marker at the end of React Create functionality
       performance.mark("angular-delete-start");

        //act 
        await viewPage.selectDeleteClass();

        // performance marker at the end of React Create functionality
       performance.mark("angular-delete-end");

       const T_Measure = performance.measure(
        "angular-delete-duration",
        "angular-delete-start",
        "angular-delete-end",
      );
      
      file_data("Angular" , "Delete" , T_Measure.duration.toString() );
    });
});

