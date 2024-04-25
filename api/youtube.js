const axios = require("axios");

exports.getVideoCaptions = async (Id) => {
  const API_KEY = process.env.Rapid_API_KEY;

  const options = {
    method: "POST",
    url: "https://youtube-scraper-2023.p.rapidapi.com/video_transcript",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "f00ed8b8b2msh048127acd78e052p1c7385jsnc137561c9880",
      "X-RapidAPI-Host": "youtube-scraper-2023.p.rapidapi.com",
    },
    data: {
      videoId: Id,
    },
  };

  try {
    const response = await axios(options);
    const captions = response.data;
    return captions;
  } catch (error) {
    console.log("Error");
    console.error(error.response ? error.response.data : error.message);
  }
};
