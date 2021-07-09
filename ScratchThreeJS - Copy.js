// 

var Extext = function(runtimeProxy){
	this.runtime = runtimeProxy;
};

Extext.prototype.getInfo = function(){
	
	(function(){})();
	
	return {
		id: "ext",
		name: formatMessage({
			id: "extensionName",
			defaultMessage: "Scratch Three JS",
			description: "Extension Name"
		}),
		blockIconURI: "",
		menuIconURI: "",
		docsURI: "",
		blocks: [
			
			{
				opcode: "initWorld",
				blockType: "command",
				isTerminal: false,
				text: formatMessage({
					id: "initWorld.spec",
					defaultMessage: "New 3D World [ARG_0] Width: [ARG_1] Height: [ARG_2]",
					description: "Label of the 'New 3D World [ARG_0] Width: [ARG_1] Height: [ARG_2]' block"
				}),
				arguments: {
					
					ARG_0: {
						type: "string",
						defaultValue: "[object Object]",
						menu: "Scenes"
					},
					
					ARG_1: {
						type: "number",
						defaultValue: "",
						
					},
					
					ARG_2: {
						type: "number",
						defaultValue: "",
						
					},
					
				},
				func: "initWorld",
				
			},
			
			{
				opcode: "camControls",
				blockType: "command",
				isTerminal: false,
				text: formatMessage({
					id: "camControls.spec",
					defaultMessage: "Add Camera Controls [ARG_0] Move Speed: [ARG_1] Look Speed: [ARG_2] ",
					description: "Label of the 'Add Camera Controls [ARG_0] Move Speed: [ARG_1] Look Speed: [ARG_2] ' block"
				}),
				arguments: {
					
					ARG_0: {
						type: "string",
						defaultValue: "",
						menu: "CameraControls"
					},
					
					ARG_1: {
						type: "number",
						defaultValue: "",
						
					},
					
					ARG_2: {
						type: "number",
						defaultValue: "",
						
					},
					
				},
				func: "camControls",
				
			},
			
			{
				opcode: "cameraFallow",
				blockType: "command",
				isTerminal: false,
				text: formatMessage({
					id: "cameraFallow.spec",
					defaultMessage: " Camera Look At: [ARG_0]  [ARG_1]",
					description: "Label of the ' Camera Look At: [ARG_0]  [ARG_1]' block"
				}),
				arguments: {
					
					ARG_0: {
						type: "string",
						defaultValue: "",
						
					},
					
					ARG_1: {
						type: "string",
						defaultValue: "",
						menu: "Sides"
					},
					
				},
				func: "cameraFallow",
				
			},
			
			{
				opcode: "moveCamera",
				blockType: "command",
				isTerminal: false,
				text: formatMessage({
					id: "moveCamera.spec",
					defaultMessage: " Move Camera  [ARG_0]  [ARG_1] steeps ",
					description: "Label of the ' Move Camera  [ARG_0]  [ARG_1] steeps ' block"
				}),
				arguments: {
					
					ARG_0: {
						type: "string",
						defaultValue: "",
						menu: "Move"
					},
					
					ARG_1: {
						type: "number",
						defaultValue: "",
						
					},
					
				},
				func: "moveCamera",
				
			},
			
			{
				opcode: "rotateCamera",
				blockType: "command",
				isTerminal: false,
				text: formatMessage({
					id: "rotateCamera.spec",
					defaultMessage: "Rotate Camera [ARG_0] [ARG_1] Degrees",
					description: "Label of the 'Rotate Camera [ARG_0] [ARG_1] Degrees' block"
				}),
				arguments: {
					
					ARG_0: {
						type: "string",
						defaultValue: "",
						menu: "CameraRotation"
					},
					
					ARG_1: {
						type: "number",
						defaultValue: "",
						
					},
					
				},
				func: "rotateCamera",
				
			},
			
			{
				opcode: "createShape",
				blockType: "reporter",
				isTerminal: false,
				text: formatMessage({
					id: "createShape.spec",
					defaultMessage: "New Shape [ARG_0] Size: [ARG_1] [ARG_2] [ARG_3] Location: X: [ARG_4] Y: [ARG_5] Z: [ARG_6]",
					description: "Label of the 'New Shape [ARG_0] Size: [ARG_1] [ARG_2] [ARG_3] Location: X: [ARG_4] Y: [ARG_5] Z: [ARG_6]' block"
				}),
				arguments: {
					
					ARG_0: {
						type: "string",
						defaultValue: "1",
						menu: "Shapes"
					},
					
					ARG_1: {
						type: "number",
						defaultValue: "0",
						
					},
					
					ARG_2: {
						type: "number",
						defaultValue: "0",
						
					},
					
					ARG_3: {
						type: "number",
						defaultValue: "0",
						
					},
					
					ARG_4: {
						type: "number",
						defaultValue: "",
						
					},
					
					ARG_5: {
						type: "number",
						defaultValue: "",
						
					},
					
					ARG_6: {
						type: "number",
						defaultValue: "",
						
					},
					
				},
				func: "createShape",
				
			},
			
			{
				opcode: "createText",
				blockType: "reporter",
				isTerminal: false,
				text: formatMessage({
					id: "createText.spec",
					defaultMessage: "3D Text: [ARG_0] Size: [ARG_1] Location: X: [ARG_2] Y: [ARG_3] Z: [ARG_4]",
					description: "Label of the '3D Text: [ARG_0] Size: [ARG_1] Location: X: [ARG_2] Y: [ARG_3] Z: [ARG_4]' block"
				}),
				arguments: {
					
					ARG_0: {
						type: "string",
						defaultValue: "0",
						
					},
					
					ARG_1: {
						type: "number",
						defaultValue: "0",
						
					},
					
					ARG_2: {
						type: "number",
						defaultValue: "",
						
					},
					
					ARG_3: {
						type: "number",
						defaultValue: "",
						
					},
					
					ARG_4: {
						type: "number",
						defaultValue: "",
						
					},
					
				},
				func: "createText",
				
			},
			
			{
				opcode: "add_Charecter",
				blockType: "reporter",
				isTerminal: false,
				text: formatMessage({
					id: "add_Charecter.spec",
					defaultMessage: "New [ARG_0] Location: X: [ARG_1] Y: [ARG_2] Z: [ARG_3]",
					description: "Label of the 'New [ARG_0] Location: X: [ARG_1] Y: [ARG_2] Z: [ARG_3]' block"
				}),
				arguments: {
					
					ARG_0: {
						type: "string",
						defaultValue: "0",
						menu: "Charecters"
					},
					
					ARG_1: {
						type: "number",
						defaultValue: "",
						
					},
					
					ARG_2: {
						type: "number",
						defaultValue: "",
						
					},
					
					ARG_3: {
						type: "number",
						defaultValue: "",
						
					},
					
				},
				func: "add_Charecter",
				
			},
			
			{
				opcode: "addPlanet",
				blockType: "reporter",
				isTerminal: false,
				text: formatMessage({
					id: "addPlanet.spec",
					defaultMessage: "New Planet [ARG_0] X: [ARG_1] Y: [ARG_2] Z: [ARG_3] Diameter: [ARG_4]",
					description: "Label of the 'New Planet [ARG_0] X: [ARG_1] Y: [ARG_2] Z: [ARG_3] Diameter: [ARG_4]' block"
				}),
				arguments: {
					
					ARG_0: {
						type: "string",
						defaultValue: "0",
						menu: "Planets"
					},
					
					ARG_1: {
						type: "number",
						defaultValue: "1",
						
					},
					
					ARG_2: {
						type: "number",
						defaultValue: "",
						
					},
					
					ARG_3: {
						type: "number",
						defaultValue: "",
						
					},
					
					ARG_4: {
						type: "number",
						defaultValue: "",
						
					},
					
				},
				func: "addPlanet",
				
			},
			
			{
				opcode: "moveShape",
				blockType: "reporter",
				isTerminal: false,
				text: formatMessage({
					id: "moveShape.spec",
					defaultMessage: "Move [ARG_0] [ARG_1] [ARG_2] Steps",
					description: "Label of the 'Move [ARG_0] [ARG_1] [ARG_2] Steps' block"
				}),
				arguments: {
					
					ARG_0: {
						type: "string",
						defaultValue: "Left",
						
					},
					
					ARG_1: {
						type: "string",
						defaultValue: "1",
						menu: "Move"
					},
					
					ARG_2: {
						type: "number",
						defaultValue: "",
						
					},
					
				},
				func: "moveShape",
				
			},
			
			{
				opcode: "goto",
				blockType: "reporter",
				isTerminal: false,
				text: formatMessage({
					id: "goto.spec",
					defaultMessage: "Object: [ARG_0] Go To X: [ARG_1] Y: [ARG_2] Z: [ARG_3]",
					description: "Label of the 'Object: [ARG_0] Go To X: [ARG_1] Y: [ARG_2] Z: [ARG_3]' block"
				}),
				arguments: {
					
					ARG_0: {
						type: "string",
						defaultValue: "",
						
					},
					
					ARG_1: {
						type: "number",
						defaultValue: "",
						
					},
					
					ARG_2: {
						type: "number",
						defaultValue: "",
						
					},
					
					ARG_3: {
						type: "number",
						defaultValue: "",
						
					},
					
				},
				func: "goto",
				
			},
			
			{
				opcode: "rotateShape",
				blockType: "reporter",
				isTerminal: false,
				text: formatMessage({
					id: "rotateShape.spec",
					defaultMessage: "Rotate [ARG_0] [ARG_1] Degrees: [ARG_2] ",
					description: "Label of the 'Rotate [ARG_0] [ARG_1] Degrees: [ARG_2] ' block"
				}),
				arguments: {
					
					ARG_0: {
						type: "string",
						defaultValue: "Y",
						
					},
					
					ARG_1: {
						type: "string",
						defaultValue: "1",
						menu: "Axis3"
					},
					
					ARG_2: {
						type: "number",
						defaultValue: "",
						
					},
					
				},
				func: "rotateShape",
				
			},
			
			{
				opcode: "applyObjControls",
				blockType: "reporter",
				isTerminal: false,
				text: formatMessage({
					id: "applyObjControls.spec",
					defaultMessage: "Apply FPV Controls to Object: [ARG_0] Move Speed: [ARG_1] Turn Speed: [ARG_2]",
					description: "Label of the 'Apply FPV Controls to Object: [ARG_0] Move Speed: [ARG_1] Turn Speed: [ARG_2]' block"
				}),
				arguments: {
					
					ARG_0: {
						type: "string",
						defaultValue: "",
						
					},
					
					ARG_1: {
						type: "number",
						defaultValue: "",
						
					},
					
					ARG_2: {
						type: "number",
						defaultValue: "",
						
					},
					
				},
				func: "applyObjControls",
				
			},
			
			{
				opcode: "key_Pressed",
				blockType: "hat",
				isTerminal: false,
				text: formatMessage({
					id: "key_Pressed.spec",
					defaultMessage: "When [ARG_0]  Pressed",
					description: "Label of the 'When [ARG_0]  Pressed' block"
				}),
				arguments: {
					
					ARG_0: {
						type: "string",
						defaultValue: "",
						menu: "Keys"
					},
					
				},
				func: "key_Pressed",
				
			},
			
			{
				opcode: "isTouching",
				blockType: "Boolean",
				isTerminal: false,
				text: formatMessage({
					id: "isTouching.spec",
					defaultMessage: "[ARG_0] Touching [ARG_1]",
					description: "Label of the '[ARG_0] Touching [ARG_1]' block"
				}),
				arguments: {
					
					ARG_0: {
						type: "string",
						defaultValue: "Variable",
						
					},
					
					ARG_1: {
						type: "string",
						defaultValue: "",
						
					},
					
				},
				func: "isTouching",
				
			},
			
		],
		menus: {
			
			"Scenes": ["Grid","Grass","Space","Blank"],
			
			"Fonts": ["helvetiker"],
			
			"Toggle": ["Off"],
			
			"Camera": ["Perspective"],
			
			"CameraRotation": ["Left","Right","Up","Down","Roll Left","Roll Right"],
			
			"CameraOrbit": ["Orbit Left","Orbit Right","Orbit Up","Orbit Down"],
			
			"CameraControls": ["First Person","Mouse/Trackball"],
			
			"Sides": ["Back","Front"],
			
			"Move": ["Left","Right","Up","Down","Forward","Back"],
			
			"Shapes": ["Cube","Sphere","Circle","Cylinder","Dodecahedron","Icosahedron","Plane","Ring","Torus"],
			
			"Planets": ["Earth","Sun","Moon","Mercury","Venus","Mars","Jupiter","Saturn","Uranus","Neptune","Pluto"],
			
			"Materials": ["MeshBasicMaterial","MeshNormalMaterial","MeshDepthMaterial","MeshLambertMaterial","MeshPhongMaterial"],
			
			"Images": ["Crate","Brick","Earth","Moon"],
			
			"Keys": ["space","up arrow","down arrow","right arrow","left arrow","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"],
			
			"Charecters": ["Marine","Car","Cat","Cat1","Lego Vader","Pirate Ship"],
			
			"Lights": ["Ambient","Directional","Point"],
			
			"Axis3": ["X","Y","Z"],
			
			"Axis2": ["X","Y"],
			
			"MouseOptions": ["Click","Down","Up","Double Click"],
			
		}
	};
	
};




