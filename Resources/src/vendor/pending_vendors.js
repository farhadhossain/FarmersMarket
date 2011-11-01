var win= Titanium.UI.currentWindow;
win.title='lowa Farmers Markets';
win.barColor='#023045';
win.backgroundImage='/images/IA_FarmersMarket_App_bg.png';


var btnHome=Ti.UI.createButton({title:'Home'});
btnHome.addEventListener('click',function(e){
	Ti.UI.currentTab.open(Ti.UI.createWindow({url:'/src/home.js',barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'}));
});

win.backButtonTitle='Back';
win.rightNavButton=btnHome;

var scrollView=Titanium.UI.createScrollView({left:0,right:0,height:410,layout:'vertical',contentWidth:'auto',contentHeight:'auto',showVerticalScrollIndicator:true,showHorizontalScrollIndicator:true});

Titanium.UI.addPageHeader({source:scrollView,text:'Pending Vendors'});

for(var i=0;i<4;i++){
    var infoView=Titanium.UI.createView({left:15,right:15,height:'auto',backgroundColor:'white',borderRadius:10,borderColor:'#999'});
    infoView.add(Ti.UI.createLabel({text:'Pat and Lora Dierickx, owners',top:5,className:'label_medium'}));
	infoView.add(Ti.UI.createLabel({text:'14600 305th Street',top:25,className:'label_medium'}));
	infoView.add(Ti.UI.createLabel({text:'Long Grove, IA 52756',top:45,textAlign:'left',className:'label_medium'}));
	infoView.add(Ti.UI.createLabel({text:'(563) 285-8180',top:65,textAlign:'left',className:'label_medium'}));
	infoView.add(Ti.UI.createLabel({text:'Email: prideofthewapsi@gmtel.net',top:85,textAlign:'left',className:'label_medium'}));
	infoView.add(Ti.UI.createLabel({text:'www.prideofthewapsi.com',top:105,textAlign:'left',className:'label_medium'}));

  
   var btnView=Titanium.UI.createView({width:Ti.Platform.displayCaps.platformWidth,height:'auto',layout:'horizontal',bottom:10,top:5});
   btnView.add(Ti.UI.createImageView({image:'/images/IA_FarmersMarket_approvebutton.png',left:20,height:30,width:135}));
   btnView.add(Ti.UI.createImageView({image:'/images/IA_FarmersMarket_denybutton.png',left:10,height:30,width:135}));
   scrollView.add(infoView);
   scrollView.add(btnView);
}


win.add(scrollView);
