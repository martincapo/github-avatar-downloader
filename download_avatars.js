
// import request
var request = require('request');
// Import fs
var fs = require("fs");
// Two command line arguments
var repoOwner = process.argv[2];
var repoName = process.argv[3];
//Welcome message
console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "martincapo";
var GITHUB_TOKEN = "37494239f2d8c06f046ede463765fe54cd3bc1d5";

function getRepoContributors(repoOwner, repoName, cb) {
  // If the use does not specify agurments, this function
  // will be terminated with error message.
  if(repoOwner == null || repoName == null) {
    console.log("Please enter right argument:");
    console.log("Usage:");
    console.log("\tnode download_avatars.js jquery jquery");
    return;
  }
  // URL path of data
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'martincapo',
      'Authorization': 'token 37494239f2d8c06f046ede463765fe54cd3bc1d5'
    }
  }

  // Get informtaion from given URL
  request.get(options, function(error, response, body) {
    // For error
    if(error) {
      cb(error);
      return;
    }
    // Save all the information to json
    var json = JSON.parse(body);
    // Call items from json file has been created
    json.forEach(function(obj) {
      // A remote image URL to fetch
      url = obj.avatar_url;
      // A local path for where to persist the file
      filePath = "avatars/" + obj.login + ".jpg";
      downloadImageByURL(url, filePath);
      cb(null, url+filePath);
    })
  })
}
// fetches the desired url(avatar) and
// saves this information to the given filePath
function downloadImageByURL(url, filePath) {
  request.get(url)
         .pipe(fs.createWriteStream(filePath));
}

// Call function to run
getRepoContributors(repoOwner, repoName, function(err, result) {
  console.log("Result:", result);
});

