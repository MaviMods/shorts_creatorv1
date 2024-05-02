 const axios = require("axios");

exports.getVideoCaptions = async (Id) => {
  const API_KEY = "f00ed8b8b2msh048127acd78e052p1c7385jsnc137561c9880";

  const options = {
    method: "GET",
    url: "https://youtube-captions-and-transcripts.p.rapidapi.com/getCaptions",
    headers: {
      "content-type": "json",
      "X-RapidAPI-Key": "f00ed8b8b2msh048127acd78e052p1c7385jsnc137561c9880",
      "X-RapidAPI-Host": "youtube-captions-and-transcripts.p.rapidapi.com",
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
