import axios  from "axios"

const KEY="AIzaSyCC6o0szxsEtO4iH4Dgvf-ny7VTPn3TVi0";

export default axios.create({
        baseURL:"https://www.googleapis.com/youtube/v3/",
         params:{
             type:'video',
             part:'snippet',
             maxResults:6,
             key:KEY
         }
    });