Extext.prototype.initWorld = function(args){
	var inner = function(scene, width, height, callback) {
		//Opens the three.js window
		//win = window.open (liveURL, "", "width=window.width, height=window.height");
		//Test URLS

    
    //Clear data from past runs
    var logginWindow = null;
    collisions = null;
    charecters = new Array();
    materials = new Array();
    shapes = new Array();
    raycaster = new Array();
    //--------------------------
    
		
  
		win = window.open (liveURL, "", "width=window.width, height=window.height");
    if(win==null){
      var browserData = navigator.userAgent;
      if(browserData.indexOf("Safari")>-1){
      alert("This extension must open in a separate window. \rTo run please enable pop-ups from this site. \rTo enable PopUps: \rClick Safari, \rClick Preferences, \rClick security, \rUncheck Block pop-up windows, \rThen refresh page. ");
      }
  }
    //newSession = false;
		/*
		**Checks Browser Version in win returns null
		**
		*/
		
		//**//
		
        setTimeout(function (){
			var message = "INIT_"+scene+","+width+","+height;
			win.postMessage(message,liveURL);
			callback(); //Calls back to Scaratch proggram to allow exicution flow to reStart once the page has been loaded
        }, 3000);

	};
	return inner(args.ARG_0, args.ARG_1, args.ARG_2);
};



