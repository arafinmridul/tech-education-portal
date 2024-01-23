import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function getRepos() {
    const response = await fetch(
        "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&per_page=15",
        {
            next: {
                // useful for data that changes frequently
                revalidate: 120, // caching for 2 minutes and revalidating after that
            },
        }
    );

    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay

    const data = await response.json();
    return data.items;
}

const Repositories = async () => {
    const repos = await getRepos();
    // console.log(Array.isArray(repos));
    // console.log(repos);
    return (
        <div className="repos-container">
            <h2> Top Repositories </h2>
            <ul className="repo-list">
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <Link href={`/code/repos/${repo.full_name}`}>
                            <h3>{repo.name}</h3>
                            <p>{repo.description}</p>
                            <div className="repo-details">
                                <span>
                                    <FaStar /> {repo.stargazers_count}
                                </span>
                                <span>
                                    <FaCodeBranch /> {repo.forks_count}
                                </span>
                                <span>
                                    <FaEye /> {repo.watchers_count}
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Repositories;
