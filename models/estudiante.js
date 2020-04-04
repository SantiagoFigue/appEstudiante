var db = require('./db_conexion.js');
/*
var Estudiante = function(Estudiante){
    this.id = Estudiante.id;
    this.nombre = Estudiante.nombre;
    this.apellido = Estudiante.apellido;
}

Estudiante.getstudiantes = function(resultado,error){
    db.query("Select * from estudiante", function(err,res){
        if(err){
            console.log("error: ", err);
            resultado(err,null);
        }else{
            resultado(null,res);
        }
    });
};

Estudiante.getEstudianteNombre = function(nombre,resultado){   //Pedimos como parametro el nombre de la persona que queremos buscar 
    db.query("Select * from estudiante where nombre like ? ",nombre,
    function(err,res){
        if(err){
            console.log("error: ", err);
            resultado(err,null);
        }else{
            resultado(null,res);
        }
    });
};


Estudiante.updateEstudiante = function(estudiante, result){
    db.query("UPDATE estudiante set ? where id = ?",
    [estudiante, estudiante.id],
    function(err,res){
        if(err){
            console.log("error: ", err);
            result(err,null)
        }else{
            result(null,res);
        }
    });
};
*/


var Estudiante = function(Estudiante){
    this.id = Estudiante.id_est;
    this.cupr = Estudiante.curp;
    this.fecha_nacimiento = Estudiante.fecha_nacimiento;
    this.estatus = Estudiante.estatus;
    this.id_civ = Estudiante.id_civ;
    this.id_med = Estudiante.id_med;
    this.id_aca = Estudiante.id_aca;
    this.id_tut = Estudiante.id_tut;
    this.id_per = Estudiante.id_per;
}

var Direccion = function(Direccion){
    this.id = Direccion.id_dire;
    this.calle = Direccion.calle;
    this.numero = Direccion.numero;
    this.municipio = Direccion.municipio;
    this.colonia = Direccion.colonia;
    this.estado = Direccion.estado;
    this.pais = Direccion.pais;
    this.cp = Direccion.cp;
}


