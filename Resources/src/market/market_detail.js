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

var scrollView=Titanium.UI.createScrollView({top:0,left:0,right:0,height:Titanium.Platform.displayCaps.platformHeight-70,contentWidth:'auto',contentHeight:'auto',showVerticalScrollIndicator:true,showHorizontalScrollIndicator:true,layout:'vertical',textAlign:'center'});


Titanium.UI.addPageHeader({source:scrollView,text:'Capitol Hill Farmers Market'});

var logo=Titanium.UI.createImageView({height:30,width:50,backgroundColor:'gray'}); 
scrollView.add(logo);

var view=Titanium.UI.createView({top:5,left:15,right:15,height:'auto',backgroundColor:'white',borderRadius:10,borderColor:'#999'});


var tableView=Ti.UI.createTableView({data:[],className:'table_view',height:440,scrollable:false});

var row1=Ti.UI.createTableViewRow({height:100});
row1.add(Ti.UI.createLabel({text:'Location:',top:5,className:'label_large'}));
row1.add(Ti.UI.createLabel({text:'800 E. 12th Street',top:30,className:'label_medium'}));
row1.add(Ti.UI.createLabel({text:'Des Moines',top:45,textAlign:'left',className:'label_medium'}));
row1.add(Ti.UI.createImageView({image:'/images/IA_FarmersMarket_App_viewonmapbutton.png',height:30,width:111,left:0,top:65}));

row1.add(Ti.UI.createLabel({color:'#5C2E16',text:'Like',height:20,width:30,right:50,top:5,textAlign:'center',font:{fontSize:12}}));
row1.add(Ti.UI.createLabel({color:'#5C2E16',text:"Don't Like",height:'auto',width:30,right:0,top:5,textAlign:'center',font:{fontSize:12}}));
row1.add(Ti.UI.createImageView({image:'/images/IA_FarmersMarket_App_thumbsup_green.png',height:30,width:30,right:50,top:25}));
row1.add(Ti.UI.createImageView({image:'/images/IA_FarmersMarket_App_thumbsdown_red.png',height:30,width:30,right:0,top:35}));
row1.add(Ti.UI.createLabel({color:'#5C2E16',text:"20 people have voted",right:0,top:65,width:120,height:15,textAlign:'right',font:{fontSize:12}}));
row1.add(Ti.UI.createLabel({color:'#5C2E16',text:"90% like it",height:15,width:120,right:0,top:80,height:15,textAlign:'center',font:{fontSize:12}}));

tableView.appendRow(row1);

var row2=Ti.UI.createTableViewRow({height:'auto',layout:'vertical'});
row2.add(Ti.UI.createLabel({className:'label_large',text:'Times:',height:'auto',left:0,right:0,top:5,textAlign:'left',font:{fontSize:16}}));
row2.add(Ti.UI.createLabel({className:'label_medium',text:'Tue. 4:30 - 6:30 p.m.; June 23 - Sept. 22',height:'auto',left:0,right:0,textAlign:'left',font:{fontSize:14}}));
tableView.appendRow(row2);

var row3=Ti.UI.createTableViewRow({height:'auto',layout:'vertical'});
row3.add(Ti.UI.createLabel({className:'label_large',text:'Contact:',height:'auto',left:0,right:0,top:5,textAlign:'left',font:{fontSize:16}}));
row3.add(Ti.UI.createLabel({className:'label_medium',text:'Dolores Walker (515) 262-4763',height:'auto',left:0,right:0,textAlign:'left',font:{fontSize:14}}));
row3.add(Ti.UI.createLabel({className:'label_medium',text:'capitolfarmersmarket@gmail.com',height:'auto',left:0,top:5,right:0,textAlign:'left',font:{fontSize:14}}));
row3.add(Ti.UI.createLabel({className:'label_medium',text:'www.capitolfarmersmarket.com',height:'auto',left:0,right:0,textAlign:'left',font:{fontSize:14}}));
tableView.appendRow(row3);

var row4=Ti.UI.createTableViewRow({height:'auto',layout:'horizontal'});
row4.add(Ti.UI.createLabel({className:'label_medium',text:'FMNP checks and WIC CVV’s accepted:',height:'auto',left:0,width:'auto',top:5,textAlign:'left',font:{fontSize:13}}));
row4.add(Ti.UI.createLabel({className:'label_medium',text:'Yes',height:'auto',width:'auto',right:0,top:5,textAlign:'right',font:{fontSize:12}}));
tableView.appendRow(row4);

var row5=Ti.UI.createTableViewRow({height:'auto',layout:'horizontal',rightImage:'/images/IA_FarmersMarket_App_arrowicon.png'});
row5.add(Ti.UI.createLabel({className:'label_large',text:'Vendors:',height:'20',left:0,width:'auto',top:10,bottom:10,textAlign:'left',font:{fontSize:16}}));
row5.addEventListener('click',function(e){
	Ti.UI.currentTab.open(Ti.UI.createWindow({url:'/src/vendor/vendor_list.js',barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'}));
});

tableView.appendRow(row5);

var row6=Ti.UI.createTableViewRow({height:'auto',layout:'vertical'});
row6.add(Ti.UI.createLabel({className:'label_large',text:'Photos:',height:'auto',left:0,top:5,textAlign:'left',font:{fontWeight:'bold',fontSize:16}}));
var photoView=Ti.UI.createView({left:0,right:0,height:'auto',layout:'horizontal'});
photoView.add(Ti.UI.createView({left:0,width:85,height:70,backgroundColor:'gray'}));
photoView.add(Ti.UI.createView({left:5,width:85,height:70,backgroundColor:'gray'}));
photoView.add(Ti.UI.createView({left:5,width:85,height:70,backgroundColor:'gray'}));
row6.add(photoView);
tableView.appendRow(row6);

var row7=Ti.UI.createTableViewRow({height:'auto',layout:'horizontal',rightImage:'/images/IA_FarmersMarket_App_arrowicon.png'});
row7.add(Ti.UI.createLabel({className:'label_large',text:'Reviews:',height:'20',left:0,width:'auto',top:10,bottom:10,textAlign:'left',font:{fontWeight:'bold',fontSize:16}}));
row7.addEventListener('click',function(e){
	//Ti.UI.currentTab.open(Ti.UI.createWindow({url:'/src/vendor/vendor_list.js',barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'}));
});

tableView.appendRow(row7);

view.add(tableView);

scrollView.add(view);

scrollView.add(Ti.UI.createImageView({className:'btn_addtofav'}));

win.add(scrollView);
