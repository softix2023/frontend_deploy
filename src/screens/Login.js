
import React,{useState} from 'react';
import Navbar from '../components/navbar';
import { TailSpin } from 'react-loader-spinner'
import {api} from '../API/index'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import {  toast } from 'react-toastify';

function App() {
    const [cookies,setCookie]=useCookies();
      const [user,setuser]=React.useState({
        email:'',
        password:''
    })
    let navigate = useNavigate();
    const [isLoading, setIsloading] = useState(false);
    const [error,seterror]=React.useState("");
     
    const submit=()=>{
        PostData()
    }

    const PostData= async ()=>{
        setIsloading(true)
        // console.log(baseURL+"Car/search?title="+search)
        await api.get("User/Login?email="+user.email+"&password="+user.password).then(async y => {
           console.log(y);
          if (y.status == 200) {
            console.log(y.data);
            setCookie("user",y.data)
            navigate('/');
               setIsloading(false)
          }
          else {
            console.log(y);
            toast.error(y.data, {
                position: toast.POSITION.TOP_RIGHT
              });
 
            setIsloading(false)
            
          }
    
        }).catch(x => {
          
          toast.error(x, {
            position: toast.POSITION.TOP_LEFT
          });
          setIsloading(false)
        })
      }
    return (
        <>
            <Navbar />
            <div className='d-flex w-100 justify-content-center aling-items-center'>
                <div className='form-cst'>
                    <form  className="form-control" onSubmit={(e)=>{
                        e.preventDefault();
                        submit();
                    }} method="post">
                        <h5>Login</h5>
                        <div className="form-group">
                            <label htmlFor="firstname">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required={true}
                                onChange={(e)=>{
                                    setuser({
                                        ...user,
                                        email:e.target.value
                                    })
                                        
                                }}
                                placeholder="email@mail.com"
                                className="form-control form-control-md"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstname">Password *</label>
                            <input
                                type="password"
                                id="password"
                                required={true}
                                name="password"
                                placeholder="*****"
                                onChange={(e)=>{
                                    setuser({
                                        ...user,
                                        password:e.target.value
                                    })
                                        
                                }}
                                className="form-control form-control-md"
                            />

                        </div>
                        <p style={{color:"red"}}>{error?error:""}</p>
                        <div className="d-flex justify-content-center aling-items-center mt-4">
                            <button type="submit" className="btn btn-dark btn-rounded btn-sm mb-2 w-100">
                            {
                                isLoading == true ? <TailSpin
                                height="20"
                                width="40"
                                radius="2"
                                color="green"
                                ariaLabel="loading"
                                wrapperStyle
                                wrapperClass
                              /> : "Login"
                            }
                            </button>
                             
                        </div>
                        <div className="d-flex justify-content-center aling-items-center ">
                        {/* <a href="/register  " className="btn btn-dark btn-rounded btn-sm mb-4 w-100">
                                Register
                            </a> */}
                             
                        </div>
                    </form>
                </div>
            </div>
 
        </>
    );
}

export default App;
