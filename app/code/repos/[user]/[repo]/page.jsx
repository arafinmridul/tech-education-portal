import Link from "next/link";
import Repo from "@/app/components/Repo";

// gets the params object from the URL, dynamic dirnames are the properties
// and passes it to the component
const RepoPage = ({ params: { user, repo } }) => {
    return (
        <div className="card">
            <Link href="/code/repos" className="btn btn-back">
                Go Back To Repositories
            </Link>
            <Repo user={user} repo={repo} />
        </div>
    );
};

export default RepoPage;
