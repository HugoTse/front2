import './index.css';

import Header from './Header';
import Comment from './Comment';

import { useEffect, useState } from 'react';
import apiCall from './apiCall';

import "@aws-amplify/ui-react/styles.css";

import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {

  const[cid, setCid] = useState('')
  const[timestamp, setTimestamp] = useState('')
  const[thand, setThand] = useState('')
  const[fname, setFname] = useState('')
  const[lname, setLname] = useState('')
  const[dob, setDob] = useState('')
  const[region, setRegion] = useState('')
  const[text, setText] = useState('')
  const[ir, setIr] = useState('')


  const[fetchError, setFetchError] = useState(null);

  const processImage = async (cid, timestamp, thand, fname, lname, dob, region, text, ir) => {
    // const url = 'https://s1btqoss8b.execute-api.us-west-2.amazonaws.com/dev/processimage?';
    // Testing with API Gateway - Calling the 20220628 api gateway api right now
    const postLiveOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        "Access-Control-Allow-Credentials" : true
      },
      body: JSON.stringify({"campaignId": cid, "service": timestamp, "gcpclaim": thand, "winloss": fname, "priority": lname, 
    "serviceteam": dob}),
    // redirect: 'follow'
    }
    // const resultLive = await apiCall('https://2vxmc33nni.execute-api.us-west-2.amazonaws.com/dev', postLiveOptions);
    // if(resultLive) setFetchError(resultLive);

    const resultLive = await apiCall('https://7covdp4jnl.execute-api.us-west-2.amazonaws.com/dev/uploadimage/20220714s3bucket/react.json', postLiveOptions);
    if(resultLive) setFetchError(resultLive);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit() was called');
    processImage(cid, timestamp, thand, fname, lname, dob, region, text, ir);
    console.log('processImage() was called from handleSubmit');
    setCid('');
    setTimestamp('');
    setThand('');
    setFname('');
    setLname('');
    setDob('');
    setRegion('');
    setText('');
    setIr('');
  }

  return (
    <View className="App">
      <Header />
      {/* <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card> */}
      <Comment
        handleSubmit={handleSubmit} 
        cid={cid}
        setCid={setCid}
        timestamp={timestamp}
        setTimestamp={setTimestamp}
        thand={thand}
        setThand={setThand}
        fname={fname}
        setFname={setFname}
        lname={lname}
        setLname={setLname}
        dob={dob}
        setDob={setDob}
        region={region}
        setRegion={setRegion}
        text={text}
        setText={setText}
        ir={ir}
        setIr={setIr}
      />

      <Card>
        <Button onClick={signOut}>Sign Out</Button>
      </Card>
    </View>
  );
}

export default withAuthenticator(App);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>

//       </header>
//     </div>
//   );
// }

// export default App;
