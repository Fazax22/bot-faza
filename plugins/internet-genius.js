import axios from 'axios'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
import Genius from 'genius-lyrics'

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
let key = 'h6fTn1BYNjYi5VTszhyAFTcM3WWtk2E4hqrXCcutfObE4jVFnJ3LVyewHKIYTli7'
let Client = new Genius.Client(key)
if (!text) throw 'Masukkan teksnya'

if (command == 'geniusm') {
let res = await Client.songs.search(text)
let msg = (Object.entries(res).map(([nama, isi]) => { return { nama, ...isi} }))
let listSections = []
	Object.values(msg).map((v, index) => {
	
	let des = `*fullTitle:* ${v.fullTitle}
	*featuredTitle:* ${v.featuredTitle}
	*thumbnail:* ${v.thumbnail}
	*id:* ${v.id}
	*title:* ${v.title}
	*url:* ${v.url}
	`
	
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Get Img', usedPrefix + 'get ' + v.thumbnail, des]
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 Genius Search 🔎 ' + htka, `⚡ Silakan pilih Genius Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ Genius Search Disini ☂️`, listSections, m)
	}
	
	if (command == 'geniusa') {
	let res = await fetch('https://api.genius.com/search?q=' + text + '&access_token=' + key)
let msg = (Object.entries(res.response.hits).map(([nama, isi]) => { return { nama, ...isi} }))
let listSections = []
	Object.values(msg).map((v, index) => {
	
	let des = `*annotation_count:* ${v.annotation_count}
*api_path:* ${v.api_path}
*artist_names:* ${v.artist_names}
*full_title:* ${v.full_title}
*header_image_thumbnail_url:* ${v.header_image_thumbnail_url}
*header_image_url:* ${v.header_image_url}
*id:* ${v.id}
*language:* ${v.language}
*lyrics_owner_id:* ${v.lyrics_owner_id}
*lyrics_state:* ${v.lyrics_state}
*path:* ${v.path}
*pyongs_count:* ${v.pyongs_count}
*relationships_index_url:* ${v.relationships_index_url}
*release_date_for_display:* ${v.release_date_for_display}
*release_date_with_abbreviated_month_for_display:* ${v.release_date_with_abbreviated_month_for_display}
*song_art_image_thumbnail_url:* ${v.song_art_image_thumbnail_url}
*song_art_image_url:* ${v.song_art_image_url}
*title:* ${v.title}
*title_with_featured:* ${v.title_with_featured}
	`
	
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Get Img', usedPrefix + 'get ' + v.thumbnail, des]
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 Genius Search 🔎 ' + htka, `⚡ Silakan pilih Genius Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ Genius Search Disini ☂️`, listSections, m)
	}
	
    }
handler.command = /^genius[am]$/i

export default handler
