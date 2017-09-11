var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "martincapo";
var GITHUB_TOKEN = "37494239f2d8c06f046ede463765fe54cd3bc1d5";


function getRepoContributors(repoOwner, repoName, cb) {
  // ...
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);
  request(requestURL, function(error, response) {
    // For error
    if(error) {
      cb(error);
      return;
    }

//    console.log("I am here!!!", response);

   // var json = JSON.parse(body);
   // cb(null, json.data);
    cb(null, response);


  })
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});