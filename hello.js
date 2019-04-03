// Compiled using ts2gas 1.6.2 (TypeScript 3.4.1)
var exports = exports || {};
var module = module || { exports: exports };
var greeter = function (person) {
    return "Hello, " + person + "!";
};
function testGreeter() {
    var user = 'Grant';
    var msg = greeter(user);
    Logger.log(msg);
    Browser.msgBox(msg);
}
