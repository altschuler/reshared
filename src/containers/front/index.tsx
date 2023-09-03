import { PageLayout } from '../root/PageLayout';
import { Button, Space, Typography } from 'antd';
import { createUseStyles } from 'react-jss';
import useInterval from '../../utils/hooks';
import { useState } from 'react';
import Link from 'next/link';
import { urlFor } from '../../utils/urls';

const useStyles = createUseStyles({
    cta: {
        textAlign: 'left',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    '@keyframes blink': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
    cursor: {
        color: 'black',
        animation: '$blink 1s infinite',
    },
    typed: {
        color: '#08f',
    },
});

const WORDS = [
    'board games',
    'books',
    'DIY tools',
    'printer',
    'excess food',
    'building materials',
    'lawn mower',
    'party gear',
    'baby things',
    'old furniture',
    'bike repair tools',
];

const Typed = () => {
    const classes = useStyles();
    const [wordIndex, setWordIndex] = useState(0);
    const [backward, setBackward] = useState(false);
    const [index, setIndex] = useState(WORDS[wordIndex].length);
    const [atEnd, setAtEnd] = useState(false);
    const [ticksAtEnd, setTicksAtEnd] = useState(0);

    useInterval(
        () => {
            if (atEnd) {
                if (ticksAtEnd > 10) {
                    setAtEnd(false);
                    setBackward(true);
                    setTicksAtEnd(0);
                } else {
                    setTicksAtEnd(ticksAtEnd + 1);
                }
                return;
            }

            if (index == WORDS[wordIndex].length && !backward) {
                setAtEnd(true);
                // setIndex(index - 1);
            } else if (index === 0) {
                setBackward(false);
                setWordIndex(wordIndex + 1 > WORDS.length - 1 ? 0 : wordIndex + 1);
                setIndex(index + 1);
            } else {
                setIndex(index + (backward ? -1 : 1));
            }
        },
        backward ? 20 : 80,
    );

    return (
        <span className={classes.typed}>
            {WORDS[wordIndex].slice(0, index)}
            <span className={classes.cursor}>|</span>
        </span>
    );
};

export const FrontPage = () => {
    const classes = useStyles();

    return (
        <PageLayout padded>
            <Typography.Title level={1} className={classes.cta}>
                Share your <Typed />
                <br />
                in your community
            </Typography.Title>

            <Typography.Title level={4}>
                Reshared facilitates and encourages sharing of anything within communities. It is
                not a marketplace, there is no money involved, it's just like borrowing a hammer
                from your neighbour.
            </Typography.Title>

            <Typography.Title level={4} style={{ fontWeight: 'normal' }}>
                <ul style={{ paddingLeft: '1em' }}>
                    <li>Join or create a group</li>
                    <li>Add the things you want to share or give away</li>
                    <li>Request a thing you are looking for, but can't find listed</li>
                    <li>Chat with others to arrange sharing</li>
                    <li>Be kind and reasonable</li>
                </ul>
            </Typography.Title>

            <Typography.Text style={{ fontSize: '1.3em' }}>
                <strong>Reshared is free forever</strong>, without ads or hidden agendas. Good for
                your wallet, the environment and your community.
            </Typography.Text>

            <Space
                direction="vertical"
                style={{
                    marginTop: '2em',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Link href={urlFor.auth.register()} legacyBehavior>
                    <Button size="large" shape="round" type="primary">
                        Sign up
                    </Button>
                </Link>
                <span>
                    or{' '}
                    <Link passHref href={urlFor.auth.login()} legacyBehavior>
                        <Typography.Link>login</Typography.Link>
                    </Link>{' '}
                    if you have an account already
                </span>
            </Space>
        </PageLayout>
    );
};
