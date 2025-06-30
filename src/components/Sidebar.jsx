import { useContext } from 'react';
import { SidebarChatItem } from './SidebarChatItem';
import { ChatContext } from '../context/chat/ChatContext';
import { AuthContext } from '../auth/Context';


export const Sidebar = () => {

  const { chatState } = useContext( ChatContext )
   const { auth } = useContext( AuthContext );
  const {usuarios } = chatState
  

  return (
    <div className="inbox_chat">
      {
        
        usuarios.filter(usuario => usuario.uid !== auth.uid ).map( ( usuario ) => (
          <SidebarChatItem key={ usuario.uid } usuario={ usuario }/>
        ) )
      }

      






      {/* Espacio extra para scroll */ }
      <div className="extra_space"></div>


    </div>
  );
};
