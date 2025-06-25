import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { SendMessages } from './SendMessages';

export const Messages = () => {

  const msgs = [1,2,3,4,5,6,7,8,9,10];
  return (

    <div className="mesgs">


      <div className="msg_history">

        {
          msgs.map( (index, msg) => (
            (msg % 2)
             ? <IncomingMessage key={index} />
             : <OutgoingMessage key={index} />
          ) )
        }      

      </div>


      <SendMessages />


    </div>

  );
};