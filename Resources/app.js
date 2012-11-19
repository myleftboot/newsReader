var win = Titanium.UI.createWindow({  
    title:'RssReader',
    backgroundColor:'#fff'
});


var rss = require('rssReader'),
RssView = require('rssView');

var rssView = new RssView();

win.add(rssView);
win.open();


rss.fetchRSSFeed({url: 'http://feeds.bbci.co.uk/news/business/rss.xml?edition=uk', success: masterView.refreshRSSTable});

