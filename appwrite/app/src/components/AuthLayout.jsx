import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({
    children,
    authentication = true
}) {
    const navigate =  useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector(state=>state.auth.status)
// after creating route we gothrough this again
 
    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authentication,authStatus,navigate])
    return (
        loader? <h1>...Loading</h1> : <>{children}</>
        )
        

}
const authLayout = Protected()
export default authLayout 
