# Node-Mailing-App
This app is For sending mail

you will need to install following (into the Node-Mailing-App folder) to run this app
  -node
  -express
  -mailgun
  -bodyparser
  
 For sending email from your id, you'll also need domain and api_key which you will get from mailgun.com after signingup
 
 NOTE: I have not attach domain and api_key for this app so you have to get it from mailgun.org. After that got to 
 ./Node-Mailing-App/routes/mailgun.js and edit the following with your domain and api_key
   
   const domain = "{your doamin}";
   const api_key = "{your api key}";
