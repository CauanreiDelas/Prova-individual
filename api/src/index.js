import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import vilaoController from './Controller/vilaoController.js'

const server = express();
server.use(cors());
server.use(express.json());
server.use(vilaoController)


server.listen(process.env.PORT, () => console.log(`API NA PORTA ${process.env.PORT}`));