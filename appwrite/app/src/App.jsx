import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import conf from './conf/conf'
function App() {
console.log(conf.APPWRITE_BUCKET_ID);
  return (
    <>
    <div>BLOG PROJECT WITH APPWRITE</div>
    </>
  )
}

export default App
