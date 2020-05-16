const functions = require("firebase-functions');
const cors = require('cors')({ origin: true});


exports.scraper = functions.https.onRequest( async (request, response) => {
    cors(request, response, async () => {


        const body = JSON.parse(request.body);
        const data = await scrapeMetatags(body.text);

        response.send(data)

    });
});
