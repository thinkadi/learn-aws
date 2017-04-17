exports.handler = function (event, context) {
    console.log("Function begins");
    console.log("RequestID: " + context.awsRequestId);
    console.log("Log Group Name: " + context.logGroupName);
    console.log("Log Stream Name: " + context.logStreamName);
    console.log("Identity: " + context.identity);
    console.log("Function Name: " + context.functionName);
    let responseString = "Hello, " + event.username;
    console.log("Responding with string: " + responseString)
    context.succeed(responseString);
    console.log("Function ends");
}