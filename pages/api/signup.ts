import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../utils/database";

export default async(req:NextApiRequest, res:NextApiResponse)=>{
    if(req.method==='POST'){
        const{nome,username,password} = req.body
        const {database} = await connect()

        const response = await database.collection('signup').insertOne({
            nome,username,password
        })

        res.status(200).json({msg: 'Usuário criado com sucesso'})
    }else{
        res.status(400).json({msg: 'Ops, algo deu errado'})
    }
}