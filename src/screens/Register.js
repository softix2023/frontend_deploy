

import React,{useState} from 'react';
import Navbar from '../components/navbar';
import { TailSpin } from 'react-loader-spinner'
import {api} from '../API/index'
import {useNavigate} from 'react-router-dom'

function App() {
  const [user,setuser]=React.useState({
    email:'',
    password:'',
    phoneNumber:'',
    name:'',
    role:2,
    location:'',
})
let navigate = useNavigate();
const [isLoading, setIsloading] = useState(false);
const [error,seterror]=React.useState("");
const submit=()=>{
  // console.log(user); 
  PostData()
}

const PostData= async ()=>{
    setIsloading(true)
    // console.log(baseURL+"Car/search?title="+search)
    await api.post("User/Register",user).then(async y => {
       console.log(y);
      if (y.status == 200) {
        seterror("Account created successfully")
        setuser({
          email:'',
          password:'',
          phoneNumber:'',
          name:'',
          role:2,
          location:'',
      });
      setIsloading(false)
      }
      else {
        seterror(y.data)
        setIsloading(false)

      }

    }).catch(x => {
      console.log(x)
      setIsloading(false)
    })
  }
  return (
    <>
      <Navbar />
      <div className='d-flex w-100 justify-content-center aling-items-center'>
        <div className='form-cst'>
          <form className="form-control" onSubmit={(e)=>{
                        e.preventDefault();
                        submit();
                    }} method="post">
            <h5>Register</h5>
            <div className="form-group">
              <label htmlFor="firstname">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required={true}
                value={user.name}
                onChange={(e)=>{
                  setuser({
                      ...user,
                      name:e.target.value
                  })
                      
              }}
                placeholder="Faraz Iqbal"
                className="form-control form-control-md"
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstname">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                required={true}
                placeholder="email@mail.com"
                onChange={(e)=>{
                  setuser({
                      ...user,
                      email:e.target.value
                  })
                      
              }}
                className="form-control form-control-md"
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstname">Password *</label>
              <input
                type="password"
                id="password"
                required={true}
                value={user.password}
                onChange={(e)=>{
                  setuser({
                      ...user,
                      password:e.target.value
                  })
                      
              }}
                name="password"
                placeholder="*****"
                className="form-control form-control-md"
              />

            </div>
           
            <div className="form-group">
              <label htmlFor="firstname">Phone Number *</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                required={true}
                value={user.phoneNumber}
                placeholder="+92-000-0000000"
                onChange={(e)=>{
                  setuser({
                      ...user,
                      phoneNumber:e.target.value
                  })
                      
              }}
                className="form-control form-control-md"
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstname">Location *</label>
              <input
                type="text"
                id="address"
                value={user.location}
                name="address"
                required={true}
                placeholder="North Karachi"
                onChange={(e)=>{
                  setuser({
                      ...user,
                      location:e.target.value
                  })
                      
              }}
                className="form-control form-control-md"
              />
            </div>
            <div className="form-group mt-2" >
              <label >Select Account Type *</label>
              <br></br>
              <input type="radio" 
               onChange={(e)=>{
                setuser({
                    ...user,
                    role:e.target.value
                })
                    
            }}
              id="atypep" checked  name="a_type" value="2" />
              <label for="atypep" checked="checked" >Purchaser</label>
              <input
              onChange={(e)=>{
                setuser({
                    ...user,
                    role:e.target.value
                })
                    
            }}
              type="radio" id="atypes"  name="a_type" value="3" />
              <label for="atypes">Seller</label>
             

            </div>
            <p style={{color:"red"}}>{error?error:""}</p>

            <div className="d-flex justify-content-center aling-items-center mt-4">
              
              <button type="submit" className="btn btn-dark btn-rounded btn-sm mb-4 w-100">
              {isLoading == true ? <TailSpin
                                height="20"
                                width="40"
                                radius="2"
                                color="green"
                                ariaLabel="loading"
                                wrapperStyle
                                wrapperClass
                              /> : " Sign Up"
                            } 
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
