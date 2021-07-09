// Extension converted by Mrcomputer1's ScratchXto3
// https://mrcomputer1.github.io/ScratchXto3

var Extext = function(runtimeProxy){
	this.runtime = runtimeProxy;
};

Extext.prototype.getInfo = function(){
	
	(function(){})();
	
	return {
		id: "ext",
		name: formatMessage({
			id: "extensionName",
			defaultMessage: "Weather extension",
			description: "Extension Name"
		}),
		blockIconURI: "",
		menuIconURI: "",
		docsURI: "",
		blocks: [
			
			{
				opcode: "getWeather",
				blockType: "reporter",
				isTerminal: false,
				text: formatMessage({
					id: "getWeather.spec",
					defaultMessage: "[ARG_0] in [ARG_1]",
					description: "Label of the '[ARG_0] in [ARG_1]' block"
				}),
				arguments: {
					
					ARG_0: {
						type: "string",
						defaultValue: "temperature",
						menu: "reporterData"
					},
					
					ARG_1: {
						type: "string",
						defaultValue: "",
						
					},
					
				},
				func: "getWeather",
				
			},
			
			{
				opcode: "whenWeather",
				blockType: "hat",
				isTerminal: false,
				text: formatMessage({
					id: "whenWeather.spec",
					defaultMessage: "when [ARG_0] in [ARG_1] is [ARG_2] [ARG_3]",
					description: "Label of the 'when [ARG_0] in [ARG_1] is [ARG_2] [ARG_3]' block"
				}),
				arguments: {
					
					ARG_0: {
						type: "string",
						defaultValue: "Boston, MA",
						menu: "eventData"
					},
					
					ARG_1: {
						type: "string",
						defaultValue: "80",
						
					},
					
					ARG_2: {
						type: "string",
						defaultValue: "",
						menu: "ops"
					},
					
					ARG_3: {
						type: "number",
						defaultValue: "",
						
					},
					
				},
				func: "whenWeather",
				
			},
			
			{
				opcode: "setUnits",
				blockType: "command",
				isTerminal: false,
				text: formatMessage({
					id: "setUnits.spec",
					defaultMessage: "set units to [ARG_0]",
					description: "Label of the 'set units to [ARG_0]' block"
				}),
				arguments: {
					
					ARG_0: {
						type: "string",
						defaultValue: "",
						menu: "units"
					},
					
				},
				func: "setUnits",
				
			},
			
			{
				opcode: "getUnits",
				blockType: "reporter",
				isTerminal: false,
				text: formatMessage({
					id: "getUnits.spec",
					defaultMessage: "unit format",
					description: "Label of the 'unit format' block"
				}),
				arguments: {
					
				},
				func: "getUnits",
				
			},
			
		],
		menus: {
			
			"reporterData": ["temperature","weather","humidity","wind speed","cloudiness"],
			
			"eventData": ["temperature","humidity","wind speed","cloudiness"],
			
			"ops": [">","=","<"],
			
			"units": ["imperial","metric"],
			
		}
	};
	
};




Extext.prototype.getWeather = function(args){
	var inner = function(type, location, callback) {
    fetchWeatherData(location, function(data) {
      var val = getWeatherData(data, type);
      callback(val);
    });
  };
	return inner(args.ARG_0, args.ARG_1);
};



Extext.prototype.whenWeather = function(args){
	var inner = function(type, location, op, val) {
    if (!cachedTemps[location]) {
      //Weather data not cached
      //Fetch it and return false for now
      fetchWeatherData(location, function(){});
      return false;
    }
    //Weather data is cached, no risk of blocking
    var data = getWeatherData(cachedTemps[location].data, type);
    switch (op) {
      case '<':
        return (data < val);
      case '=':
        return (data == val);
      case '>':
        return (data > val);
    }
  };
	return inner(args.ARG_0, args.ARG_1, args.ARG_2, args.ARG_3);
};



Extext.prototype.setUnits = function(args){
	var inner = function(format) {
    units = format;
    return;
  };
	return inner(args.ARG_0);
};



Extext.prototype.getUnits = function(args){
	var inner = function() {
    return units;
  };
	return inner();
};



Scratch.extensions.register(new Extext());
