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

Titanium.UI.addPageHeader({source:win,text:'Freight House Farmers Market'});

var view=Titanium.UI.createView({top:10,bottom:10,height:350,left:15,right:15,backgroundColor:'white',borderRadius:10,borderColor:'#999'});

var tableView=Ti.UI.createTableView({data:[],minRowHeight:30,left:10,right:10,top:0,bottom:0});
tableView.addEventListener('click',function(e){
	Ti.UI.currentTab.open(Ti.UI.createWindow({url:'/src/vendor/vendor_detail.js',barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png',vendor:e.rowData.vendor}));
});

view.add(tableView);
win.add(view);

win.addEventListener('open',function(){
Ti.include('/src/vendor/dummy_data.js');
for(var index in vendorList){
var vendor=vendorList[index];	
var row=Ti.UI.createTableViewRow({layout:'vertical',height:50,rightImage:'/images/IA_FarmersMarket_App_arrowicon.png',leftImage:'/images/extra/'+vendor.img,className:'vendor_row'});
row.add(Ti.UI.createLabel({wordWrap:false,ellipsize:true,text:vendor.name,height:20,color:'#5C2E16',left:50,width:200,top:10,textAlign:'left',font:{fontSize:14,fontWeight:'bold'}}))	
row.vendor=vendor;
tableView.appendRow(row);	
}
	
	
});


