

function audioPlay()
	{	
	
		if(SlideStatusArr[MainNavigations][2] == 'sliderhide') return;
		globalAudioPause();
		AudioText=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex][stepIndex];
		globalAudioName=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["audio"][audioIndex][stepIndex];
		//alert(globalAudioName)
		if(typeof AudioText == 'undefined'){
			if(parseInt($('.expDiv').css('left'))>= 0 ) SliderOkClick("close"); 
			$('.activeSlider').off('click').css('cursor','default');
		}
		else {
			$('.activeSlider').off('click').on("click",activitySlideDiv).css('cursor','pointer');
			if(parseInt($('.expDiv').css('left')) < 0 ) SliderOkClick("open"); 
		}
		LengthFind=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex].length-1;
		currentIndex=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex].indexOf(AudioText);
		slideImg=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["Image"];
		$(".expDiv .expPara").html(AudioText);
		$('.ans').html(basketCount);
		if(slideImg!="")$(".expimgcont img").attr("src",imgBaseAct+slideImg);
		var slidetimeout=setTimeout(function(){
			
			SliderFunc(SlideStatusArr[MainNavigations][0],SlideStatusArr[MainNavigations][1],SlideStatusArr[MainNavigations][2]);
			clearTimeout(slidetimeout);
		},1);
		sliderNavigationFun();
	}

function MoveToNextStep()
	{
		if(FeedBack=="wrong")
			{
				if(parseInt($('.expDiv').css('left'))>= 0 ) SliderOkClick("close");
				return;
			}
		if(audioIndex==0 && stepIndex == LengthFind)
			{
				audioIndex=0;
				stepIndex=0;
				if(parseInt($('.expDiv').css('left'))>= 0 ) SliderOkClick("close");
				return;
			}
		if(stepIndex!=LengthFind)
			{
				stepIndex++;			
				audioPlay();
				if(parseInt($('.expDiv').css("left")) < 0){		var OpenTime = setTimeout(function(){clearTimeout(OpenTime);if(parseInt($('.expDiv').css('left')) < 0 ) SliderOkClick("open");	},0);}
				return;
			}
		if(audioIndex==1 && stepIndex==LengthFind)
			{	
				audioIndex=0;
				stepIndex=0;
				if(parseInt($('.expDiv').css('left'))>= 0 ) SliderOkClick("close");
				return;
			}
			FeedBack="step";
			
	}
var tempcurrentStep = 0;
function rightAttemptFun()
	{
		FeedBack="right";
		$(".highlight,.glowEffect").hide();
		audioIndex=1;			
		stepIndex=0;
		audioPlay();
		/* console.log(parseInt($('.expDiv').css("left"))+": 1 "); */
		/* if(parseInt($('.expDiv').css("left")) < 0){	console.log("HKL");SliderOkClick("open");} */
		
		var OpenTime = setTimeout(function(){
				/* console.log("SS 12"); */
				SliderOkClick("open"); 	
				clearTimeout(OpenTime);
			},0);
		SliderFunc(SlideStatusArr[MainNavigations][0],SlideStatusArr[MainNavigations][1],SlideStatusArr[MainNavigations][2]);
		if($(".helpwindow").css("display") == 'flex'){
			lastplayedAudio=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["audio"][audioIndex][stepIndex];
		}
	}
 
 function wrongAttemptFun(ElemLevel)
	{
		$('.activeSlider').off('click').on('click',activitySlideDiv);
		FeedBack="wrong";
		if(ElemLevel=="drop")
		{
			AudioText=incorrectText[wrongResPos]; 
			$(".expDiv .expPara").html(AudioText);
			$('.ans').html(basketCount);
		}
		else if(ElemLevel=="stop")
		{
			audioIndex=2;
			stepIndex = 0;
			audioPlay();
		}
		/* console.log(parseInt($('.expDiv').css("left"))+": 123 "); */
		/* if(parseInt($('.expDiv').css("left")) < 0){		  */
			var OpenTime = setTimeout(function(){
				/* console.log("SS"); */
				SliderOkClick("open"); 	
				clearTimeout(OpenTime);
			},0);
		/* }  */
		SliderFunc(SlideStatusArr[MainNavigations][0],SlideStatusArr[MainNavigations][1],SlideStatusArr[MainNavigations][2]);
		$('.navSliderBtn').hide();
		
		if($(".helpwindow").css("display") == 'flex'){
			lastplayedAudio=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["audio"][audioIndex][stepIndex];
		}
	}

function toggleExpTabs()
	{
		StateCheck=$(this).attr("id").split("_")[1]-1;
		$(".labelRight").removeClass('labelArrow').css({'cursor':"pointer","background":backgroundNcolor[2][0],"color":backgroundNcolor[2][1]});
		$(this).addClass("labelArrow").css({'cursor':"pointer","background":backgroundNcolor[getIdSplit][0],"color":backgroundNcolor[getIdSplit][1]});
		audioPlay();
		//activityFunction(cpage);
	}

