const db = require("./db_conexion.js");
const direccionModel = require("./direccion");

const contacto = function(contacto) {
  this.id_con = contacto.id_con;
  this.email = contacto.email;
  this.tel = contacto.tel;
  this.celular = contacto.celular;
};

contacto.addContacto = function(body, result) {
  db.query(
    "INSERT INTO contactos (email, tel, celular) values(?,?,?)",
    [body.email, body.tel, body.celular],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        //result(err, null);
      } else {
        id_con = res.insertId;
      }
    }
  );

  //   db.query(
  //     "INSERT INTO dire (telefono, email, celular) values(?,?,?)",
  //     [body.telefono, body.email, body.celular],
  //     function(err, res) {
  //       if (err) {
  //         console.log("error: ", err);
  //         result(err, null);
  //       } else {
  //         result(null, res);
  //       }
  //     }
  //   );

  //   db.query(
  //     "INSERT INTO salud (telefono, email, celular) values(?,?,?)",
  //     [body.telefono, body.email, body.celular],
  //     function(err, res) {
  //       if (err) {
  //         console.log("error: ", err);
  //         result(err, null);
  //       } else {
  //         result(null, res);
  //       }
  //     }
  //   );

  //   db.query(
  //     "INSERT INTO estudiante (telefono, email, celular) values(?,?,?)",
  //     [body.telefono, body.email, body.celular],
  //     function(err, res) {
  //       if (err) {
  //         console.log("error: ", err);
  //         result(err, null);
  //       } else {
  //         result(null, res);
  //       }
  //     }
  //   );
};

contacto.getContacto = function(body) {
  db.query("SELECT MAX(id_con) as id_con FROM contactos", function(
    err,
    res1
  ) {
    if (err) {
      console.log("error: ", err);
    } else {
      direccionModel.getDireccion(() => {
        db.query(
          "SELECT MAX(id_dir) as id_dir FROM direccion",
          (err, res2) => {
            if (err) {
              console.log("error: ", err);
            } else {
              db.query(
                "Insert into persona (nombre, ap_paterno, ap_materno, sexo, id_dir, id_con) values(?, ?, ?, ?, ?, ?)",
                [
                  body.nombre,
                  body.ap_paterno,
                  body.ap_materno,
                  body.sexo,
                  res2[0].id_dir,
                  res1[0].id_con
                  
                ],
                function(err, res) {
                  if (err) {
                    console.log("error: ", err);
                  }
                }
              );
            }
          }
        );
      });
    }
  });
  return this.id_con;
};
module.exports = contacto;
