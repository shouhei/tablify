#!/usr/bin/env node

var fs = require('fs');
var parse = require('csv-parse');
var _ = require('underscore');

var file = process.argv[2];
var data = fs.readFileSync(file).toString();
var path = __dirname
var template = _.template(fs.readFileSync(path + "/templates/index.html").toString());


try {
  main();
} catch(e) { //try内でエラーおきたらこっち
  process.stdout.write(e);
  process.exit(1);
}

function main(){

  parse(data, function(err, output){
    if(err === null){
      console.log(template({path: path, header: output[0], body: output.slice(1)}));
    }else{
      process.stdout.write(err);
      process.exit(1);
    }
  });
}
process.exit(0);
