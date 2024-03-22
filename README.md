# USSD-insurance
This is a simple ussd interface built with the Africa's talking api, that allows uses to check out whether their insurance is accepted in which hospitals saving them the hustle of getting to the hospital first and also sends them a message to their phone.


To use it;
1. install the express and africa's talking dependencies
2. replace the api key and username with your actual username
3. make your local server link available to the internet, say using a services such as ngrok
4. Create a ussd channel in africa's talking sandbox then add the call back url- remember using the correct link ie add /ussd to the ngrok url since the /ussd route is used
5. test if it works using the simulator.
