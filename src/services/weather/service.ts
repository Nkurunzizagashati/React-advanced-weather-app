import axios from "axios";

export const getWeatherDetailsService = async(city: string)=>{
  try{
const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b6ff5397e72ef73e0788315e37c384ba`)
return res
  }catch(error){
console.log("error",error)
  }
}