// Create a generic function to log the response from Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// Create a new instance of the Mandrill class from the mandrill
// library. It takes one parameter, your API key.

var m = new mandrill.Mandrill('API_KEY');


// create a variable for the API call parameters
var params = {
    "message": {
        "from_email":"your_email_address",
        "to":[{"email":"your_recipient_address"}],
        "subject": "Sending a text email from the Mandrill API",
        //"text": "I'm learning the Mandrill."
    }
};

function sendTheMail() {
// Send the email!

    m."ManDrill_Method_Here"(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
}