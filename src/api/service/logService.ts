import * as CONFIG from "../../config";
import { IBApiNext } from "@stoqey/ib";
import crypto from "crypto";


export class IBService {

    private id: number;
    private ibapi: IBApiNext;

    constructor(CONFIG: any) {

        this.id = crypto.randomInt(999999);

        this.ibapi = new IBApiNext({'port': CONFIG.IBKR_PORT});
        this.ibapi.connect(this.id);
    }

}