Estudiante.addEstudiante = function(resultado,error){
    db.query(
        "Insert into persona (nombre, ap_paterno, ap_materno, sexo, id_dir, id_con) values(?, ?, ?, ?, ?, ?)",
        [
          body.nombre,
          body.ap_paterno,
          body.ap_materno,
          body.sexo,
          direccion,
          contacto
          
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
      db.query("SELECT MAX(id_per) as id_per FROM persona", function(err,res){
        if (err) {
          console.log("error: ", err);
        } else {
          this.id_per = res[0].id_per;
        }
      });
      db.query(
        "Insert into estudiante(curp, fecha_nacimiento, estatus, id_civ, id_med, id_aca, id_tut, id_per) values(?, ?, ?, ?, ?, ?, ?,?)",
        [
          body.curp,
          body.fecha_nacimiento,
          body.estatus,
          body.id_civ,
          salud,
          body.id_aca,
          body.id_tut,
          this.id_per
        ],
        function(err, res) {
          if (err) {
            console.log("error: ", err);
            
          } else {
            result(null, res);
          }
        }
    );
};
Estudiante.getEstudianteNombre = function(resultado,error){
    db.query("SELECT e.id_est,p.ap_paterno, p.ap_materno, p.nombre,e.curp,e.fecha_nacimiento,e.estatus  FROM persona p INNER JOIN estudiante e on p.id_per = e.id_est and e.estatus = 1 order by 4  ", function(err,res){
        if(err){
            console.log("error: ", err);
            resultado(err,null);
        }else{
            resultado(null,res);
        }
    });
};

Estudiante.getEstudiantesTotales = function(resultado,error){
    db.query("select e.id_est,p.ap_paterno, p.ap_materno, p.nombre, e.curp, e.fecha_nacimiento, e.estatus,a.promedio, a.esc_procedencia, dir.municipio from estudiante as e, persona as p, academicos as a, direccion as dir where e.id_per = p.id_per and e.estatus = 1 and e.id_aca = a.id_aca and p.id_dir = dir.id_dir ", function(err, res){
        if(err){
            console.log("error: ", err);
            resultado(err,null);
        }else{
            resultado(null,res);
        }
    })
}

Estudiante.getEstudianteDireccion = function(resultado,error){
    db.query("select e.id_est,p.ap_paterno, p.ap_materno, p.nombre, e.curp, e.fecha_nacimiento, e.estatus,a.promedio, a.esc_procedencia, dir.municipio from estudiante as e, persona as p, academicos as a, direccion as dir where e.id_per = p.id_per and e.estatus = 1 and e.id_aca = a.id_aca and p.id_dir = dir.id_dir order by 10", function(err,res){
        if(err){
            console.log("error: ", err);
            resultado(err,null);
        }else{
            resultado(null,res);
        }
    });
};

Estudiante.getEstudiantePromedio = function(resultado,error){
    db.query("select e.id_est,p.ap_paterno, p.ap_materno, p.nombre, e.curp, e.fecha_nacimiento, e.estatus,a.promedio, a.esc_procedencia, dir.municipio from estudiante as e, persona as p, academicos as a, direccion as dir where e.id_per = p.id_per and e.estatus = 1 and e.id_aca = a.id_aca and p.id_dir = dir.id_dir order by 8", function(err,res){
        if(err){
            console.log("error: ", err);
            resultado(err,null);
        }else{
            resultado(null,res);
        }
    });
};

Estudiante.getEstudianteEscuela = function(resultado,error){
    db.query("select e.id_est,p.ap_paterno, p.ap_materno, p.nombre, e.curp, e.fecha_nacimiento, e.estatus,a.promedio, a.esc_procedencia, dir.municipio from estudiante as e, persona as p, academicos as a, direccion as dir where e.id_per = p.id_per and e.estatus = 1 and e.id_aca = a.id_aca and p.id_dir = dir.id_dir order by 9", function(err,res){
        if(err){
            console.log("error: ", err);
            resultado(err,null);
        }else{
            resultado(null,res);
        }
    });
};

Estudiante.updateDireccion = function(estudiante, direccion, result){
    //db.query("UPDATE direccion set ? where id = (Select id_dir from persona where id_per = ?)",
    db.query("UPDATE direccion set ? where id_dir = (select d.id_dir from direccion d, estudiante e, persona p where e.id_per = p.id_per and p.id_dir = d.id_dir and e.id_est = ?)",
    [direccion, estudiante.id_estudiante],
    function(err,res){
        if(err){
            console.log("error: ", err);
            result(err,null)
        }else{
            result(null,res);
        }
    });
};

Estudiante.updateEstatus = function(result,error){
    //db.query("UPDATE direccion set ? where id = (Select id_dir from persona where id_per = ?)",
    db.query("UPDATE estudiante SET estatus = 0 where  estudiante.id_est IN (SELECT  e.id_est FROM estudiante e, academicos a WHERE e.id_aca = a.id_aca and a.promedio < 7)",
    function(err,res){
        if(err){
            console.log("error: ", err);
            result(err,null)
        }else{
            result(null,res);
        }
    });
};

Estudiante.eliminarEstudiante = function(per, result) {
    db.query("UPDATE estudiante SET estatus = 0 where id_per in (SELECT id_per from persona as p where p.nombre = ? and p.ap_paterno = ? and p.ap_materno = ?)",
    [per.nombre,per.ap_Paterno,per.ap_Materno],
    function(err,res) {
        if(err) {
            console.log("Error",err);
            result(err,null);
        }else{
            result(null,res);
        }
    });
};

Estudiante.infoDireccion = function(result,error){
    db.query("select e.id_est, p.ap_paterno, p.ap_materno, p.nombre,d.* from direccion as d, estudiante as e, persona as p where e.id_per = p.id_per and p.id_dir = d.id_dir and e.estatus = 1",
    function(err,res){
        if(err){
            console.log("error: ", err);
            result(err,null)
        }else{
            result(null,res);
        }
    });
};

module.exports = Estudiante;