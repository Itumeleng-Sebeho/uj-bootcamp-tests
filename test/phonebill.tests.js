describe('test my phone bill function', function () {
    it("it should return 'call' when called with '2.75' ", function () {
        assert.equal("call", totalPhoneBill("call"), "This should not be true!");

    });
    it("it should return 'sms' when called with '0.65' ", function () {
        assert.equal("sms", totalPhoneBill("sms"), "This should not be true!");

    });

});