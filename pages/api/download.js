const ytdl = require("ytdl-core");
const instagramGetUrl = require("instagram-url-direct");

export default async function handler(req, res) {
  const { url, type } = req.query;
  // find whether url is a youtube video or instagram post
  if (url.includes("youtu")) {
    // youtube video
    let resp = {};
    const videoID = ytdl.getURLVideoID(url);
    let info = await ytdl.getInfo(videoID);
    let formats = ytdl.filterFormats(info.formats, type || "videoandaudio");
    resp["formats"] = formats;
    resp["title"] = info.videoDetails.title;
    resp["thumbnail"] = info.videoDetails.thumbnails.reverse()[0].url;
    res.status(200).json(resp);
  } else if (url.includes("instagram.com")) {
    // instagram post
    let links = await instagramGetUrl(url);
    console.log(links);
    res.status(200).json(links);
  }
}
