import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { useEffect } from 'react';
import Loader from './components/Loader/loader';
import Home from './components/Home/Home'
import SignUp from "./components/SignUp/SignUp";
import Display from "./components/Display/Display";





 



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <> 
   

<Navbar />
<Home />

<SignUp />
<Display />




</>

  
  );
  
}

export default App
