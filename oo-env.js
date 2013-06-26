#!/usr/bin/env node

require('js-yaml');
var fs = require('fs');
var Path = require('path');
var _ = require('underscore')
var cwd = process.cwd();

var ENV = {};

var manifest = require('./cartridge/metadata/manifest.yml');

var name = manifest['Cartridge-Short-Name'];

var cartridgeDir = Path.join(cwd, 'cartridge');
ENV['OPENSHIFT_' + name + '_DIR'] = cartridgeDir + '/';

var logsDir = Path.join(cwd, 'logs');
ENV['OPENSHIFT_' + name + '_LOG_DIR'] = logsDir + '/';

ENV['OPENSHIFT_' + name + '_IP'] = '127.9.129.129';

ENV['OPENSHIFT_' + name + '_VERSION'] = '2.0';

ENV['OPENSHIFT_' + name + '_IDENT'] =  manifest['Cartridge-Vendor'] + ':' + manifest['Name'] + ':' + manifest['Version'] + ':' + manifest['Cartridge-Version'] ;

manifest['Endpoints'].forEach(function(endpoint){
  if(endpoint['Private-IP-Name'] != 'IP') return;
  var portName = endpoint['Private-Port-Name'];
  var port = endpoint['Private-Port'];
  ENV['OPENSHIFT_' + name + '_' + portName] =  port;
});

ENV['OPENSHIFT_TMP_DIR']='/tmp/';
var repoDir = Path.join(cwd, 'repo');

ENV['OPENSHIFT_REPO_DIR'] =  repoDir + '/';
var homeDir = Path.join(cwd, 'home');

ENV['OPENSHIFT_DATA_DIR'] =  dataDir + '/';
var dataDir = Path.join(cwd, 'data');

ENV['OPENSHIFT_HOMEDIR'] =  homeDir + '/';

ENV['OPENSHIFT_APP_NAME'] = manifest['Name'];

ENV['OPENSHIFT_GEAR_NAME'] = manifest['Name'];

ENV['OPENSHIFT_CLOUD_DOMAIN'] = 'example.com';

ENV['OPENSHIFT_APP_DNS'] = 'test-namespace.example.com';

ENV['OPENSHIFT_GEAR_DNS'] = 'test-namespace.example.com';

ENV['OPENSHIFT_DNS'] = 'test-namespace.example.com';

ENV['OPENSHIFT_NAMESPACE'] = 'namespace';

ENV['OPENSHIFT_GEAR_UUID'] = '51c9c022e0b8cd9c83000044';

ENV['OPENSHIFT_APP_UUID'] = '51c9c022e0b8cd9c83000044';

ENV['OPENSHIFT_BROKER_HOST'] = 'localhost';

ENV['OPENSHIFT_PRIMARY_CARTRIDGE_DIR'] = cartridgeDir + '/';

ENV['OPENSHIFT_DATA_DIR'] = dataDir + '/';

ENV['CARTRIDGE_VERSION_2'] = '2';

var sdkDir = Path.join(__dirname, 'sdk');
ENV['OPENSHIFT_CARTRIDGE_SDK_BASH'] =  sdkDir + '/sdk';
ENV['OPENSHIFT_CARTRIDGE_SDK_RUBY'] =  sdkDir + '/sdk.rb';


var envDir = Path.join(cartridgeDir, 'env');
fs.readdir(envDir, function(err, files){
  if(err) throw err;
  files.forEach(function(file){
    fs.readFile(Path.join(envDir, file), function(err, value){
      if(/.erb$/.test(file)){
        file = file.replace(/.erb$/, '');
        var compiled = _.template(value.toString());
        value = compiled({ENV : ENV});
      }
      ENV[file] = value; 
    });
  })
});

process.on('exit', function(){
  Object.keys(ENV).forEach(function(key){
    var value = ENV[key];
    console.log('export ' + key + '=' + value);
  });
});
