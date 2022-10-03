import { ChatPage } from '../../containers/chat';
import { head } from 'lodash-es';
import { ServerMostRecentChatsDocument } from '../../generated/server-queries';
import { urlFor } from '../../utils/urls';
import { makeGSSP } from '../../utils/gssp';

export default ChatPage;

export const getServerSideProps = makeGSSP({
    requireAuth: true,
    handler: async (data) => {
        const groupId = data.nextCtx.params?.groupId;

        if (!groupId) {
            const query = await data.userClient.query({
                query: ServerMostRecentChatsDocument,
            });

            const mostRecent = head(query.data.chat_groups);
            if (mostRecent) {
                return {
                    redirect: {
                        statusCode: 303 as 303 | 301,
                        destination: urlFor.chat.group({ id: mostRecent.id }),
                    },
                };
            }
        }
    },
});
