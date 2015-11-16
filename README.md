# cloudantangularconnect

Created this after searching endlessly for a code simply outlining how to connect to ibm cloudant db via angular js, without the fluff.

To use this code, you need to first enable CORS for your cloudant account.

First go to cloudant.com and login.
Go to > Account > CORS.
Ensure "Enable Cors" is selected.
Click on restrict to specific domains and add in the URL you're going to access it from (Or take the lazy route and just select all domains-- but this isn't secure!)

Now download the code and replace the values for the const variables in connect.js with your login details. To get an API key, go to cloudant.com > Databases > YOUR_DATABASE > Permissions > Generate API Key
This will give you a set of api connection keys. Ensure that "Reader" is selected for it, else you wont be able to read any data!

Enjoy!
