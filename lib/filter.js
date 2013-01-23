var sanitize = require('validator').sanitize;

function xssize(val){
  return sanitize(val).xss();
}

exports.xssize = xssize;