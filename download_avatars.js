var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

// var GITHUB_USER = "martincapo";
// var GITHUB_TOKEN = "YOUR ACCESSTOKEN HERE";

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
  request(url, function(error, response, body) {
    // For error
    if(error) {
      cb(error);
      return;
    }
    if(response && response.statusCode === 200) {
      var json = JSON.parse(body);
      cb(null, json.data);
    } else if(response.statusCode === 404) {
      cb("Page Not found");
    }

  })
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});