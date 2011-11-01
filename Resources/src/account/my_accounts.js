Ti.include('/src/account/dummy_data.js');
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

Titanium.UI.addPageHeader({source:win,text:'My Account'});

var view=Titanium.UI.createView({top:10,bottom:10,height:'auto',left:15,right:15,backgroundColor:'white',borderRadius:10,borderColor:'#999'});

var tableView=Ti.UI.createTableView({data:[],minRowHeight:30,left:10,right:10,top:0,height:accList.length*50});
tableView.addEventListener('click',function(e){
	if(e.rowData.url){ 
		Ti.UI.currentTab.open(Ti.UI.createWindow({url:e.rowData.url,barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'}));
	}
});

view.add(tableView);
win.add(view);

win.addEventListener('open',function(){

for(var index in accList){
var vendor=accList[index];	
var row=Ti.UI.createTableViewRow({layout:'vertical',height:50,rightImage:'/images/IA_FarmersMarket_App_arrowicon.png',className:'account_row',url:vendor.url});
row.add(Ti.UI.createLabel({wordWrap:false,ellipsize:true,text:vendor.name,height:40,color:'#5C2E16',left:10,width:250,top:5,textAlign:'left',font:{fontSize:14,fontWeight:'bold'}}))	
tableView.appendRow(row);	
}
	
	
});


