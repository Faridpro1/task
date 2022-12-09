import React from 'react'
import { useForm} from "react-hook-form"
import { useLogin } from '../hooks/useLogin'
import { useNavigate } from 'react-router-dom'
 
const Login = () => {
  const {register,handleSubmit} = useForm()
  const { mutate ,data} = useLogin();  
  const navigate = useNavigate()
  const onSubmit = ( value) => {
    mutate(value);
    navigate("/")
  }
  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: "100vh" }}>
      <form  onSubmit={handleSubmit(onSubmit)} classNameName='row'>
        <h1 className='text-center'>Login</h1>
        <div className="form-outline">
          <input type="text" style={{border:'1px solid #555'}}  placeholder='Email' className="form-control mt-3" {...register("email")}/>
          <input type="password" style={{border:'1px solid #555'}} placeholder="password" className="form-control mt-3" {...register("password")}/>
          <div  className=' d-flex justify-content-center align-items-center'>
          <button className='btn btn-primary mt-3'>Login</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login