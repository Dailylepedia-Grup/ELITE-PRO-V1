require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.ownernomer = process.env.OWNER_NOMER || "6282164961900";
global.ytname = process.env.YT_NAME || "YT: @m.trihamdani";
global.socialm = process.env.SOCIAL_M || "GitHub: Dailylepedia-Grup";
global.location = process.env.LOCATION || "Indonesia, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '6282164961900';
global.ownername = process.env.OWNER_NAME || 'M. Tri Hamdani';
global.botname = process.env.BOT_NAME || 'Dailylepedia Assistant';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'DailylepediaAssistant\n\nContact: +6282164961900';
// Default settings 2
global.typemenu = process.env.TYPE_MENU || 'v2';
global.wm = process.env.WM || "Youtube @m.trihamdani";
global.link = process.env.LINK || 'https://whatsapp.com/channel/xxx';

// Text bug
global.xbugtex = {
    xtxt: '👨‍💻Dailylepedia-Aasistant👨‍💻',
};

// Reply messages
global.mess = {
    done: '*⿻ DONE: Task completed ✔️*',
    prem: '*⦿ This command is made for premium users.⁉️*',
    admin: '*⦿ This command is made for group admins.‼️*',
    botAdmin: '*⦿  Make bot admin to access commands⿻*',
    owner: '*⦿This commands is made for bot owner.*',
    group: '*⦿ This command is made for group chat❕*',
    private: '*⦿ This command is made for private chat ⭕*',
    wait: '*_⚙️PROCESSING DATA......_*',
    error: '*‼️AN ERROR OCCUR‼️*',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
