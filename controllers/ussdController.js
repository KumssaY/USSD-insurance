const AfricasTalking = require('africastalking');
const options = {
    apiKey: 'API-KEY',         
    username: 'Test-app',      
};
const africasTalking = new AfricasTalking(options);

exports.handleUssd = (req, res) => {
    let { sessionId, serviceCode, phoneNumber, text } = req.body;
    let response = '';

    if (text === '') {
        // This is the first request
        response = `CON What insurance do you have?\n1. APA\n2. CIC\n3. Jubilee`;
    } else if (text === '1') {
        // User responded with "APA"
        response = `CON What city are you in?\n1. Nairobi\n2. Kisumu\n3. Mombasa`;
    } else if (text === '1*1') {
        // User responded with "Nairobi"
        response = `CON Select a Hospital\n1. Kenyatta Hospital\n2. Nairobi Hospital\n3. Aga Khan`;
    } else if (text === '1*1*1') {
        // User selected "Kenyatta Hospital"
        response = 'END Covers\n1. Optical\n2. Outpatient\n3. Cancer';
        sendSms(phoneNumber, 'You selected Kenyatta Hospital. The covers offered are: Optical, Outpatient, Cancer.');
    } else if (text === '1*1*2') {
        // User selected "Nairobi Hospital"
        response = 'END Covers\n1. Dental\n2. Outpatient\n3. Inpatient';
        sendSms(phoneNumber, 'You selected Nairobi Hospital. The covers offered are: Dental, Outpatient, Inpatient.');
    } else if (text === '1*1*3') {
        // User selected "Aga Khan"
        response = 'END Covers\n1. Colonoscopy\n2. Inpatient\n3. Therapy';
        sendSms(phoneNumber, 'You selected Aga Khan. The covers offered are: Colonoscopy, Inpatient, Therapy.');
    }
    
    res.set('Content-Type: text/plain');
    res.send(response);
};

function sendSms(to, message) {
    const sms = africasTalking.SMS;
    const options = {
        to: [to],
        message: message
    };

    sms.send(options)
        .then(console.log)
        .catch(console.error);
}
