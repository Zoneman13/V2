//CREATOR SC + BASE ORI : ZERO YT7
//KLO MAU RECODE GK USAH HPUP CREATOR ORI TOLOL
//SKILL MODAL NYOLONG YT AJA BANGGA
//HARGA CREATOR GBLOK
//GK USH NGAKU² BUATAN LO
//NAMBAH FITUR MASIH ERROR AJA SOK² AN NGAKU BIKINAN LO

//KLO MAU YG FULL NO ENC 100% BELI AJA

//FOLLOW SOSIAL MEDIA
//INSTAGRAM @Zero_YT7
//YOUTUBE Zero YT7
//TIKTOK @_zeroyt7
//GITHUB Zero-YT7

var {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
var { color, bgcolor } = require('../mess/color')
var speed = require('performance-now')
var ggs = require('google-it')
var googleImage = require('g-i-s')
var { EmojiAPI } = require("emoji-api")
var emoji = new EmojiAPI()
var { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../mess/myfunc')
var { fetchJson, kyun, fetchText } = require('../mess/fetcher')
var Exif = require('../mess/exif')
var exif = new Exif()
var request = require('request')
var translate = require('@vitalets/google-translate-api')
var fs = require('fs')
var hx = require("hxz-api")
var cheerio = require('cheerio')
var brainly = require('brainly-scraper')
var axios = require("axios")
var ffmpeg = require('fluent-ffmpeg')
var fetch = require('node-fetch')
var crypto = require('crypto')  
var yts = require('yt-search')
var Math_js = require('mathjs')
var { removeBackgroundFromImageFile } = require('remove.bg')
var moment = require('moment-timezone')
var { exec, spawn, execSync } = require('child_process')
fakeimg = fs.readFileSync('./img/zero.jpg')
fakethumb = fs.readFileSync('./img/thumbnail.jpg')
var { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance} = require("../mess/limit")
var { jadibot, stopjadibot, listjadibot } = require("../mess/jadibot")
var { upload, formatDate } = require('../mess/ytdl')
faketeks = '©Created By ZONEMAN A4'
blocked = []
hit_today = []
multi =false
nopref = false
allpref = true

//━━━━━━━━━━━━━━━[ STORAGE ]━━━━━━━━━━━━━━━━━//

var welcome = JSON.parse(fs.readFileSync('./storage/welcome.json'))
var setting = JSON.parse(fs.readFileSync('./setting.json'))
var antilink = JSON.parse(fs.readFileSync('./storage/antilink.json'))
var config = JSON.parse(fs.readFileSync('./srv/config.js'))
var antivirtex = JSON.parse(fs.readFileSync('./storage/antivirtex.json'))
var pendaftar = JSON.parse(fs.readFileSync('./storage/user.json'))
var prem = JSON.parse(fs.readFileSync('./storage/premium.json'))
var limit = JSON.parse(fs.readFileSync('./storage/limit.json'))
var balance = JSON.parse(fs.readFileSync('./storage/balance.json'))
var hit = JSON.parse(fs.readFileSync('./storage/totalcmd.json'))
var _scommand = JSON.parse(fs.readFileSync("./storage/scommand.json"))
var event = JSON.parse(fs.readFileSync('./storage/event.json'))
var _truth = JSON.parse(fs.readFileSync('./storage/truth.json'))
var tde = fs.readFileSync('./img/truth.jpg')
var _dare = JSON.parse(fs.readFileSync('./storage/dare.json'))
var audionye = JSON.parse(fs.readFileSync('./storage/audio.json'))
var videonye = JSON.parse(fs.readFileSync('./storage/video.json'))
var setiker = JSON.parse(fs.readFileSync('./storage/stik.json'))
var imagenye = JSON.parse(fs.readFileSync('./storage/image.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

NomorOwner = setting.NomorOwner
NameBot = setting.NameBot
NameOwner = setting.NameOwner
limitCount = setting.limitCount
gcounti = setting.gcounti

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

var apikey1 = config.Lolkey
var apikey2 = config.Xteam
var apikey3 = config.Vhtear
var apikey4 = config.Zeks
var apikey5 = config.Zero
var apikey6 = config.Nurutomo
var apikey7 = config.Hunter

//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━━━//

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
}
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

//━━━━━━━━━━━━━━━[ MODULE EXPORT ]━━━━━━━━━━━━━━━━━//
 
module.exports = zero = async (zero, zer) => {
try {
if (!zer.hasNewMessage) return
zer = zer.messages.all()[0]
if (!zer.message) return
if (zer.key && !zer.key.remoteJid == 'status@broadcast') return
global.blocked
zer.message = (Object.keys(zer.message)[0] === 'ephemeralMessage') ? zer.message.ephemeralMessage.message : zer.message
var typei = Object.keys(zer.message)[0]
global.prefix
var content = JSON.stringify(zer.message)
var from = zer.key.remoteJid
var type = Object.keys(zer.message)[0]
var { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var datre = new Date().toLocaleDateString()
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm :ss')

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var haris = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
var cmd = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
} else {
if (nopref){
prefix = ''
} else {
if (allpref){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
} else {
prefix = prefa
}
}
}
body = (type === 'conversation' && zer.message.conversation.startsWith(prefix)) ? zer.message.conversation : (type == 'imageMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'videoMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'extendedTextMessage') && zer.message[type].text.startsWith(prefix) ? zer.message[type].text : (type == 'listResponseMessage') && zer.message[type].singleSelectReply.selectedRowId ? zer.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && zer.message[type].selectedButtonId ? zer.message[type].selectedButtonId : ''
var budo = (typei === 'conversation') ? zer.message.conversation : (typei === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var budy = (type === 'conversation') ? zer.message.conversation : (type === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var isCmd = body.startsWith(prefix)
var arg = budy.slice(command.length + 2, budy.length)
var q = args.join(' ')
var timestampi = speed();
var totalchat = await zero.chats.all()
var latensyi = speed() - timestampi
hit_today.push(command);
var pes = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''
var messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
var botNumber = zero.user.jid
var Verived = "0@s.whatsapp.net"
var num = "6285157740529@s.whatsapp.net"
var ownerNumber = [`${NomorOwner}@s.whatsapp.net`,"6285157740529@s.whatsapp.net"]
var isGroup = from.endsWith('@g.us')
var sender = zer.key.fromMe ? zero.user.jid : isGroup ? zer.participant : zer.key.remoteJid
var senderNumber = sender.split("@")[0] 
var conts = zer.key.fromMe ? zero.user.jid : zero.contacts[sender] || { notify: jid.replace(/@.+/, '') }
var pushname = zer.key.fromMe ? zero.user.name : conts.notify || conts.vname || conts.name || '-'
var groupMetadata = isGroup ? await zero.groupMetadata(from) : ''
var groupName = isGroup ? groupMetadata.subject : ''
var groupId = isGroup ? groupMetadata.jid : ''
var groupMembers = isGroup ? groupMetadata.participants : ''
var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
var groupDesc = isGroup ? groupMetadata.desc : ''
var groupOwner = isGroup ? groupMetadata.owner : ''
var isOwner = ownerNumber.includes(sender)
var isUser = pendaftar.includes(sender)
var isPremium = prem.includes(sender) || isOwner
var isWelcome = isGroup ? welcome.includes(from) : false
var isGroupAdmins = groupAdmins.includes(sender) || false
var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
var isAntilink = isGroup ? antilink.includes(from) : false
var isEventon = isGroup ? event.includes(from) : false
var isAntivirtex = isGroup ? antivirtex.includes(from) : false
var isButton = (type == 'buttonsResponseMessage') ? zer.message.buttonsResponseMessage.selectedButtonId : ''
		
//━━━━━━━━━━━━━━━[ MESSAGE ]━━━━━━━━━━━━━━━━━//
		
mess = {
wait: 'Mohon Tunggu... Sedang Proses',
success: 'Done...Jangam Lupa Subscribe ZONEMAN A4',
wrongFormat: 'Format salah, Silahkan Cek Lagi Di List Menu',
error: {
stick: 'Sticker Salah Mohon Coba Lagi',
Iv: 'Link Error Silahkan Ganti Yg Lain'
},
only: {
group: 'Khusus Di Group',
bodmin: 'Jadikan Bot Admin Dulu',
prem: 'Khusus Member Premium...',
admin: 'Khusus Admin Group',
event: 'Event Belum Aktif Di Group ini!!'
}
}

//━━━━━━━━━━━━━━━[ CONNECTION ]━━━━━━━━━━━━━━━━━//
		
var sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
zero.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
zero.sendMessage(from, hasil, type, options).catch(e => {
zero.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}	
var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var reply = (teks) => {
zero.sendMessage(from, teks, text, {quoted:ftrol})
}
var sendMess = (hehe, teks) => {
zero.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? zero.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
var costum = (pesan, tipe, target, target2) => {
zero.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
        
zero.chatRead(from, "read")

var sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        
        var premi = 'No Premium User'
			if (isPremium) {
				premi = 'Premiun User'
			} 
			if (isOwner) {
				premi = 'This Is Owner'
			}
			
			const cmdadd = () => {
	    hit[0].totalcmd += 1
    	fs.writeFileSync('./storage/totalcmd.json', JSON.stringify(hit))
        }
        if (isCmd) cmdadd()
        const totalhit = JSON.parse(fs.readFileSync('./storage/totalcmd.json'))[0].totalcmd
        
        function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
		
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./storage/scommand.json", JSON.stringify(_scommand));
};

const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

var ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 169,
status: 1,
surface : 1,
message: `ZONEMAN`, 
orderTitle: `ZONEMAN`,
thumbnail: fakethumb,
sellerJid: '0@s.whatsapp.net' 
}
}
}

//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
zero.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
)
}
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

var sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
zero.sendMessage(to, media, MessageType.sticker,{quoted:ftrol})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
var sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
var fn = Date.now() / 10000;
var filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
zero.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}

//━━━━━━━━━━━━━━━[ MESSAGE GROUP ]━━━━━━━━━━━━━━━━━//

if (isGroup && isAntilink && !zer.key.fromMe) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply("admin bebas");
reply("ANTILINK DETECTED!! Maaf Kamu Dikick Dari Group");
zero.groupRemove(from, [sender]);
}
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntivirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 VIRTEX DETECTED!! 」\n\nKamu Mengirimkan Virus, Maaf Kamu Di Kick Dari Group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
zero.groupRemove(from, [sender])
}     

//━━━━━━━━━━━━━━━[ MEDIA ]━━━━━━━━━━━━━━━━━//
            
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//

switch (command) {                                                           
case 'infobot':
timestamp = speed();
latensi = speed() - timestamp
teks =
`┏━➤ *INFO BOT* 
*┃┃* Creator Bot : Zero YT7
*┃┃* Nama Owner : ${NameOwner}
*┃┃* Nama Bot : ${NameBot}
*┃┃* Prefix : Multi Prefix
*┃┃* Total Pengguna : ${pendaftar.length}
*┃┃* Runtime : ${runtime(process.uptime())}
*┃┃* Speed : ${latensi.toFixed(4)} second
*┃┃* Language : Javascript
*┃┗━━━━━━━*
*┃◗ Thanks To Allah S.W.T*
*┃◗ Thank To Ortu*
*┃◗ Thank To Zero YT7 (Creator)*
*┃◗ Thanks To All Subscriberku*
*┗━━━━━━━ •*`
                  but = [
{ buttonId: `script`, buttonText: { displayText: '📌 SCRIPT' }, type: 1 },
{ buttonId: `owner`, buttonText: { displayText: '👥 OWNER' }, type: 1 }
]
sendButLocation(from, teks, faketeks, fakeimg, but)
break
case 'menu': case 'help':
addBalance(sender, randomNomor(20), balance)
menu =` Hallo ${pushname} ${ucapanWaktu}

ぉ Status User : ${premi}
ぉ Limit User : ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
ぉ Uang User : $${(getBalance(sender, balance))}
ぉ Total Chat : ${totalchat.length} Chat
ぉ Total Pengguna : ${pendaftar.length} User
ぉ Hit Today : ${hit_today.length} Hit
ぉ Total Hit : ${totalhit} Hit`
but = [
{ buttonId: `allmenu`, buttonText: { displayText: 'ALLMENU' }, type: 1 },
{ buttonId: `owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
]
sendButLocation(from, menu, faketeks, fakeimg, but)
break
case 'allmenu':
allmenu =`
┏━➤ *INFO USER*
┃ぉ Status User : ${premi}
┃ぉ Limit User : ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
┃ぉ Uang User : $${(getBalance(sender, balance))}
┃ぉ Total Chat : ${totalchat.length} Chat
┃ぉ Total Pengguna : ${pendaftar.length} User
┃ぉ Hit Today : ${hit_today.length} Hit
┃ぉ Total Hit : ${totalhit} Hit
┗━㋱
「 Owner Menu 」
㋱ ${prefix}ping
㋱ ${prefix}runtime
㋱ ${prefix}bc
㋱ ${prefix}report
㋱ ${prefix}runtime
㋱ ${prefix}listpremium
㋱ ${prefix}addpremium
㋱ ${prefix}delpremium
㋱ ${prefix}listcmd
㋱ ${prefix}addcmd
㋱ ${prefix}delcmd

「 Tools Menu 」
㋱ ${prefix}jadibot
㋱ ${prefix}stopjadibot
㋱ ${prefix}listbot
㋱ ${prefix}buylimit

「 Sange Menu 」
㋱ ${prefix}ahegao
㋱ ${prefix}ass
㋱ ${prefix}bdsm
㋱ ${prefix}cuckold
㋱ ${prefix}cum
㋱ ${prefix}ero
㋱ ${prefix}femdom
㋱ ${prefix}foot
㋱ ${prefix}hentai
㋱ ${prefix}jahy
㋱ ${prefix}manga
㋱ ${prefix}nsfwneko
㋱ ${prefix}orgy
㋱ ${prefix}panties
㋱ ${prefix}sfwneko
㋱ ${prefix}xnxxsearch
㋱ ${prefix}xnxxdl

「 Search Menu 」
㋱ ${prefix}liriklagu
㋱ ${prefix}wiki
㋱ ${prefix}pinterest
㋱ ${prefix}linkwa
㋱ ${prefix}playstore
㋱ ${prefix}ssweb
㋱ ${prefix}gimage

「 Download Menu 」
㋱ ${prefix}ytmp4
㋱ ${prefix}ytmp3
㋱ ${prefix}play
㋱ ${prefix}tiktoknowm
㋱ ${prefix}tiktokwm
㋱ ${prefix}mediafire
㋱ ${prefix}igfoto
㋱ ${prefix}igvideo

「 Media Menu 」
㋱ ${prefix}sticker
㋱ ${prefix}toimage
㋱ ${prefix}tourl
㋱ ${prefix}attp
㋱ ${prefix}tomp3
㋱ ${prefix}stickerwm
㋱ ${prefix}dadu
㋱ ${prefix}semoji
㋱ ${prefix}tomp4
㋱ ${prefix}robot
㋱ ${prefix}balik
㋱ ${prefix}bass
㋱ ${prefix}gemuk
㋱ ${prefix}detikvn
㋱ ${prefix}detikvideo

「 Upsw Menu 」
㋱ ${prefix}upswgift
㋱ ${prefix}upswteks
㋱ ${prefix}upswvideo
㋱ ${prefix}upswaudio
㋱ ${prefix}upswvoice
㋱ ${prefix}upswlokasi
㋱ ${prefix}upswimage
㋱ ${prefix}upswsticker

「 Fun Menu 」
㋱ ${prefix}slot
㋱ ${prefix}truth
㋱ ${prefix}dare
㋱ ${prefix}jadian
㋱ ${prefix}ngewe
㋱ ${prefix}tergay
㋱ ${prefix}terpodo
㋱ ${prefix}terjelek
㋱ ${prefix}terwibu
㋱ ${prefix}tercantik
㋱ ${prefix}terganteng
㋱ ${prefix}darkjokes

「 Group Menu 」
㋱ ${prefix}antilink
㋱ ${prefix}antivirtex
㋱ ${prefix}welcome
㋱ ${prefix}group
㋱ ${prefix}linkgroup
㋱ ${prefix}hidetag
㋱ ${prefix}tagall
㋱ ${prefix}setdesc
㋱ ${prefix}setname
㋱ ${prefix}setpp
㋱ ${prefix}kick
㋱ ${prefix}add
㋱ ${prefix}demote
㋱ ${prefix}promote
㋱ ${prefix}event

「 Storage Menu 」
㋱ ${prefix}listvn
㋱ ${prefix}listvideo
㋱ ${prefix}liststicker
㋱ ${prefix}listimg
㋱ ${prefix}addvn
㋱ ${prefix}addvideo
㋱ ${prefix}addsticker
㋱ ${prefix}addimage
㋱ ${prefix}getvn
㋱ ${prefix}getvideo
㋱ ${prefix}getsticker
㋱ ${prefix}getimage

「 Image Maker Menu 」
㋱ ${prefix}ttp
㋱ ${prefix}blackpink
㋱ ${prefix}neon
㋱ ${prefix}matrix
㋱ ${prefix}joker
㋱ ${prefix}devil
㋱ ${prefix}transformer
㋱ ${prefix}thunder
㋱ ${prefix}harry
㋱ ${prefix}gradient`
but = [
{ buttonId: `owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
]
sendButLocation(from, allmenu, faketeks, fakeimg, but)
break
case 'welcome': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] === 'on') {
if (isWelcome) return reply('𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!')
welcome.push(from)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞')
} else if (args[0] === 'off') {
if (!isWelcome) return reply('𝐒𝐮𝐝𝐚𝐡 𝐌𝐚𝐭𝐢 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!')
var ini = welcome.indexOf(from)
welcome.splice(ini, 1)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞')
} else if (!q){
anu =`SILAHKAN PILIH SALAH SATU`
punten = [{buttonId: 'welcome on', buttonText: {displayText: '📌 ON'}, type: 1},{buttonId: 'welcome off', buttonText: {displayText: '📌 OFF️'}, type: 1}]
var btngrass = {
contentText: `${anu}`,
footerText: 'Created By ZONEMAN',
buttons: punten,
headerType: 1
}
await zero.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntilink) return reply("𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!");
antilink.push(from);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤");
} else if (args[0] == "off") {
antilink.splice(from, 1);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤");
} else if (!q) {
sendButMessage(from, `MODE ANTILINK`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antilink on`,
buttonText: {
displayText: `📌 ON`,
},
type: 1,
},
{
buttonId: `antilink off`,
buttonText: {
displayText: `📌 OFF`,
},
type: 1,
},
]);
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntivirtex) return reply("𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!");
antivirtex.push(from);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱");
} else if (args[0] == "off") {
antivirtex.splice(from, 1);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("𝐒𝐮𝐤??𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱");
} else if (!q) {
sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antivirtex on`,
buttonText: {
displayText: `📌 ON`,
},
type: 1,
},
{
buttonId: `antivirtex off`,
buttonText: {
displayText: `📌 OFF`,
},
type: 1,
},
]);
}
break
case 'group':
case 'grup':
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
but = [
{ buttonId: 'groupbuka', buttonText: { displayText: '☕ BUKA' }, type: 1 },
{ buttonId: 'grouptutup', buttonText: { displayText: '✉️ TUTUP' }, type: 1 }
]
sendButMessage(from, "Silahkan Pilih Untuk Buka/Tutup Group", faketeks, but, zer)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐛𝐮𝐤𝐚 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
zero.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐮𝐭𝐮𝐩 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
zero.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
linkgc = await zero.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\n𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩 *${groupName}*`
zero.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zero.groupMakeAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, @${mentioned[0].split('@')[0]} 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐃𝐢 𝐆𝐫𝐨𝐮𝐩 *${groupMetadata.subject}*`, mentioned, true)
zero.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐓𝐢𝐝𝐚𝐤 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐋𝐚𝐠𝐢 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zero.groupDemoteAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐌𝐞𝐧𝐮𝐫𝐮𝐧𝐤𝐚𝐧 : @${mentioned[0].split('@')[0]} 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐌𝐞𝐦𝐛𝐞𝐫`, mentioned, true)
zero.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args.length < 1) return reply('Nomer Yg Mau Di Add Mana ?')
if (args[0].startsWith('08')) return reply('Gunakan Kode Negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
zero.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('𝐆𝐚𝐠𝐚𝐥 𝐌𝐞𝐧𝐚𝐦𝐛𝐚𝐡𝐤𝐚𝐧 𝐓𝐚𝐫𝐠𝐞𝐭, 𝐌𝐮𝐧𝐠𝐤𝐢𝐧 𝐊𝐚𝐫𝐞𝐧𝐚 𝐃𝐢 𝐏𝐫𝐢𝐯𝐚𝐭𝐞!')
}
break
case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if(!q)return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
zero.groupRemove(from, [y])
reply(`𝐒𝐮𝐜𝐜𝐬𝐞𝐬 𝐊𝐢𝐜𝐤 𝐓𝐚𝐫𝐠𝐞𝐭!`)
break
case 'tagall':
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
let arr = [];
let txti = `[ 𝗧𝗔𝗚 𝗔𝗟𝗟 ]\n${q ? q : ''}\n\n`
for (let i of groupMembers){
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
zero.groupUpdateSubject(from, `${body.slice(9)}`)
zero.sendMessage(from, `\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐍𝐚𝐦𝐚 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐣𝐚𝐝𝐢\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
zero.groupUpdateDescription(from, `${body.slice(9)}`)
zero.sendMessage(from, `\`\`\𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐃𝐞𝐬𝐤𝐫𝐢𝐩𝐬𝐢 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ht = body.slice(9)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
mentions(ht, members_id, false)
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await zero.downloadAndSaveMediaMessage(zer, './storage/media_user')
await zero.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐏𝐫𝐨𝐟𝐢𝐥 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
break

case 'bc':
case 'bcbut':
if (!isOwner && !x.key.fromMe) return reply(`Hanya Untuk @${ownerNumbers.split("@")[0]}`)
if (args.length < 1) return reply('Teksnya?')
anu = await zero.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `menu`, buttonText: {displayText: '✉️ MENU'}, type: 1},{buttonId: `sewabot`, buttonText: {displayText: '📌 SEWA BOT'}, type: 1}]
var btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await zero.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses Mengirim Broadcast:\n${q}`)
break

