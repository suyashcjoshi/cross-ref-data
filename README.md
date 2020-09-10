# cross-ref-data
A straight forward Node App that gets data from Crossref REST API, optionally loads into Elastic Search / MySQL for storage and Data Analytics.

Data from Cross Ref API: https://www.crossref.org/education/retrieve-metadata/rest-api/a-non-technical-introduction-to-our-api/

1. Query : In this project we are interested in looking up information about "Animal"
2. Publication Date : Anything that is published on and after 2019-11-01 (DateTime Stamp)
3. DOI : Unique ID
4. Title : String
5. Author : One or more author in a JSON Array
6. Created : Date of creation
7. URL : URL

Read more about cross-ref api:

## To Run the Node App, execute the commands. For database, you need to install them seperately (steps coming soon)

- npm install
- node app.js
