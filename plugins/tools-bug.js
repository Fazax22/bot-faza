let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '*[ ⚠️ ] HARAP MASUKKAN NOMOR YANG AKAN DI SPAM BUG PESAN!*\n*PENGGUNAAN YANG BENAR:*\n*—◉ #sendbug nomor|teks|jumlah*\n*jumlah:*\n*—◉ #sendbug 628xxxxx|hai :v|25*'
if (!pesan) throw '*[ ⚠️ ] HARAP MASUKKAN PESAN KE SPAM BUG!*\n*GUNAKAN YANG BENAR:*\n*—◉ #sendbug nomor|teks|jumlah*\n*CONTOH:*\n*—◉ #sendbug 628xxxxx|merespons :v|25*'
if (jumlah && isNaN(jumlah)) throw '*[ ⚠️ ] KUANTITAS HARUS ADALAH NOMOR!*\n*PENGGUNAAN YANG TEPAT:*\n*—◉ #sendbug nomor|teks|jumlah*\n*CONTOH:*\n*—◉ #sendbug 628xxxxx|merespons :v|25*'

let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 10) throw '*[ ⚠️ ] TERLALU BANYAK PESAN! JUMLAH HARUS KURANG DARI 10 PESAN*️'
await m.reply(`*[❗] SPAM BUG PESAN KE NOMOR ${nomor} ITU SUKSES DILAKUKAN*\n*JUMLAH TERKIRIM:*\n*—◉ ${fixedJumlah} waktu!*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.fakeReply(fixedNumber, pesan.trim(), fixedNumber, pesan.trim(), '0@s.whatsapp.net')
}}
handler.help = ['sendbug']
handler.tags = ['tools']
handler.command = /^(sendbugg?|bugg)$/i
handler.group = false
handler.premium = true
handler.private = true
handler.limit = true
export default handler