describe('test my greet function', function () {
    it("it should return 'Hello, Itumeleng' when called with 'Itumeleng' ", function () {
        assert.equal("Hello, Itumeleng", greet("Itumeleng"), "This should not be true!");

    });
    it("it should return 'Hello, Lynn' when called with 'Lynn' ", function () {
        assert.equal("Hello, Lynn", greet("Lynn"), "This should not be true!");

    });
    it("it should return 'Hello, Augustine' when called with 'Augustine' ", function () {
        assert.equal("Hello, Augustine", greet("Augustine"), "This should not be true!");
});
it("it should return 'Hello, Suzanne' when called with 'Suzanne' ", function () {
    assert.equal("Hello, Suzanne", greet("Suzanne"), "This should not be true!");
});
});
