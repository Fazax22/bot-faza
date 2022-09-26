const isVirtex = ['৭৭৭', '๒๒๒', '؋.ᄻ.ྜྷ.ᇸ.ྙ', '๖ۣۜy๖ۣۜF๖ۣۜr๖', '๑๑๑', '৭৭৭৭৭৭৭৭', '๑๑๑๑๑๑๑๑', 'ผิดุท้่เึางืผิดุท้่เึางื', '๒๒๒๒๒๒๒๒', 'ผิดุท้่เึางืผิดุท้่เึางื', 'PLHIPS', '๒', '๑', 'ৡ', '⃟', 'Đ.Δ.Μ'] // tambahin sendiri

export async function before(m, { conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiVirtex = m.text.includes(isVirtex)
    let hapus = m.key.participant
    let bang = m.key.id
    
    if (chat.antiVirtex && isAntiVirtex) {
    
   let regs = ['ผิดุท้เึางืผิดุท้เึางื']
   let isVertexThai = m.text.includes(regs)
   if (isVertexThai && !m.fromMe) {
   await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
   await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
   let regk = ['♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚']
   let isVertexSymbol = m.text.includes(regk)
   if (isVertexSymbol && !m.fromMe) {
   await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
   await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
   let regp = ['๒๒']
   let isVertexsThai= m.text.includes(regp)
   if (isVertexsThai && !m.fromMe) {
   await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
   await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
   let regpz = ['৭৭৭', '๒๒๒', '؋.ᄻ.ྜྷ.ᇸ.ྙ', '๖ۣۜy๖ۣۜF๖ۣۜr๖', '๑๑๑', '৭৭৭৭৭৭৭৭', '๑๑๑๑๑๑๑๑', 'ผิดุท้่เึางืผิดุท้่เึางื', '๒๒๒๒๒๒๒๒', 'ผิดุท้่เึางืผิดุท้่เึางื', 'PLHIPS', '๒', '๑', 'ৡ', '⃟', 'Đ.Δ.Μ']
   let isVertexsAll = m.text.includes(regpz)
   if (isVertexsAll && !m.fromMe) {
   await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
   await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
    if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
            m.reply('Bug Troli Detected\n\n' + require('util').format(m.key))
        }
            if (!m.isBaileys && m.text.length > 384)
            if (m.text && m.text.length >= 25000)
            
        await conn.sendButton(m.chat, `*Font Virtext detect!*${isBotAdmin ? '' : '\n\n_Bot bukan admin_'}`, author, ['off antivirtex', '/disable antivirtex'], m)
        if (isBotAdmin && bot.restrict) {
       return m.reply('Ok!')
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('Owner disable auto kick!')
    }
    return !0
}