const TelegramBot = require("node-telegram-bot-api");

/* ===============================
   EDIT DI SINI SAHAJA
=============================== */
const BOT_TOKEN = "8425222643:AAFPBIdq2C69xd7iHDFR8h8j4bQdjjfRVPM";
const OWNER_ID = "7624612389";
/* =============================== */

if (!BOT_TOKEN || BOT_TOKEN.includes("PASTE")) {
  console.log("⚠️ BOT TOKEN BELUM DIISI");
  process.exit(0);
}

const bot = new TelegramBot(BOT_TOKEN, {
  polling: { interval: 1000, autoStart: true, params: { timeout: 10 } }
});

// console clean
console.log("Developer : @Repp76");
console.log("Status : Connect");

// polling debug
bot.on("polling_error", console.log);
bot.on("webhook_error", console.log);

/* ===== MAIN TEXT ===== */
const MAIN_TEXT = `
╭────〔 𝐗-𝐂𝐮𝐫𝐬𝐞𝐝 𝐕𝟏 〕────╮
│
│ ⌬ Developer : @Repp76
│
│ Bot Mode   : Public
│ Prefix     : /
│ Interface  : Button Type
│ Type       : ( Plugin )
│ Sender : ✅
│ Database : ✅
│ Status : VIP BUYER ONLY
│ Bug type : Bebas spam
│
╰────────────────────╯
`;

/* ===== BUG MENU TEXT ===== */
const BUG_MENU_TEXT = `
〔 𝐗-𝐂𝐮𝐫𝐬𝐞𝐝 𝐗 𝐁𝐔𝐆 〕
○ About : Delay - Force Close - UI
○ WhatsApp : WhatsApp Play Store
○ Type : Spam - Boom Message
○ Total List : 12 CMD
━━━━━━━━━━━━━━━━━━
(#) Note :
Perhatikan besar dan kecil hurufnya pastikan sama dengan yang ada di list menu

# - 𝐗-𝐂𝐮𝐫𝐬𝐞𝐝 𝐗 𝐅𝐂
- /CSX-Bug
- /Matrix-FC
- /Matrix-Over2

# - 𝐗-𝐂𝐮𝐫𝐬𝐞𝐝 𝐗 𝐃𝐄𝐋𝐀𝐘
- /Matrix-Photo
- /Matrix-Xinvis
- /Matrix-CSX

# - 𝐗-𝐂𝐮𝐫𝐬𝐞𝐝 𝐗 𝐔𝐈
- /Samsung-UI
- /Matrix-UI
- /Boom-UI

# - 𝐗-𝐂𝐮𝐫𝐬𝐞𝐝 𝐗 𝐈𝐎𝐒
- /Superior-IOS
- /XCS-IOS
- /Matrix-IOS

━━━━━━━━━━━━━━━━━━
`;

/* ===== /start COMMAND ===== */
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendPhoto(chatId, "./92ddfm.jpg", {
    caption: MAIN_TEXT,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [{ text: "⌬ Bug menu", callback_data: "bug" }],
        [{ text: "Tq to", callback_data: "tq" }]
      ]
    }
  });
});

/* ===== BUTTON HANDLER ===== */
bot.on("callback_query", (q) => {
  const chatId = q.message.chat.id;

  if (q.data === "bug") {
    bot.sendPhoto(chatId, "./92ddfm.jpg", {
      caption: BUG_MENU_TEXT,
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [[{ text: "MAIN MENU", callback_data: "main" }]]
      }
    });
  }

  if (q.data === "tq") {
    bot.sendMessage(chatId, "Special thanks to all supporters 🤍");
  }

  if (q.data === "main") {
    bot.sendPhoto(chatId, "./92ddfm.jpg", {
      caption: MAIN_TEXT,
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "⌬ Bug menu", callback_data: "bug" }],
          [{ text: "Tq to", callback_data: "tq" }]
        ]
      }
    });
  }

  bot.answerCallbackQuery(q.id);
});

/* ===== SIMULASI BUG COMMAND ===== */
bot.on("message", (msg) => {
  if (!msg.text) return;
  if (msg.text.startsWith("/start")) return;

  const parts = msg.text.split(" ");
  if (parts.length < 2) return;

  const bugName = parts[0].replace("/", "");
  const target = parts[1];

  bot.sendMessage(
    msg.chat.id,
    `✅ Successfully sent *${bugName}* to *${target}*.
Please spam to your heart's content`,
    { parse_mode: "Markdown" }
  );
});