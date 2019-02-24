function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    var lat= position.coords.latitude;
    var long= position.coords.longitude;
    console.log(lat);
    console.log(long);
  
  
  
              //**********************************************
          var map = L.map('mapContainer').setView([lat,long ], 15);
  
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
  
      
      
      
      
  
  
      var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" +long+ "&appid=0bda5bdbd55843f5716ea9febd9f26a7" ;
  
  
            //***************************fetch*******************
  
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      
      
       
      ciudad = myJson.name;
      document.getElementById("demo3").innerHTML = ciudad;
  
  
      coordenx = myJson.coord.lat;
      coordeny = myJson.coord.lon;
      document.getElementById("demo4").innerHTML = coordenx;
      document.getElementById("demo5").innerHTML = coordeny;
  
  
  
       humedad = myJson.main.humidity;
       document.getElementById("demo").innerHTML = humedad;
       
      y = myJson.main.temp_max;
      
      z = y - 273.15;
      
      console.log(y);
      console.log(z);
     //document.getElementById("demo2").innerHTML = z;
  
  
  
     tempmin = myJson.main.temp_min;
  
     w = tempmin - 273.15; 
     //document.getElementById("demo6").innerHTML = w;
     
     temp = myJson.main.temp;
     t = temp - 273.15;
     document.getElementById("demo7").innerHTML = t;
  
  
  presion = myJson.main.pressure;
  document.getElementById("demo8").innerHTML = presion;
  
  velocidaddelviento = myJson.wind.speed;
  
  console.log(velocidaddelviento);
  document.getElementById("demo9").innerHTML = velocidaddelviento;
  
  
  
  
       /*document.getElementById("demo2").innerHTML = y;*/
      
    });
  
    
    
              //********************************fin_fetch****************************************
  
            
             
              L.marker([lat,long ]).addTo(map)
      .bindPopup('Aca estoy');
      //.openPopup();
  

     

    
           
      
            
            
            }


            