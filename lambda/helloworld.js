exports.handler = function (event, context) {
    console.log("Testing my first Lambda");
    console.log("Logging again");
    context.succeed("Hello world");
    console.log("Logging again and again!");
};  