import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    // log the kv value to Azure Function App
    const Secret2 = process.env.MyAppSetting;
    context.log(`Value of Secret2 is: ${Secret2}`);

    // store a string in Queue Storage
    context.bindings.myQueueItem = "Function is triggered and I insert this message to the Queue!"


    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;