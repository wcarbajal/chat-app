export const ErrorPage = () => {
  return (

    <div class="container" style={ { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } }>
      <div class="row">
        <div class="col-md-12">
          <div class="error-template">
            <h1>
              Oops!</h1>
            <h2>404 Página no encontrada</h2>
            <div class="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div class="">
              <a href="/auth/login" class="btn btn-primary btn-lg">  Regresar al inicio       </a>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};