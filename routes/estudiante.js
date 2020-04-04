var express = require('express');
var router = express.Router();
var estudiateModel = require('../models/estudiante.js');

const contacto = require("../models/contacto");
const direccion = require("../models/direccion");
const salud = require("../models/salud");
const academicos = require("../models/academicos");
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Estudiante' });
});
*/
//Query

//router.get('/listar',function(req,res,next){
//    var id = req.query.id;
//    console.log(id);
//    res.render('index',{title:'Listar'+ id});
//});

//Params 
/*
router.get('/', function(req,res,next){
  estudiateModel.getstudiantes(function(err,result){
    console.log('/');
    if(err)
      res.json(
        {
        "response":"Error", "msg":err
      });
    console.log('res', result);
    res.json({
      "response":result,"msg":"200"
    });
  });
});

router.post('/nuevo', function(req,res,next){
  console.log("/nuevo" + "Nombre: " + req.body.nombre + 
  "Apellido: "+ req.body.apellido);
  estudiateModel.addEstudiante(req.body, function(err,result){
    if(err){
      res.json(
        {
        "response" : "Error",
        "msg" : err
        }
      );
    }
    console.log('res', result);
    res.json(
      {"response" : result,
      "msg" : "200"
      }
      );
    
  });
});

router.put('/actualizar', function(req,res,next){
  console.log("/actualizar" + "Nombre: " + req.body.nombre + 
  "Apellido: "+ req.body.apellido);
  estudiateModel.updateEstudiante(req.body, function(err,result){
    if(err){
      res.json(
        {
        "response" : "Error",
        "msg" : err
        }
      );
    }
    console.log('res', result);
    res.json(
      {"response" : result,
      "msg" : "200"
      }
      );
    
  });
});


router.get('/listar/:nombre', function(req,res,next){
  var nombre = req.params.nombre;
  console.log('/listar'+ 'dato: ' + nombre );

  estudiateModel.getEstudianteNombre(nombre,    //Le decimos al metodo que tome el valor de nombre
    function(err,result){
      if(err)
        res.json(
          {
          "response":"Error", "msg":err
        });
      console.log('res', result);
      res.json({
        "response":result,"msg":"200"
      });
  });
});


router.get('/listar/:id/:nombre',function(req,res,next){
  var id = req.params.id;
  var nombre  = req.params.nombre;
  console.log(id);
  res.format({'text/html':function(){
    res.render('index',{title:'Listar '+ id+ "---" + nombre});
  },
  'application/json':function(){res.json({"response" : "ok"}
  );
}
});
});



router.put('/actualizar',function(req,res,next){
  //res.render('index',{title:'Actualizar'});
 var id = req.body.id;
 var nombre = req.body.nombre;
  console.log(id);
  res.json({"id" : id,
    "message": "Seha actualizado el dato"  
});
  
});

router.delete('/borrar',function(req,res,next){
  //res.render('index',{title:'Eliminar'});
  var id = req.body.id;
   console.log(id);
   res.json({"id" : id,
     "message": "Se ha borrado el dato"  
 });
});
*/


router.post("/nuevo", function(req, res, next) {
  //res.render('index', { title: 'Nuevo' });
  contacto.addContacto(req.body, function(err, result) {
    if (err) {
      res.json({ response: "Erro", msg: err });
    }
    console.log("res", result);
    //res.json({ response: result, msg: "200" });
  });
  direccion.addDireccion(req.body, function(err, result) {
    if (err) {
      res.json({ response: "Erro", msg: err });
    }
    console.log("res", result);
    // res.json({ response: result, msg: "200" });
  });
  salud.addSalud(req.body, function(err, result) {
    if (err) {
      res.json({ response: "Erro", msg: err });
    }
    console.log("res", result);
    //res.json({ response: result, msg: "200" });
  });
  contacto.getContacto(req.body);
  salud.setBody(req.body);
  salud.getSalud(res);
});


