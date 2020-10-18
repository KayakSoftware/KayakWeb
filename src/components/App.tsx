import React, { useState } from "react";
import axios from "axios";


function App() {

  const [prediction, setPrediction] = useState("")

  const uploadData = async () => {

   var result = await axios.post("http://localhost:5000/predict",
   {
     data: [{
       timeStamp: 123123,
       xAxis: 10,
       yAxis: 15,
       zAxis: 11
     },
     {
      timeStamp: 123123,
      xAxis: 10,
      yAxis: 15,
      zAxis: 11
    }]
   })

   setPrediction(result.data);

   console.log(result)
  }

  return <div>Hejsa jeg er en app
    <button onClick={() => uploadData()}>Uploaad</button>
    Prediction: {prediction}
  </div>;
}

export default App;
