const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348166304271";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_49_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDY3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNixcbiAgICAgICAgODUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDMsXG4gICAgICAgIDMzLFxuICAgICAgICA3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1LFxuICAgICAgICA4MCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICA4NixcbiAgICAgICAgODMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTExLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM1LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjExLFxuICAgICAgICA3MixcbiAgICAgICAgMTc1LFxuICAgICAgICA5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI0LFxuICAgICAgICA4OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1LFxuICAgICAgICA0MixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDk3LFxuICAgICAgICA2MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI4LFxuICAgICAgICAyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNixcbiAgICAgICAgMTEwLFxuICAgICAgICAzNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDc1LFxuICAgICAgICA3NixcbiAgICAgICAgNDAsXG4gICAgICAgIDYxLFxuICAgICAgICA0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJINGpMOFp6TmpwMDdLS25paS9Rc1NEQUE4SWxEWVlSNkQyUUJ4NXlHTGRBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2cE1pSzBTVFM4Q19PSHBOYy1DNDZRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZhYzU3MDM2LTliNWEtNGZlNy1hOTUwLWUwMWM3YThjMzc2OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICA0NSxcbiAgICAgIDE1MixcbiAgICAgIDE4OCxcbiAgICAgIDExMixcbiAgICAgIDEzMyxcbiAgICAgIDIyOCxcbiAgICAgIDI0NSxcbiAgICAgIDE1NCxcbiAgICAgIDE1NixcbiAgICAgIDIwMSxcbiAgICAgIDEwMixcbiAgICAgIDEwMyxcbiAgICAgIDEzMCxcbiAgICAgIDIyNyxcbiAgICAgIDEzNyxcbiAgICAgIDE0MyxcbiAgICAgIDEwOSxcbiAgICAgIDEsXG4gICAgICA4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDEwMCxcbiAgICAgIDY3LFxuICAgICAgMTUwLFxuICAgICAgMjIxLFxuICAgICAgNjQsXG4gICAgICAyMjAsXG4gICAgICAxMzksXG4gICAgICA0NSxcbiAgICAgIDIxMyxcbiAgICAgIDEyOSxcbiAgICAgIDUwLFxuICAgICAgMjI0LFxuICAgICAgMTksXG4gICAgICA1MixcbiAgICAgIDI0MyxcbiAgICAgIDMzLFxuICAgICAgMTAwLFxuICAgICAgMTcwLFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjFZMUdZNDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjYzMDQyNzE6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzMDAxNzYxOTEyNDM1NzoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLdTg1WXdMRVBQN3pMSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZDOXhPVjBQaWlZM2F3UHZmTmVwNVQ1emtJRGNjcWdTcDYxaXQxN1B4enc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiclp5aysxWlQvRUVzTE5RSUMrZkJiTjQ1TlpORndGdXZLMGNDbFYvejZHQVY3bHREVS9KVVNXL05ad0JyRTl0K09aZmxFenUwUXdPVnp1aDJNNU5DQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQXRlWExnaE5RZk95V2gyb2F0VmJxVVZPZGpSZjQxMkxXY0k4UWoxZ2JZTFZlRlR6RlB0cWlsV00wcWVUamRjWnRRL1VPTTdJbnVuV085MUtDcm9XZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2NjMwNDI3MToyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjczMTM4MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpkQlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmRCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTFhIRXlOeUx6ZTc4am1zbWlFd2RoUmJ0SUhZVkVaZE53LzZaS2YvbDBFaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyOTc5NjE4MzQ3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY3MzEzODkxNTFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
