const database = require('mime-db');
const sql = require('mssql');

const config = {
    user: 'sa',
    password : '123D654!',
    server : 'localhost',
    database : 'testdb',
    options : {
        enableArithAbort : true
    }
}

const run = async() => {
    try{
        console.log('Opening...');
        const pool = await sql.connect(config);
        const { recordset } = await sql.query`select * from users`;
        console.log(recordset);
    }catch(err){
        console.log(err);
    }finally{
        await sql.pool.close();
        console.log('Connect Closed...');
    }
}


run();