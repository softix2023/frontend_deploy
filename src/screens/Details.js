
import React from 'react';
import Navbar from '../components/navbar';
import Card from '../components/Card'
import {useLocation,useNavigate} from 'react-router-dom'
import { ImageUrl, mainUrl } from '../API';
import {api} from '../API/index'
import { TailSpin } from 'react-loader-spinner';
import moment from 'moment/moment';
import { toast } from 'react-toastify';

function App() {
  const {state:statex}=useLocation();
  const [data,setdata]=React.useState([]);
  const [isLoading, setIsloading] = React.useState(false);
  const [logs,setlogs]=React.useState([]);
  const [state,setDataStates]=React.useState();
  let navigate = useNavigate();

  
  React.useEffect(()=>{
     if(!statex?.car)
    {
      navigate('/filter');
    }
    else
    {
      setDataStates(statex)
      // FetchData(state.car.user.id)
    }
  },[statex])

  React.useEffect(()=>{
    if(state&&state.car)
   {
      (async ()=>{
        await FetchLogs( state?.car?.eventMappingId);
      })();

      setInterval(async () => {
        await FetchLogs( state?.car?.eventMappingId);
      }, 30000);
   }
   else
   {
     // FetchData(state.car.user.id)
   }
 },[state])

  const FetchLogs= async (id)=>{
    setIsloading(true)
    // console.log(baseURL+"Car/search?title="+search)
    let url="/event/logs?id="+id;
    await api.get(url).then(async y => {
       if (y.status == 200) {
           setlogs(y.data);

          setIsloading(false)
      }
      else {
      
        setIsloading(false)

      }

    }).catch(x => {
      
      setIsloading(false)
    })
  }

  const UpdateBroadCasting=async (eventId,status)=>{
 
    setIsloading(true)
     let url="skyBox/broadCasting?eventId="+eventId+"&broadCastingStatus="+status
    await api.get(url).then(async y => {
       if (y.status == 200) {
        setDataStates({
          ...state,
          car:{
            ...state.car,
            isBroadCasting:!state?.car?.isBroadCasting
          }
        })
          setIsloading(false)
           toast.success("Query executed successfully", {
            position: toast.POSITION.TOP_RIGHT
          });
      }
      else {
        
        setIsloading(false)
        toast.error("Something wen't wrong while performing action", {
          position: toast.POSITION.TOP_RIGHT
        });
      }

    }).catch(x => {
      toast.error(x, {
        position: toast.POSITION.TOP_RIGHT
      });
      setIsloading(false)
    })
  }
  return (
    <>
      <Navbar />
        {
          state && state?.car?<div className='container-fluid lst-dtl'>
          <div className='row'>
              <div className='col-md-12  csfesfe3'>
                <img className='car-img-details' src={state?.car?.image}/>
              
              </div>
              <div className='d-flex justify-content-center mt-4'>
                 <button className='mx-3 btn btn-primary'>Edit</button>
                <button className='mx-3 btn btn-danger'>Delete</button>
                <button onClick={()=>{
                   UpdateBroadCasting(state.car?.eventMappingId,!state.car?.isBroadCasting)

                }} className={`mx-3 btn ${state.car?.isBroadCasting==false?"btn-success":"btn-dark"}`}>
                  
                  {
                                  isLoading == true ? <TailSpin
                                  height="20"
                                  width="40"
                                  radius="2"
                                  color="green"
                                  ariaLabel="loading"
                                  wrapperStyle
                                  wrapperClass
                                /> :<>
                                {state.car?.isBroadCasting==false?"Start":"Stop"} Broadcasting
                                </>
                              }
                  
                  </button>
                </div>
              <div className='col-md-12'>
                <div>
                <h4>Ticket Details</h4>
                <div className='form-control'>
                  <h3><span>{state?.car?.eventName}</span></h3>
                  <h6>Venue Name: <span>{state?.car?.venueName}</span></h6>
                  <h6>Event Id: <span>{state?.car?.eventId}</span> </h6>
                  <h6>List Cost Percentage: <span>{state?.car?.listCostPercentage}%</span> </h6>
                  <h6>Event Mapping Id: <span>{state?.car?.eventMappingId}</span> </h6>
                  {/* <h6>Pages: <span>{state?.car?.pages}</span> </h6> */}
                  <h6>Event Start Time: <span>{state?.car?.eventStartTime}</span> </h6>
                  {/* <h6>Event End Time: <span>{state?.car?.eventEndTime}</span> </h6> */}
                  <h6>In Hand Date: <span>{state?.car?.inHandDate}</span> </h6>
  
                </div>
                </div>
               
              </div>
          </div>
          <div className='logs-tbl table-responsive my-4'>
            <h4>Recent Logs</h4>
          <table className='table table-striped'>
            <tr >
              <th style={{width:"80%",paddingBottom:20}}>Log</th>
              <th style={{paddingBottom:20}}>Date Time</th>
            </tr>
            {
              isLoading==true?<div className='d-flex justify-content-center my-2'><TailSpin width={60}/></div>:<>
                  {logs.map(x=><tr>
                    <td style={{backgroundColor:x?.responseStatus!=1?"red":"white",color:x?.responseStatus!=1?"white":"black"}} ><h5 style={{backgroundColor:x?.responseStatus!=1?"red":"white",color:x?.responseStatus!=1?"white":"black"}} >{x?.apiName}</h5></td>
                    <td style={{backgroundColor:x?.responseStatus!=1?"red":"white",color:x?.responseStatus!=1?"white":"black"}}  ><h5 style={{backgroundColor:x?.responseStatus!=1?"red":"white",color:x?.responseStatus!=1?"white":"black"}} >{moment(x?.createdDate).format("YYYY-MM-DD HH:mm:ss")}</h5></td>
                  </tr>)}  
              </>
            }
            
          </table>
          </div>
          {/* <div className='row mt-4'>
          <h5 className='text-center'>More Cars By {state?.car?.user?.name}</h5>
            <div className='d-flex justify-content-center align-items-center mt-4 flex-wrap'>
              {
                  data.map(x=><Card   img={ImageUrl+x?.image} data={x} title={x?.title} price={x?.price} location={x.user?.location} />
                  )
              }
            </div>
          </div> */}
        </div>:<></>
        }
    </>
  );
}

export default App;
