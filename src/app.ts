import http from 'http';
import express, { Application } from 'express';
import { Server } from 'socket.io';
import { UserRoutes } from './routes/user.routes';



class App {
    private app: Application
    private http: http.Server
    private io: Server;
    private userRoutes = new UserRoutes();


    constructor(){
        this.app = express()
        this.http = new http.Server(this.app)
        this.io = new Server(this.http);
        this.middlewaresInitalize();
        this.initializeRoutes();
        this.initializeHtml();
    }


    listen(){
        this.http.listen(3333, () => console.log('Server is running'))
    }

    listenSocket(){
        this.io.on('connection', (userSocket) => {
            console.log('a user connected');
        });
    }
    private initializeHtml(){
        this.app.get('/index', (req, res) => {
            console.log('HTML is running');
            res.sendFile(__dirname + '/index.html')
        });
    }

    private initializeRoutes(){
        this.app.use('/users', this.userRoutes.router)
    }

    private middlewaresInitalize(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }
}

export { App };