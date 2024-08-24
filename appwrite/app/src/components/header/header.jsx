import React from 'react'
import { Container,LogoutBtn,Logo, } from "../index";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function header() {
  const navigate = useNavigate()
  const authStatus = useSelector(state=>state.auth.status)
  const navItem = [
    {
      name:"Home",
      slug:"/",
      active:true
    },
    {
      name:"Login",
      slug:"/login",
      active:!authStatus
    },
    {
      name:"SignUp",
      slug:"/signup",
      active:!authStatus
    },
    {
      name:"All Posts",
      slug:"/all-posts",
      active:authStatus
    },
    {
      name:"Add Post",
      slug:"/add-post",
      active:authStatus
    }
  ]
  return (
    <div>header</div>
  )
}
