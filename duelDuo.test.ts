
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://ec2-52-25-241-235.us-west-2.compute.amazonaws.com/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Check that clicking on the Draw butto displays the div with id ="choices', async () => {
    await driver.findElement(By.id('draw')).click()
    const draw = await driver.findElement(By.id('choices'))
    const displayed = await draw.isDisplayed()
    expect(displayed).toBeTruthy

    await driver.sleep(2000)

})







//something like this.......

// const addMovie = async (driver) => {
//     await driver.findElement(By.xpath(`//input`)).sendKeys('One Tree Hill')
//     //we are only able to do it so simply is because there is only one input field. This is basically typing in the name of the tv show in the input field but not clicking the button.

//     await driver.findElement(By.xpath(`//button`)).click()
//     //this locates the button and then clicks it by invoking it. 

//     const movie = await driver.findElement(By.xpath(`//li`))
//     //we can look for the li because it is the only one that exists. 

//     const displayed = movie.isDisplayed()

//     //this is checking if it is displayed or not. if it is, true. if not, false. 

//     expect(displayed).toBeTruthy()
//     //we are expecting it to be displayed so we are expecting it to be truthy. 
// }