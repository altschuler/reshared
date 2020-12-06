import { useThingListQuery } from '../../generated/graphql';
import { ThingCard } from '../../components/display';
import { createUseStyles } from 'react-jss';
import { Spin } from 'antd';

const useStyles = createUseStyles( ({
    root: {
        display: 'flex',
    },
    thing: {
        marginRight: '2em',
    },
}));

export const SharableList = () => {
    const classes = useStyles();

    const { data, loading, error } = useThingListQuery();

    const things = data?.things || [];

    // TODO: use ant's list
    return (
        <Spin spinning={loading}>
            <div className={classes.root}>
                {things.map((thing) => (
                    <div key={thing.id} className={classes.thing}>
                        <ThingCard thing={thing} />
                    </div>
                ))}
            </div>
        </Spin>
    );
};

export default SharableList;
