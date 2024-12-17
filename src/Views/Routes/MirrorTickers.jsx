import "./style.css"
 const MirrorTickers = () => {
  const playVideo = () => { 
    var yt = document.getElementById("myYoutubeVideo");
    var player = yt.contentWindow;
    player.postMessage('{"event":"command","func":"playVideo"}', '*');
   }


  return (
    <div> 
      <div>
        <button onClick={() => playVideo()} className="boton">Click</button>
        <iframe 
        id="myYoutubeVideo" 
        width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1" 
        title="YouTube video player"
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  )
}

export default MirrorTickers