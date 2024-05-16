import axios from "axios";
import React from "react";

export const newCourse = async(data)=>{

  console.log(data);
  try{
    const response = await axios.post('http://localhost:8080/createCourse',data)
    return response.data
  } catch(error){
    console.log(error);
    throw error
  }
}