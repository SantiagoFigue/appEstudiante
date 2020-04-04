const db = require("./db_conexion.js");

const direccion = function(direccion) {
  this.id_dir = direccion.id_dir;
  this.calle = estudiante.calle;
  this.colonia = estudiante.colonia;
  this.municipio = estudiante.municipio;
  this.estado = estudiante.estado;
  this.pais = estudiante.pais;
  this.cp = estudiante.cp;
};

direccion.addDireccion = function(body, result) {
  db.query(
    "INSERT INTO direccion(calle, numero, municipio, colonia, estado, pais, cp) values(?,?,?,?,?,?,?)",
    [
      body.calle,
      body.numero,
      body.municipio,
      body.colonia,
      body.estado,
      body.pais,
      body.cp
    ],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

direccion.getDireccion = function(funcion) {
  funcion();
};
module.exports = direccion;
