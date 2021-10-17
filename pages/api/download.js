const ytdl = require("ytdl-core");
export default async function handler(req, res) {
  const { url, type } = req.query;
  // youtube video
  let resp = {};
  const videoID = ytdl.getURLVideoID(url);
  let info = await ytdl.getInfo(videoID);
  let formats = ytdl.filterFormats(info.formats, type || "videoandaudio");
  resp["formats"] = formats;
  resp["title"] = info.videoDetails.title;
  resp["thumbnail"] = info.videoDetails.thumbnails.reverse()[0].url;
  res.status(200).json(resp);
}