router.get('/listarxNombre', function(req,res,next){
  estudiateModel.getEstudianteNombre(    //Le decimos al metodo que tome el valor de nombre
    function(err,result){
      if(err)
        res.json(
          {
          "response":"Error", "msg":err
        });
      console.log('res', result);
      res.json({
        "response":result,"msg":"200"
      });
  });
});

router.get('/listarxDireccion', function(req,res,next){
  estudiateModel.getEstudianteDireccion(    //Le decimos al metodo que tome el valor de nombre
    function(err,result){
      if(err)
        res.json(
          {
          "response":"Error", "msg":err
        });
      console.log('res', result);
      res.json({
        "response":result,"msg":"200"
      });
  });
});

router.get('/listarxPromedio', function(req,res,next){
  estudiateModel.getEstudiantePromedio(    //Le decimos al metodo que tome el valor de nombre
    function(err,result){
      if(err)
        res.json(
          {
          "response":"Error", "msg":err
        });
      console.log('res', result);
      res.json({
        "response":result,"msg":"200"
      });
  });
});

router.get('/listarxEscuela', function(req,res,next){
  estudiateModel.getEstudianteEscuela(    //Le decimos al metodo que tome el valor de nombre
    function(err,result){
      if(err)
        res.json(
          {
          "response":"Error", "msg":err
        });
      console.log('res', result);
      res.json({
        "response":result,"msg":"200"
      });
  });
});



router.put('/actualizarDireccion', function(req,res,next){
  var dir = {
    "calle" : req.body.calle ,
    "numero" : req.body.numero , 
    "municipio" :  req.body.municipio , 
    "colonia" : req.body.colonia ,
    "estado" : req.body.estado ,
    "pais" : req.body.pais ,
    "cp" : req.body.cp
  }
  //console.log("/actualizar" + "Id del Estudiante: " + req.body.id_estudiante);
  estudiateModel.updateDireccion(req.body, dir ,function(err,result){
    if(err){
      res.json(
        {
        "response" : "Error",
        "msg" : err
        }
      );
    }
    console.log('res', result);
    res.json(
      {"response" : result,
      "msg" : "200"
      }
      );
    
  });
});


router.put('/actualizarEstatus', function(req,res,next){
  estudiateModel.updateEstatus(function(err,result){
    if(err){
      res.json(
        {
        "response" : "Error",
        "msg" : err
        }
      );
    }
    console.log('res', result);
    res.json(
      {"response" : result,
      "msg" : "200"
      }
      );
    
  });
});

//Usados para la appCliente.

router.get('/mostrarTodos', function(req,res,next){
  estudiateModel.getEstudiantesTotales(    //Le decimos al metodo que tome el valor de nombre
    function(err,result){
      if(err)
        res.json(
          {
          "response":"Error", "msg":err
        });
      console.log('res', result);
      res.json({
        "response":result,"msg":"200"
      });
  });
});

router.put('/delete', function(req, res, next){
  var dir = {
    "nombre" : req.body.nombre,
    "ap_Paterno" : req.body.ap_Paterno,
    "ap_Materno" : req.body.ap_Materno
  }
  console.log(dir);
  //console.log(req.body);
  estudiateModel.eliminarEstudiante(req.body,
      function(err,result){
          if(err)
              res.json({
                  "response": "Error",
                  "msg": err
              });
          console.log('res',result);
          res.json(
              {
                  "response":result,
                  "msg":"200"
              }
          );
      }
  );
});

router.delete('/agregar', function(req, res, next){
  console.log(req.body);
  estudiateModel.addEstudiante(req.body,
      function(err,result){
          if(err)
              res.json({
                  "response": "Error",
                  "msg": err
              });
          console.log('res',result);
          res.json(
              {
                  "response":result,
                  "msg":"200"
              }
          );
      }
  );
});

router.get('/mostrarDireccion', function(req,res,next){
  estudiateModel.infoDireccion(function(err,result){
    if(err){
      res.json(
        {
        "response" : "Error",
        "msg" : err
        }
      );
    }
    console.log('res', result);
    res.json(
      {"response" : result,
      "msg" : "200"
      }
      );
    
  });
});

module.exports = router;
