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
        assertThrows(Error, function check() {
            var foo = flaky();
            var expectedMessage = "Oops";
            assertEquals(expectedMessage, foo);
        });
     }

});

function flaky() {
    throw new EvalError("Oops");
}
