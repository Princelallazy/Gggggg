//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348120110442";
global.owner = process.env.OWNER_NUMBER || "2348120110442";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lmbTdmdU5mK0JSdFI2a21LNWpjSkNFbm1zaEdIZ0JBMy9wY3lZajltOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3FhaGI4bEZ3Z3RsT3ZCcDNQaldDenBCd3NxbmRNVG42YUNDeHluZktraz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRmdEZHFQQ1hrV2hnS2Ftek9iVktaeFJYY0hTMjBOTUhreEdGelNVMW1VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmRmhFODhJeVBsNHAyYUpGL2hpVGYzMkRZYmJyY0VQL2J4SmJSQ3RMemh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFCOWV4eC9TNEQ2RnFUc3pQbEV4cmxTOFJNbkFudDUyb1pDV2dkZ0VjSFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImM4eE80dXZDQnppWGdIVys2UUF6K2FxSHdyNEFCSEp1UlJqcVdQV3F1QlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0xBZGtnczAzRldHN2lzOGoydUZvaEFZaXpwY1dNc2k3Ykl5dGxZZStrVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTQxeGdQcTJVTldsd3JJVnRyK2wyUkFmSHZBTG0zWDQ5cnNIMjRXMTVIST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpIN1U4YmFGZEpSa1UrUVB5N3VTSG45MkgzdEpTSWs3NXg3bUpiRUNMQ1llNGhMbGg4ZzdxVnBSUzZDcnd2cE5md2hmQXhwYjVIZTBNbGx5OXlpaEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIyLCJhZHZTZWNyZXRLZXkiOiIwclNuRDNFVG00emZ2YTB5L0FFblBGclljRzhaUEpCYnJwM0t0YkZ6TXVnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0R3VWWndiTlJYcVRlaHJUS1Z6M01nIiwicGhvbmVJZCI6IjQ2NGFlZDc1LWIxYmItNDAwYS04NjMxLTM5ZmUyNzIyMzdiMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxdG1MZFJ6d1QzYzI5QWRIek5Fa1lpbGFyTzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2lYRGxkREdDWTZ5ZHZGdUhNRFFuQStKNGtzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZLNkhaNVRSIiwibWUiOnsiaWQiOiIyMzQ4MTIwMTEwNDQyOjMxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkdVSURBTkNFIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPR3hqWnNGRU56YW9Mc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJEMzFCb1Y3VHJSdkVQMXJxaE40MXhkL2Y3cjZ6Q3JhQWtoNm5JZFJOb244PSIsImFjY291bnRTaWduYXR1cmUiOiJDTHA0aHZjbFFGTWtmUHVhTUorUzdVL3I2ZjV6dFcwWmpua2puRHRzb1NtVTZFNXU2WnNYNEJLWDRpb0ZWOVpPMis3cGNHM1VKdGI3V1dNMDhiRVRDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYVVaV2dMK2xHdW81aCsrYlpsNDZCZEd3YUVMdkFMNDR6azVHYVg1c0FPTmptRHlCR3RLenp3T0pNeSswdWk3LzJZTkV0VDBnMkZQMzVkMXVRM1I2Qmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTIwMTEwNDQyOjMxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlE5OVFhRmUwNjBieEQ5YTZvVGVOY1hmMys2K3N3cTJnSkllcHlIVVRhSi8ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQ4ODA2MTgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSnlvIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
