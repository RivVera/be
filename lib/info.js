exports.info = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `*MENU ${XPTN}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *About ${XPTN}*
╠════════════════════
║├≽️⚜ *🔰AUTHOR🔰*: _V e r a_
║├≽️🛡️ *DESIGNER*: _V e r a_
╠════════════════════
╠════════════════════
║  *${XPTN}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwa}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${XPTN}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ *MADE BY V e r a*
╚════════════════════`
}
