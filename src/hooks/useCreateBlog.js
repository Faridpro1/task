import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const createBlog =({title,content}) =>
 axios.post("http://localhost:8000/api/blog", {title,content},{
    headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
    }
 })

export const useCreateBlog = () => {
   return useMutation(({title,content}) => createBlog({title,content}))
}