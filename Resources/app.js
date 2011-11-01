Titanium.UI.addPageHeader=function(e){
 e.source.add(Ti.UI.createLabel({text:e.text,height:30,left:0,right:0,top:5,color:'#4A260E',textAlign:'center',font:{fontSize:20,fontWeight:'bold'}})); 	
};


var tabGroup=Ti.UI.createTabGroup({})

var homeWin= Ti.UI.createWindow({url:'/src/home.js',tabBarHidden:true,barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'});

var tab=Ti.UI.createTab({window:homeWin});

tabGroup.addTab(tab);

tabGroup.open({});
