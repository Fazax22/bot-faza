
export async function before(m, { conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    let hapus = m.key.participant
    let bang = m.key.id
    
    if (chat.antiVirtex) {
   let regpz = /^(\u{3738}\u{f7d}\u{362}\u{f7d}\u{362}\u{f7d}\u{362}|PLHIPS|\u{e14}\u{e38}\u{e37}|\u{9ed}\u{9ed}|\u{e51}\u{e51}|\u{e52}\u{e52}|\u{110}|\u{9e1}|\u{e1c}|\u{e56}|\u{20df})$/i
   let isVertexsAll = regpz.exec(m.text)
   if (isVertexsAll && !m.fromMe) {
   if (!m.isBaileys && m.text.length > 384)
   if (m.text && m.text.length >= 25000)
   await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
   await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
        await conn.sendButton(m.chat, `*Font Virtext detect!*${isBotAdmin ? '' : '\n\n_Bot bukan admin_'}`, author, ['off antivirtex', '/disable antivirtex'], m)
        if (isBotAdmin && bot.restrict) {
       return m.reply('Ok!')
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('Owner disable auto kick!')
    }
    return !0
}