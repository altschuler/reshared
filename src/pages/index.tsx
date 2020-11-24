interface Props {
    url?: string;
}

const Home = (props: Props) => {
    return <div>{props.url}</div>;
};

export async function getServerSideProps() {
    return {
        props: {
            url: process.env.NEXTAUTH_URL,
        },
    };
}

export default Home;
