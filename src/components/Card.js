import React from 'react';
import {useNavigate} from 'react-router-dom'
export default ({img,price,location,title,data})=>{
    let navigate = useNavigate();

    return <div onClick={()=>{
        navigate('/details',{
            state:{
                car:data
            }
        });

    }} className='card-lst'>
        <img src={img}/>
        <div className='card-inner-lst'>
            <h5>{data?.eventName}</h5>
            <h5>{data?.eventStartTime}</h5>
        </div>
    </div>
}