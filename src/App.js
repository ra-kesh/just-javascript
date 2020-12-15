
import './App.css';
import { database } from "./videodb.js";
import { useState } from "react";

const videoDb = Object.keys(database);

function App() {

  const [videoList, setVideoList] = useState("Closures");

  function videoCLickHandeller(videos){
    setVideoList(videos);
  }

  return (
    <div className="App">
          <div className="strip">

          </div>
        <div className="container-main">
          <div className="container-hero">
           
           <div className="text-hero">
                <h1>Just JavaScript</h1>
                <div>
                <p>Deepdive into the world of javascript with this free curated content.</p>
                </div>
               
           </div>
          

               
          </div>
          <div className="container-category">
           {
              videoDb.map((videos,index)=>{
                return <button
                key={index}
                onClick={()=>videoCLickHandeller(videos)}
                > {videos}
                </button>; 
              })
            } 
          </div>
          <div className="container-list">

            {
              database[videoList].map(video=>(

                  <div>
                         <div className="div-video">
                      <div className="video">
                            <iframe 
                            title={video.title}
                            src={video.url} 
                            width="400" height="200"
                            frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                      </div>
                      <div className="description">
                          <div>
                           <h2>{video.title}</h2>
                           </div>
                    
                      </div>
              </div>

                  </div>
           
              ))
            }
              
          </div>
          
        </div>




























      {/* <h1>just javascript</h1>
      
        {

            videoDb.map((videos,index)=>{
              return <button
              key={index}
              onClick={()=>videoCLickHandeller(videos)}
              > {videos}
              </button>; 
            })
        } 


          {
            database[videoList].map(video => (
            <div>
                <div>           
                  <iframe 
                  title={video.title}
                  width="853" height="480" src={video.url} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div>
                  <p><a href= {video.url}>full screen</a></p>
                </div>
           </div>
             
               
              
            ))
          }
          
         */}

          
      
    </div>
  );
}

export default App;
