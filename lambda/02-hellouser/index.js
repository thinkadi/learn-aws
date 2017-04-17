exports.handler = function (event, context) {
    console.log("Function begins");
    let responseString = "Hello, " + event.username;
    console.log("Responding with string: " + responseString)
    context.succeed(responseString);
    console.log("Function ends");
};