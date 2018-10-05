# Express.js native NodeJS clustering demo

### Description

The benefits of running a process as a cluster vary depending on the available number of CPU cores.

If only 1 core
- faster recovery time
- no external dependency for process management

If multiple cpu cores
- faster recovery time
- no external dependency for process management
- better performance

### Run demo

```
yarn && yarn start
```

### More

- Node cluster and express [https://rowanmanning.com/posts/node-cluster-and-express/](https://rowanmanning.com/posts/node-cluster-and-express/)
- Best practices [https://www.codementor.io/mattgoldspink/nodejs-best-practices-du1086jja#9-cluster-your-app-to-improve-performance-and-reliability](https://www.codementor.io/mattgoldspink/nodejs-best-practices-du1086jja#9-cluster-your-app-to-improve-performance-and-reliability)
- Node cluster API [https://nodejs.org/api/cluster.html#cluster_cluster](https://nodejs.org/api/cluster.html#cluster_cluster)
- Sitepoint article [https://www.sitepoint.com/how-to-create-a-node-js-cluster-for-speeding-up-your-apps/](https://www.sitepoint.com/how-to-create-a-node-js-cluster-for-speeding-up-your-apps/)
