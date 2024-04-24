//storing locators and operators which operate with elements on the page

import { By } from "selenium-webdriver";

class ViewPage{
    constructor(driver){//passing the driver to the constructor
        this.driver=driver;


    }

    async validatePage_React(){
        let title = await this.driver.getTitle();
        if(title!= "React App"){
            throw Error("Wrong page reached.");
        }
    }

    async validatePage_Angular(){
        let title = await this.driver.getTitle();
        if(title!= "Angular WishList"){
            throw Error("Wrong page reached.");
        }
    }

    selectCreateButton(){
        return this.driver.findElement(By.id("create-button")).click(); 
    }

    selectUpdateButton(){
    //using findElement and by to find the button
     return this.driver.findElement(By.id("Selenium")).click();
    }

    selectDeleteButton(){   
        return this.driver.findElement(By.id("Delete Seleniums")).click(); 
    }

    selectDeleteClass(){   
        return this.driver.findElement(By.className("Seleniums")).click(); 
    }

    getUpdateText(text){
        return this.driver.findElement(By.id("update-text")).sendKeys(text);
    }

    getUpdateValue(){
       return this.driver.findElement(By.id("update-text")).getAttribute("value");
    }

    getUpdateButton(){
       return this.driver.findElement(By.id("update-button")).click();
    }


}

export default  ViewPage ;