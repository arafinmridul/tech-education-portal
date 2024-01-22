import { Suspense } from "react";
import Link from "next/link";
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";

// gets the params object from the URL, dynamic dirnames are the properties
// and passes it to the component
const RepoPage = ({ params: { user, repo } }) => {
    return (
        <div className="card">
            <Link href="/code/repos" className="btn btn-back">
                Go Back To Repositories
            </Link>
            {/* Creating Suspense Boundaries */}
            <Suspense fallback={<div>Loading Repo...</div>}>
                <Repo user={user} repo={repo} />
            </Suspense>
            <Suspense fallback={<div>Loading Directories...</div>}>
                <RepoDirs user={user} repo={repo} />
            </Suspense>
        </div>
    );
};

export default RepoPage;
