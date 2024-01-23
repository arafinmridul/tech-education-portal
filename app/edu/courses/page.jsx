"use client";

import { useState, useEffect } from "react";
import LoadingPage from "../../loading.jsx";
import Courses from "../../components/Courses.jsx";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch("http://localhost:3000/api/courses");
            const data = await response.json();

            setCourses(data);
            setLoading(false);
        };

        fetchCourses();
    }, []);
    if (loading) return <LoadingPage />;
    return (
        <>
            <h2> Top Courses </h2>
            <Courses courses={courses} />
        </>
    );
};

export default Courses;
