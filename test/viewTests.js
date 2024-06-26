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
    this.timeout(10000);
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
        performance.mark("React-create-start-selectButton");
        await viewPage.selectCreateButton();
        performance.mark("React-create-end-selectButton");

        const S_Measure = performance.measure(
          "React-create-selectButton-duration",
          "React-create-start-selectButton",
          "React-create-end-selectButton",
        );
        file_data("React" , "Create-selectButton", S_Measure.duration.toString() )

       //assert
       await viewPage.getUpdateText("Selenium");
       let inputElement = await viewPage.getUpdateValue();
       expect(inputElement).to.equal("Selenium");
       performance.mark("React-create-start-clickButton");
       await viewPage.getUpdateButton();
       performance.mark("React-create-end-clickButton");
       performance.mark("React-create-start-findCreateButton");
       await viewPage.findButton("create-button");
       performance.mark("React-create-end-findCreateButton");
       
       // performance marker at the end of React Create functionality
       performance.mark("React-create-end");

      const B_Measure = performance.measure(
        "React-create-clickButton-duration",
        "React-create-start-clickButton",
        "React-create-end-clickButton",
      );
      file_data("React" , "Create-clickButton", B_Measure.duration.toString() )

       const T_Measure = performance.measure(
        "react-create-duration",
        "React-create-start",
        "React-create-end",
      );
      
      file_data("React" , "Create", T_Measure.duration.toString())

    const F_Measure = performance.measure(
      "React-create-end-findCreateButton-duration",
      "React-create-start-findCreateButton",
      "React-create-end-findCreateButton",
    );
    
    file_data("React" , "Create-findCreateButton", F_Measure.duration.toString())
  });

    // REACT UPDATE
    it("React update list item", async function(){
        // performance marker for React Create functionality
        performance.mark("React-update-start");

        //act
        performance.mark("React-update-start-selectButton");
        await viewPage.selectUpdateButton();
        performance.mark("React-update-end-selectButton");

        const S_Measure = performance.measure(
          "React-create-selectButton-duration",
          "React-create-start-selectButton",
          "React-create-end-selectButton",
        );
        file_data("React" , "Update-selectButton", S_Measure.duration.toString() )

        //assert
        await viewPage.getUpdateText('s');
        let inputElement = await viewPage.getUpdateValue();
        expect(inputElement).to.equal("Seleniums");
        performance.mark("React-update-start-clickButton");
        await viewPage.getUpdateButton();
        performance.mark("React-update-end-clickButton");

        performance.mark("React-update-start-findCreateButton");
        await viewPage.findButton("create-button");
        performance.mark("React-update-end-findCreateButton");

        // performance marker at the end of React Create functionality
       performance.mark("React-update-end");

      const B_Measure = performance.measure(
        "React-update-clickButton-duration",
        "React-update-start-clickButton",
        "React-update-end-clickButton",
      );
      file_data("React" , "Update-clickButton", B_Measure.duration.toString() )

       const T_Measure = performance.measure(
        "react-update-duration",
        "React-update-start",
        "React-update-end",
      );
      
      file_data("React" , "Update" , T_Measure.duration.toString())
 
      const F_Measure = performance.measure(
        "React-update-end-findCreateButton-duration",
        "React-update-start-findCreateButton",
        "React-update-end-findCreateButton",
      );
      
      file_data("React" , "update-findCreateButton", F_Measure.duration.toString())
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
      
      file_data("React" , "Delete" , T_Measure.duration.toString())
    });
  });

   describe.only("Angular Tests", function(){
      this.timeout(10000);
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
        performance.mark("Angular-create-start-selectButton");
        await viewPage.selectCreateButton();
        performance.mark("Angular-create-end-selectButton");

        const SB_Measure = performance.measure(
          "Angular-create-selectButton-duration",
          "Angular-create-start-selectButton",
          "Angular-create-end-selectButton",
        );
        file_data("Angular" , "Create-selectButton", SB_Measure.duration.toString() )

       //assert
       //performance.mark("Angular-create-start-getUpdateText");
       await viewPage.getUpdateText("Selenium");
       //performance.mark("Angular-create-end-getUpdateText");
       //performance.mark("Angular-create-start-getUpdateValue");
       let inputElement = await viewPage.getUpdateValue();
       //erformance.mark("Angular-create-end-getUpdateValue");
       expect(inputElement).to.equal("Selenium");
       performance.mark("Angular-create-start-clickButton");
       await viewPage.getUpdateButton();
       performance.mark("Angular-create-end-clickButton");
       // performance marker at the end of React Create functionality
       performance.mark("angular-create-end");
       performance.mark("Angular-create-start-findCreateButton");
       await viewPage.findButton("create-button");
       performance.mark("Angular-create-end-findCreateButton");
       

       const CB_Measure = performance.measure(
        "Angular-create-clickButton-duration",
        "Angular-create-start-clickButton",
        "Angular-create-end-clickButton",
      );
      file_data("Angular" , "Create-clickButton", CB_Measure.duration.toString() )

       const T_Measure = performance.measure(
        "angular-create-duration",
        "angular-create-start",
        "angular-create-end",
      );
      
      file_data("Angular" , "Create" , T_Measure.duration.toString())

      const F_Measure = performance.measure(
        "Angular-create-findCreateButton-duration",
        "Angular-create-start-findCreateButton",
        "Angular-create-end-findCreateButton",
      );
      
      file_data("Angular" , "Create-findCreateButton", F_Measure.duration.toString())
    });

    //ANGULAR UPDATE
    it("Angular Update list item", async function(){
        // performance marker 
       performance.mark("angular-update-start");

        //act
        performance.mark("Angular-update-start-selectButton");
        await viewPage.selectUpdateButton();
        performance.mark("Angular-update-end-selectButton");

        //assert
        await viewPage.getUpdateText('s');
        let inputElement = await viewPage.getUpdateValue();
        expect(inputElement).to.equal("Seleniums");
        performance.mark("Angular-update-start-clickButton");
        await viewPage.getUpdateButton();
        performance.mark("Angular-update-end-clickButton");

        performance.mark("Angular-update-start-findCreateButton");
        await viewPage.findButton("create-button");
        performance.mark("Angular-update-end-findCreateButton");
        // performance marker 
       performance.mark("angular-update-end");

       const B_Measure = performance.measure(
        "Angular-update-clickButton-duration",
        "Angular-update-start-clickButton",
        "Angular-update-end-clickButton",
      );
      file_data("Angular" , "Update-clickButton", B_Measure.duration.toString() )

       const T_Measure = performance.measure(
        "angular-update-duration",
        "angular-update-start",
        "angular-update-end",
      );
      
      file_data("Angular" , "Update" , T_Measure.duration.toString()); 

      const F_Measure = performance.measure(
        "Angular-update-end-findCreateButton-duration",
        "Angular-update-start-findCreateButton",
        "Angular-update-end-findCreateButton",
      );
      
      file_data("Angular" , "update-findCreateButton", F_Measure.duration.toString())
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
      
      file_data("Angular" , "Delete" , T_Measure.duration.toString());
    });
    
});

