import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Layout from "./layout";
import './index.css'
import Home from "./componenets/Home/Home";
import About from "./componenets/About/About";
import Contact from "./componenets/Contact/Contact";
import User from "./componenets/User/user";
import Github,{githubapiinfo} from "./componenets/Github/Github";
import { BrowserRouter,  Route, 
   RouterProvider,
    createBrowserRouter, 
    createRoutesFromElements,
  } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout/>,
//     children:[
//       {
//         path:"home",
//         element:<Home/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       }
//     ]
//   }
// ]
// )
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />} >

      <Route path="home" element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/contact" element={<Contact/>} />
      <Route
       path='/user/:userid'
       element={<User/>}
         >
        {/* <Route path=':userid' /> */}
      </Route>
<Route path='/github' element={<Github/>}
loader={githubapiinfo}
/>
  </Route>


  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
    <App/> 
    </BrowserRouter>          */}
<RouterProvider router={router}/>

  </StrictMode>
)