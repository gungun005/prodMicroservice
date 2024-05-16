const {expect }= require('chai'); 
const repoFile = require('../repository/flipRepository');

describe("Unit Test Case", () => {
    it("Is returning 4 when adding 2 + 2", () => { 
        expect(2 + 2).to.equal(4); 
    }); 
})

describe("getFlipAllProduct", () => {
    it("Validating GET Request", () => {
        const response = repoFile.getFlipAllProduct();
        const expectedResponse = "Hi I  have all products list "
        expect(response).to.equal(expectedResponse)
    });
});