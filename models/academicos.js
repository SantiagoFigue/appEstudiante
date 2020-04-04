const db = require("./db_conexion.js");
const academicos = function(academicos) {
  this.id_aca = academicos.id_med;
  this.promedio = academicos.promedio;
  this.esc_procedencia = academicos.esc_procedencia;
  this.fecha_egreso = academicos.fecha_egreso;
};

academicos.addAcademicos = (body, result) => {
    db.query(
      "INSERT INTO academicos (promedio, esc_procedencia, fecha_egreso) values(?,?,?)",
      [body.promedio, body.esc_procedencia, body.fecha_egreso],
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

//select e.id_est, p.ap_paterno, p.ap_materno, p.nombre,d.* from direccion as d, estudiante as e, persona as p where e.id_per = p.id_per and p.id_dir = d.id_dir and e.id_est = 1