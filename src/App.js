import data from "./component/data.json";
import Textimage from "./component/Textimage";
import egimage from './img4.jpg'

import './App.css';

function App() {
  return ( 

    <>
    <div>
    <Textimage
      image= {egimage}
      title="React"
      content="ReactJS, commonly referred to as React, is an open-source JavaScript library developed by Facebook. It is primarily used for building user interfaces (UIs) for single-page applications (SPAs). React allows developers to create reusable UI components that manage their own state and efficiently update the DOM (Document Object Model) when data changes."
      imageDirection="left"
      componentBackgroundColor="#f0f0f0"
    />
  </div>
  </>
  );
}

export default App;
