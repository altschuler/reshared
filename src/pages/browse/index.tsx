import { useThingListQuery } from '../../generated/graphql';
import { ThingCard } from '../../components/display';
import { createUseStyles } from 'react-jss';
import { Spin } from 'antd';

const useStyles = createUseStyles((theme) => ({
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

    return (
        <Spin spinning={loading}>
            <div className={classes.root}>
                {things.map((thing) => (
                    <ThingCard className={classes.thing} key={thing.id} thing={thing} />
                ))}
            </div>
        </Spin>
    );
};

export default SharableList;
