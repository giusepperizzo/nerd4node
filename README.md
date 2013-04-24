Nodejs client for NERD

Pack and deploy the module 
==================
To pack and use this package locally, download the code and run under the root folder of the project:

<pre>npm pack</pre>

This command will generate a nerd4node-version.tgz file. Then you can go to your project and install the file:

<pre>npm install ../path/to/your/project/nerd4node-version.tgz</pre>

Run Test Cases 
==================
To run the test case, you need firstly obtain an API Key by registering at [NERD Server](http://nerd.eurecom.fr). Then, download the sourcecode and
in the root directory of the project, run the following command:

<pre>env NERD_KEY=YOUR_KEY ./node_modules/mocha/bin/mocha test/*.js --timeout 60000</pre>

Replace the 'YOUR_KEY' with your actual API key. This command will run all the test cases. To run individual test case, please replace the '*.js' to the actual test js file.