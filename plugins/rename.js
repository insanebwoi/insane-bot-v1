Asena.addCommand({pattern: 'rename ?(.*)', onlyGroup: false, fromMe: true,desc: Asena}, (async (message, match) => {
    var im = await checkImAdmin(message);
    var us = await checkUsAdmin(message);
    if (!us) return await message.client.sendMessage(message.jid,Lang.PLKADMIN,MessageType.text ,{quoted: message.data });
    if (!im) return await message.client.sendMessage(message.jid,'i am not admin',MessageType.text);
    if (match[1] === '') return await message.client.sendMessage(message.jid,'changing',MessageType.text);
    await message.client.groupUpdateSubject(message.jid, match[1]);
    await message.client.sendMessage(message.jid,'group name changed to  ```' + match[1] + '```' ,MessageType.text);
    }
));
