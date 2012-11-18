parseRSS = function(_args) {
	var items = _args.data.documentElement.getElementsByTagName("item");
	var data = [];

	for (var i = 0; i < items.length; i++) {
		var item = items.item(i);
		var image;
		try {
		var image = item.getElementsByTagNameNS('http://search.yahoo.com/mrss/', 'thumbnail').item(0).getAttribute('url');
		} catch (e) {
			image = '';
		}
		
		data.push({
			title:       item.getElementsByTagName('title').item(0).text,
			link:        item.getElementsByTagName('link').item(0).text,
			description: item.getElementsByTagName('description').item(0).text,
			pubDate:     item.getElementsByTagName('pubDate').item(0).text,
			image:       image
		});
	}
	if (_args.then) {
		_args.then({data: data});
	}
};

exports.fetchRSSFeed = function(_args) {
	var xhr = Titanium.Network.createHTTPClient();	
	xhr.open('GET', _args.url);
	
	xhr.onerror = function(e)
    {
         if (_args.error) _args.error();
    };
	xhr.onload = function(e) {
		var xml = this.responseXML;

		if (xml === null || xml.documentElement === null) { 
			alert('Error reading RSS feed. Make sure you have a network connection and try refreshing.');
			if (_args.error) { _args.error(); }
			return;	
		}	
		
		parseRSS({data: xml, then: _args.success});
	};

	xhr.send();	
}