import React from "react";
import Link from "next/link";

const Homepage = () => {
    return (
        <div>
            This is the homepage
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </div>
    );
};

export default Homepage;
