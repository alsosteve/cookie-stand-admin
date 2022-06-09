import { useState } from 'react';
import Form from './Form';

export default function Main() {
  let [location, setLocation] = useState("Barcelona");
  let [min, setMin] = useState("2");
  let [max, setMax] = useState("4");
  let [ave, setAve] = useState("2.5")
  

  function changeData(data) {
    setLocation(data.location.value);
    setMin(data.min.value);
    setMax(data.max.value);
    setAve(data.ave.value);
  }


  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    changeData(event.target);
  };

  const handleChange = (event) => {
    let { value } = event.target;
  };

  return (
    <div className="py-6">
      <Form handleSubmit={handleSubmit} handleChange={handleChange}/>
     
      <p>Report Table Coming Soon...</p>
      <p>"location":"{location}","minCustomers":"{min}","maxCustomers":"{max}","aveCookies":"{ave}"</p>
    </div>
  )
}
