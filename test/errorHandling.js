var nerd = require('../lib/nerd4node');
var fs = require('fs');
var should = require('should');
var WRONG_API_KEY = "randomestring";
var errMsg= require('../lib/message.js').message.error;


describe('Test error handling',function(){
	describe('The apikey is not correct',function(){
		it("should return error messages about apikey incorrect.",function(done){
			var text = 'Barack Hussein Obama II born August 4, 1961) is the 44th and current President of the United States, in office since 2009. He is the first African American to hold the office. Born in Honolulu';
			nerd.annotate(
					'http://nerd.eurecom.fr/api/', 
		            WRONG_API_KEY, 
		            'combined', 
		            'text', 
		            text, 
		            'oen', 
		            50*1000, 
		            function(err, contents){
		            	should.exist(err);
		            	(err).should.eql(errMsg.API_KEY_ERROR);
		                done();
		            }
		    );
	   	});
	});	
});