case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐙𝐞𝐫𝐨 𝐘𝐓𝟕`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && zer.message.videoMessage.seconds < 11 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, Pada Saat Mengkonversi ${tipe} Ke Stiker. Pastikan Untuk Video Yang Dikirim Tidak Lebih Dari 9 Detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi Kesalahan, Silahkan Coba Beberapa Saat Lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
zero.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim Gambar Dengan Caption ${prefix}sticker Atau Tag Gambar Yang Sudah Dikirim`)
}
break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
zero.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'toimg':
if (!isQuotedSticker) return reply('Reply Stickernya')
encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, Pada Saat Mengkonversi Sticker Ke Gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subscribe Zero YT7`)
fs.unlinkSync(ran)
})
break
case 'stickerwm':
case 'swm':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh: ${prefix + command} Zero | Gantenk`)
if (isMedia && !zer.message.videoMessage || isQuotedImage) {
ppp = `${args.join(' ')}`
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
const packname1 = ppp.split('|')[0]
const author1 = ppp.split('|')[1]
exif.create(packname1, author1, `stickwm_${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: zer})
fs.unlinkSync(media)	
fs.unlinkSync(`./sticker/${sender}.webp`)	
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isMedia && zer.message.videoMessage.fileLength < 10000000 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
wmsti = body.slice(11)
if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
const packname1 = wmsti.split('|')[0]
const author1 = wmsti.split('|')[1]
exif.create(packname1, author1, `stickwm_${sender}`)
reply(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftrol})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else {
reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
}
break

case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = zero.contacts[i] != undefined ? zero.contacts[i].vname || zero.contacts[i].notify : undefined
inilist.push({
"displayName": 'ZeroYT7',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${NameOwner}\n`
+ `ORG: Creator ${NameOwner} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${NomorOwner}:${NomorOwner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await zero.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
{buttonId: 'youtube', buttonText: {displayText: '📌 YOUTUBE'}, type: 1},
{buttonId: 'instagram', buttonText: {displayText: '📌 INSTAGRAM'}, type: 1},
{buttonId: 'tiktok', buttonText: {displayText: '📌 TIKTOK'}, type: 1}
]
 buttons = {
contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
footerText: faketeks,
buttons: button,
headerType: 1
}
await zero.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break      
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = zer.participant
let teks1 = `[𝗥??𝗣𝗢𝗥𝗧]\n𝐏𝐞𝐬𝐚𝐧 : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
zero.sendMessage(`6285719692541@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtube':
teks =
`G`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'instagram':
teks =
`A`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tiktok':
teks =
`K`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break
case 'speed':
case 'ping':
reply(`Speed: ${latensyi.toFixed(4)} Second`)
break
case 'listprem': case 'listpremium':
    case 'premlist':
          if (!isPremium && !isOwner) return reply(mess.only.prem)
		  teks = '*List Premium:*\n\n'
		  for (let manikgans of prem) {
		  teks += `- ${manikgans}\n`
		  }
	      teks += `\n*Total : ${prem.length}*`
		  zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": prem } })
		  break
		case 'addprem':  case 'addpremium':
		  if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)    
		  adprem = `${args[0].replace('@','')}@s.whatsapp.net`
		  prem.push(adprem)
		  fs.writeFileSync('./storage/premium.json', JSON.stringify(prem))
	 	  reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
		  break
		case 'dellprem':  case 'delpremium':
		  if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)    
		  delp = body.slice(10)
		  prem.splice(`${delp}@s.whatsapp.net`, 1)
		  fs.writeFileSync('./storage/premium.json', JSON.stringify(prem))
		  reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
		  break
		case "listcmd":
          teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
          cemde = [];
          for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
          }
          mentions(teksnyee, cemde, true);
          break
          case "addcmd":
    case "setcmd":
          if (isQuotedSticker) {
          if (!q)
          return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya = zer.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
          addCmd(kodenya, q);
          reply("Done!");
          } else {
          reply("tag stickenya");
          }
          break;
          case "delcmd":
          if (!isQuotedSticker)
          return reply(`Penggunaan : ${command} tagsticker`);
          var kodenya = zer.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
          _scommand.splice(getCommandPosition(kodenya), 1);
          fs.writeFileSync("./storage/scommand.json", JSON.stringify(_scommand));
          reply("Done!");
          break;
          case "jadibot":
          if (!isPremium) return reply(mess.only.prem)
          if (!isOwner && !zer.key.fromMe) return
          if (zer.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
          jadibot(reply, zero, from);
          break;
          case "stopjadibot":
          if (zer.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
          stopjadibot(reply);
          break;
          case "listbot":
          let tekss = "「 *LIST JADIBOT* 」\n";
          for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}\n*Nama* : ${i.name}\n*Device* : ${i.phone.device_manufacturer}\n*Model* : ${i.phone.device_model}\n\n`;
          }
          reply(tekss);
          break;
          case 'buylimit':{
          if (args.length < 1) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)      
          payout = body.slice(10)
          let ane = 150 * payout
          if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
          kurangBalance(sender, ane, balance)
          giveLimit(sender, parseInt(args[0]), limit)
          reply(monospace(`Pembeliaan limit sebanyak ${args[0]} berhasil\n\nSisa Balance :  $${(getBalance(sender, balance))}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
          }
          break
          case 'ahegao': case 'ass': case 'bdsm': case 'cuckold': case 'cum': case 'ero': case 'femdom': case 'foot': case 'hentai': case 'jahy': case 'manga': case 'nsfwneko': case 'orgy': case 'panties': case 'sfwneko': 
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          sange = await fetchJson(`https://zeroyt7-api.xyz/${command}?apikey=${apikey5}`)
          result = await getBuffer(sange.result)
          gbutsan = [{buttonId:`${command}`,buttonText:{displayText:'LANJUT➡️'},type:1}]
mhan = await zero.prepareMessage(from, result, image, {thumbnail: result})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: `ZONEMAN BOTZ`,
footerText: '©ZONEMAN 2022',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
limitAdd(sender, limit)
break
case 'xnxxsearch':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          sange = await fetchJson(`https://zeroyt7-api.xyz/xnxxsearch?query=${q}&apikey=${apikey5}`)
          result = sange.result.result
         for (let i of result) {
         	hasil =`Title : ${i.title}
         Info : ${i.info}
         Link : ${i.link}`
         }
         reply(hasil)
         limitAdd(sender, limit)
         break
         case 'xnxxdl':
         if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
         if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://www.xnxx.com/video-x4urla9/jav_sexy_college_girl_smashed_by_horny_man`)
          sange = await fetchJson(`https://zeroyt7-api.xyz/xnxxdl?url=${q}&apikey=${apikey5}`)
          result = sange.result.result
          hasil =`Title : ${result.title}
          Duration : ${result.duration}
          Video Type : ${result.videoType}
          Video Width : ${result.videoWidth}
          Video Height : ${result.videoHeight}
          Info : ${result.info}`
          gambar = await getBuffer(result.image)
          buttons = [{buttonId:`low ${q}`,buttonText:{displayText:'LOW'},type:1},{buttonId:`high ${q}`,buttonText:{displayText:'HIGH'},type:1}]
imageMessage = (await zero.prepareMessageMedia({url:result.image},'imageMessage')).imageMessage
buttonsMessage = {contentText: hasil,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}
prot = await zero.prepareMessageFromContent(from,{buttonsMessage},{})
zero.relayWAMessage(prot)
          limitAdd(sender, limit)
          break
          case 'low':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://www.xnxx.com/video-x4urla9/jav_sexy_college_girl_smashed_by_horny_man`)
          sange = await fetchJson(`https://zeroyt7-api.xyz/xnxxdl?url=${q}&apikey=${apikey5}`)
          result = sange.result.result
          videonya = await getBuffer(result.files.low)
          zero.sendMessage(from, videonya, video, {caption: 'Please Subscribe Zero YT7', quoted: ftrol})
          limitAdd(sender, limit)
          break
          case 'high':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://www.xnxx.com/video-x4urla9/jav_sexy_college_girl_smashed_by_horny_man`)
          sange = await fetchJson(`https://zeroyt7-api.xyz/xnxxdl?url=${q}&apikey=${apikey5}`)
          result = sange.result.result
          videonya = await getBuffer(result.files.high)
          zero.sendMessage(from, videonya, video, {caption: 'Please Subscribe Zero YT7', quoted: ftrol})
          limitAdd(sender, limit)
          break
          case 'liriklagu':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Judul Lagu Nya Mana ?\nContoh : ${prefix + command} aku bukan jodohnya`)
          musik = await fetchJson(`https://zeroyt7-api.xyz/liriklagu?query=${q}&apikey=${apikey5}`)
          result = musik.result
          for (let i of result) {
          hasil =`Lirik : ${i.result}`
          }
          reply(hasil)
          limitAdd(sender, limit)
          break
          case 'wiki':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Judul Nya Mana ?\nContoh : ${prefix + command} jokowi`)
          wiki = await fetchJson(`https://zeroyt7-api.xyz/wikisearch?query=${q}&apikey=${apikey5}`)
          result = wiki.result
          for (let i of result) {
          	hasil =`Wiki : ${i.wiki}
          Judul : ${i.judul}`
          gambar = await getBuffer(i.thumb)
          }
          zero.sendMessage(from, gambar, image, {caption: hasil, quoted: ftrol})
          limitAdd(sender, limit)
          break
          case 'pinterest':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Judul Nya Mana ?\nContoh : ${prefix + command} sandrinna michelle`)
          pin = await fetchJson(`https://zeroyt7-api.xyz/pinterest?query=${q}&apikey=${apikey5}`)
          result = pin.result
          hasil =`Author : ${result.author}`
          gambar = await getBuffer(result.url)
          zero.sendMessage(from, gambar, image, {caption: hasil, quoted: ftrol})
          limitAdd(sender, limit)
          break
          case 'linkwa':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Judul Nya Mana ?\nContoh : ${prefix + command} mobile legend`)
          wa = await fetchJson(`https://zeroyt7-api.xyz/linkwa?nama=${q}&apikey=${apikey5}`)
          result = wa.result
          for (let i of result) {
          	hasil =`Nama : ${i.nama}
          Link : ${i.link}`
          }
          reply(hasil)
          limitAdd(sender, limit)
          break
          case 'playstore':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Judul Nya Mana ?\nContoh : ${prefix + command} tiktok`)
          play = await fetchJson(`https://zeroyt7-api.xyz/playstore?name=${q}&apikey=${apikey5}`)
          result = play.result
          for (let i of result) {
          	hasil =`Nama : ${i.name}
          Link : ${i.link}
          Developer : ${i.developer}
          Link Developer : ${i.link_dev}`
          }
          reply(hasil)
          limitAdd(sender, limit)
          break
          case 'ssweb': case 'ss':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply('Urlnya mana kak..')
     	  anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${q}`)
	      buff = await getBuffer(anu.screenshot)
	      zero.sendMessage(from, buff, image, {quoted: ftrol, caption : q})
	      limitAdd(sender, limit)
          break
          case 'gimage':
    case 'googleimage':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply('Apa Yang Mau Dicari?')
          reply(mess.wait)
          teks = args.join(' ')
          res = await googleImage(teks, google)
          function google(error, result){
          if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
          else {
          var gugImg = result
          var akhir =  gugImg[Math.floor(Math.random() * gugImg.length)].url
          sendFileFromUrl(akhir, image, {quoted: ftrol, caption: `*Hasil Pencarian Dari :* ${teks}`})
          limitAdd(sender, limit)
          }
          }
          break 
          case 'ytmp4':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://youtu.be/VZUCpIJsgmg`)
          yt = await fetchJson(`https://zeroyt7-api.xyz/ytMp4?url=${q}&apikey=${apikey5}`)
          result = yt.result
          hasil =`Title : ${result.title}
          Quality : ${result.quality}
          Size : ${result.size}
          Views : ${result.views}
          Likes : ${result.likes}
          Dislike : ${result.dislike}
          Channel : ${result.channel}
          Upload Date : ${result.uploadDate}
          Desc : ${result.desc}`
          gambar = await getBuffer(result.thumb)
          zero.sendMessage(from, gambar, image, {caption: hasil, quoted: ftrol})
          videonya = await getBuffer(result.result)
          zero.sendMessage(from, videonya, video, {mimetype: 'video/mp4', caption: 'Please Subscribe Zero YT7', quoted: ftrol})
          limitAdd(sender, limit)
          break
          case 'ytmp3':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://youtu.be/VZUCpIJsgmg`)
          yt = await fetchJson(`https://zeroyt7-api.xyz/ytMp3?url=${q}&apikey=${apikey5}`)
          result = yt.result
          hasil =`Title : ${result.title}
          Size : ${result.size}
          Views : ${result.views}
          Likes : ${result.likes}
          Dislike : ${result.dislike}
          Channel : ${result.channel}
          Upload Date : ${result.uploadDate}
          Desc : ${result.desc}`
          gambar = await getBuffer(result.thumb)
          zero.sendMessage(from, gambar, image, {caption: hasil, quoted: ftrol})
          musik = await getBuffer(result.result)
          zero.sendMessage(from, musik, audio, {mimetype: 'audio/mp4', quoted: ftrol})
          limitAdd(sender, limit)
          break
          case 'play':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Judul Nya Mana ?\nContoh : ${prefix + command} aku bukan jodohnya`)
          yt = await fetchJson(`https://zeroyt7-api.xyz/ytPlay?query=${q}&apikey=${apikey5}`)
          result = yt.result
          hasil =`Title : ${result.title}
          Size : ${result.size}
          Views : ${result.views}
          Likes : ${result.likes}
          Dislike : ${result.dislike}
          Channel : ${result.channel}
          Upload Date : ${result.uploadDate}
          Desc : ${result.desc}`
          gambar = await getBuffer(result.thumb)
          zero.sendMessage(from, gambar, image, {caption: hasil, quoted: ftrol})
          musik = await getBuffer(result.result)
          zero.sendMessage(from, musik, audio, {mimetype: 'audio/mp4', quoted: ftrol})
          limitAdd(sender, limit)
          break
          case 'tiktoknowm': 
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://vt.tiktok.com/ZSe7KH7DJ/`)
          tiktok = await fetchJson(`https://zeroyt7-api.xyz/tiktokvideo?url=${q}&apikey=${apikey5}`)
          result = tiktok.result.result
          videonya = await getBuffer(result.nowm)
          zero.sendMessage(from, videonya, video, {mimetype: 'video/mp4', caption: 'Please Subscribe Zero YT7', quoted: ftrol})
          limitAdd(sender, limit)
          break
          case 'tiktokwm': 
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://vt.tiktok.com/ZSe7KH7DJ/`)
          tiktok = await fetchJson(`https://zeroyt7-api.xyz/tiktokvideo?url=${q}&apikey=${apikey5}`)
          result = tiktok.result.result
          videonya = await getBuffer(result.wm)
          zero.sendMessage(from, videonya, video, {mimetype: 'video/mp4', caption: 'Please Subscribe Zero YT7', quoted: ftrol})
          limitAdd(sender, limit)
          break
          case 'mediafire':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://www.mediafire.com/file/6z0mrx9lug37ynf/Z11.zip/file`)
          media = await fetchJson(`https://zeroyt7-api.xyz/mediafireD?url=${q}&apikey=${apikey5}`)
          result = media.result
          hasil =`Nama : ${result.nama}
          Mime : ${result.mime}
          Size : ${result.size}`
          file = await getBuffer(result.link)
          zero.sendMessage(from, file, document, {mimetype: result.mime, filename: result.nama, quoted:ftrol })
          limitAdd(sender, limit)
          break
          case 'igfoto':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://www.instagram.com/p/CXi1V1Hhiau`)
          ig = await fetchJson(`https://zeroyt7-api.xyz/igfoto?link=${q}&apikey=${apikey5}`)
          result = ig.result
          gambar = await getBuffer(result.link)
          zero.sendMessage(from, gambar, image, {caption: 'Please Subscribe Zero YT7', quoted: ftrol})
          limitAdd(sender, limit)
          break
          case 'igvideo':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://www.instagram.com/reel/CXlChjJA2sv`)
          ig = await fetchJson(`https://zeroyt7-api.xyz/igtv?link=${q}&apikey=${apikey5}`)
          result = ig.result
          videonya = await getBuffer(result.link)
          zero.sendMessage(from, videonya, video, {mimetype: 'video/mp4', caption: 'Please Subscribe Zero YT7', quoted: ftrol})
          limitAdd(sender, limit)
          break
          case 'tourl':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (
          ((isMedia && !zer.message.videoMessage) ||
          isQuotedImage ||
          isQuotedVideo) &&
          args.length == 0
          ) {
          boij =
          isQuotedImage || isQuotedVideo
          ? JSON.parse(JSON.stringify(zer).replace("quotedM", "m")).message
          .extendedTextMessage.contextInfo
          : zer;
          owgi = await zero.downloadMediaMessage(boij);
          res = await upload(owgi);
          tek = `Type : Image\nExpired : Permanent\nServer : Telegram ph\nResult : ${res}`
          zero.sendMessage(from, tek, text, {quoted: ftrol});
          limitAdd(sender, limit)
          } else {
          reply("kirim/reply gambar/video");
          }
          break;
          case 'upswteks':
          if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
          if (args.length < 1) return reply('Teksnya?')
          teks = body.slice(10)
          zero.sendMessage('status@broadcast', teks, MessageType.text)
          reply(`Sukses upload status:\n${teks}`)
          break	
          case 'upswlokasi':
          if (!isOwner && !zer.key.fromMe) return reply(mess.only.ownerB)
          if (args.length < 1) return reply('Teksnya?')
          teks = body.slice(12)
          zero.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${fakeyoi}`}, MessageType.location)
          reply(`Sukses upload lokasi:\n${teks}`)
          break	
          case 'upswsticker':
          if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
          if (!isQuotedSticker) return reply('Reply stikernya!')
          if (isMedia && !zer.message.videoMessage || isQuotedSticker) {
	      const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
	      buff = await zero.downloadMediaMessage(encmedia)
	 	  zero.sendMessage('status@broadcast', buff, sticker)
	      }
		  reply(`Sukses upload sticker`)
          break
          case 'upswaudio':
          if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
          if (!isQuotedAudio) return reply('Reply audionya!')
          if (isMedia && !zer.message.videoMessage || isQuotedAudio) {
	      const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
	      buff = await zero.downloadMediaMessage(encmedia)
	      zero.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
		  }
		  reply(`Sukses upload audio`)
		  break
		case 'upswvoice':
          if (!isOwner && !zer.key.fromMe) return reply(mess.only.ownerBl)
          if (!isQuotedAudio) return reply('Reply audionya!')
          if (isMedia && !zer.message.videoMessage || isQuotedAudio) {
		  const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
          buff = await zero.downloadMediaMessage(encmedia)
		  zero.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
	 	  }
		  reply(`Sukses upload voice`)
		  break
		case 'upswvideo':
          if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
          var konti = body.slice(11)
          reply(mess.wait)
          var enmediap = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      var mediap = await zero.downloadAndSaveMediaMessage(enmediap)
          const buffer3 = fs.readFileSync(mediap)
          zero.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
          reply(`Sukses upload video:\n${konti}`)
          break
          case 'upswgif':
          if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
          var konti = body.slice(7)
          reply(mess.wait)
          enmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await zero.downloadAndSaveMediaMessage(enmedia)
          const buffer6 = fs.readFileSync(media)
          zero.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
          reply(`Sukses upload gif:\n${konti}`)
          break
          case 'upswimage':
          if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
          var teksyy = body.slice(11)
          reply(mess.wait)
          enmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await zero.downloadAndSaveMediaMessage(enmedia)
          buffer = fs.readFileSync(media)
          zero.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: ftrol, caption: `${teksyy}`})
          reply(`Sukses upload image:\n${teksyy}`)
          break
          case 'slot':
    case 'slots':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)           
          if (!isGroup) return reply(mess.only.group)        
          if (!isEventon) return reply(mess.only.event)
          const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
          slom = `[  🎰 | SLOTS GAME ]\n━━━━━━━━━━━━━\n🍋 : 🍌 : 🍍\n${somtoy} <== ||\n🍋 : 🍌 : 🍍\n━━━━━━━━━━━━━\n[  🎰 | SLOTS GAME ]\n\nInfo : Dapatkan 3 buah untuk win\n\nContoh : 🍌 : 🍌 : 🍌<== 👑`
          but = [{ buttonId: `slot`, buttonText: { displayText: 'Play Again' }, type: 1 },
          { buttonId: `menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
          sendButMessage(from, slom, 'Slot Game', but)
          limitAdd(sender, limit)
          break
          case 'truth':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          const truth = _truth[Math.floor(Math.random() * _truth.length)]
          but = [
          { buttonId: `dare`, buttonText: { displayText: 'dare' }, type: 1 }, { buttonId: `truth`, buttonText: { displayText: 'truth' }, type: 1 }]
          sendButLocation(from, truth, `Gak Jalanin Donasi`, tde, but)  
          limitAdd(sender, limit)
          break
          case 'dare':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          const dare = _dare[Math.floor(Math.random() * _dare.length)]
          but = [
          { buttonId: `dare`, buttonText: { displayText: 'dare' }, type: 1 }, { buttonId: `truth`, buttonText: { displayText: 'truth' }, type: 1 }]
          sendButLocation(from, dare, `Gak Jalanin Donasi`, tde, but)  
          limitAdd(sender, limit)
          break
          case "jadian":
          if (!isGroup) return reply(mess.only.group)          
		  jds = []
	  	  const jdii = groupMembers
		  const koss = groupMembers
		  const akuu = jdii[Math.floor(Math.random() * jdii.length)]
		  const diaa = koss[Math.floor(Math.random() * koss.length)]
	      teks = `Ciee..yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
		  jds.push(akuu.jid)
		  jds.push(diaa.jid)
	      mentions(teks, jds, true)
		  break	
		case "ngewe":
          if (!isGroup) return reply(mess.only.group)          
		  jds = []
		  const jdiid = groupMembers
	      const kosst = groupMembers
	      const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
		  const diaat = kosst[Math.floor(Math.random() * kosst.length)]
		  teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]} `
		  jds.push(akuut.jid)
		  jds.push(diaat.jid)		  		  
		  mentions(teks, jds, true)
	   	  break
	case "terganteng":
    case "terjelek":
    case "tercantik":
    case "tergay":
    case "terpedo":
    case "terwibu":
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)      
          if (!isGroup) return reply(mess.only.group)          
		  jds = []
		  const jdiidc = groupMembers
		  const kosstc = groupMembers
		  const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
		  teks = `Yang ${command} di grub ini adalah @${akuutc.jid.split('@')[0]}`
		  jds.push(akuutc.jid)
		  limitAdd(sender, limit)
		  mentions(teks, jds, true)
	      break	
	case 'darkjokes':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)      
          if (!isGroup) return reply(mess.only.group)          
          let data = fs.readFileSync('./mess/darkjokes.js');
	      jsonData = JSON.parse(data);
	      randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
	      hasl = await getBuffer(randKey.result)  
          but = [
          { buttonId: `darkjokes`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButLocation(from, `AhhhGelapKekMasaDepanlu`, `Klik Next Ngab`, hasl, but)   
          limitAdd(sender, limit)       
          break
          case 'listvn':
	case 'vnlist': 
       	  teks = '*List Vn:*\n\n'
		  for (let awokwkwk of audionye) {
		  teks += `- ${awokwkwk}\n`
	  	  }
		  teks += `\n*Total : ${audionye.length}*`
		  zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": audionye } })
		  break
		case 'listvideo':
	case 'videolist':
		  teks = '*List Video :*\n\n'
		  for (let awokwkwk of videonye) {
	      teks += `- ${awokwkwk}\n`
		  }
		  teks += `\n*Total : ${videonye.length}*`
		  zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": videonye } })
		  break
		case 'liststicker': 
		  teks = '*Sticker List :*\n\n'
		  for (let awokwkwk of setiker) {
	  	  teks += `- ${awokwkwk}\n`
		  }
		  teks += `\n*Total : ${setiker.length}*`
		  zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": setiker } })
	      break
	case 'imglist':
	case 'listimg':
		  teks = '*List Image :*\n\n'
		  for (let awokwkwk of imagenye) {
		  teks += `- ${awokwkwk}\n`
		  }
		  teks += `\n*Total : ${imagenye.length}*`
		  zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": imagenye } })
	 	  break 
	case 'addvn': 
	      svst = body.slice(7)
		  if (!svst) return reply('Nama audionya apa su?')
	  	  boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		  delb = await zero.downloadMediaMessage(boij)
	  	  audionye.push(`${svst}`)
		  fs.writeFileSync(`./media/${svst}.mp3`, delb)
		  fs.writeFileSync('./storage/audio.json', JSON.stringify(audionye))
		  zero.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: ftrol })
		  break	
		 case 'addvideo':
		  if (!isQuotedVideo) return reply('Reply videonya blokk!')
		  svst = body.slice(10)
		  if (!svst) return reply('Nama videonya apa su?')
		  boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		  delb = await zero.downloadMediaMessage(boij)
		  videonye.push(`${svst}`)
		  fs.writeFileSync(`./media/${svst}.mp4`, delb)
		  fs.writeFileSync('./storage/video.json', JSON.stringify(videonye))
		  zero.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: ftrol })
		  break
		case 'addsticker':
    case 'addstiker':
		  if (!isQuotedSticker) return reply('Reply stiker nya')
	      svst = body.slice(12)
		  if (!svst) return reply('Nama sticker nya apa?')
		  boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		  delb = await zero.downloadMediaMessage(boij)
	  	  setiker.push(`${svst}`)
	 	  fs.writeFileSync(`./media/${svst}.webp`, delb)
		  fs.writeFileSync(`./storage/stik.json`, JSON.stringify(setiker))
	  	  zero.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: ftrol })
	 	  break
	case 'addimage':
		  if (!isQuotedImage) return reply('Reply imagenya blokk!')
		  svst = body.slice(10)
		  if (!svst) return reply('Nama imagenya apa su?')
		  boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	  delb = await zero.downloadMediaMessage(boij)
		  imagenye.push(`${svst}`)
		  fs.writeFileSync(`./media/${svst}.jpeg`, delb)
		  fs.writeFileSync('./storage/image.json', JSON.stringify(imagenye))
		  zero.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: ftrol })
		  break
		case 'getvn': 
		  namastc = body.slice(7)
		  buffer = fs.readFileSync(`./media/${namastc}.mp3`)
	 	  zero.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: ftrol, ptt: true })
		  break
		case 'getvideo':
		  namastc = body.slice(10)
		  buffer = fs.readFileSync(`./media/${namastc}.mp4`)
		  zero.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: ftrol })
		  break		
		case 'getsticker':
	case 'gets': 
		  namastc = body.slice(12)
		  result = fs.readFileSync(`./media/${namastc}.webp`)
		  zero.sendMessage(from, result, sticker, {quoted :ftrol})
		  break
		case 'getimage':
	      namastc = body.slice(10)
		  buffer = fs.readFileSync(`./media/${namastc}.jpeg`)
		  zero.sendMessage(from, buffer, image, { quoted: ftrol, caption: `Result From Database : ${namastc}.jpeg` })
		  break
		case 'ttp':
		case 'blackpink':
		case 'neon':
		case 'matrix':
		case 'joker':
		case 'devil':
		case 'transformer':
		case 'thunder':
		case 'harry':
		case 'gradient':
		if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Zero YT7`)
          img = await fetchJson(`https://zeroyt7-api.xyz/${command}?text=${q}&apikey=${apikey5}`)
          hasil = await getBuffer(img.data)
          zero.sendMessage(from, hasil, image, {caption: 'Please Subscribe Zero YT7', quoted: ftrol})
          limitAdd(sender, limit)
          break
          case 'event':
          pp = 'on or off?'
          but = [
           { buttonId: `epen 1`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `epen 0`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButMessage(from, pp, 'Event Group', but, ftrol)
          break
          case 'epen':
		  if (!isGroup) return reply(mess.only.group)
	      if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		  if (args.length < 1) return reply('Boo :𝘃')
		  if (Number(args[0]) === 1) {
		  if (isEventon) return reply('*SUDAH AKTIF* !!!')
		  event.push(from)
		  fs.writeFileSync('./storage/event.json', JSON.stringify(event))
		  reply('*❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI*')
		  } else if (Number(args[0]) === 0) {
		  event.splice(from, 1)
		  fs.writeFileSync('./storage/event.json', JSON.stringify(event))
		  reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
		  } else {
		  reply('eeee')
		  }										
		  break

//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//
        
default:
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return zero.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
} catch (err) {
e = String(err)
reply(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}