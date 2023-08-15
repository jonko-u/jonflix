import { hashPassword} from '@/crypt';
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb';

export default async function handler (req: NextApiRequest, res: NextApiResponse){
    if(req.method != 'POST'){
        return res.status(405).end();
    }
    try{

        const { email, name, pass} = req.body
        const salt = 'pepper'; // Set your fixed salt (pepper)
        const hashAlgorithm = 'sha256'; // Use the desired hash algorithm (e.g., 'sha256')
        const outputEncoding = 'hex'; // Use 'hex' for a hexadecimal string output
        const desiredHashLength = 12;

        const hashedPassword = await hashPassword(pass, salt, hashAlgorithm, outputEncoding, desiredHashLength)
        if(hashedPassword){
            const user = await prismadb.user.create({
                data:{
                    email, name, hashedPassword, image: '', emailVerified: new Date()
                }
                });
                return res.status(200).json(user);
        }
        
        
    }catch(error){
        console.error(error)
        return res.status(400).end()
    }
}