
    /* Global Variables */
    // Create a new date instance dynamically with JS
    const apikey = "31c3627d9d33b84c7a575fc11b6d7dfe";
    const base="https://api.openweathermap.org/data/2.5/weather?zip=";
    const d = new Date();
    const newDate = (d.getMonth()+1) + "." + d.getDate() + "." + d.getFullYear();
    
    const Fetching = async () => {
      //creating the url
      const zip =document.getElementById('zip').value;
      const feedback=document.getElementById('feelings').value;
      const url =base+zip+'&appid='+apikey;
      
      
      //fetching temprature
      const result = await fetch(url);
      const data = await result.json();
      const cels=data.main.temp- 273.15
      const temprature=parseInt(cels);
      const combined={date:newDate,feed:feedback,temp:temprature,}
      
      
      
      // storing data in the server
       await fetch('/p', {
        method: "POST",
        credentials: "same-origin",
        headers:{ 'Content-Type':'application/json'},
        body:JSON.stringify(combined),
      });
      
      
      //fetching data from server
      const a=await fetch("/g")
      console.log(a)
      const b=await a.json()






      // updating ui
      document.getElementById('date').innerHTML=''
      document.getElementById('temp').innerHTML=''
      document.getElementById('content').innerHTML=''
      document.getElementById('date').append(b.date)
      document.getElementById('temp').append(b.temp+' '+'C')
      document.getElementById('content').append(b.feed)
    };




    //adding event listner to the button
    document.getElementById("generate").addEventListener("click",Fetching);
    
    

  
  