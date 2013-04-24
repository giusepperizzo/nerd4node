var nerd = require('../lib/nerd4node');
var should = require('should');
var fs = require('fs');
var API_KEY = process.env.NERD_KEY;
	
describe('annotate timed text',function(){
	it("apikey should be valid",function(done){
		should.exist(API_KEY);
		done();
	});
	
	it("should return annotation results with no error",function(done){
		fs.readFile('./test/resources/test2.srt', 'utf8',function(err, text){
			nerd.annotate(
				'http://nerd.eurecom.fr/api/', 
	            API_KEY, 
	            'combined', 
	            'timedtext', 
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
});



