import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../utils/database";

export default async(req: NextApiRequest, res: NextApiResponse)=>{
    if(req.method==='GET'){
        const{database} = await connect()

        const response = await database.collection('signup').find().toArray()
        
        res.status(200).json({msg: response})
    }else{
        res.status(400).json({msg: 'Ops, algo deu errado'})
    }
}