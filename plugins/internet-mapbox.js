
import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
let ke = await fetch('https://random-data-api.com/api/v2/addresses')
let v = await ke.json()
let ur = [
`https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/pin-l-embassy f74e4e(-73.99,40.7)/-73.99,40.7,16/500x300?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`,
`https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-73.99,40.7,3/800x400@2x?addlayer={"id":"better-boundary","type":"line","source":"composite","source-layer":"admin","filter":["all",["==",["get","admin_level"],1],["==",["get","maritime"],"false"],["match",["get","worldview"],["all","US"],true,false],["==",["get","iso_3166_1"],"US"]],"layout":{"line-join":"bevel"},"paint":{"line-color":"#DB6936","line-width":1.5,"line-dasharray":[1.5,1]}}&before_layer=road-label&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`,
`https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s-l 000(-73.99,40.7)/-73.99,40.7,14/500x300?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`,
`https://api.mapbox.com/styles/v1/mapbox/light-v10/static/url-https://docs.mapbox.com/api/img/custom-marker.png(-73.99,40.7)/-73.99,40.7,15/500x300?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`,
`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-73.99,40.7,2/600x600?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`,
`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.99,40.7,0,60/400x400?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`,
`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.99,40.7,1.8/800x400?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw&setfilter=["==","name_en","Canada"]&layer_id=country-label`,
`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.99,40.7,2/600x600?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`,
`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/0,-73.99,40.7,20/600x600?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`,
`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/[-73.99,40.7]/400x400?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`,
`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/[-73.99,40.7]/400x400?padding=50,10,20&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`,
`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/geojson({"type":"FeatureCollection","features":[{"type":"Feature","properties":{"marker-color":"#462eff","marker-size":"medium","marker-symbol":"bus"},"geometry":{"type":"Point","coordinates":[-73.99,40.7]}},{"type":"Feature","properties":{"marker-color":"#e99401","marker-size":"medium","marker-symbol":"park"},"geometry":{"type":"Point","coordinates":[-73.99,40.7]}},{"type":"Feature","properties":{"marker-color":"#d505ff","marker-size":"medium","marker-symbol":"music"},"geometry":{"type":"Point","coordinates":[-73.99,40.7]}}]})/-73.99,40.7,13/500x300?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`,
`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/geojson({"type":"Point","coordinates":[-73.99,40.7]})/-73.99,40.70,12/500x300?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`,
`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-a 9ed4bd(-73.99,40.7),pin-s-b 000(-73.99,40.7),path-5 f44-0.5(}rpeFxbnjVsFwdAvr@cHgFor@jEmAlFmEMwM_FuItCkOi@wc@bg@wBSgM)/auto/500x300?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`,
]
let url = ur[args[0]]
await conn.sendFile(m.chat, encodeURIComponent(url), '', '', m)
    }
handler.command = /^mapbox$/i

export default handler
