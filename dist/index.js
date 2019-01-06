"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
class App {
    constructor() {
        this.app = express();
        this.config();
    }
    config() {
        this.app.use(bodyParser.json());
        this.mysqlConnection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'EmployeeDB',
            insecureAuth: true,
            multipleStatements: true
        });
    }
}
//# sourceMappingURL=index.js.map