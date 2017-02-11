// Publish callback for 1999.io to correct the path for a top level site
// and push the pages to an Amazon S3 bucket.
// https://gist.github.com/papascott/cf8a418643d3a0826202177a7e4d2844

// Callback receives relpath, body, type and screenName as globals
// The s3.newObject function is found in lib/s3.js, no require needed

// My credentials for AWS are saved under ~/.aws/credentials
// See Amazon's docs on "Credentials from the Shared Credentials File" at http://amzn.to/1PIF3WB

var oldPath = "readwrite.club:1999/users/frankm";
var newPath =  "writing.frankmcpherson.org"; // Your bucket name

if (screenName == "frankm") {
  var pathCorrectedBody = body.split(oldPath).join(newPath);
  s3.newObject (newPath + "/" + relpath, pathCorrectedBody, type);
};

