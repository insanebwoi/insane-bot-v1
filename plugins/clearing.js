/* Codded by @insane boy

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

insane bot-insane boy
*/

const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const Asena = require('../events');
const ins = "Its Clear Your Chat History"



 Asena.addCommand({pattern: 'clear', fromMe: true, desc: ins}, (async (message, match) => {

    await message.sendMessage('```Deleting all Msg...☯```');
            await message.client.modifyChat (message.jid, ChatModification.delete);
                     await message.sendMessage('```Successful Deleted! 🗑🗑;```');
}));
