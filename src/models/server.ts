import express, { Application } from "express";

export class Server {
    private app : Application;
    private port: number;

    constructor() {
        this.app = express()
        this.port = 3000
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${ this.port }`);
        })
    }
}