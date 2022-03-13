import axios  from "axios"
import { KEY } from "../config";

export default axios.create({
        baseURL:"https://www.googleapis.com/youtube/v3/",
         params:{
             type:'video',
             part:'snippet',
             maxResults:6,
             key:KEY
         }
    });