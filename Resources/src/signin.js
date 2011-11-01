var win= Titanium.UI.currentWindow;
win.title='lowa Farmers Markets';
win.barColor='#023045';
win.backgroundImage='/images/IA_FarmersMarket_App_bg.png';
win.layout='vertical';

var btnCancel=Ti.UI.createButton({title:'Cancel'});
btnCancel.addEventListener('click',function(e){
	win.close();
});

win.leftNavButton=Titanium.UI.createView({width:0,height:0});
win.rightNavButton=btnCancel;

Titanium.UI.addPageHeader({source:win,text:'Sign In'});

var view=Titanium.UI.createScrollView({top:5,left:15,right:15,height:'auto',layout:'vertical',backgroundColor:'white',borderRadius:10,borderColor:'#999'});

view.add(Ti.UI.createLabel({className:'header_label',text:'First Time Users:'}));

view.add(Ti.UI.createImageView({url:'/images/IA_FarmersMarket_createaccountpbutton.png',height:40,top:10}));

view.add(Ti.UI.createView({left:10,right:10,height:1,backgroundColor:'#CCC',top:10}));

view.add(Ti.UI.createLabel({className:'header_label',top:10,text:'Returning Users:'}));

view.add(Ti.UI.createTextField({hintText:'Username',className:'text_field'}));

view.add(Ti.UI.createTextField({hintText:'Password',className:'text_field'}));

view.add(Ti.UI.createImageView({url:'/images/IA_FarmersMarket_App_submitbutton.png',height:40,top:10}));

view.add(Ti.UI.createLabel({className:'forgot_password',text:'Forgot Password'}));

view.children[1].addEventListener('click',function(e){
	Ti.UI.currentTab.open(Ti.UI.createWindow({url:'/src/create_account.js',barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'}));
});

win.add(view);
