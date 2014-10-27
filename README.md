Mandrill_Tutorial
=================

Create, Send & Email with Mandrill with PJ Targun

###Introduction
[Mandrill](http://mandrill.com) allows you to send emails from your website or application, and track the results!

First you'll need to create an account.  Once you're logged into your accont, click the options to Get API keys.  Generate a new key, and copy it so you can use it for the exercises.

For future refrence, you can accesss API keys at **Settings > SMTP & API Credentials**.

###Getting Started
Mandrill provides an API that accepts HTTP POST requests with JSON-formatted objects.  You'll use a diffrent API endpoints and parameters in the call, depending on what you want to accomplish.

Lets get started and ping your mandrill account.  I've created a mandrill.js file and linked it to an index.html.  Now go to the js file and add your key to where it says **'API_KEY'**.  Note: Remember not to include API keys in a publicly visable script file.  

###Send an HTML email with open and click tracking

Now let's send a quick text email.  In the params variable, you will set the message infomrations such as sender address, recipient information, sibject line, and the content of your email.  You can see more options in the [documentation](https://mandrillapp.com/api/docs/messages.html#method=send).

I've included the required parameters.  Go ahead and add the the from and to email parameters.  You can see the text parameter is commented out.  Text is an option, but to be more robust, we will be adding HTML content to the email. Then add a parameter for the message called autotext, with the boolean value of true.

Finally lets add two more parameters for tracking emails:
**"track_opens": true,**
**"track_clicks": true**

Looking at the offical Mandrill API, you can see that to send a message, you'd use **messsages.send**.  So change "ManDrill_Method_Here" to messages.send

###Customize email content
You can use merge tags to customize the email for the recipient.  Merge tags in Mandrill take the form of __*|MERGENAME|*__ where "MERGENAME" is the name of the merge tag.  

Let's now head over to the html and add a couple of merge tags, so you can have content like - hey *|FRIEND|*, we've been friends for *|YEARS|* years. Now that your content has merge tags, you can provide some specifics in the API call, using the **erge_vars** and **global_merge_vars** parameters. The **global_merge_vars** parameter lets you specify some default values in the event that a recipient doesn't have recipient-specific information.

For the message, add a **merge_vars** parameter. This parameter takes an array, with each item being a recipient. Each recipient has two keys: **rcpt** and **vars** and you'll want to add information for each merge tag in your content.

In the end, your mandrill params object should look like:
```javascript
var params = {
    "message": {
        "from_email":"your_email_address",
        "to":[{"email":"your_recipient_address"}],
        "subject": "Sending a text email from the Mandrill API",
        "html": "<p>Hey *|COOLFRIEND|*, we've been friends for *|YEARS|*.</p>",
        "autotext": true,
        "track_opens": true,
        "track_clicks": true,
        "merge_vars": [
            {
                "rcpt": "your_recipient_address",
                "vars": [
                    {
                        "name": "COOLFRIEND",
                        "content": "Your friend's name"
                    },
                    {
                        "name": "YEARS",
                        "content": "5 awesome years"
                    }
                ]
            }
        ]
    }
};
```

Note: Sometimes you need to wait a few for the email to show up in your inbox.

For resources to set up mandrill on the backend with Node.js, check out [powerdrill](https://github.com/rschmukler/powerdrill)