Extext.prototype.camControls = function(args){
	var inner = function(controlType, moveSpeed, lookSpeed){
		var message = "SETCAMERACONTROLS_"+controlType+','+moveSpeed+','+lookSpeed;
		win.postMessage(message, liveURL);
	};
	return inner(args.ARG_0, args.ARG_1, args.ARG_2);
};



Extext.prototype.cameraFallow = function(args){
	var inner = function(objectID, direction){
		var message = "CAMERAFOLLOW_"+objectID+","+direction;
		win.postMessage(message, liveURL);
	};
	return inner(args.ARG_0, args.ARG_1);
};



Extext.prototype.moveCamera = function(args){
	var inner = function(direction, steps){
		var message = "CAMERAMOVE_"+direction+","+steps;
		win.postMessage(message, liveURL);
	};
	return inner(args.ARG_0, args.ARG_1);
};



Extext.prototype.rotateCamera = function(args){
	var inner = function(direction, degrees){
		        //logginWindow.postMessage("message", "http://03c3573.netsolhost.com/Scratch3d/Scratch3d%20Login%20Window/index.html");
		//Checks to make sure the user has supplied a Direction 
		if(direction != "Direction" && degrees != 0){
		//Creates the message to be sent to the main.html 
		//Messge will be formated as tag, turn direction, number of degrees to rotate. exp.  "CAMERAROTATE_Left,15"	
		var message = "CAMERAROTATE_"+direction + "," + degrees;
		//Sends Message to the main.htlm event listener with the rotate tags along with user supplied params 
		win.postMessage(message, liveURL);
		}
	};
	return inner(args.ARG_0, args.ARG_1);
};



