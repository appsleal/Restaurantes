import { Router, Request, Response } from 'express';

const shopRouter = Router();

shopRouter.get('/', (req:Request,res:Response)=>{
    res.send({
        id:1
    })
})

export default shopRouter;