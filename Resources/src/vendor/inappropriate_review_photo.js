var win= Titanium.UI.currentWindow;
win.title='lowa Farmers Markets';
win.barColor='#023045';
win.backgroundImage='/images/IA_FarmersMarket_App_bg.png';
win.layout="vertical";

win.backButtonTitle='Back';


Titanium.UI.addPageHeader({source:win,text:'Reviews & Photos Marked Inappropriate'});

var view=Titanium.UI.createView({top:10,bottom:10,height:'auto',left:15,right:15,backgroundColor:'white',layout:'vertical',borderRadius:10,borderColor:'#999'});

var tableView=Ti.UI.createTableView({data:[],minRowHeight:30,left:10,right:10,top:0,height:Ti.Platform.displayCaps.platformHeight-120});
for(var i=0;i<4;i++){  
   var label=Ti.UI.createLabel({text:'dfsd dsf dsf ds fds f sdfsdfsdfds fdsf ds fs df sd f sdf sd fsd f sdf ds f sdf ',left:10,top:5,bottom:40,color:'#5C2E16',textAlign:'left',height:'auto',font:{fontSize:14}});
   
   if(i%2!=0){
   	  label=Ti.UI.createLabel({left:10,right:10,top:5,height:100,backgroundColor:'gray'});
   }
   var btnView=Titanium.UI.createView({width:Ti.Platform.displayCaps.platformWidth-10,height:'auto',layout:'horizontal',bottom:10,top:5});
   btnView.add(Ti.UI.createImageView({image:'/images/IA_FarmersMarket_appropriatebutton.png',left:17,height:30,width:135}));
   btnView.add(Ti.UI.createImageView({image:'/images/IA_FarmersMarket_deletebutton.png',left:5,height:30,width:135}));
   
   var row=Ti.UI.createTableViewRow({layout:'vertical',height:'auto',className:'account_row'});
   row.add(label);
   row.add(btnView);
   
   tableView.appendRow(row);
}

view.add(tableView);

win.add(view);