Extext.prototype.createShape = function(args){
	var inner = function(shape, l,w,h, locX,locY, locZ, PhysicBool){
		var shapeID = generatID(shape);
		shapes.push(shapeID);
		var message = "CREATESHAPE_"+shape+','+l+','+w+','+h+','+locX+','+locY+','+locZ+','+PhysicBool+','+shapeID;
		win.postMessage(message, liveURL);
		return shapeID;
	};
	return inner(args.ARG_0, args.ARG_1, args.ARG_2, args.ARG_3, args.ARG_4, args.ARG_5, args.ARG_6);
};



Extext.prototype.createText = function(args){
	var inner = function(text, size, x, y, z){
    var textID = generatID("text");
    shapes.push(textID);
    var message = "CREATETEXT_"+text+','+size+','+x+','+y+','+z+','+textID;
    win.postMessage(message, liveURL);
    return textID;
  };
	return inner(args.ARG_0, args.ARG_1, args.ARG_2, args.ARG_3, args.ARG_4);
};



Extext.prototype.add_Charecter = function(args){
	var inner = function(Charecter, locX, locY, locZ){
		var charecterID = generatID("CHARECTER");
		charecters.push(charecterID);
		shapes.push(charecterID);
		var message = "ADDCHARECTER_"+Charecter+','+locX+','+locY+','+locZ+','+charecterID;
		win.postMessage(message, liveURL);
		return charecterID;
	};
	return inner(args.ARG_0, args.ARG_1, args.ARG_2, args.ARG_3);
};



