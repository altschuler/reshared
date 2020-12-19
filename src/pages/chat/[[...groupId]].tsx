import { ChatPage } from '../../containers/chat';
import { head } from 'lodash';
import { GetServerSideProps } from 'next';
import { hasuraClient } from '../../server';
import { ServerMostRecentChatsDocument } from '../../generated/server-queries';
import { urlFor } from '../../utils/urls';

export default ChatPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const groupId = ctx.params?.groupId;

    if (!groupId) {
        const query = await hasuraClient.query({
            query: ServerMostRecentChatsDocument,
        });

        const mostRecent = head(query.data.chat_groups);
        if (mostRecent) {
            return {
                redirect: {
                    statusCode: 303,
                    destination: urlFor.chat.group({ id: mostRecent.id }),
                },
            };
        }
    }

    return { props: {} };
};
