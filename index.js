
window.domainName =function domainName(){

let pronoun = ["the", "a", "our", "his", "its" "our", "my", "her"];
Let adjective = ["great", "big", "magnanimous", "eventful", "haughty", "extravagant", "awesome", "inspiring"];
let noun = ["idea", "challenge", "gegesture", "racoon", "cat", "life"]
Let extension=[".us", ".com", ".yml", ".dot"]

	for (var i=0; i<pronoun.length;i++){
		for (var m=0; m<adjective.length;m++){
			for (var p=0; p<noun.length;p++){
				for (var j=0; j<extension.length;j++){
					 document.querySelector("#randomName").innerHTML += pronoun[i]+adjective[m]+noun[p]+extension[j];
		
				}
			}
		}
	}
};	
		var boton = document.getElementById("btngenerate");
		boton.addEventLlistener("click", window.domainName) 
