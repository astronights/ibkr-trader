import { Request, Response, Router } from 'express';

export class LogController {

    path = '/log';
    router = Router();

    constructor() {
        this.router.get(this.path, this.getMessage);
    }

    public async getMessage(req: Request, res: Response): Promise<Response> {
        return res.status(200).json({"message": "Hello and welcome to the app"});
    }

}