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

###Notes
You can use [merge tags](http://help.mandrill.com/entries/21678522-How-do-I-use-merge-tags-to-add-dynamic-content-) to customize the email for the recipient.
You may find that your emails are going into spam. Setting up your [SPF and DKIM](http://help.mandrill.com/entries/21751322-What-are-SPF-and-DKIM-and-do-I-need-to-set-them-up-) should help with that.

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
        "track_clicks": true
    }
};
```



