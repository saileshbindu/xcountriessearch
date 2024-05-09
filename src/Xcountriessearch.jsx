import { useEffect } from "react";
import { useState } from "react";
import './xcountriessearch.css'

const Xcountriessearch = () =>{
const [country, setCountry] = useState([])
const [searchVal, setsearchVal]=useState("")
const countryURL = "https://restcountries.com/v3.1/all";

useEffect(()=>{
    fetch(countryURL)
    .then((response) =>response.json())
    .then((data) => setCountry(data))
    .catch((error)=> console.log(error))

},[]);


const filterCountry = country.filter((item)=>item.name.common.toLowerCase().includes(searchVal.toLowerCase()))


const CountryCard = ({imageURL, imageAlt, title}) =>{
return(<div className="courtriesMain">
<img src={imageURL} alt={imageAlt} />
<h3>{title}</h3>
</div>)
}

return(<div>
    <input type="text" value={searchVal} placeholder="Search" onChange={(e) => setsearchVal(e.target.value)}/>
    <div className="countryCard">
        {filterCountry.map((item) =>(
            <CountryCard key={item.cca3} imageURL={item.flags.png} imageAlt={item.flags.alt} title={item.name.common} />
        ))}
        
    </div>
</div>)
}


export default Xcountriessearch;