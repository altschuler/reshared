import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <h1>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

            <Link href="/sharables">List</Link>
        </div>
    );
};

export default Home;
