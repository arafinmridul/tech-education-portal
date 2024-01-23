import Link from "next/link";

async function fetchRepoContents(user, repo) {
    await new Promise((resolve) => setTimeout(resolve, 1500)); // simulate delay

    const response = await fetch(
        `https://api.github.com/repos/${user}/${repo}/contents`,
        {
            next: {
                revalidate: 120, // revalidate every 2 minutes
            },
        }
    );
    const contents = await response.json();
    return contents;
}

const RepoDirs = async ({ user, repo }) => {
    const contents = await fetchRepoContents(user, repo);
    const dirs = contents.filter((item) => item.type === "dir");

    return (
        <>
            <h3>Directories</h3>
            <ul>
                {dirs.map((dir) => (
                    <li key={dir.path}>
                        <Link href={`/code/repos/${user}/${repo}/${dir.path}`}>
                            {dir.path}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RepoDirs;
