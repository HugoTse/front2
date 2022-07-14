import './index.css';

import Header from './Header';
import Comment from './Comment';

import { useEffect, useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Handle submit was called');
  }

  return (
    <View className="App">
      <Header />
      {/* <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card> */}
      
      <Comment
        handleSubmit={handleSubmit} 
      />

      
      <Button onClick={signOut}>Sign Out</Button>
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