Extext.prototype.addPlanet = function(args){
	var inner = function(Planet, locX, locY, locZ, diameter){
    var planetID = generatID("PLANET");
    shapes.push(planetID);
    var message = "ADDPLANET_"+Planet+','+locX+','+locY+','+locZ+','+diameter+','+planetID;
    win.postMessage(message, liveURL);
    return planetID;
  };
	return inner(args.ARG_0, args.ARG_1, args.ARG_2, args.ARG_3, args.ARG_4);
};



Extext.prototype.moveShape = function(args){
	var inner = function(shape_id, direction, steps){
		//Makes sure that the shape we are trying to move has been created
		if(shapes.indexOf(shape_id)>-1){
		var message = "MOVESHAPE_"+shape_id+','+direction+','+steps;
		win.postMessage(message, liveURL);
		}
	};
	return inner(args.ARG_0, args.ARG_1, args.ARG_2);
};



Extext.prototype.goto = function(args){
	var inner = function(shape_id, x, y, z){
      if(shapes.indexOf(shape_id)>-1){
      var message = "GOTO_"+shape_id+','+x+','+y+','+z;
      win.postMessage(message, liveURL);
    }
  };
	return inner(args.ARG_0, args.ARG_1, args.ARG_2, args.ARG_3);
};



Extext.prototype.rotateShape = function(args){
	var inner = function(shape_id, direction, steps){
    //Makes sure that the shape we are trying to move has been created
    if(shapes.indexOf(shape_id)>-1){
    var message = "ROTATESHAPE_"+shape_id+','+direction+','+steps;
    win.postMessage(message, liveURL);
    }
  };
	return inner(args.ARG_0, args.ARG_1, args.ARG_2);
};



Extext.prototype.applyObjControls = function(args){
	var inner = function(shape_id, moveSpeed, lookSpeed){
		//Makes sure that the shape we are trying to move has been created
		if(shapes.indexOf(shape_id)>-1){
		var message = "APPLYOBJCONTRLS_"+shape_id+','+moveSpeed+','+lookSpeed;
		win.postMessage(message, liveURL);
		}
	};
	return inner(args.ARG_0, args.ARG_1, args.ARG_2);
};



