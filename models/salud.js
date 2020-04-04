const db = require("./db_conexion.js");
const salud = function(salud) {
  this.id_med = salud.id_med;
  this.tipo_sangre = salud.tipo_sangre;
  this.nss = salud.nss;
  this.alergias = salud.alergias;
};

salud.addSalud = (body, result) => {
  db.query(
    "INSERT INTO medicos (tipo_sangre, nss, alergias) values(?,?,?)",
    [body.tipo_sangre, body.nss, body.alergias],
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

// salud.getSalud = function(res) {
//   return new Promise((resolve, reject) => {
//     db.query("SELECT MAX(id_salud) as id_salud FROM salud", function(err, res) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(res[0].id_salud);
//       }
//     });
//   });
// };

// salud.getSalud = function(res) {
//   this.id_salud = 1;
//   db.query("SELECT MAX(id_salud) as id_salud FROM salud", function(err, res) {
//     if (err) {
//       console.log(err);
//     } else {
//       this.id_salud = res[0].id_salud;
//     }
//   });
//   return this.id_salud;
// };

let body;

salud.setBody = body1 => {
  body = body1;
};

let res1;

const id_persona = (err, res2) => {
  if (err) {
    console.log(err);
  } else {
    db.query(
      "Insert into estudiante(curp, fecha_nacimiento, estatus, id_civ, id_med, id_aca, id_tut, id_per) values(?, ?, ?, ?, ?, ?, ?, ?)",
      [
        body.curp,
        body.fecha_nacimiento,
        body.estatus,
        body.id_civ,
        res1,
        body.id_aca,
        body.id_tutor,
        res2[0].id_per
      ],
      function(err, res) {
        if (err) {
          console.log("error: ", err);
          jason.json({ response: "Error", msg: err });
        } else {
          jason.json({ response: res, msg: "200" });
        }
      }
    );
  }
};

const id_salud = (err, res) => {
  if (err) {
    console.log(err);
  } else {
    res1 = res[0].id_med;
    db.query("Select MAX(id_per) as id_per from persona", id_persona);
  }
};
let jason;
salud.getSalud = function(res) {
  jason = res;
  db.query("SELECT MAX(id_med) as id_med FROM medicos", id_salud);
};

module.exports = salud;
