import { Classes } from "./index.mjs";
const { Client } = Classes;

const myClient = new Client(process.env.clientToken, process.env.clientId);