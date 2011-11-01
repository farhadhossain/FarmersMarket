var win= Titanium.UI.currentWindow;
win.title='lowa Farmers Markets';
win.barColor='#023045';
win.backgroundImage='/images/IA_FarmersMarket_App_bg.png';
win.layout='vertical';

var btnCancel=Ti.UI.createButton({title:'Cancel'});
btnCancel.addEventListener('click',function(e){
	win.close();
});

win.backButtonTitle ='Back';
win.rightNavButton=btnCancel;

var scrollView=Titanium.UI.createScrollView({top:0,left:0,right:0,height:Titanium.Platform.displayCaps.platformHeight-70,contentWidth:'auto',contentHeight:'auto',showVerticalScrollIndicator:true,showHorizontalScrollIndicator:true,layout:'vertical',textAlign:'center'});

Titanium.UI.addPageHeader({source:scrollView,text:'Edit My Market Listing'});

var view=Titanium.UI.createView({top:5,left:15,right:15,height:'auto',layout:'horizontal',backgroundColor:'white',borderRadius:10,borderColor:'#999'});


var leftView=Titanium.UI.createView({top:5,bottom:5,left:5,height:'auto',width:110,layout:'vertical'});
leftView.add(Ti.UI.createLabel({className:'label',text:'Market Name:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'Logo:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'Location:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'Times:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'Contact:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'Email Address:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'Website:'}));





var rightView=Titanium.UI.createView({top:5,bottom:5,right:0,height:'auto',width:170,layout:'vertical'});
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createImageView({height:50,width:100,left:0,top:10,backgroundColor:'#CCC'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));


var selectView=Titanium.UI.createView({left:140,height:30,width:120});
selectView.add(Ti.UI.createImageView({index:0,left:0,width:30,height:30,image:'/images/extra/selected.png'}));
selectView.add(Ti.UI.createLabel({left:30,bottom:10,className:'label',font:{fontSize:11},text:'Yes'}));
selectView.add(Ti.UI.createImageView({index:1,left:55,width:30,height:30,image:'/images/extra/not-selected.png'}));
selectView.add(Ti.UI.createLabel({left:85,bottom:10,className:'label',font:{fontSize:11},text:'No'}));

selectView.addEventListener('click',function(e){
	if(e.source.index==0){
		selectView.children[0].image='/images/extra/selected.png';
		selectView.children[2].image='/images/extra/not-selected.png';
	}else if(e.source.index==1){		
		selectView.children[0].image='/images/extra/not-selected.png';
		selectView.children[2].image='/images/extra/selected.png';	
	}
		
});


view.add(leftView);
view.add(rightView);
view.add(Ti.UI.createLabel({className:'label',text:"FMNP checks and WUC CVV's accepted:",left:5,width:300}));
view.add(selectView);
view.add(Ti.UI.createImageView({image:'/images/IA_FarmersMarket_App_submitbutton.png',height:35,left:120,width:164,top:10,bottom:10}));

scrollView.add(view);

win.add(scrollView);
