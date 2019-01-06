import * as mysql from 'mysql';
import * as express from 'express';
import * as bodyParser from 'body-parser';

class App {
    public app: express.Application;
    public mysqlConnection: any;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        this.app.use(bodyParser.json());

        this.mysqlConnection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'EmployeeDB',
            insecureAuth : true,
            multipleStatements : true
        });
    }

    private connect(): void {
        this.mysqlConnection.connect((err) => {
            if (!err) {
                console.log("DB Connection succeeded!");
            } else {
                console.log("DB Connection failed. Error: " + JSON.stringify(err, undefined, 2));
            }
        });
    }

}