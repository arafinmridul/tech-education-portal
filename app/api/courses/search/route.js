import { NextResponse } from "next/server";
import courses from "../data.json";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");

    const filterCourses = courses.filter((course) => {
        return course.title.toLowerCase().includes(query.toLowerCase());
    });

    return NextResponse.json(filterCourses);
}
