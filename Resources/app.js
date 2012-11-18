
var win = Titanium.UI.createWindow({  
    title:'RssReader',
    backgroundColor:'#fff'
});


var rss = require('rssReader'),
MasterView = require('MasterView');

var masterView = new MasterView();

win.add(masterView);
win.open();


rss.fetchRSSFeed({url: 'http://feeds.bbci.co.uk/news/business/rss.xml?edition=uk', success: masterView.refreshRSSTable});

