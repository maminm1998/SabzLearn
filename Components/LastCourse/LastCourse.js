import React, { useEffect, useState } from "react";
import CourseBox from "../CourseBox/CourseBox";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./LastCourse.css";
export default function LastCourse() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:4000/v1/courses`)
    .then(res=>res.json())
    .then(data=>console.log(data))
  }, []);

  return (
    <div className="courses">
      <div className="container">
        <SectionHeader
          title="جدیدترین دوره ها"
          caption="سکوی پرتاپ شما به سمت موفقیت"
          showBtn={true}
          btnhref="/courses"
        />
      </div>
      <div className="courses-content">
        <div className="container">
          <div className="row">
            {courses.map((course) => (
              <CourseBox {...course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
