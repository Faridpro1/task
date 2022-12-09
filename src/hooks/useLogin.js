import axios from "axios"
import {useMutation} from "@tanstack/react-query"
import { useStore } from "../store"

const loginUser = ({email,password})=>
axios.post('http://localhost:8000/api/auth/login',{
    email,
    password
  })

export const useLogin =() =>{
  const setToken = useStore((state) => state.setToken)
  return useMutation(({email,password}) =>loginUser({email,password}),{
  onSuccess: (data) =>{
    console.log(data);
    localStorage.setItem("token",data.data)
    setToken(data.data)
  }
}) 
}