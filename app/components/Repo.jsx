import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(user, repo) {
    const response = await fetch(
        `https://api.github.com/repos/${user}/${repo}`
    );
    const repository = await response.json();
    return repository;
}

const Repo = async ({ user, repo }) => {
    const repository = await fetchRepo(user, repo);
    // console.log(repository);
    return (
        <>
            <h2>{repository.name}</h2>
            <p>{repository.description}</p>
            <div className="card-stats">
                <div className="card-stat">
                    <FaStar />
                    <span>{repository.stargazers_count}</span>
                </div>
                <div className="card-stat">
                    <FaCodeBranch />
                    <span>{repository.forks_count}</span>
                </div>
                <div className="card-stat">
                    <FaEye />
                    <span>{repository.watchers_count}</span>
                </div>
            </div>
        </>
    );
};

export default Repo;
