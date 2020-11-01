import { useThingListQuery } from '../../generated/graphql';
import { useAuth } from '../../utils/nhost';
import { ThingCard } from '../../components/display';

export const SharableList = () => {
    const auth = useAuth();

    const { data, loading, error } = useThingListQuery();

    const things = data?.things || [];

    return (
        <div>
            {things.map((thing) => (
                <ThingCard className="thing" key={thing.id} thing={thing} />
            ))}
            <style jsx>{`
                div {
                    display: flex;
                }
                div :global(.thing) {
                    margin-right: 2em;
                }
            `}</style>
        </div>
    );
};

export default SharableList;
