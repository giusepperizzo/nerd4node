//   nerd4nodejs - A nodejs library which provides a programmable interface to the NERD API
//               http://nerd.eurecom.fr/api
//
//   Copyright 2012
//
//   Authors:
//      Giuseppe Rizzo <giuse.rizzo@gmail.com>
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License published by
// the Free Software Foundation, either version 3 of the License, or (at 
// your option) any later version. See the file Documentation/GPL3 in the
// original distribution for details. There is ABSOLUTELY NO warranty.

var needle = require('needle');

var api = 'http://localhost:8888/api/';
var extractor = ['combined', 'alchemyapi', 'dbspotlight', 'extractiv', 'lupedia', 'opencalais', 'saplo', 'semitags', 'textrazor', 'wikimeta', 'yahoo', 'zemanta']; 
var apiKey = 'test';
var to = 50; //seconds

var t = 'Barack Hussein Obama II born August 4, 1961) is the 44th and current President of the United States, in office since 2009. He is the first African American to hold the office. Born in Honolulu, Hawaii, Obama is a graduate of Columbia University and Harvard Law School, where he was president of the Harvard Law Review. He was a community organizer in Chicago before earning his law degree. He worked as a civil rights attorney in Chicago and taught constitutional law at the University of Chicago Law School from 1992 to 2004. He served three terms representing the 13th District in the Illinois Senate from 1997 to 2004, running unsuccessfully for the United States House of Representatives in 2000';

// post document
var data = {
    key: apiKey,
    text: t
};
needle.post(api + 'document', data, function(err, resp, body) {   
        if(!err && resp.statusCode == 200 || resp.statusCode==201)
        {
            // post annotation
            var d = body.idDocument;
            var data = {
                key: apiKey,
                idDocument: d,
                extractor : extractor[0],
                timeout: to
            };
            needle.post ( api + 'annotation', data, {timeout: to*1000}, function(err, resp, body ){
                    if(!err && resp.statusCode == 200 || resp.statusCode==201) 
                    {
                        //get list annotation
                        var e = body.idAnnotation;
                        needle.get(api + 'entity?key='+apiKey+'&idAnnotation=' + e, function(err, resp, body){
                            if(!err && resp.statusCode == 200 || resp.statusCode==201) {
                                console.log(body);
                            }
                        });
                    }
                }
            );
        }
    }
);

             

