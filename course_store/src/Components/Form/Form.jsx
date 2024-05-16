import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowsRotate, faPen, faTrash, faBook, faUser, faKey, faDollar } from "@fortawesome/free-solid-svg-icons";
import "./Form.css";
import { newCourse } from "../../Services/FormService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const [formData, setFormData] = useState({
    courseId: "",
    courseName: "",
    trainerName: "",
    price: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const postData = async () => {
    try {
      const result = await newCourse(formData);
      toast.success('Course created successfully!');
      console.log(result);
    } catch (error) {
      toast.error('Failed to create course. Please try again.');
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="row mb-3">
              <div className="col d-flex">
                <div className="icon p-2 bg-warning">
                  <FontAwesomeIcon icon={faKey} />
                </div>
                <input
                  name="courseId"
                  type="text"
                  className="form-control"
                  placeholder="Course ID"
                  value={formData.courseId}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col d-flex">
                <div className="icon p-2 bg-warning">
                  <FontAwesomeIcon icon={faBook} />
                </div>
                <input
                  name="courseName"
                  type="text"
                  className="form-control"
                  placeholder="Course Name"
                  value={formData.courseName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col d-flex">
                <div className="icon p-2 bg-warning">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <input
                  name="trainerName"
                  type="text"
                  className="form-control"
                  placeholder="Trainer Name"
                  value={formData.trainerName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col d-flex">
                <div className="icon p-2 bg-warning">
                  <FontAwesomeIcon icon={faDollar} />
                </div>
                <input
                  name="price"
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row pt-1 justify-content-center">
            <div className="col-sm-3">
              <div className="row mb-3">
                <div className="col d-flex justify-content-between">
                  <button onClick={postData} className="btn btn-primary">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button className="btn btn-success">
                    <FontAwesomeIcon icon={faArrowsRotate} />
                  </button>
                  <button className="btn btn-warning">
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button className="btn btn-danger">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
