# SURVEY-19
__An easy email-surveying web app for healthcare providers.__
<br>
Uses React, MongoDB, Stripe, Google OAuth, Redux, PassportJS and NodeJS

## Hook up to your own server
Set up a Heroku app repo, clone the project and deploy it into Heroku. Make sure you have Config Vars to match
the keys:

```javascript
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN,
};

```

## Customize Email Template
You can style the survey template for patients as you please in:
```server/services/emailTemplates/surveyTemplate.js``` 

```javascript
module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>COVID-19 Prevention Survey!</h3>
          <p>Share your input regarding any symptoms since your recovery from COVID-19!</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};

```

## What it looks like:
[!Screenshot](/survey-19-screenshots/Capture.JPG)
