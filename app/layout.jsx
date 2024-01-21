import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    weight: [400, 700],
    subsets: ["latin"],
});

export const metadata = {
    title: "Tech Education Portal",
    description:
        "Top University Courses and Github Repositories for Tech Education",
    keywords: "tech, education, courses, github, repositories",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <main className="container">{children}</main>
            </body>
        </html>
    );
}
