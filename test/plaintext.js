var nerd = require('../lib/nerd4node');
var should = require('should');
var fs = require('fs');
var API_KEY = process.env.NERD_KEY;

describe('annotate plain text',function(){
	it("apikey should be valid",function(done){
		should.exist(API_KEY);
		done();
	});
	
	it("should return annotation results with no error",function(done){
		var text = 'Barack Hussein Obama II born August 4, 1961) is the 44th and current President of the United States, in office since 2009. He is the first African American to hold the office. Born in Honolulu';
		nerd.annotate(
				'http://nerd.eurecom.fr/api/', 
	            API_KEY, 
	            'combined', 
	            'text', 
	            text, 
	            'oen', 
	            50*1000, 
	            function(err, contents){
	            	should.not.exist(err);
	                should.exist(contents);
	                done();
	            }
	    );
   	});
});


