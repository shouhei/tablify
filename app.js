#!/usr/bin/env node

var bower = require('bower');
var fs = require('fs');
var parse = require('csv-parse');
var _ = require('underscore');

bower.commands.update();
var file = process.argv[2];
var data = fs.readFileSync(file).toString();
var path = __dirname
var template = _.template(fs.readFileSync(path + "/templates/index.html").toString());

parse(data, {comment: '#'}, function(err, output){
  if(err === null){
      console.log(template({path: path, header: output[0], body: output.slice(1)}));
  }
});
