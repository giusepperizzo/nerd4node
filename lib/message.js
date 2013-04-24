var message = 
{
	"success":{
		"code": 0,
		"message":"Success."
	},
	"error":{
		"INTERNET_CONNECTION_ERROR":{
			"code": 200,
			"message":"HTTP connection error:"
		},
		"HTTP_CONNECTION_ERROR":{
			"code": 300,
			"message":"HTTP connection error:"
		},
		"API_KEY_ERROR":{
			"code": 400,
			"message":"Invalid API Key."
		},
		"INTERNAL_ERROR":{
			"code": 500,
			"message":"NERD service not available."
		}
	}
};

exports.message = message;