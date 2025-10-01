import { Request, Response } from "express";
import OpenAI from "openai";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const sendMessage = async(req: Request, res:Response)=>{
    try{
        const {message} = req.body;

        if(!message){
            return res.status(400).json({error:"The field message is required"});
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{role: "user", content: message}],
        });

        const reponse = completion.choices[0].message.content;
        res.json({reponse});

    }catch(error:any){
        console.error(error);
        res.status(500).json({error: "Error processing request"})
    }
    
}