/* Codded by @insane-boy
thanks to farhan sir


Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

insane bot - insane boy
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command"


var r_text = new Array ();

    r_text[0] = Config.SEWQ
    r_text[1] = Config.SEWA
    r_text[2] = Config.SEWB
    r_text[3] = Config.SEWC
    r_text[4] = Config.SEWD
    r_text[5] = Config.SEWE
    r_text[6] = Config.SEWF
    r_text[7] = Config.SEWG
    r_text[8] = Config.SEWH
    r_text[9] = Config.SEWI
    r_text[10] = Config.SEWJ
    r_text[11] = Config.SEWK
    r_text[12] = Config.SEWL
    r_text[13] = Config.SEWM
    r_text[14] = Config.SEWN
    r_text[15] = Config.SEWO
    r_text[16] = Config.SEWP
  

    var i = Math.floor(17*Math.random())

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'sandsum ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/sandsummerbeach?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'cloudsky ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cloudsky?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '3dluxury ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/3dluxury?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1sandwriting ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/summerysandwriting?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'darkgold ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/metaldarkgold?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'neongalaxy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/neongalaxy?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'minion3d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/minion3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'holo3d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/holographic3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'purpul ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/metalpurpledual?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'esilver ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/deluxesilver?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1glossy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/glossycarbon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1fabric ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/fabric?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'new1y ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/newyear3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'neon1s ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/neontext?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'helloween ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/helloweenfire?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'xmas3d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/xmas3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'joker ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/jokerlogo?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'wicker ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/wicker?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'skeleton ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/skeleton?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1foil ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2foil ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purplefoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '3foil ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '4foil ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '5foil ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cyanfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '6foil ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluefoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '7foil ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'steel ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/steel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2glossy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/ultragloss?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'denim ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/denim?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1decora ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/decorategreen?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2decora ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/decoratepurple?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '3decora ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/peridotstone?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'rock ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/rock?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'lava ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/lava?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1glass ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/yellowglass?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'berry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/strawberry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2blood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/hororrblood?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '3blood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/horrorgift?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1gem ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluegem?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'bagel ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bagel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'captain ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/captainamerica?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '3cake ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/chocolatecake?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'fish ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/koifish?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'rainbow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/rainbowequalizer?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'honny ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/honey?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1candi ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkcandy?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'bluemetal ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluemetal?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
   
    Asena.addCommand({pattern: 'fruit ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/fruitjuice?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2carbon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/carbon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2metal ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/erodedmetal?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1glitter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bronzeglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2glitter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '3glitter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/silverglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '4glitter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '5glitter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '6glitter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/blueglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '7glitter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purpleglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    

    Asena.addCommand({pattern: '1jewelry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/yellowjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '2jewelry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/silverjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '3jewelry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '4jewelry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purplejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '5jewelry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/orangejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '6jewelry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '7jewelry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cyanjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '8jewelry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'biscuit ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/biscuit?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '1spark ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldsparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '2spark ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinksparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '3spark ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluesparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '4spark ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greensparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '5spark ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redsparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'grad ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/gradientavatar?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '1lol ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lol?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '2lol ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lolcover2?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'stars ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/stars?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'fur ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/fur?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'gerbang ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/gerbang?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '3lol ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lolpentakill?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'aov ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/aov?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'dota2 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/dota2avatar?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'vtext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*})

    }));

    Asena.addCommand({pattern: 'ptext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*})

    }));

    Asena.addCommand({pattern: 'colortext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*})

    }));
    
    Asena.addCommand({pattern: '1917 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*})

    }));





}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'sandsum ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/sandsummerbeach?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'cloudsky ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cloudsky?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '3dluxury ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/3dluxury?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1sandwriting ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/summerysandwriting?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'darkgold ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/metaldarkgold?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'neongalaxy ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/neongalaxy?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'minion3d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/minion3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'holo3d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/holographic3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'purpul ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/metalpurpledual?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'esilver ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/deluxesilver?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1glossy ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/glossycarbon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1fabric ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/fabric?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'new1y ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/newyear3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'neon1s ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/neontext?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'helloween ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/helloweenfire?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'xmas3d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/xmas3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'joker ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/jokerlogo?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'wicker ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/wicker?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'skeleton ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/skeleton?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1foil ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2foil ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purplefoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '3foil ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '4foil ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '5foil ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cyanfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '6foil ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluefoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '7foil ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'steel ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/steel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2glossy ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/ultragloss?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'denim ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/denim?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1decora ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/decorategreen?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2decora ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/decoratepurple?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '3decora ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/peridotstone?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'rock ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/rock?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'lava ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/lava?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1glass ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/yellowglass?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'berry ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/strawberry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2blood ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/hororrblood?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '3blood ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/horrorgift?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1gem ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluegem?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'bagel ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bagel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'captain ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/captainamerica?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '3cake ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/chocolatecake?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'fish ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/koifish?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'rainbow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/rainbowequalizer?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'honny ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/honey?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1candi ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkcandy?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'bluemetal ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluemetal?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
   
    Asena.addCommand({pattern: 'fruit ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/fruitjuice?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2carbon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/carbon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2metal ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/erodedmetal?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1glitter ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bronzeglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2glitter ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '3glitter ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/silverglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '4glitter ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '5glitter ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '6glitter ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/blueglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '7glitter ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purpleglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    

    Asena.addCommand({pattern: '1jewelry ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/yellowjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '2jewelry ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/silverjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '3jewelry ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '4jewelry ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purplejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '5jewelry ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/orangejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '6jewelry ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '7jewelry ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cyanjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '8jewelry ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'biscuit ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/biscuit?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '1spark ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldsparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '2spark ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinksparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '3spark ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluesparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '4spark ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greensparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '5spark ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redsparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'grad ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/gradientavatar?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '1lol ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lol?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '2lol ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lolcover2?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'stars ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/stars?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'fur ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/fur?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'gerbang ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/gerbang?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '3lol ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lolpentakill?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'aov ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/aov?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'dota2 ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/dota2avatar?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'vtext ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*})

    }));

    Asena.addCommand({pattern: 'ptext ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*})

    }));

    Asena.addCommand({pattern: 'colortext ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*})

    }));
    
    Asena.addCommand({pattern: '1917 ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*})

    }));



    Asena.addCommand({pattern: 'sandsum ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/sandsummerbeach?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'cloudsky ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cloudsky?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '3dluxury ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/3dluxury?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1sandwriting ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/summerysandwriting?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'darkgold ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/metaldarkgold?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'neongalaxy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/neongalaxy?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'minion3d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/minion3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'holo3d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/holographic3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'purpul ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/metalpurpledual?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'esilver ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/deluxesilver?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1glossy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/glossycarbon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1fabric ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/fabric?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'new1y ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/newyear3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'neon1s ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/neontext?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'helloween ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/helloweenfire?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'xmas3d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/xmas3d?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'joker ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/jokerlogo?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'wicker ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/wicker?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'skeleton ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/skeleton?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1foil ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2foil ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purplefoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '3foil ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '4foil ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '5foil ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cyanfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '6foil ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluefoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '7foil ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldfoilballon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'steel ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/steel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2glossy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/ultragloss?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'denim ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/denim?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1decora ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/decorategreen?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2decora ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/decoratepurple?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '3decora ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/peridotstone?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'rock ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/rock?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'lava ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/lava?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1glass ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/yellowglass?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'berry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/strawberry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2blood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/hororrblood?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '3blood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/horrorgift?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1gem ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluegem?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'bagel ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bagel?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'captain ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/captainamerica?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '3cake ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/chocolatecake?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'fish ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/koifish?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'rainbow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/rainbowequalizer?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'honny ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/honey?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1candi ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkcandy?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'bluemetal ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluemetal?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
   
    Asena.addCommand({pattern: 'fruit ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/fruitjuice?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2carbon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/carbon?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2metal ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/erodedmetal?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '1glitter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bronzeglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '2glitter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '3glitter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/silverglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '4glitter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '5glitter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinkglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '6glitter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/blueglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: '7glitter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purpleglitter?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    

    Asena.addCommand({pattern: '1jewelry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/yellowjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '2jewelry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/silverjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '3jewelry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '4jewelry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/purplejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '5jewelry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/orangejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '6jewelry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greenjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '7jewelry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/cyanjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '8jewelry ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluejewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'biscuit ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/biscuit?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '1spark ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/goldsparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '2spark ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/pinksparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '3spark ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/bluesparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '4spark ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/greensparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '5spark ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/redsparklingjewelry?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'grad ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/gradientavatar?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '1lol ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lol?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '2lol ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lolcover2?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'stars ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/stars?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'fur ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/fur?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'gerbang ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/gerbang?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: '3lol ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/lolpentakill?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'aov ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/aov?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));

    Asena.addCommand({pattern: 'dota2 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/photooxy/dota2avatar?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*'})

    }));
    
    Asena.addCommand({pattern: 'vtext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*})

    }));

    Asena.addCommand({pattern: 'ptext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*})

    }));

    Asena.addCommand({pattern: 'colortext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*})

    }));
    
    Asena.addCommand({pattern: '1917 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);

    var sewimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*looĸ тнιѕ, ι мade ιт ғor yoυ 😘*})

    }));


}
