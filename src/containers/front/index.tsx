import { PageLayout } from '../root/PageLayout';
import { Typography } from 'antd';
import { createUseStyles } from 'react-jss';
import useInterval from '../../utils/hooks';
import { useState } from 'react';

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        // alignItems: 'center',
        flexDirection: 'column',
    },
    cta: {
        textAlign: 'left',
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
            <div className={classes.root}>
                <Typography.Title level={1} className={classes.cta}>
                    Share your <Typed />
                    <br />- with your community
                </Typography.Title>

                <Typography.Title type="secondary" level={4}>
                    It's free forever with no ads or hidden agendas. Good for your wallet, the
                    environment and your community.
                </Typography.Title>
            </div>
        </PageLayout>
    );
};
