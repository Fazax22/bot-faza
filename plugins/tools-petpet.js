
/*
Made by https://github.com/balhisyhrl
*/
import uploadImage from "../lib/uploadImage.js"
import fetch from 'node-fetch'
import WSF from 'wa-sticker-formatter'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Kirim/balas gambar dengan perintah ${usedPrefix}petpet`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `Kirim/balas gambar dengan perintah ${usedPrefix}petpet`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
    let img = await q.download()
    let url = await (uploadImage)(img)
    let res = await fetch("https://anon-petpet.herokuapp.com/?url="+encodeURIComponent(url))
    if (!res.ok) throw `error`
    let json = await res.json()
    if(json.status == false) throw `error`
    let imggiff = json.result
    m.reply(`Tunggu kk`)
    //m.reply(imggiff)
    wsf = new WSF.Sticker(imggiff, {
          pack: global.packname,
          author: global.author,
          crop: true,
        })
    await wsf.build()
    const sticBuffer = await wsf.get()
    conn.sendMessage(m.chat, { sticker: sticBuffer }, {
      quoted: m,
      mimetype: 'image/webp',
      ephemeralExpiration: 86400
    })
  } catch(e){
    m.reply(`ERROR`)
  }
}
handler.help = ['petpet']
handler.tags = ['sptools', 'image','update']
handler.command = /^petpet$/i

export default handler