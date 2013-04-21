var nerd = require('../lib/nerd4node');
var fs = require('fs');
var API_KEY = "";
	
describe('annotate timed text',function(){
	it("should return annotation results with no error",function(done){
		fs.readFile('./test/resources/test.srt', 'utf8',function(err, text){
			console.log("text:"+text);
			nerd.annotate(
				'http://nerd.eurecom.fr/api/', 
	            API_KEY, 
	            'combined', 
	            'timedtext', 
	            text, 
	            'oen', 
	            50*1000, 
	            function(err, contents){		            	
	            	shuold.not.exist(err);
	                should.exist(contents);
	                done();
	            }
	        );
    	});
	});			
});



