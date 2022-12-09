import React from 'react'
import { useForm} from "react-hook-form"
import {useCreateBlog} from "../hooks/useCreateBlog"
const AddBlog = () => {
  const {register,handleSubmit} = useForm()
  const {mutate} = useCreateBlog()
  const onSubmit = (values) => {
    console.log(values);
    mutate(values)
  }
  return (
    <div className='container mt-5'>
      <form onSubmit={handleSubmit(onSubmit)} className="row">
        <input type="text"  {...register("title")} className="mt-2"/>
        <input type="textarea" {...register("content")} placeholder="description" className='mt-3'/>
        <button type='submit' className='btn btn-primary mt-4'>Create Blog</button>
      </form>
    </div>
  )
}

export default AddBlog

