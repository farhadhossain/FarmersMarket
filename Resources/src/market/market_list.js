var win= Titanium.UI.currentWindow;
win.title='lowa Farmers Markets';
win.barColor='#023045';
win.backgroundImage='/images/IA_FarmersMarket_App_bg.png';
//win.layout='vertical';

var btnHome=Ti.UI.createButton({title:'Home'});
btnHome.addEventListener('click',function(e){
	Ti.UI.currentTab.open(Ti.UI.createWindow({url:'/src/home.js',barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'}));
});

win.backButtonTitle='Back';
win.rightNavButton=btnHome;

var view=Titanium.UI.createView({top:15,left:15,right:15,height:'auto',backgroundColor:'white',borderRadius:10,borderColor:'#999'});

var tableView=Ti.UI.createTableView({data:[],minRowHeight:30,left:10,right:10,top:0,bottom:0,height:336});
tableView.addEventListener('click',function(e){
	Ti.UI.currentTab.open(Ti.UI.createWindow({url:'/src/market/market_detail.js',barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'}));
});


view.add(tableView);
win.add(view);

var mapView = Titanium.Map.createView({
		visible:false,
		top:0,
		left:0,
		right:0,
		bottom:45,
		mapType: Titanium.Map.STANDARD_TYPE,
		region:{latitude:33.74511, longitude:-84.38993, latitudeDelta:20, longitudeDelta:20},
		animate:true,
		regionFit:true,
		userLocation:false,
		annotations:[]
	});
win.add(mapView);
	
var tabButton = Titanium.UI.createTabbedBar({
		labels:['List', 'Map'],
		style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
		index:0, 
		width:150,
	    backgroundColor :'#023045'
	});
tabButton.addEventListener('click',function(e){
		if(e.index==1){
			view.hide();
			mapView.show();		
		}else{
			mapView.hide();
			view.show();
		}
	});

var flexSpace = Titanium.UI.createButton({systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE});	
var toolBar=Ti.UI.createToolbar({barColor:'#023045',bottom:0,height:50,items:[flexSpace,tabButton,flexSpace]});

win.add(toolBar);

win.addEventListener('open',function(){
	
Ti.include('/src/market/dummy_data.js');
for(var index in marketList){
	var market=marketList[index];	
	var row=Ti.UI.createTableViewRow({layout:'vertical',height:'auto',rightImage:'/images/IA_FarmersMarket_App_arrowicon.png',className:'market_row'});
	row.add(Ti.UI.createLabel({text:market.name,height:20,color:'#5C2E16',left:0,width:'auto',top:10,textAlign:'left',font:{fontSize:16}}))	
	row.add(Ti.UI.createLabel({text:market.address,height:20,color:'#5C2E16',left:0,width:'auto',top:10,textAlign:'left',font:{fontSize:14}}))	
	row.add(Ti.UI.createLabel({text:market.state,height:20,color:'#5C2E16',left:0,width:'auto',textAlign:'left',font:{fontSize:14}}))	
	tableView.appendRow(row);	
}
	
});
