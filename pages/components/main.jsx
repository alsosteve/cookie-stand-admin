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

  function submitHandler(event) {
    console.log(event)
    let { value } = event.target
    changeData(value)
  }

  return (
    <div className="py-6">
      <Form submitHandler={submitHandler}/>

      <p className="py-6 text-xs">Report Table Coming Soon...</p>
      <p className="text-xs">"location":"{location}","minCustomers":"{min}","maxCustomers":"{max}","aveCookies":"{ave}"</p>
    </div>
  )
}
