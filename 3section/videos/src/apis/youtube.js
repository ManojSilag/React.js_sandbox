import axios from  'axios';
const KEY ="AIzaSyCAHMArOYofZZRDY3_ze2aaCBSvsr9VYUA";
export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        masResult: 5,
        key: KEY,
    }
});