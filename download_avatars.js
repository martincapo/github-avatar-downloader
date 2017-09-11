var request = require('request');


console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "martincapo";
var GITHUB_TOKEN = "37494239f2d8c06f046ede463765fe54cd3bc1d5";


function getRepoContributors(repoOwner, repoName, cb) {
  // ...
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'martincapo',
      'Authorization': 'token 37494239f2d8c06f046ede463765fe54cd3bc1d5'
    }
  }


  request.get(options, function(error, response, body) {
    // For error
    if(error) {
      cb(error);
      return;
    }
    var json = JSON.parse(body);
    json.forEach(function(item) {
      cb(null, item.avatar_url);
    })
  })
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Result:", result);
});

