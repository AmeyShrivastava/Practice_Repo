import "./App.css";
import VideoCard from "./Components/VideoCard/VideoCard";

function App() {
  return (
    <div className="app">
      <div className="app__top">
        {/* static logo and desc */}
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
          alt="Instagram_logo"
        />
        <h1>Reels Clone App</h1>
      </div>

      <div className="app__videos">
        {/* scrollable container for scrollable vids */}

        <VideoCard
          channel={"test-channel-first"}
          song={"test-song-first"}
          avatarSrc={
            "https://www.pinclipart.com/picdir/big/385-3857336_react-clipart.png"
          }
          url={
            "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
          }
          likes={820}
          shares={35}
        />
        <VideoCard
          channel={"test-channel-second"}
          song={"test-song-second"}
          avatarSrc={
            "https://www.pinclipart.com/picdir/big/385-3857336_react-clipart.png"
          }
          url={
            "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
          }
          likes={820}
          shares={35}
        />
        <VideoCard
          channel={"test-channel-third"}
          song={"test-song-third"}
          avatarSrc={
            "https://www.pinclipart.com/picdir/big/385-3857336_react-clipart.png"
          }
          url={
            "http://techslides.com/demos/sample-videos/small.webm"
          }
          likes={820}
          shares={35}
        />
      </div>
    </div>
  );
}

export default App;
