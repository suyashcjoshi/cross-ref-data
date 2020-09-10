import express from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 5000;

// Need to make sure URL's are properly encoded
app.use(
  express.urlencoded({
    extended: true
  })
);

// Retreive 100 random animal records using the latest cross-ref open webapi
axios.get('https://api.crossref.org/works', {
    params: {
      query: "animal",
      filter: "from-pub-date:2019-11-01",
      select: "DOI,title,author,created,URL",
      sample: "100"
    }
  }).then(response => {
    console.log(response.status);
    console.log(response.data.message);
    
  // Capture and print various types of errors resulting from Cross-ref API request
  }).catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  );

  app.listen(port, () => {
    console.log("App listening at http://localhost:${port}");
  })

