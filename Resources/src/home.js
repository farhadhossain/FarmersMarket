var win= Titanium.UI.currentWindow;
win.title='lowa Farmers Markets';
win.barColor='#023045';
win.backgroundImage='/images/IA_FarmersMarket_App_bg.png';

var btnSignIn=Ti.UI.createButton({title:'Sign In'});
btnSignIn.addEventListener('click',function(e){
	var signInWIn=Ti.UI.createWindow({url:'/src/signin.js',barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'});
	Ti.UI.currentTab.open(signInWIn);
});

win.leftNavButton=btnSignIn;

var imgMarket=Titanium.UI.createImageView({image:'/images/button/findMarket.png',top:30,left:50,height:65,width:80});
imgMarket.addEventListener('click',function(e){
	Ti.UI.currentTab.open(Ti.UI.createWindow({url:'/src/market/search_market.js',barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'}));
});

var imgAccount=Titanium.UI.createImageView({image:'/images/button/myAccount.png',top:30,right:50,height:65,width:80});
imgAccount.addEventListener('click',function(e){
	Ti.UI.currentTab.open(Ti.UI.createWindow({url:'/src/account/my_accounts.js',barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'}));
});


var imgAbout=Titanium.UI.createImageView({image:'/images/button/about.png',top:120,height:65,width:80});
imgAbout.addEventListener('click',function(e){
	//Ti.UI.currentTab.open(Ti.UI.createWindow({url:'/src/account/my_accounts.js',barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'}));
});

var imgFavMarket=Titanium.UI.createImageView({image:'/images/button/favoriteMarket.png',top:220,height:35,width:180});
imgFavMarket.addEventListener('click',function(e){
	Ti.UI.currentTab.open(Ti.UI.createWindow({url:'/src/market/market_list.js',barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'}));
});

var imgFavVen=Titanium.UI.createImageView({image:'/images/button/favoriteVendors.png',top:265,height:35,width:180});
imgFavVen.addEventListener('click',function(e){
	Ti.UI.currentTab.open(Ti.UI.createWindow({url:'/src/vendor/vendor_list.js',barColor:'#023045',backgroundImage:'/images/IA_FarmersMarket_App_bg.png'}));
});

win.add(imgMarket);
win.add(imgAccount);
win.add(imgAbout);
win.add(imgFavMarket);
win.add(imgFavVen);

