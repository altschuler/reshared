import { Tag, Tooltip } from 'antd';
import { Thing_Type_Enum } from '../../generated/graphql';
import { TagProps } from 'antd/lib/tag';

const DISPLAY_NAMES: { [P in Thing_Type_Enum]: { name: string; description: string } } = {
    [Thing_Type_Enum.Lend]: {
        name: 'Lend',
        description: 'You can borrow the thing and then give it back',
    },
    [Thing_Type_Enum.Give]: {
        name: 'Give away',
        description: 'You can have the thing and keep it',
    },
    [Thing_Type_Enum.HaveSome]: {
        name: 'Have some',
        description: 'Take what you need and leave the rest for others',
    },
    [Thing_Type_Enum.Other]: {
        name: 'Other',
        description: 'Some other way of sharing, ask the owner',
    },
};

export interface ThingTypeTag extends TagProps {
    type: Thing_Type_Enum;
}

export const ThingTypeTag = (props: ThingTypeTag) => {
    const { type, ...tagProps } = props;
    const texts = DISPLAY_NAMES[type];

    return (
        <Tooltip title={texts.description}>
            <Tag {...tagProps}>{texts.name}</Tag>
        </Tooltip>
    );
};
