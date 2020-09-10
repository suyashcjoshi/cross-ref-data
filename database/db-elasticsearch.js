import elasticsearch from 'elasticsearch';

// Setup the ElasticSearch (v7.x) as Database on localhost port 9200
var elasticClient = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace',
  apiVersion: '7.x', // use the same version of your Elasticsearch instance
});

// Ping the database server to make sure all well
elasticClient.ping({
  // ping usually has a 3000ms timeout
  requestTimeout: 1000
}, function (error) {
  if (error) {
    console.trace('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
    elasticClient.info(console.log);
  }
});

export default elasticClient;

