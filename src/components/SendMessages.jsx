import { useState } from 'react';

export const SendMessages = () => {

  const [ mensaje, setMensaje ] = useState( '' );

  const onChange = ( { target } ) => {
    setMensaje( target.value );
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    if( mensaje.length === 0) return

    console.log(mensaje)
    setMensaje('')

    //TODO: emitir al backend un evento de socket
    /* 
    de: UID del usuario que envía el mensaje    
    para: UID del usuario que recibe el mensaje
    mensaje: texto enviado.
    
    */
//TODO: hacer el dispatch del mensaje

  }

  return (
    <form onSubmit= { onSubmit }>
      <div className="type_msg row">
        <div className="input_msg_write col-sm-9">
          <input
            type="text"
            className="write_msg"
            placeholder="Mensaje..."
            value={ mensaje }
            onChange={ onChange }
          />
        </div>
        <div className="col-sm-3 text-center">
          <button className="msg_send_btn mt-3" type="submit">
            enviar
          </button>
        </div>
      </div>
    </form>
  );
};