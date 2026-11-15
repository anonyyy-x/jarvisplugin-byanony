/* TRUECALLER PLUGIN - JARVIS MD>>>
ANONYYY-X 💐*/


const axios = require("axios");
const { System, isPrivate } = require("../lib/");

const CHANNEL_JID = "120363242705267621@newsletter";
const CHANNEL_NAME = "TRUECALLER";

const channelContext = {
    forwardingScore: 1,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
        newsletterJid: CHANNEL_JID,
        newsletterName: CHANNEL_NAME
    }
};

System({
    pattern: "true",
    fromMe: isPrivate,
    desc: "Truecaller number lookup",
    type: "search",
}, async (message, match) => {
    const _0x4f2a=["trim","replace","send","*TRUECALLER LOOKUP*\n\nPlease enter a phone number with country code.\n\n*Examples:*\n• *.true 919876543210*\n• *.true +919876543210*\n• *.true 91 98765 43210*","test","*INVALID NUMBER*\n\nPlease enter a valid number with country code.\n\n• *.true 919876543210*\n• *.true +919876543210*","+","⏳","react","https://arooanonyapi.onrender.com/api/true","get","data","code","ECONNABORTED","API_TIMEOUT","response","API_ERROR","CONNECTION_ERROR","success","LOOKUP_FAILED","truecaller","telegram","*╭━━〔 TRUECALLER LOOKUP 〕━━╮*","┃","*┃ 𝖢𝗎𝗋𝗋𝖾𝗇𝗍𝗅𝗒 𝖠𝗏𝖺𝗂𝗅𝖺𝖻𝗅𝖾 𝖣𝖺𝗍𝖺:*","push","number","Number","country","Country","Name","name","Carrier","carrier","some","*┃ 🔍 TRUECALLER*","Registered","registered","boolean","Yes","No","Premium","premium","Verified","verified","*┃ ✈ TELEGRAM*","now","toFixed","*╰━━━━━━━━━━━━━━━━━━━━╯*","join","\n","hasImage","imageUrl","string",">  Image from Telegram\n\n","image","✅","[TRUE LOOKUP ERROR]","error","message","❌","*Request timed out.* Please try again.","*The lookup service returned an error.*","*Unable to connect to the lookup service.*","*No lookup information was returned.*","*Something went wrong.* Please try again."],_0x1b3c=_0x2d1f=>_0x4f2a[_0x2d1f];let _0x3e81=![];const _0x5a90=Date[_0x1b3c(46)]();try{let _0x2c44=String(match||"")[_0x1b3c(0)]()[_0x1b3c(1)](/[\s()-]/g,"");if(!_0x2c44)return await message[_0x1b3c(2)](_0x1b3c(3));_0x2c44=_0x2c44[_0x1b3c(1)](/^\+/,"");if(!/^[1-9]\d{7,14}$/[_0x1b3c(4)](_0x2c44))return await message[_0x1b3c(2)](_0x1b3c(5));_0x2c44=_0x1b3c(6)+_0x2c44;try{await message[_0x1b3c(8)](_0x1b3c(7)),_0x3e81=!![];}catch(_0x11a0){}let _0x4d92;try{const _0x3f71=await axios[_0x1b3c(10)](_0x1b3c(9),{params:{phone:_0x2c44},timeout:0xea60});_0x4d92=_0x3f71[_0x1b3c(11)];}catch(_0x2e88){if(_0x2e88[_0x1b3c(12)]===_0x1b3c(13))throw new Error(_0x1b3c(14));if(_0x2e88[_0x1b3c(15)])throw new Error(_0x1b3c(16));throw new Error(_0x1b3c(17));}if(!_0x4d92||_0x4d92[_0x1b3c(18)]!==!![])throw new Error(_0x1b3c(19));const _0x19a4=_0x4d92[_0x1b3c(20)]||{},_0x51b2=_0x4d92[_0x1b3c(21)]||{},_0x30c8=[_0x1b3c(22),_0x1b3c(23),_0x1b3c(24),_0x1b3c(23)],_0x44e1=(_0x10f2,_0x29d3)=>{_0x29d3!==undefined&&_0x29d3!==null&&String(_0x29d3)[_0x1b3c(0)]()!==""&&_0x30c8[_0x1b3c(25)](`┃ *${_0x10f2}:* ${_0x29d3}`);};_0x44e1(_0x1b3c(27),_0x4d92[_0x1b3c(26)]||_0x2c44),_0x44e1(_0x1b3c(29),_0x4d92[_0x1b3c(28)]);const _0x28f0=[[_0x1b3c(30),_0x19a4[_0x1b3c(31)]],[_0x1b3c(32),_0x19a4[_0x1b3c(33)]]];if(_0x28f0[_0x1b3c(34)](([,_0x17b9])=>_0x17b9!==undefined&&_0x17b9!==null&&String(_0x17b9)[_0x1b3c(0)]()!=="")){_0x30c8[_0x1b3c(25)](_0x1b3c(23),_0x1b3c(35));for(const [_0x3a11,_0x4b22]of _0x28f0)_0x44e1(_0x3a11,_0x4b22);}const _0x55d0=[[_0x1b3c(30),_0x51b2[_0x1b3c(31)]],[_0x1b3c(36),typeof _0x51b2[_0x1b3c(37)]===_0x1b3c(38)?_0x51b2[_0x1b3c(37)]?_0x1b3c(39):_0x1b3c(40):null],[_0x1b3c(41),typeof _0x51b2[_0x1b3c(42)]===_0x1b3c(38)?_0x51b2[_0x1b3c(42)]?_0x1b3c(39):_0x1b3c(40):null],[_0x1b3c(43),typeof _0x51b2[_0x1b3c(44)]===_0x1b3c(38)?_0x51b2[_0x1b3c(44)]?_0x1b3c(39):_0x1b3c(40):null]];if(_0x55d0[_0x1b3c(34)](([,_0x22c1])=>_0x22c1!==undefined&&_0x22c1!==null&&String(_0x22c1)[_0x1b3c(0)]()!=="")){_0x30c8[_0x1b3c(25)](_0x1b3c(23),_0x1b3c(45));for(const [_0x1c33,_0x2d44]of _0x55d0)_0x44e1(_0x1c33,_0x2d44);}const _0x49f9=((Date[_0x1b3c(46)]()-_0x5a90)/0x3e8)[_0x1b3c(47)](0x2);_0x30c8[_0x1b3c(25)](_0x1b3c(23),`> 𝖱𝖾𝗌𝗉𝗈𝗇𝖽𝖾𝖽 𝗂𝗇 ${_0x49f9}s`,_0x1b3c(48));const _0x1e77=_0x30c8[_0x1b3c(49)](_0x1b3c(50)),_0x3b8a=_0x4d92[_0x1b3c(51)]===!![]&&typeof _0x4d92[_0x1b3c(52)]===_0x1b3c(53)&&/^https?:\/\//i[_0x1b3c(4)](_0x4d92[_0x1b3c(52)])?_0x4d92[_0x1b3c(52)]:null;if(_0x3b8a)await message[_0x1b3c(2)]({url:_0x3b8a},{caption:_0x1b3c(54)+_0x1e77,contextInfo:channelContext},_0x1b3c(55));else await message[_0x1b3c(2)](_0x1e77,{contextInfo:channelContext});if(_0x3e81)try{await message[_0x1b3c(8)](_0x1b3c(56));}catch(_0x44a8){}}catch(_0x5c11){console[_0x1b3c(58)](_0x1b3c(57),_0x5c11[_0x1b3c(59)]);if(_0x3e81)try{await message[_0x1b3c(8)](_0x1b3c(60));}catch(_0x33b9){}const _0x20a5={API_TIMEOUT:_0x1b3c(61),API_ERROR:_0x1b3c(62),CONNECTION_ERROR:_0x1b3c(63),LOOKUP_FAILED:_0x1b3c(64)};await message[_0x1b3c(2)](_0x20a5[_0x5c11[_0x1b3c(59)]]||_0x1b3c(65));}
});
