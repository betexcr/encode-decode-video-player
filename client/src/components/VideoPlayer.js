import  { useRef } from 'react';

const VideoPlayer = () => {
    const videoRef = useRef(null);

    return (
        <div>
            <h1>Video Player</h1>
            <video
                ref={videoRef}
                controls
                width="800"
                height="450"
                style={{ backgroundColor: 'black' }}
            >
                <source src="http://localhost:3001/video" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
