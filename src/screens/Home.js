
import { useState } from 'react';
import Navbar from '../components/navbar';
import Card from '../components/Card'
import { TailSpin } from 'react-loader-spinner'
import fetch from 'cross-fetch';
import {api} from '../API/index'
import {useNavigate} from 'react-router-dom'

function App() {
  const [search, setsearch] = useState("");
  const [isLoading, setIsloading] = useState(false);
  let navigate = useNavigate();

  const FetchData= async ()=>{
    setIsloading(true)
    // console.log(baseURL+"Car/search?title="+search)
    await api.get("event/search?title="+search).then(async y => {
       console.log(y);
      if (y.status == 200) {
        navigate('/filter',{ state: {
          cars:y.data
        } });

          setIsloading(false)
      }
      else {
      
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
        <div>
          <img style={{maxWidth:600,width:"100%",borderRadius:10}} src={require('../images/homebanner.jpg')} />
          <div className='form-cst'>
            <div className="">
              <h5 className='text-center mt-2'>Search for Event</h5>
              <div className="form-group">

                <input
                  type="text"
                  id="car"
                  name="card"
                  required={true}
                  onKeyDown={async (e)=>{
                    
                    if(e.key=='Enter')
                    {
                      if (search != "") {
                        await FetchData()
                        }
                    }
                  }}
                  placeholder="Monster Jam"
                  onChange={(e) => { setsearch(e.target.value) }}
                  className="form-control form-control-md"
                />
              </div>

              <div className="d-flex justify-content-center aling-items-center mt-4">
                <button  onClick={async () => {
                  if (search != "") {
                    await FetchData()
                    }
                }} type="button" className="btn btn-dark btn-rounded btn-sm mb-4">
                  {
                    isLoading == true ? <TailSpin
                    height="20"
                    width="40"
                    radius="2"
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                  /> : "Search"
                  }
                 
                </button>
               
              </div>
            </div>
          </div>
           
        </div>
      </div>
    </>
  );
}

export default App;
