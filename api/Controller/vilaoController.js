import { Router } from 'express'
import { send } from 'express/lib/response';
import  { Add, Listar } from '../Repository/vilaoRepository.js'
const server = Router()

server.post('/vilao' , async (req, resp) => {

    try {
        const vilao = req.body;
        const sla= await Add(vilao)
        resp.send(sla)
    } catch (err) {
        resp.status(400) ({erro:err.message})
    }
})

server.get('/vilao', async (req, resp) => {
    try{
    const resposta = await Listar();
    resp.send(resposta)   
    
    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
})

export default server;