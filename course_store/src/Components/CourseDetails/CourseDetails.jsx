import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CourseDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function CourseDetails() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await axios.get("http://localhost:8080/allCourses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

    fetchCourses();
  }, []);

  return (
    <div className="container mb-4">
      <div className="row justify-content-center mt-5">
        <div className="col-sm-10">
          <div className="row details justify-content-center py-1">
            <div className="col-md-1">
              <h4>ID</h4>
            </div>
            <div className="col-md-3">
              <h4>Course Name</h4>
            </div>
            <div className="col-md-3">
              <h4>Trainer Name</h4>
            </div>
            <div className="col-md-2">
              <h4>Course Price</h4>
            </div>
            <div className="col-md-1">
              <h4>Edit</h4>
            </div>
          </div>
          {courses.map((course) => (
            <div
              className="row details justify-content-center py-2"
              key={course.id}
            >
              <div className="col-md-1">{course.courseId}</div>
              <div className="col-md-3">{course.courseName}</div>
              <div className="col-md-3">{course.trainerName}</div>
              <div className="col-md-2">{course.price}</div>
              <div className="col-md-1 bg-transparent">
                <button className="icon-button">
                  <FontAwesomeIcon className="edit-icon" icon={faEdit} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
