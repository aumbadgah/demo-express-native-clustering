import cluster from 'cluster';
import express from 'express';
import os from 'os';

const cpuCount = os.cpus().length;

console.log('CPU COUNT: ' + cpuCount.toString());

if (cluster.isMaster) {
    for (let i = 0; i < cpuCount; i++) {
        cluster.fork();
    }
    
    cluster.on('exit', function (worker) {
        console.log('Worker %d died, creating new...', worker.id);

        cluster.fork();
    });
} else {
    const app = express();

    app.get('/', function (req, res) {
        res.send('Hello World!');
    });

    app.listen(3000);
    
    console.log('Server worker running');

    setTimeout(() => {
        throw new Error('ERROR');
    }, Math.floor((Math.random()*60000)+1));
}
