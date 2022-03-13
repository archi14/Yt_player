import React from 'react'

class VideoDetail extends React.Component{

    

    renderVideo(video)
    {
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
        return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title={video.snippet.title}></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>

        </div>
        )
     
    }    
    
    render(){
        if(!this.props.selectedVideo)
        {
            return(<div>Loading..</div>)
        }
        return (
            <div>
                {this.renderVideo(this.props.selectedVideo)}
            </div>
        )
    }
}

export default VideoDetail;