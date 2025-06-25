
const baseUrl = process.env.REACT_APP_API_URL;

export const fetchSinToken = async ( endpoint, data, method = 'GET' ) => {

 try {
  
   const url = `${ baseUrl }/${ endpoint }`;

  if ( method === 'GET' ) {
    
    const respuesta = await fetch( url );
    return await respuesta.json();

  } else {
    const respuesta = await fetch( url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify( data )

    } );
    return await respuesta.json();
  }

 } catch (error) {
  console.error('Error in fetchSinToken:', error);
  throw error;
  
 }
  

};