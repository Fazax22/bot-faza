import { googleIt } from '@bochilteam/scraper'

let handler = async (m, { conn, usedPrefix, text, command, args }) => {
    const fetch = (await import('node-fetch')).default
    let full = /f$/i.test(command)
    if (!text) return conn.reply(m.chat, 'Tidak ada teks untuk di cari', m)
    let url = 'https://google.com/search?q=' + encodeURIComponent(text)
    let search = await googleIt(text)
    let msg = search.articles.map(({
        // header,
        title,
        url,
        description
    }) => {
        return `*Title:* ${title}\n*Url:* ${url}\n*Desc:* ${description}`
    }).join('\n\n')
    try {
        let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
        if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
        await conn.sendButtonDoc(m.chat, ss, url + '\n\n' + msg, author, 'Search More', usedPrefix + command + ' ' + text, m)
    } catch (e) {
        await conn.sendButtonDoc(m.chat, logo, msg, author, 'Search More', usedPrefix + command + ' ' + text, m)
    }
}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^googlef?$/i


export default handler