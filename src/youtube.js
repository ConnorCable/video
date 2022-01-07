import axios from 'axios'
const KEY = "AIzaSyB9UnNAxrUGTfvjQTiE18NxJr7q6aA5Tts"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
    }
})


