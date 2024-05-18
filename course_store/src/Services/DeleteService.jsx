import axios from "axios";
import React from "react";
import { baseURL } from './BaseURL';

export const deleteCourse = async (courseId) => {
  console.log(courseId);
  try {
    const response = await axios.delete(`${baseURL}deleteCourse/${courseId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting course:", error);
    throw error;
  }
};