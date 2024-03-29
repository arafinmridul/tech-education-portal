import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link href="/">Tech Education Portal</Link>
                </div>
                <div className="links">
                    <Link href="/about"> About </Link>
                    <Link href="/edu/courses"> Courses </Link>
                    <Link href="/code/repos"> Repositories </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
