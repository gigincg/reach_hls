import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'

import {request} from './Api'

const BASE_URL = process.env.REACT_APP_RTSP_BASE_URL || 'http://localhost:8080'

function App() {
   const [sourceUrl, setSourceUrl] = useState();
   useEffect(() => {
     request({
        url: `${BASE_URL}/start`,
        method: "POST",
        body: JSON.stringify({"uri":"rtsp://remote:qwerty123@192.168.1.64:554/"})
     }).then(res => {
        setSourceUrl(`${BASE_URL}${res.uri}`)
     })
   }, [])

   return (
     <div>
       {sourceUrl && <ReactPlayer url={sourceUrl} playing={true} muted={true}/> }
     </div>
   );
}

export default App;