function SliderFunc(ImgStatus,okStatus,sliderStatus)
{
	if(sliderStatus=="slidershow")
	{
		
		$(".expDiv").css("display","block");
		if((ImgStatus=="imgshow" && slideImg!="") || slideImg!=""){$(".expimgcont").css("display","block");$('.audioTextDiv').css('margin-top','-11px');}
		else if((ImgStatus=="imgshow" && slideImg!="")  || slideImg==""){$(".expimgcont").css("display","none");$('.audioTextDiv').css('margin-top','-12px');}
		if(FeedBack=='wrong'){$(".expimgcont").css("display","none");$('.audioTextDiv').css('margin-top','-12px');}
		if(okStatus=="okshow"){$(".moveNextFood").css("display","block");}
		else if(okStatus=="okhide"){$(".moveNextFood").css("display","none");}	
		
		if(parseInt($('.expDiv').height()+parseInt($('.expDiv').css('top'))) >= 530){
			$('.expDiv').animate({top:parseInt(530-$('.expDiv').height())+'px'});
		}
	}
	else
	{
		 $(".expDiv,.EventNotAllowed").css("display","none");
	}
	

}

var buttonClick = function(e)
{ 
	buttonId = $(this).attr('id');
	getIdSplit=buttonId.split("ch")[1]-1;
	//activityFunction(cpage);
	headerTabs($(this));
	audioPlay();
}

function SliderOkClick(OkClickState)
{
	if(OkClickState=="open")
	{
		/* alert("@111") */
		$('.ans').html(basketCount);
		rotateValue=0;
		angleRot=0;
		if(MainNavigations==2){$(".EventNotAllowed").show();}
		else{$(".EventNotAllowed").hide();}
	}
	else if(OkClickState=="close")
	{
		/* alert("@222") */
		rotateValue=-280;
		angleRot=180;
		$(".EventNotAllowed").hide();
		globalAudioPause();
	}
	slideAnimate();
}
	
function activitySlideDiv()
	{
		rotateValue = ($('.expDiv').position().left >= 0)?-280:0;				
		angleRot = (rotateValue >= 0)?0:180;
		if(parseInt($('.expDiv').css('left'))>=0) globalAudioPause();
		slideAnimate();	
				
	}

function slideAnimate()
{
	/* alert(rotateValue); */
	$('.expDiv').stop().animate({left:rotateValue},800,function(){			
			$('.activeSlider').rotate({
				angle:0,
				center:["50%", "50%"],
				animateTo:angleRot,
				duration:0
				
			});	
			
		});
}

function TabsStateRightAndTop(topMenu,rightMenu,baseImg)
{
	if(topMenu=="topmenushow"){
		$(".highlightTab").show();
		$(".workArea, .EventNotAllowed").css({"top":"34px","height":"554px"});
		$(".commonWorkArea").css({"height":"554px"});
	}
	else if(topMenu=="topmenuhide"){
		$(".highlightTab").hide();
		$(".workArea, .EventNotAllowed,.commonWorkArea").css({"top":"0px","height":"588px"});
		$(".commonWorkArea").css({"height":"588px"});
	}
	if(rightMenu=="rightmenushow"){$(".Modes").show();}
	else if(rightMenu=="rightmenuhide"){$(".Modes").hide();}
	if(baseImg=="baseimgshow"){$(".baseImg").show();}
	else if(baseImg=="baseimghide"){$(".baseImg").hide();}
}
var currentIndex=0;
var navArrow = false;
function nxtNavigationFun()
{
	navArrow = true;
	globalAudioPause();
	$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
	$('.PreBtnSlider').off('click').on("click",preNavigationFun);
	if(LengthFind > currentIndex){stepIndex++; $('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);}
	else{ $('.nxtBtnSlider').off('click');}
	audioPlay();
	if(actStep == 1 || actStep == 2){
		/* var stepStr = currentStep.split('Basket')[0]; */
		/* $("#resetBtn").trigger('click'); */
		resetAll();
		/* currentStep = stepStr+'Basket'+(actStep-1); */
		$('#emptyAct').hide();
	}
	sliderNavigationFun();
}

function preNavigationFun()
{
	globalAudioPause();
	$('.nxtBtnSlider').off('click').on("click",nxtNavigationFun);
	$('.PreBtnSlider').off('click').on("click",preNavigationFun);
	if(stepIndex > 0){stepIndex--;$('.PreBtnSlider').off('click').on("click",preNavigationFun);}
	else {$('.PreBtnSlider').off('click');}
	audioPlay();
	sliderNavigationFun();
}

function sliderNavigationFun()
{
	
	if(LengthFind == 0 || LengthFind == -1)
	{
		$('.navSliderBtn').hide();
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_deact.png')",'cursor':'default'}).off('click');
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_deact.png')",'cursor':'default'}).off('click');
		return;
	}
	if(LengthFind == currentIndex)
	{
		if(actStep == 0) $("#emptyAct").hide();
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_act.png')",'cursor':'pointer'}).off('click').on("click",preNavigationFun);
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_deact.png')",'cursor':'default'}).off('click');
		$('.navSliderBtn').show();
		return;
	}
	if(currentIndex == 0 && LengthFind !=0)
	{	
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_deact.png')",'cursor':'default'}).off('click');
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_act.png')",'cursor':'pointer'}).off('click').on("click",nxtNavigationFun);
		$('.navSliderBtn').show();
		return;
	}
	if( currentIndex > 0 && LengthFind !=0 )
	{
		$('.PreBtnSlider').css({'background':"url('assets/images/template/left_slider_act.png')",'cursor':'pointer'}).off('click').on("click",preNavigationFun);
		$('.nxtBtnSlider').css({'background':"url('assets/images/template/right_slider_act.png')",'cursor':'pointer'}).off('click').on("click",nxtNavigationFun);
		$('.navSliderBtn').show();
		return;
	}
	
	
}