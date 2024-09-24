const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: WATSON-XD-V7,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function WATSON-XD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_WATSON-XD-V7 = WATSON-XD-V7({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_WATSON-XD-V7.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_WATSON-XD-V7.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_WATSON-XD-V7.ev.on('creds.update', saveCreds)
            Pair_Code_By_WATSON-XD-V7.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_WATSON-XD-V7.sendMessage(Pair_Code_By_WATSON-XD-V7.user.id, { text: '' + b64data });

               let WATSON-XD-V7_TEXT = `
*_Pair Code Connected by WATSON-MD-V7*
*_Made With 🤍_*
______________________________________
╔════◇
║ *『 WOW YOU CHOOSEN WATSON-MD-V7 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚══════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Ytube:* _youtube.com/@WATSON-TECH_
║❒ *Owner:* _https://wa.me/message/263781330745_
║❒ *Repo:* https://github.com/WATSON-XD2/Watson-MD-Bot-V7_
║❒ *WaGroup:* https://chat.whatsapp.com/E0a2bl9wHYlCHuL35WBR88_
║❒ *WaChannel:* https://whatsapp.com/channel/0029VajjzuB9sBI890YffB1b
║❒ *Plugins:* https://github.com/WATSON-XD2/Watson-MD-Bot-V7-plugins_
╚══════════════════════╝ 
_____________________________________

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_WATSON-XD-V7.sendMessage(Pair_Code_By_WATSON-XD-V7.user.id,{text:WATSON-XD-V7_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_WATSON-XD-V7.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    WATSON-XD-V7_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await WATSON-XD-V7_PAIR_CODE()
});
module.exports = router
