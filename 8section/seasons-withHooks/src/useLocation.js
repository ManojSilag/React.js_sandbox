import { useState, useEffect} from 'react'

const UseLocation = () => {

    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
  
    useEffect(() => {
      window.navigator.geolocation.getCurrentPosition(
        (Position) => setLat(Position.coords.latitude),
        (err) => setErrorMessage(err.message) 
      )
    }, []);

    return [ lat, errorMessage ];
}
 
export default UseLocation;