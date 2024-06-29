const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');

    const number = "9241650213"; // Replace with the recipient's number
    const message = "Hello from WhatsApp-Web.js!";

    // Your number including the country code without '+'
    const chatId = `${number}@c.us`;

    client.sendMessage(chatId, message).then(response => {
        console.log('Message sent successfully:', response);
***REMOVED***).catch(err => {
        console.error('Failed to send message:', err);
***REMOVED***);
});

client.initialize();
