//   nerd4nodejs - A nodejs library which provides a programmable interface to the NERD API
//               http://nerd.eurecom.fr/api
//
//   Copyright 2012
//
//   Authors:
//      Giuseppe Rizzo <giuse.rizzo@gmail.com>
//      Yunjia Li <yl2@ecs.soton.ac.uk>
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License published by
// the Free Software Foundation, either version 3 of the License, or (at 
// your option) any later version. See the file Documentation/GPL3 in the
// original distribution for details. There is ABSOLUTELY NO warranty.

var needle = require('needle');
var async = require('async');

var annotate = function (api_instance, 
                         api_key, 
                         ext, 
                         doc_type, 
                         t, 
                         gran, 
                         to, 
                         callback) 
{

    var postDocument = function (callbackDocument) {
        var data; 
        if ( doc_type == 'timedtext' ) data = {key: api_key, timedtext: t};
        else if ( doc_type == 'text' ) data = {key: api_key, text: t};

        needle.post(api_instance + 'document', data, function(err, resp, body) { 
            if(!err && resp.statusCode == 200 || resp.statusCode==201)
            {
                //console.log("postDocument");
                return callbackDocument(null, body.idDocument);
            }
            else if(err) //err from the http connection in needle.post
            {
            	return callbackDocument(err, null);
            }
            else //err from NERD server
            {
            	return callbackDocument(body, null);
            }
        });
    } 

    var postAnnotation = function (d, callbackAnnotation) {
    	//console.log("d:"+d);
        needle.post ( api_instance + 'annotation', {key: api_key,idDocument: d, extractor: ext, timeout: to }, {timeout: to*1000}, function(err, resp, body ){
        	console.log("err:"+err);
        	console.log("statuscode:"+resp.statusCode);
        	console.log("body:"+body);
            if(!err && resp.statusCode == 200 || resp.statusCode==201) 
            {
                return callbackAnnotation(null, body.idAnnotation);
            }
       		else if(err) //err from the http connection in needle.post
            {
            	return callbackAnnotation(err, null);
            }
            else //err from NERD server
            {
            	return callbackAnnotation(body, null);
            }
        });
    }

    var getEntities = function (e, callbackEntities) {
    	//console.log("e:"+e);
        needle.get(api_instance + 'entity?key='+api_key+'&idAnnotation=' + e + '&granularity=' + gran, function(err, resp, body){
            if(!err && resp.statusCode == 200 || resp.statusCode==201) {
            	//console.log("getEntities:"+body);
                return callbackEntities(null, body);
            }
            else if(err) //err from the http connection in needle.post
            {
            	return callbackEntities(err, null);
            }
            else //err from NERD server
            {
            	return callbackEntities(body, null);
            }
       });
    }

    async.waterfall([ 
        postDocument,
        postAnnotation,
        getEntities
    ], function(err, contents){
        callback(err, contents);
    });
}

exports.annotate = annotate;
