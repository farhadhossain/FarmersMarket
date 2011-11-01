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

var scrollView=Titanium.UI.createScrollView({top:0,left:0,right:0,height:Titanium.Platform.displayCaps.platformHeight-70,contentWidth:'auto',contentHeight:'auto',showVerticalScrollIndicator:true,showHorizontalScrollIndicator:true,layout:'vertical',textAlign:'center'});

Titanium.UI.addPageHeader({source:scrollView,text:'Create Account'});

var view=Titanium.UI.createView({top:5,left:15,right:15,height:'auto',layout:'horizontal',backgroundColor:'white',borderRadius:10,borderColor:'#999'});


var leftView=Titanium.UI.createView({top:5,bottom:5,left:5,height:'auto',width:110,layout:'vertical'});
leftView.add(Ti.UI.createLabel({className:'label',text:'*First Name:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'*Last Name:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'Address:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'City, State, Zip:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'*Email Address:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'*Email Address:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'*Password:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'*Account Type:'}));
leftView.add(Ti.UI.createLabel({className:'label',font:{fontSize:11},text:'*Required Field'}));



var rightView=Titanium.UI.createView({top:5,bottom:5,right:0,height:'auto',width:170,layout:'vertical'});
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));

var selectView=Titanium.UI.createView({height:40,width:170,top:10});
selectView.add(Ti.UI.createImageView({index:0,left:0,width:30,height:30,image:'/images/extra/selected.png'}));
selectView.add(Ti.UI.createLabel({left:25,bottom:10,className:'label',font:{fontSize:11},text:'User'}));
selectView.add(Ti.UI.createImageView({index:1,left:50,width:30,height:30,image:'/images/extra/not-selected.png'}));
selectView.add(Ti.UI.createLabel({left:75,bottom:10,className:'label',font:{fontSize:11},text:'Vendor'}));
selectView.add(Ti.UI.createImageView({index:2,left:110,width:30,height:30,image:'/images/extra/not-selected.png'}));
selectView.add(Ti.UI.createLabel({left:135,bottom:10,className:'label',font:{fontSize:11},text:'Market'}));

selectView.addEventListener('click',function(e){
	if(e.source.index==0){
		selectView.children[0].image='/images/extra/selected.png';
		selectView.children[2].image='/images/extra/not-selected.png';
		selectView.children[4].image='/images/extra/not-selected.png';
	}else if(e.source.index==1){
		
		selectView.children[0].image='/images/extra/not-selected.png';
		selectView.children[2].image='/images/extra/selected.png';
		selectView.children[4].image='/images/extra/not-selected.png';
		
	}else if(e.source.index==2){
		
		selectView.children[0].image='/images/extra/not-selected.png';
		selectView.children[2].image='/images/extra/not-selected.png';
		selectView.children[4].image='/images/extra/selected.png';
	}
	
	
});

rightView.add(selectView);
rightView.add(Ti.UI.createImageView({image:'/images/IA_FarmersMarket_App_submitbutton.png',height:35,width:164,top:10}));


view.add(leftView);
view.add(rightView);

scrollView.add(view);

win.add(scrollView);
