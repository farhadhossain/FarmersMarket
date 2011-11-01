var win= Titanium.UI.currentWindow;
win.title='lowa Farmers Markets';
win.barColor='#023045';
win.backgroundImage='/images/IA_FarmersMarket_App_bg.png';
win.layout='vertical';

var btnHome=Ti.UI.createButton({title:'Home'});
btnHome.addEventListener('click',function(e){
	win.close();
});

win.backButtonTitle='Back';
win.rightNavButton=btnHome;

var view=Titanium.UI.createScrollView({top:0,left:0,right:0,height:350,contentWidth:'auto',contentHeight:'auto',showVerticalScrollIndicator:true,showHorizontalScrollIndicator:true,layout:'vertical',textAlign:'center'});


Titanium.UI.addPageHeader({source:view,text:'Find a Farmers Market'});

var myLocation=Titanium.UI.createImageView({url:'/images/IA_FarmersMarket_App_mylocationbutton.png',top:5,height:40}); 
myLocation.addEventListener('click',function(e){
	Ti.UI.currentTab.open(Ti.UI.createWindow({url:'/src/market/market_list.js',barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'}));
});
view.add(myLocation);

view.add(Ti.UI.createLabel({text:'Use Another Address:',
							top:20,
							height:35,
							left:0,
							right:0,
							textAlign:'center',
							font:{fontSize:14,
							fontWeight:'normal'},
							color:'#5C2E16' 
						}));

view.add(Ti.UI.createTextField({hintText:'Street Address',
								left:50,
								right:50,
								height:35,
								autocapitalization:false,
								font:{fontSize: 14},
								borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
								backgroundColor:'white'
								}));

view.add(Ti.UI.createTextField({hintText:'City, State, Zip',
								left:50,
								right:50,
								height:35,
								autocapitalization:false,
								font:{fontSize: 14},
								borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
								backgroundColor:'white',
								top:10}));


var otherLocation=Titanium.UI.createImageView({url:'/images/IA_FarmersMarket_App_submitbutton.png',height:35,top:10}); 
otherLocation.addEventListener('click',function(e){
	Ti.UI.currentTab.open(Ti.UI.createWindow({url:'/src/market/market_list.js',barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'}));
});

view.add(otherLocation);

win.add(view);


