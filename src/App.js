import { Routes , Route } from 'react-router-dom';
import './App.css';
import { AuthDetail , GoogleSign , SignIn , SignUp} from '../src/component/auth/index.js'
import {UploadsEvent , MyGallery} from "../src/Pages/index.js";
import { useState , React} from 'react';


function App() {

  const [onImagesUpload , setOnImageUpload] = useState([]);

  const handleuploads = (img_url)=> {
   setOnImageUpload((prevImages) => [...prevImages , img_url]);
  } 

  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/google-sign' element={<GoogleSign />} />
      <Route path='/auth-detail' element={<AuthDetail />} />
      <Route path='/upload' element={<UploadsEvent onImageUpload={handleuploads} />} />
      <Route path='/gallery' element={<MyGallery  displayImg={onImagesUpload}  />} />

    </Routes>
    
  );
}

export default App;
