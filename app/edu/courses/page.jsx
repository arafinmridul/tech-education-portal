"use client";

import { useState, useEffect } from "react";
import LoadingPage from "../../loading.jsx";
import Courses from "../../components/Courses.jsx";
import CourseSearch from "@/app/components/CourseSearch.jsx";

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch("/api/courses");
            const data = await response.json();

            await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay

            setCourses(data);
            setLoading(false);
        };

        fetchCourses();
    }, []);

    if (loading) return <LoadingPage />;
    return (
        <>
            <h2> Top Courses </h2>
            <CourseSearch getSearchResults={(results) => setCourses(results)} />
            <Courses courses={courses} />
        </>
    );
};

export default CoursesPage;
