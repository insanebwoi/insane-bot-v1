
const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN: INSANE BOY\n' 
            + 'ORG:OWNER INSANE BOT;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=917012074386:+917012074386\n' 
            + 'END:VCARD'
await message.client.sendMessage(message.jid, {displayname: "INSANE BOY", vcard: vcard}, MessageType.contact, {quoted: mek})
Asena.addCommand({pattern: 'owner', fromMe: false, desc: `hehe`}, (async (message, match) => {
}));

