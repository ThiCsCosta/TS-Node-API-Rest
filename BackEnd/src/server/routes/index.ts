import Router  from "express";
import {StatusCodes} from 'http-status-codes';
const router = Router();

//busca completa
router.get('/', (req, res)=>{
    return res.send(req.body);
  });
  
  //Criação, postar, criar
  router.post('/teste', (req, res)=>{
    console.log(req.body);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(req.body);
  });
  
  //Busca por id
  router.get('/:id', (req, res)=>{
    res.send('App Funcionando!');
  });
  
  //Editar por id
  router.put('/:id', (req, res)=>{
    res.send('App Funcionando!');
  });
  
  //deletar por id
  router.delete('/:id', (req, res)=>{
    res.send('App Funcionando!');
  });

export default router;