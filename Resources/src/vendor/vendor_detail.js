var win= Titanium.UI.currentWindow;
win.title='lowa Farmers Markets';
win.barColor='#023045';
win.backgroundImage='/images/IA_FarmersMarket_App_bg.png';
win.layout='vertical';

var btnHome=Ti.UI.createButton({title:'Home'});
btnHome.addEventListener('click',function(e){
	Ti.UI.currentTab.open(Ti.UI.createWindow({url:'/src/home.js',barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'}));
});

win.backButtonTitle='Back';
win.rightNavButton=btnHome;

var scrollView=Titanium.UI.createScrollView({left:0,right:0,height:410,layout:'vertical',contentWidth:'auto',contentHeight:'auto',showVerticalScrollIndicator:true,showHorizontalScrollIndicator:true});


Titanium.UI.addPageHeader({source:scrollView,text:win.vendor.name});

var view=Titanium.UI.createView({top:5,left:15,right:15,height:400,backgroundColor:'white',borderRadius:10,borderColor:'#999'});


var tableView=Ti.UI.createTableView({data:[],className:'table_view',height:400});
view.add(tableView);

var row1=Ti.UI.createTableViewRow({height:130});
row1.add(Ti.UI.createLabel({text:'Pat and Lora Dierickx, owners',top:5,className:'label_medium'}));
row1.add(Ti.UI.createLabel({text:'14600 305th Street',top:25,className:'label_medium'}));
row1.add(Ti.UI.createLabel({text:'Long Grove, IA 52756',top:45,textAlign:'left',className:'label_medium'}));
row1.add(Ti.UI.createLabel({text:'(563) 285-8180',top:65,textAlign:'left',className:'label_medium'}));
row1.add(Ti.UI.createLabel({text:'Email: prideofthewapsi@gmtel.net',top:85,textAlign:'left',className:'label_medium'}));
row1.add(Ti.UI.createLabel({text:'www.prideofthewapsi.com',top:105,textAlign:'left',className:'label_medium'}));

row1.add(Ti.UI.createLabel({color:'#5C2E16',text:'Like',height:20,width:30,right:40,top:5,textAlign:'center',font:{fontSize:12}}));
row1.add(Ti.UI.createLabel({color:'#5C2E16',text:"Don't Like",height:'auto',width:30,right:0,top:5,textAlign:'center',font:{fontSize:12}}));
row1.add(Ti.UI.createImageView({image:'/images/IA_FarmersMarket_App_thumbsup_green.png',height:30,width:30,right:40,top:25}));
row1.add(Ti.UI.createImageView({image:'/images/IA_FarmersMarket_App_thumbsdown_red.png',height:30,width:30,right:0,top:35}));
row1.add(Ti.UI.createLabel({color:'#5C2E16',text:"20 people have voted",right:0,top:65,width:120,height:15,textAlign:'right',font:{fontSize:10}}));
row1.add(Ti.UI.createLabel({color:'#5C2E16',text:"90% like it",height:15,width:120,right:0,top:80,height:15,textAlign:'center',font:{fontSize:10}}));

tableView.appendRow(row1);

var row2=Ti.UI.createTableViewRow({height:'auto'});
row2.add(Ti.UI.createLabel({className:'label_large',text:'Months:',height:'auto',left:0,top:5,textAlign:'left',font:{fontWeight:'bold',fontSize:16}}));
row2.add(Ti.UI.createLabel({className:'label_medium',text:'June - Sept.',height:'auto',left:70,top:7,textAlign:'left',font:{fontSize:14}}));
tableView.appendRow(row2);


var row3=Ti.UI.createTableViewRow({height:'auto',layout:'vertical'});
row3.add(Ti.UI.createLabel({className:'label_large',text:'Price Range:',height:'auto',left:0,right:0,top:5,textAlign:'left',font:{fontWeight:'bold',fontSize:16}}));
var priceView=Ti.UI.createView({left:0,height:30,width:'auto',layout:'horizontal'});
priceView.add(Ti.UI.createLabel({className:'label_medium',text:'Under $5',left:0,width:'auto'}));
priceView.add(Ti.UI.createLabel({className:'label_medium',text:'$5-$10',left:15,width:'auto'}));
priceView.add(Ti.UI.createLabel({className:'label_medium',text:'$10-$20',left:15,width:'auto'}));
priceView.add(Ti.UI.createLabel({className:'label_medium',text:'Over $20',left:15,width:'auto'}));
row3.add(priceView);
tableView.appendRow(row3);

var row4=Ti.UI.createTableViewRow({height:'auto',layout:'horizontal',rightImage:'/images/IA_FarmersMarket_App_arrowicon.png'});
row4.add(Ti.UI.createLabel({className:'label_large',text:'Product Types:',height:'20',left:0,width:'auto',top:10,bottom:10,textAlign:'left',font:{fontWeight:'bold',fontSize:16}}));
row4.addEventListener('click',function(e){
	//Ti.UI.currentTab.open(Ti.UI.createWindow({url:'/src/vendor/vendor_list.js',barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'}));
});
tableView.appendRow(row4);




var row5=Ti.UI.createTableViewRow({height:'auto',layout:'vertical'});
row5.add(Ti.UI.createLabel({className:'label_large',text:'Photos:',height:'auto',left:0,top:5,textAlign:'left',font:{fontWeight:'bold',fontSize:16}}));
var photoView=Ti.UI.createView({left:0,right:0,height:'auto',layout:'horizontal'});
photoView.add(Ti.UI.createView({left:0,width:85,height:70,backgroundColor:'gray'}));
photoView.add(Ti.UI.createView({left:5,width:85,height:70,backgroundColor:'gray'}));
photoView.add(Ti.UI.createView({left:5,width:85,height:70,backgroundColor:'gray'}));
row5.add(photoView);
tableView.appendRow(row5);

var row6=Ti.UI.createTableViewRow({height:'auto',layout:'horizontal',rightImage:'/images/IA_FarmersMarket_App_arrowicon.png'});
row6.add(Ti.UI.createLabel({className:'label_large',text:'Reviews:',height:'20',left:0,width:'auto',top:10,bottom:10,textAlign:'left',font:{fontWeight:'bold',fontSize:16}}));
row6.addEventListener('click',function(e){
	//Ti.UI.currentTab.open(Ti.UI.createWindow({url:'/src/vendor/vendor_list.js',barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'}));
});

tableView.appendRow(row6);

scrollView.add(view);

scrollView.add(Ti.UI.createImageView({className:'btn_addtofav'}));

win.add(scrollView);
