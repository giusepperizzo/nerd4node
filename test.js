var nerd = require('./nerd4node');

var text = 'Barack Hussein Obama II born August 4, 1961) is the 44th and current President of the United States, in office since 2009. He is the first African American to hold the office. Born in Honolulu';

var result = nerd.
    annotate('http://nerd.eurecom.fr/api/', 
             YOUR_API_KEY, 
             'combined', 
             'text', 
              text, 
             'oen', 
              50, 
            function(err, contents){
                        console.log(contents);
            }
    );


