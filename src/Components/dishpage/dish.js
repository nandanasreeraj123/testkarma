import React,{useState,useEffect} from "react";
import "./dish.css";
import Dropdown from "react-bootstrap/Dropdown";
import Rests from "./rest";
import axios from 'axios';

export default function Dishfn() {
    const [s,setS]=useState([]);
    const [i,seti]=useState(0);
    const [lat,setLat] =useState(0);
    const [lon,setLon] =useState(0);
    const [city,setCity] = useState('Select your city');
    // const c =['tvm','mumbai','chennai'];
    const Clicking = (e) => {
        setCity(e.name);
        seti(e.id);
        setLat(e.lat);
        setLon(e.long);
    }
    const cl = [{
      id:1,
      name:"tvm",
      lat:8.524139,
      long:76.936638,
    },
    {
      id:2,
      name:"Banglore",
      lat:12.971599,
      long:77.594566,
    },
   {
      id:3,
      name:"chennai",
      lat:13.0827,
      long:80.2707,
    },]
    useEffect(()=>{axios.get(`https://developers.zomato.com/api/v2.1/search?count=3&lat=${lat}&lon=${lon}`, { 
        
            headers: {'user-key': 'cbac798893e1ad3ea0d5acf222474f46'}
            }).then(function(response){
              console.log(response);
            setS({
                restaurants: response.data.restaurants
            });
            
        });},[i,lat,lon]);
        // console.log(s)
  return (
    <div>
      <div className="flexing">
        <div>
          <img src="images/Group.png" alt="rider"></img>
        </div>
        <div className="city">
          <div>
            <h3 className="where">Where do you want us to deliver?</h3>
          </div>
          <Dropdown className="drops">
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              {city}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {cl.map((cities)=>
                <li key={cities.id} >
              <Dropdown.Item href="#" onClick={(e)=>Clicking(cities)}>{cities.name}</Dropdown.Item></li>
                )}
            </Dropdown.Menu>
          </Dropdown>
          <div>
                {(city!=='Select your city')&&<p className="deliver">We deliver to {city}</p>}
          </div>
        </div>
      </div>
      <Rests s={s}/>
    </div>
  );
}
