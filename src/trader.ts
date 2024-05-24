import { IBApiNext } from "@stoqey/ib";

let ibApi = new IBApiNext({'port': parseInt(process.env.IBKR_PORT)});