
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { TailSpin } from 'react-loader-spinner'
import { api } from '../API/index'
import { json, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { toast } from 'react-toastify';


function App() {
    const [file, setfile] = React.useState();
    const [cookies, setCookie, removeCookie] = useCookies('user');
    const [car, setCar] = React.useState({
        eventName: '',
        eventUrl: '',
        eventId: '',
        inHandDate: '',
        eventMappingId: '',
        pages: '',
        listCostPercentagepages: '',
        eventStartTime: '',
        venueName: '',
        image: '',
        createdBy: 1,
    })
    let navigate = useNavigate();
    const [isLoading, setIsloading] = useState(false);
    const [error, seterror] = React.useState("");
    const submit = () => {
        //   console.log(car); 
        PostData()
    }

    const PostData = async () => {
        setIsloading(true)
        // console.log(baseURL+"Car/search?title="+search)


        await api.post("event", {
            ...car,
            pages: JSON.stringify(car.pages)
        }).then(async y => {
            console.log(y);
            if (y.status == 200) {
                toast.success("Event added successfully", {
                    position: toast.POSITION.TOP_RIGHT
                });
                setCar({
                    eventName: '',
                    eventUrl: '',
                    eventId: '',
                    inHandDate: '',
                    eventMappingId: '',
                    pages: '',
                    listCostPercentagepages: 0,
                    eventStartTime: '',
                    venueName: '',
                    image: '',
                    createdBy: 1,
                });
                setIsloading(false)
            }
            else {

                toast.error(y.data, {
                    position: toast.POSITION.TOP_RIGHT
                });
                // seterror(y.data)
                setIsloading(false)

            }

        }).catch(x => {
            toast.error(x, {
                position: toast.POSITION.TOP_RIGHT
            });
            setIsloading(false)
        })
    }

    React.useEffect(() => {
        if (!cookies?.user) {
            navigate('/')
        }
    }, [])
    return (
        <>
            <Navbar />
            <div className='d-flex w-100 justify-content-center aling-items-center'>
                <div className='form-cst'>
                    <form className="form-control" onSubmit={(e) => {
                        e.preventDefault();
                        submit();
                    }} method="post"
                    >
                        <h5>Add New Event</h5>
                        <div className='d-flex flex-wrap sadweds-edw'>
                            <div className="form-group">
                                <label htmlFor="firstname">Event Name *</label>
                                <input
                                    type="text"
                                    id="eventName"
                                    name="eventName"
                                    required={true}
                                    value={car.eventName}
                                    onChange={(e) => {

                                        setCar({
                                            ...car,
                                            eventName: e.target.value
                                        })
                                    }}
                                    placeholder="Event Name"
                                    className="form-control form-control-md"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="firstname">Event Url *</label>
                                <input
                                    type="text"
                                    id="eventUrl"
                                    name="eventUrl"
                                    required={true}
                                    value={car.eventUrl}
                                    onChange={(e) => {

                                        setCar({
                                            ...car,
                                            eventUrl: e.target.value
                                        })
                                    }}
                                    placeholder="Event Url"
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
                                    value={car.eventId}
                                    onChange={(e) => {

                                        setCar({
                                            ...car,
                                            eventId: e.target.value
                                        })
                                    }}
                                    placeholder="Event Id"
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
                                    value={car.inHandDate}
                                    onChange={(e) => {

                                        setCar({
                                            ...car,
                                            inHandDate: e.target.value
                                        })
                                    }}
                                    placeholder="In Hand Date"
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
                                    value={car.eventMappingId}
                                    onChange={(e) => {

                                        setCar({
                                            ...car,
                                            eventMappingId: e.target.value
                                        })
                                    }}
                                    placeholder="Event Mapping Id"
                                    className="form-control form-control-md"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstname">Pages *</label>
                                <input
                                    type="text"
                                    id="pages"
                                    name="pages"
                                    required={true}
                                    value={car.pages}
                                    onChange={(e) => {

                                        setCar({
                                            ...car,
                                            pages: e.target.value
                                        })
                                    }}
                                    placeholder="[1,2,3,4,5,6]"
                                    className="form-control form-control-md"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstname">List Cost Percentage *</label>
                                <input
                                    type="text"
                                    id="listCostPercentage"
                                    name="listCostPercentage"
                                    required={true}
                                    value={car.listCostPercentage}
                                    onChange={(e) => {

                                        setCar({
                                            ...car,
                                            listCostPercentage: e.target.value
                                        })
                                    }}
                                    placeholder="List Cost Percentage"
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
                                    value={car.eventStartTime}
                                    onChange={(e) => {

                                        setCar({
                                            ...car,
                                            eventStartTime: e.target.value
                                        })
                                    }}
                                    placeholder="Event Start Time"
                                    className="form-control form-control-md"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstname">Event Image *</label>
                                <input
                                    type="text"
                                    id="ymage"
                                    name="image"
                                    required={true}
                                    value={car.image}
                                    onChange={(e) => {

                                        setCar({
                                            ...car,
                                            image: e.target.value
                                        })
                                    }}
                                    placeholder="Event Image"
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
                                    value={car.venueName}
                                    onChange={(e) => {

                                        setCar({
                                            ...car,
                                            venueName: e.target.value
                                        })
                                    }}
                                    placeholder="Venue Name"
                                    className="form-control form-control-md"
                                />
                            </div>
                        </div>
                        <p style={{ color: "red" }}>{error ? error : ""}</p>

                        <div className="d-flex justify-content-center aling-items-center mt-4">
                            <button type="submit" className="btn btn-dark btn-rounded btn-sm mb-4">
                                Add New Event
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default App;
