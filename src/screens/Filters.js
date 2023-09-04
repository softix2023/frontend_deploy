
import React from 'react';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

import Navbar from '../components/navbar';
import Card from '../components/Card'
import { useLocation } from 'react-router-dom'
import { ImageUrl, mainUrl } from '../API';
import { TailSpin } from 'react-loader-spinner'
import fetch from 'cross-fetch';
import { api } from '../API/index'
import { useNavigate } from 'react-router-dom'

function App() {
  const { state } = useLocation();
  
  const [data, setdata] = React.useState([{
    eventName: "Seattle Mariners",
    eventUrl: "https://www.ticketmaster.com/event/Z7r9jZ1Adpe47?tmrid=TMR-3582544&routing=y?refArtist=K8vZ9171o67",
    eventStartTime: "Sat • May 13 • 1:10 PM",
    eventEndTime:"Sat • May 12 • 1:10 PM",
    inHandDate: "Sat • May 12 • 1:10 PM",
    image: "https://s1.ticketm.net/dam/a/9a5/d22e79fb-1ce3-4919-ba33-9fe0032b69a5_1343211_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=450&height=255&fit=crop&auto=webp"
    ,eventId:"Z7r9jZ1Adpe47",
    eventMappingId:"21331221",
    pages:"[1,2,3,4,5,6]",
    listCostPercentage:"20",
    eventEndTime:"Sat • May 12 • 1:10 PM",
    venueName:"Atlanta Braves vs. Seattle Mariners"

  },
  {
    eventName: "Seattle Mariners",
    eventUrl: "https://www.ticketmaster.com/event/Z7r9jZ1Adpe47?tmrid=TMR-3582544&routing=y?refArtist=K8vZ9171o67",
    eventStartTime: "Sat • May 13 • 1:10 PM",
    inHandDate: "Sat • May 12 • 1:10 PM",
    image: "https://s1.ticketm.net/dam/a/403/fb1379e0-0c54-4550-a940-81a175dbd403_1339871_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=400&height=225&fit=crop&auto=webp"
    ,eventId:"Z7r9jZ1Adpe47",
    eventMappingId:"21331221",
    pages:"[1,2,3,4,5,6]",
    listCostPercentage:"20",
    eventEndTime:"Sat • May 12 • 1:10 PM",
    venueName:"Atlanta Braves vs. Seattle Mariners"
  },
  {
    eventName: "Seattle Mariners",
    eventUrl: "https://www.ticketmaster.com/event/Z7r9jZ1Adpe47?tmrid=TMR-3582544&routing=y?refArtist=K8vZ9171o67",
    eventStartTime: "Sat • May 13 • 1:10 PM",
    inHandDate: "Sat • May 12 • 1:10 PM",
    image: "https://s1.ticketm.net/dam/a/1b9/856d29cb-41e0-494f-ba69-09714e9e51b9_1277391_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=400&height=225&fit=crop&auto=webp"
    ,eventId:"Z7r9jZ1Adpe47",
    eventMappingId:"21331221",
    pages:"[1,2,3,4,5,6]",
    listCostPercentage:"20",
    eventEndTime:"Sat • May 12 • 1:10 PM",
    venueName:"Atlanta Braves vs. Seattle Mariners"
  },
  {
    eventName: "Seattle Mariners",
    eventUrl: "https://www.ticketmaster.com/event/Z7r9jZ1Adpe47?tmrid=TMR-3582544&routing=y?refArtist=K8vZ9171o67",
    eventStartTime: "Sat • May 13 • 1:10 PM",
    inHandDate: "Sat • May 12 • 1:10 PM",
    image: "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=400&height=225&fit=crop&auto=webp"
    ,eventId:"Z7r9jZ1Adpe47",
    eventMappingId:"21331221",
    pages:"[1,2,3,4,5,6]",
    listCostPercentage:"20",
    eventEndTime:"Sat • May 12 • 1:10 PM",
    venueName:"Atlanta Braves vs. Seattle Mariners"
  },
  {
    eventName: "Seattle Mariners",
    eventUrl: "https://www.ticketmaster.com/event/Z7r9jZ1Adpe47?tmrid=TMR-3582544&routing=y?refArtist=K8vZ9171o67",
    eventStartTime: "Sat • May 13 • 1:10 PM",
    inHandDate: "Sat • May 12 • 1:10 PM",
    image: "https://s1.ticketm.net/dam/a/599/f9331497-7667-4f9d-9d26-d144cb25a599_1339911_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=400&height=225&fit=crop&auto=webp"
    ,eventId:"Z7r9jZ1Adpe47",
    eventMappingId:"21331221",
    pages:"[1,2,3,4,5,6]",
    listCostPercentage:"20",
    eventEndTime:"Sat • May 12 • 1:10 PM",
    venueName:"Atlanta Braves vs. Seattle Mariners"
  },
  {
    eventName: "Seattle Mariners",
    eventUrl: "https://www.ticketmaster.com/event/Z7r9jZ1Adpe47?tmrid=TMR-3582544&routing=y?refArtist=K8vZ9171o67",
    eventStartTime: "Sat • May 13 • 1:10 PM",
    inHandDate: "Sat • May 12 • 1:10 PM",
    image: "https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=400&height=225&fit=crop&auto=webp"
    ,eventId:"Z7r9jZ1Adpe47",
    eventMappingId:"21331221",
    pages:"[1,2,3,4,5,6]",
    listCostPercentage:"20",
    eventEndTime:"Sat • May 12 • 1:10 PM",
    venueName:"Atlanta Braves vs. Seattle Mariners"
  }
    , {
    eventName: "Seattle Mariners",
    eventUrl: "https://www.ticketmaster.com/event/Z7r9jZ1Adpe47?tmrid=TMR-3582544&routing=y?refArtist=K8vZ9171o67",
    eventStartTime: "Sat • May 13 • 1:10 PM",
    inHandDate: "Sat • May 12 • 1:10 PM",
    image: "https://s1.ticketm.net/dam/a/ed2/7c4f487d-54ee-44aa-847f-adb3e99cbed2_1325211_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=400&height=225&fit=crop&auto=webp"
    ,eventId:"Z7r9jZ1Adpe47",
    eventMappingId:"21331221",
    pages:"[1,2,3,4,5,6]",
    listCostPercentage:"20",
    eventEndTime:"Sat • May 12 • 1:10 PM",
    venueName:"Atlanta Braves vs. Seattle Mariners"
  }
    , {
    eventName: "Seattle Mariners",
    eventUrl: "https://www.ticketmaster.com/event/Z7r9jZ1Adpe47?tmrid=TMR-3582544&routing=y?refArtist=K8vZ9171o67",
    eventStartTime: "Sat • May 13 • 1:10 PM",
    inHandDate: "Sat • May 12 • 1:10 PM",
    image: "https://s1.ticketm.net/dam/a/9b4/56b40e80-2590-4dce-bd0b-90b4a96119b4_1277311_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=400&height=225&fit=crop&auto=webp"
    ,eventId:"Z7r9jZ1Adpe47",
    eventMappingId:"21331221",
    pages:"[1,2,3,4,5,6]",
    listCostPercentage:"20",
    eventEndTime:"Sat • May 12 • 1:10 PM",
    venueName:"Atlanta Braves vs. Seattle Mariners"
  }]);
  const [search, setsearch] = React.useState({
  });
  const [isLoading, setIsloading] = useState(false);


  React.useEffect(()=>{
          if(state?.cars)
          {
              //
              setdata(state.cars);
          }
          else
          {
            FetchData();
          }
  },[])

  let navigate = useNavigate();

  const FetchData = async () => {
    setIsloading(true)
    // console.log(baseURL+"Car/search?title="+search)
    let url = "event/filter?";
    //console.log(FetchData); process.exit();
    if (search?.eventName)
      url += "&eventName=" + search?.eventName;

    if (search?.eventId)
      url += "&eventId=" + search?.eventId;

    if (search?.eventMappingId)
      url += "&eventMappingId=" + search?.eventMappingId;
    if (search?.venueName)
      url += "&venueName=" + search?.venueName;
    if (search?.inHandDate)
      url += "&inHandDate=" + search?.inHandDate;
    if (search?.eventStartTime)
      url += "&eventStartTime=" + search?.eventStartTime;

    await api.get(url).then(async y => {
      console.log(y);
      if (y.status == 200) {

        setdata(y.data);
        setIsloading(false)
      }
      else {
        setIsloading(false)

      }

    }).catch(x => {
       setIsloading(false)
    })
  }
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div>
        <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Filters</Accordion.Header>
        <Accordion.Body>
        <div className='row'>
           <div className="form-group">
                            <label htmlFor="firstname">Event Name *</label>
                            <input
                                type="text"
                                id="eventName"
                                name="eventName"
                                required={true}
                                value={search.eventName}
                                onChange={(e)=>{
                                    
                                setsearch({
                                    ...search,
                                    eventName:e.target.value
                                })
                                }}
                                placeholder="Event Name"
                                className="form-control form-control-md"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstname">Event Id*</label>
                            <input
                                type="text"
                                id="eventId"
                                name="eventId"
                                required={true}
                                value={search.eventId}
                                onChange={(e)=>{
                                    
                                setsearch({
                                    ...search,
                                    eventId:e.target.value
                                })
                                }}
                                placeholder="Event Id"
                                className="form-control form-control-md"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="firstname">Event Mapping Id*</label>
                            <input
                                type="text"
                                id="eventMappingId"
                                name="eventMappingId"
                                required={true}
                                value={search.eventMappingId}
                                onChange={(e)=>{
                                    
                                setsearch({
                                    ...search,
                                    eventMappingId:e.target.value
                                })
                                }}
                                placeholder="Event Mapping Id"
                                className="form-control form-control-md"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="firstname">Venue Name *</label>
                            <input
                                type="text"
                                id="venueName"
                                name="venueName"
                                required={true}
                                value={search.venueName}
                                onChange={(e)=>{
                                    
                                setsearch({
                                    ...search,
                                    venueName:e.target.value
                                })
                                }}
                                placeholder="Venue Name"
                                className="form-control form-control-md"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstname">In Hand Date*</label>
                            <input
                                type="date"
                                id="inHandDate"
                                name="inHandDate"
                                required={true}
                                value={search.inHandDate}
                                onChange={(e)=>{
                                
                                setsearch({
                                    ...search,
                                    inHandDate:e.target.value
                                })
                                }}
                                placeholder="In Hand Date"
                                className="form-control form-control-md"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstname">Event Start Time *</label>
                            <input
                                type="date"
                                id="eventStartTime"
                                name="eventStartTime"
                                required={true}
                                value={search.eventStartTime}
                                onChange={(e)=>{
                                    
                                setsearch({
                                    ...search,
                                    eventStartTime:e.target.value
                                })
                                }}
                                placeholder="Event Start Time"
                                className="form-control form-control-md"
                            />
                        </div>
                        <div className="d-flex justify-content-center aling-items-center mt-4">
                            <button type="button" onClick={()=>{FetchData()}} className="btn btn-dark btn-rounded btn-sm mb-4">
                               Search
                            </button>
                        </div>
            </div> 
        </Accordion.Body>
      </Accordion.Item>
 
    </Accordion>
           
          <div className='row'>
           
            <div className='col-md-12'>
              <h5 className='text-center mt-4'>All Listed Events</h5>
              <div className='d-flex justify-content-center align-items-center mt-4 flex-wrap'>

                {
                  data.map(x => <Card img={x?.image} data={x}   />
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
