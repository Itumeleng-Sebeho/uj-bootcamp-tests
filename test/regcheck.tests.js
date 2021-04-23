describe('test my reg check', function () {
    it("it should return 'false' when called with 'CY 189-012', 'CY'", function () {
        // assert.equal("CY 189-012", "CY"), "This should not be true!";
    });
    it("it should return 'false' when called with 'DV 23 LP GP', 'MP'", function () {
        // assert.equal("DV 23 LP GP", "MP"), "This should not be true!";
    });
    it("it should return 'true' when called with 'DV 23 NB GP', 'GP'", function () {
        // assert.equal("DV 23 NB GP", "GP"), "This should not be true!";
    });
});

