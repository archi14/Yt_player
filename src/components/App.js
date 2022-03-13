import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from './VideoList';
import VideoDetail from "./VideoDetail";


class App extends React.Component{

    state = {videoList :null,  selectedVideo : null};

    fetchVideos = async(searchTerm) => 
    {
        const responses = await youtube.get('/search',{
            params:{
                q:searchTerm
            }
        })
        this.setState({videoList:responses.data.items});
        this.setState({selectedVideo:responses.data.items[0]})
    }
    componentDidMount()
    {
        this.fetchVideos('cars');

    }
    onButtonClicked=async(text)=>
    {
        this.fetchVideos(text);
        
    }

    onVideoClicked=(video)=>
    {
        this.setState({selectedVideo:video});
    }
    render()
    {
        if(!this.state.videoList)
        {
            return(
            <div className="ui container">
                <div className="ui active dimmer">
                    <div className="ui text loader">Loading</div>
                </div>
            </div>
            );
        }
        return (  
                    <div className="ui fluid container">
                                <SearchBar onButtonClicked={this.onButtonClicked}/>
                        <div className="ui padded grid">
                                <div className="eleven wide column">
                                    <VideoDetail selectedVideo={this.state.selectedVideo}/>
                                </div>
                                <div className="five wide column">
                                    <VideoList videoList={this.state.videoList} onVideoClicked={this.onVideoClicked} />
                                </div>
                                
                        </div>
                    </div>
        )
    }
}

export default App;