Extext.prototype.key_Pressed = function(args){
	var inner = function(key) {
       // Reset alarm_went_off if it is true, and return true
       // otherwise, return false.

       //Checks to see if we are looking for a key command exp. "left arrow"
       //If so we the check to see if that key has been pressed 
       //If it has been pressed we then return true exectuing the code stack below the when pressed block
       if(key=='up arrow'){
       	if (lastKeyEvent == 38) {
           lastKeyEvent = null;
           return true;
           }
       }else if(key=="space"){
       	if (lastKeyEvent == 32) {
           lastKeyEvent = null;
           return true;
           }
       }else if(key=='down arrow'){
       	if (lastKeyEvent == 40) {
           lastKeyEvent = null;
           return true;
           }
       }else if(key=='right arrow'){
       	if (lastKeyEvent == 39) {
           lastKeyEvent = null;
           return true;
           }
       }else if(key=='left arrow'){
       	if (lastKeyEvent == 37) {
           lastKeyEvent = null;
           return true;
           }
       }
       //If a letter was entered insted of a command key
       else if(key=='a'){
       if (lastKeyEvent == 65) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*B*/
       else if(key=='b'){
       if (lastKeyEvent == 66) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*C*/
       else if(key=='c'){
       if (lastKeyEvent == 67) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*D*/
       else if(key=='d'){
       if (lastKeyEvent == 68) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*E*/
       else if(key=='e'){
       if (lastKeyEvent == 69) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*F*/
       else if(key=='f'){
       if (lastKeyEvent == 70) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*G*/
       else if(key=='g'){
       if (lastKeyEvent == 71) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*H*/
       else if(key=='h'){
       if (lastKeyEvent == 72) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*I*/
       else if(key=='i'){
       if (lastKeyEvent == 73) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*J*/
       else if(key=='j'){
       if (lastKeyEvent == 74) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*K*/
       else if(key=='k'){
       if (lastKeyEvent == 75) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*l*/
       else if(key=='l'){
       if (lastKeyEvent == 76) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*M*/
       else if(key=='m'){
       if (lastKeyEvent == 77) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*N*/
       else if(key=='n'){
       if (lastKeyEvent == 78) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*O*/
       else if(key=='o'){
       if (lastKeyEvent == 79) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*P*/
       else if(key=='p'){
       if (lastKeyEvent == 80) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*Q*/
       else if(key=='q'){
       if (lastKeyEvent == 81) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*R*/
       else if(key=='r'){
       if (lastKeyEvent == 82) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*S*/
       else if(key=='s'){
       if (lastKeyEvent == 83) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*T*/
       else if(key=='t'){
       if (lastKeyEvent == 84) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*U*/
       else if(key=='u'){
       if (lastKeyEvent == 85) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*V*/
       else if(key=='v'){
       if (lastKeyEvent == 86) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*W*/
       else if(key=='w'){
       if (lastKeyEvent == 87) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*X*/
       else if(key=='x'){
       if (lastKeyEvent == 88) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*Y*/
       else if(key=='y'){
       if (lastKeyEvent == 89) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*Z*/
       else if(key=='z'){
       if (lastKeyEvent == 90) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*0*/
       else if(key=='0'){
       if (lastKeyEvent == 48) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*1*/
       else if(key=='1'){
       if (lastKeyEvent == 49) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*2*/
       else if(key=='2'){
       if (lastKeyEvent == 50) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*3*/
       else if(key=='3'){
       if (lastKeyEvent == 51) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*4*/
       else if(key=='4'){
       if (lastKeyEvent == 52) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*5*/
       else if(key=='5'){
       if (lastKeyEvent == 53) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*6*/
       else if(key=='6'){
       if (lastKeyEvent == 54) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*7*/
       else if(key=='7'){
       if (lastKeyEvent == 55) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*8*/
       else if(key=='8'){
       if (lastKeyEvent == 56) {
           lastKeyEvent = null;
           return true;
       }
       }
       /*9*/
       else if(key=='9'){
       if (lastKeyEvent == 57) {
           lastKeyEvent = null;
           return true;
       }
       }
       return false;
    };
	return inner(args.ARG_0);
};



Extext.prototype.isTouching = function(args){
	var inner = function(objectIdOne, ObjectIdTwo){
     
    //Checks to see if the object has been created yet
    if((charecters.indexOf(objectIdOne)>=0||shapes.indexOf(objectIdOne)>=0)&&(charecters.indexOf(ObjectIdTwo)>=0||shapes.indexOf(ObjectIdTwo)>=0)){
      if(raycasters[objectIdOne]!=null){
        if(raycasters[objectIdOne].indexOf(ObjectIdTwo)>=0){
          
          if(collisions.data[objectIdOne].indexOf(ObjectIdTwo)>=0){
           return true;
          }else{
            return false;
          }

        }else{
          //add ObjectIdTwo to ObjectIdOne's raycaster checking
          raycasters[objectIdOne].push(ObjectIdTwo);
          var message = "ADDOBJECTTOCASTER_"+objectIdOne+','+ObjectIdTwo;
          win.postMessage(message, liveURL);
          return false;
        }
      }else{
        //create ObjectIdOne raycaster and add ObjectIdTwo to its checking list
        var message = "APPENDRAYCASTER_"+objectIdOne+','+ObjectIdTwo;
        win.postMessage(message, liveURL);
        raycasters[objectIdOne] = [];
        raycasters[objectIdOne].push(ObjectIdTwo);
        return false;
      }
  }else{
    //returns false with if the object hasnt been created
    return false;
  }
};
	return inner(args.ARG_0, args.ARG_1);
};



Scratch.extensions.register(new Extext());
