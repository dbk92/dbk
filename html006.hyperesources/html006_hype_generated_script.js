//	HYPE.documents["html006"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "html006.hyperesources";
	var documentName = "html006";
	var documentLoaderFilename = "html006_hype_generated_script.js";
	var mainContainerID = "html006_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"7":{n:"45343.jpg",p:1},"3":{n:"fggg.jpg",p:1},"4":{n:"%E1%84%83%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A2%E1%86%BC1.jpg",p:1},"0":{n:"rudy2.png",p:1},"5":{n:"%E1%84%83%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A2%E1%86%BC2.jpg",p:1},"1":{n:"0.png",p:1},"6":{n:"1.jpg",p:1},"2":{n:"yyyyy.jpg",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"26":{aV:8,w:"\uae40\ub2e8\ube44",a:315,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"2",k:"div",s:"Times,'Times New Roman',Georgia,Serif",aT:8,b:7,t:48,e:"0.000000",aS:8,aU:8,G:"#C8C8C8"},"25":{o:"content-box",h:"6",x:"visible",a:0,q:"100% 100%",b:-384,j:"absolute",r:"inline",c:481,k:"div",z:"1",d:704},"27":{b:305,z:"3",K:"None",c:90,L:"None",d:15,aS:0,M:0,e:"0.000000",bD:"none",N:0,aT:0,O:0,g:"#F0F0F0",aU:0,P:0,aV:0,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:391,y:"preserve",J:"None"}},n:"Untitled Scene 6",T:{kTimelineDefaultIdentifier:{d:5,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:3,i:"b",e:0,s:-384,o:"25"},{f:"2",t:0,d:3,i:"a",e:0,s:0,o:"25"},{f:"2",t:0,d:3,i:"e",e:"0.010490",s:"0.000000",o:"26"},{f:"2",t:0,d:3,i:"e",e:"0.010000",s:"0.000000",o:"27"},{f:"2",t:3,d:2,i:"e",e:"0.486014",s:"0.010490",o:"26"},{f:"2",t:3,d:2,i:"e",e:"0.381119",s:"0.010000",o:"27"}],f:30}},o:"24"},{x:1,p:"600px",c:"#000000",v:{"2":{o:"content-box",h:"0",x:"visible",a:12,q:"100% 100%",b:0,j:"absolute",r:"inline",c:454,k:"div",z:"1",d:320},"28":{b:305,z:"3",K:"None",c:90,L:"None",d:15,aS:0,M:0,e:"0.090000",bD:"none",N:0,aT:0,O:0,g:"#F0F0F0",aU:0,P:0,aV:0,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"13":{b:305,z:"2",K:"None",c:90,L:"None",d:15,aS:0,M:0,e:"0.087413",bD:"none",N:0,aT:0,O:0,g:"#F0F0F0",aU:0,P:0,aV:0,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:390,y:"preserve",J:"None"}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:1,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1,i:"e",e:"0.304196",s:"0.087413",o:"13"},{f:"2",t:0,d:1,i:"e",e:"0.300000",s:"0.090000",o:"28"}],f:30}},o:"1"},{x:2,p:"600px",c:"#000000",v:{"4":{o:"content-box",h:"1",x:"visible",a:0,q:"100% 100%",b:37,j:"absolute",r:"inline",c:480,k:"div",z:"1",d:246},"14":{b:305,z:"2",K:"None",c:90,L:"None",d:15,aS:0,M:0,e:"0.094406",bD:"none",N:0,aT:0,O:0,g:"#F0F0F0",aU:0,P:0,aV:0,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:390,y:"preserve",J:"None"},"15":{b:305,z:"3",K:"None",c:90,L:"None",d:15,aS:0,M:0,e:"0.094406",bD:"none",N:0,aT:0,O:0,g:"#F0F0F0",aU:0,P:0,aV:0,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:0,y:"preserve",J:"None"}},n:"Untitled Scene 2",T:{kTimelineDefaultIdentifier:{d:1,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1,i:"e",e:"0.297203",s:"0.094406",o:"14"},{f:"2",t:0,d:1,i:"e",e:"0.297203",s:"0.094406",o:"15"}],f:30}},o:"3"},{x:3,p:"600px",c:"#0A0A0A",v:{"6":{o:"content-box",h:"2",x:"visible",a:0,q:"100% 100%",b:33,j:"absolute",r:"inline",c:480,k:"div",z:"1",d:255.37229783827061},"17":{b:305,z:"3",K:"None",c:90,L:"None",d:15,aS:0,M:0,e:"0.090000",bD:"none",N:0,aT:0,O:0,g:"#F0F0F0",aU:0,P:0,aV:0,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:390,y:"preserve",J:"None"},"16":{b:305,z:"2",K:"None",c:90,L:"None",d:15,aS:0,M:0,e:"0.090000",bD:"none",N:0,aT:0,O:0,g:"#F0F0F0",aU:0,P:0,aV:0,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:0,y:"preserve",J:"None"}},n:"Untitled Scene 3",T:{kTimelineDefaultIdentifier:{d:1,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1,i:"e",e:"0.304196",s:"0.090000",o:"16"},{f:"2",t:0,d:1,i:"e",e:"0.304196",s:"0.090000",o:"17"}],f:30}},o:"5"},{x:4,p:"600px",c:"#000000",v:{"22":{b:305,z:"4",K:"None",c:90,L:"None",d:15,aS:0,M:0,e:"0.090000",bD:"none",N:0,aT:0,O:0,g:"#F0F0F0",aU:0,P:0,aV:0,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:390,y:"preserve",J:"None"},"21":{b:305,z:"3",K:"None",c:90,L:"None",d:15,aS:0,M:0,e:"0.090000",bD:"none",N:0,aT:0,O:0,g:"#F0F0F0",aU:0,P:0,Q:3,aV:0,R:"#808080",j:"absolute",S:0,aI:0,k:"div",T:0,l:"0deg",aJ:0,m:"#D8D8D8",n:"#FFFFFF",aK:0,aL:0,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"19":{o:"content-box",h:"4",x:"visible",a:12,q:"100% 100%",b:0,j:"absolute",r:"inline",c:223.81176470588235,k:"div",z:"1",d:320},"20":{o:"content-box",h:"5",x:"visible",a:238,q:"100% 100%",b:0,j:"absolute",r:"inline",c:231.34117647058821,k:"div",z:"2",d:320}},n:"Untitled Scene 4",T:{kTimelineDefaultIdentifier:{d:1,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1,i:"e",e:"0.300000",s:"0.090000",o:"21"},{f:"2",t:0,d:1,i:"e",e:"0.300000",s:"0.090000",o:"22"}],f:30}},o:"7"},{x:5,p:"600px",c:"#370117",v:{"12":{o:"content-box",h:"3",x:"visible",a:18,q:"100% 100%",b:0,j:"absolute",r:"inline",c:443.4315651604453,k:"div",z:"1",d:320},"23":{b:305,z:"2",K:"None",c:90,L:"None",d:15,aS:0,M:0,e:"0.090000",bD:"none",N:0,aT:0,O:0,g:"#F0F0F0",aU:0,P:0,aV:0,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"32":{b:305,z:"3",K:"None",c:90,L:"None",d:15,aS:0,M:0,e:"0.090000",bD:"none",N:0,aT:0,O:0,g:"#F0F0F0",aU:0,P:0,aV:0,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:1,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"<br>",x:"visible",I:"None",a:390,y:"preserve",J:"None"}},n:"Untitled Scene 5",T:{kTimelineDefaultIdentifier:{d:1,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1,i:"e",e:"0.300000",s:"0.090000",o:"23"},{f:"2",t:0,d:1,i:"e",e:"0.300000",s:"0.090000",o:"32"}],f:30}},o:"10"},{x:6,p:"600px",c:"#FFFFFF",v:{"31":{aV:8,w:"\ub05d",a:415,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"2",k:"div",b:267,aT:8,aS:8,t:36,aU:8,G:"#000000"},"30":{o:"content-box",h:"7",x:"visible",a:77,q:"100% 100%",b:0,j:"absolute",r:"inline",c:325.44680851063833,k:"div",z:"1",d:320}},n:"Untitled Scene 7",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"29"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

