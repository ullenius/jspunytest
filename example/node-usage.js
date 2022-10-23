// Usage example for writing tinyjs unit tests in node modules
"use strict";

var {
    fail, assert, assertEquals, assertStrictEquals, assertThrows, tests 
} = require("../punytest.js");

tests({
    "foobar" : function foo() {
        var expected = 42;
        var actual = 21 * 2;
        assertEquals(expected, actual);
    },

    "flaky throws" : function bar() {
        var exception = assertThrows(Error, function check() {
            flaky();
        });
        var expectedMessage = "Oops";
        assertStrictEquals(expectedMessage, exception.message);
     }

});

function flaky() {
    throw new EvalError("Oops");
}
