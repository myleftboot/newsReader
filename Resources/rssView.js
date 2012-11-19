var createRssRow = function(item) {
	var tablerow = Ti.UI.createTableViewRow({
		height: 70,
		link: item.link,
		className: 'RSSRow'
	});
	var imageview = Ti.UI.createImageView({
		image: item.image,
		height: 42, 
		width: 68, 
		left: 5,
		top: 3
	});
	var titleview = Ti.UI.createLabel({
		text: item.title,
		color: '#000',
		height: 70,
		font: {
			fontSize: 16
		},
		left: 83,
		right: 5
	});
	tablerow.add(imageview);
	tablerow.add(titleview);
	
	return tablerow;
};

//RSS Viewer 
function RSSView() {
	var self = Ti.UI.createView({
		backgroundColor:'#fff'
	});
	
	var table = Ti.UI.createTableView();
	self.add(table);
	
	self.refreshRSSTable = function(_args) {

		if (Object.prototype.toString.apply(_args.data) === '[object Array]') {
			var rows = [];
			for (var i = 0; i < _args.data.length; i++) {
				rows.push(createRssRow(_args.data[i]));
			}
			table.setData(rows);
		}
	};

	return self;
}
module.exports = RSSView;