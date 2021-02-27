


let pronoun = ["the", "our", "his", "its"];
let adjective = ["magnanimous", "haughty", "extravagant", "awesome"];
let noun = ["stoat","cat", "okapi"]
let extension=[".us", ".com", ".yml"]

 
	for (var i=0; i<pronoun.length;i++){
		for (var m=0; m<adjective.length;m++){
			for (var p=0; p<noun.length;p++){
				for (var j=0; j<extension.length;j++){
					 console.log("www."+pronoun[i]+adjective[m]+noun[p]+extension[j]);
		
				}
			}
		}
	}

		
