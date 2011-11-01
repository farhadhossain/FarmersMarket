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

Titanium.UI.addPageHeader({source:scrollView,text:'Edit My Vendor Listing'});

var view=Titanium.UI.createView({top:5,left:15,right:15,height:'auto',layout:'horizontal',backgroundColor:'white',borderRadius:10,borderColor:'#999'});


var leftView=Titanium.UI.createView({top:5,bottom:0,left:5,height:'auto',width:110,layout:'vertical'});
leftView.add(Ti.UI.createLabel({className:'label',text:'Vendor Name:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'Main Product:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'Contact Name:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'Address:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'City:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'State:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'Zip Code:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'Phone:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'Email Address:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'Website:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'Begin Month:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'End Month:'}));
leftView.add(Ti.UI.createLabel({className:'label',text:'Price Ranges:',height:'auto',bottom:0}));

var priceView=Ti.UI.createView({left:5,height:'auto',width:320,layout:'horizontal'});
priceView.add(Ti.UI.createLabel({className:'label',text:'Under $5',left:0,width:'auto',height:'auto'}));
priceView.add(Ti.UI.createLabel({className:'label',text:'$5-$10',left:15,width:'auto',height:'auto'}));
priceView.add(Ti.UI.createLabel({className:'label',text:'$10-$20',left:15,width:'auto',height:'auto'}));
priceView.add(Ti.UI.createLabel({className:'label',text:'Over $20',left:15,width:'auto',height:'auto'}));



var rightView=Titanium.UI.createView({top:5,bottom:0,right:0,height:'auto',width:170,layout:'vertical'});
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createLabel({backgroundImage:'/images/extra/selectBox.png',height:35,width:170,top:10,font:{fontSize:13},textAlign:'center'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createTextField({className:'text_field'}));
rightView.add(Ti.UI.createLabel({backgroundImage:'/images/extra/selectBox.png',height:35,width:170,top:10,text: new Date().toLocaleDateString(),date:new Date(),font:{fontSize:13},textAlign:'center'}));
rightView.add(Ti.UI.createLabel({backgroundImage:'/images/extra/selectBox.png',height:35,width:170,top:10,text: new Date().toLocaleDateString(),date:new Date(),font:{fontSize:13},textAlign:'center'}));
rightView.children[1].addEventListener('click',function(e){selectProduct(rightView.children[1]);});
rightView.children[10].addEventListener('click',function(e){initDatePicker(rightView.children[10]);});
rightView.children[11].addEventListener('click',function(e){initDatePicker(rightView.children[11]);});

view.add(leftView);
view.add(rightView);
view.add(priceView);
view.add(Ti.UI.createImageView({image:'/images/IA_FarmersMarket_App_submitbutton.png',height:35,left:120,width:164,top:10,bottom:10}));

scrollView.add(view);

win.add(scrollView);


function selectProduct(source){
   hideKeyBoard();	
   var dateSelectWin = Titanium.UI.createWindow({});
   dateSelectWin.addEventListener('open',function(){
      view.animate(Titanium.UI.createAnimation({bottom:0}));	
   });

	var view = Titanium.UI.createView({height : 250,bottom : -250,left : 0,right:0,opacity : .95,backgroundColor : '#333',layout:'vertical'});

    var backButton = Titanium.UI.createButton({systemButton : Titanium.UI.iPhone.SystemButton.CANCEL});
    backButton.addEventListener("click", function() {
        view.animate(Titanium.UI.createAnimation({bottom:-250},function(){ dateSelectWin.close();}));
    });

    var doneButton = Ti.UI.createButton({style : Titanium.UI.iPhone.SystemButtonStyle.DONE,title : 'Done'});
    doneButton.addEventListener("click", function() {
    	source.value=picker.getSelectedRow(0).val;
    	source.text=picker.getSelectedRow(0).title;
    	view.animate(Titanium.UI.createAnimation({bottom:-250},function(){ dateSelectWin.close();}));	       
    });
    
    var picker = Ti.UI.createPicker({top:45});
    picker.selectionIndicator = true;
    var picker_data = [];  
    for(var p = 0; p <10 ; p++) {
        picker_data.push(Titanium.UI.createPickerRow({title :'Product - '+p,val:p,height : 20,width : 300}));
    }
    picker.add(picker_data);

    var spacer =  Titanium.UI.createButton({systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE});	 
	var toolbar =  Titanium.UI.createToolbar({top:0,items:[backButton,spacer,doneButton]});
	
	view.add(toolbar);
	view.add(picker);
    dateSelectWin.add(view);
    dateSelectWin.open();
};

function initDatePicker(source){
   hideKeyBoard();	
   var dateSelectWin = Titanium.UI.createWindow({});
   dateSelectWin.addEventListener('open',function(){
      view.animate(Titanium.UI.createAnimation({bottom:0}));	
   });

	var view = Titanium.UI.createView({height : 250,bottom : -250,left : 0,width:Ti.Platform.displayCaps.platformWidth ,opacity : .95,backgroundColor : '#333',layout:'vertical',backgroundGradient:{type:'linear',colors:['#999','#333'],startPoint:{x:0,y:0},endPoint:{x:0,y:50}}});

    var backButton = Titanium.UI.createButton({systemButton : Titanium.UI.iPhone.SystemButton.CANCEL});
    backButton.addEventListener("click", function() {
        view.animate(Titanium.UI.createAnimation({bottom:-250},function(){ dateSelectWin.close();}));
    });

    var doneButton = Ti.UI.createButton({style : Titanium.UI.iPhone.SystemButtonStyle.DONE,title : 'Done'});
    doneButton.addEventListener("click", function() {
    	source.text = selectedDate.toLocaleDateString();
		source.date = selectedDate;
    	view.animate(Titanium.UI.createAnimation({bottom:-250},function(){ dateSelectWin.close();}));	       
    });
    
    var maxDate = new Date()
	maxDate.setMonth(11);
	maxDate.setDate(31)
	
	var picker = Ti.UI.createPicker({left:0,right:0,top:45,type:Ti.UI.PICKER_TYPE_DATE_AND_TIME,minDate:new Date(),maxDate:maxDate,value:source.date});
	var selectedDate=new Date();
	picker.addEventListener('change',function(e){
		selectedDate=e.value;
	});
	
    var spacer =  Titanium.UI.createButton({systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE});	 
	var toolbar =  Titanium.UI.createToolbar({top:0,items:[backButton,spacer,doneButton]});
	
	view.add(toolbar);
	view.add(picker);
    dateSelectWin.add(view);
    dateSelectWin.open();
};

function hideKeyBoard(){
for(var i=0;i<rightView.children.length;i++){

	if(rightView.children[i].className=='text_field')
		rightView.children[i].blur();
}	
};
