import CoursesPage from "./edu/courses/page";
import RepoPage from "./code/repos/page";

const Homepage = () => {
    return (
        <div className="container">
            <RepoPage />
            <CoursesPage />
        </div>
    );
};

export default Homepage;
