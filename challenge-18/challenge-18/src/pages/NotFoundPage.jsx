import React from "react";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! La pagina que buscas no existe.</p>
      <Link to="/" className="btn">Devolvete</Link>
    </div>
  );
};

export default NotFoundPage;
