const LASIapi = require('textmaker-lasi');
const XTroid = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var desc_msg = ''
if (Config.LANG == 'TR') desc_msg = 'Sınırsız erişime sahip textmaker araçlarını gösterir.'
if (Config.LANG == 'EN') desc_msg = 'Shows textmaker tools with unlimited access.'
if (Config.LANG == 'RU') desc_msg = 'Показывает инструменты для создания текстов с неограниченным доступом.'
if (Config.LANG == 'AZ') desc_msg = 'Sınırsız girişi olan textmaker alətləri göstərir.'
if (Config.LANG == 'PT') desc_msg = 'Mostra ferramentas textmaker com acesso ilimitado.'
if (Config.LANG == 'ID') desc_msg = 'Menampilkan alat pembuat teks dengan akses tak terbatas.'
if (Config.LANG == 'ML') desc_msg = 'പരിധിയില്ലാത്ത ആക്സസ് ഉള്ള ടെക്സ്റ്റ് മേക്കർ ഉപകരണങ്ങൾ കാണിക്കുന്നു.'
if (Config.LANG == 'HI') desc_msg = 'असीमित एक्सेस के साथ टेक्स्टमेकर टूल दिखाता है।'
if (Config.LANG == 'ES') desc_msg = 'Muestra herramientas de creación de textos con acceso ilimitado.'
let wk = Config.WORKTYPE == 'public' ? false : true





XTroid.addCMD({pattern: 'cup ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    LASIapi.photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/cup.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/cup.jpg'), MessageType.image, { caption: Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

XTroid.addCMD({pattern: 'cmt ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    LASIapi.photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/cmth.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/cmth.jpg'), MessageType.image, { caption: Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

XTroid.addCMD({pattern: 'cfl ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    LASIapi.photooxy("https://photooxy.com/art-effects/flower-typography-text-effect-164.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/cgs.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/cgs.jpg'), MessageType.image, { caption: Config.CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));


XTroid.addCMD({pattern: 'cmg ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/cmg.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/cmg.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));


XTroid.addCMD({pattern: 'cgl ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/cgl.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/cgl.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));



XTroid.addCMD({pattern: 'cstn ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/cstn.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/cstn.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));


XTroid.addCMD({pattern: 'crod ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/road-warning-text-effect-878.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/crod.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/crod.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));


XTroid.addCMD({pattern: 'cgem ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/blue-gem-text-effect-830.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/cgem.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/cgem.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
