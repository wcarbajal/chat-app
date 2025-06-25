import { ChatSelect } from '../components/ChatSelect';
import { InboxPeoble } from '../components/InboxPeoble';
import { Messages } from '../components/Messages';
import '../css/chat.css';

export const ChatPage = () => {
  return (
    <div className="messaging">
      <div className="inbox_msg">

        <InboxPeoble />

        {
          ( true )
            ? <Messages />
            : <ChatSelect />
        }
     

      </div>
    </div>
  );
};