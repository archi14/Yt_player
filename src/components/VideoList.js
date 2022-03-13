import React from 'react';
import './VideoList.css';

class VideoList extends React.Component{

    handleClick(video)
    {
        this.props.onVideoClicked(video);
    }

    renderList(){
        return this.props.videoList.map(item=>{
            return (      
            <div onClick={()=>this.handleClick(item)} className="video-item item" key={item.id.videoId}>
                <img alt="Loading" className="ui class" src={item.snippet.thumbnails.medium.url}/>
                <div className="content">
                    <div className="header">{item.snippet.title}</div>
                </div>
            </div>
            )
        })
    }
    render()
    {
        if(!this.props.videoList)
        {
            return <div>Loading..</div>
        }
        return(  
            <div className="ui relaxed divided list">{this.renderList()}</div>
        )
    }
}

export default VideoList;