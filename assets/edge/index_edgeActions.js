
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){


Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym,e){
	parent.adobeReady = true;
	$('#Stage_welText').html(welcomeMode['step_0']['text']);
	$('#Stage_welcomeGroup').css('min-height','122px').css('background','#fff').css('box-shadow','2px 2px 2px 0px rgba(0,0,0,0.25)');
	$('#Stage_left_slider_act,#Stage_right_slider_act').css('top','auto').css('bottom','6px');
	$('#Stage_dot_nav').css('top','auto').css('bottom','6px');
	$('#Stage_left_slider_act').attr('src','images/left_slider_deact.png');
	var lpos=welcomeMode['step_'+welcomeMove].position[0];
	var tpos=welcomeMode['step_'+welcomeMove].position[1];
	$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos);
	$('#Stage_left_slider_act').css('cursor','default');
	$('#Stage_audio_icon_normal').attr('audio-state','pause');
	$('#Stage_audio_icon_normal').addClass('expAudio');
$('.dot').off('click').on('click', function(){
	welcomeMove = Number($(this).index())-1;
	$('#Stage_right_slider_act').trigger('click');
})


var imgs = document.getElementsByTagName('img');
	
    // loop through fetched images
    for (i = 0; i < imgs.length; i++) {
        // and define onmousedown event handler
        imgs[i].onmousedown = disableDragging;
    }

function disableDragging(e) {
        e.preventDefault();
    }
});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym,e){this.stop()});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35000, function(sym,e){this.stop()});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym,e){this.stop()});
//Edge binding end




Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym,e){this.stop();

});
//Edge binding end






      

      
Symbol.bindElementAction(compId, symbolName, "${_left_slider_act}", "click", function(sym,e){
	if(welcomeMove>0)
	{
		selectedIndex=0;
		welcomeMove--;
		$('#Stage_right_slider_act').attr('src','images/right_slider_act.png').css('cursor','pointer');
		if(welcomeMove==7)
			{
				$('#Stage_rabbit_update_1').css('background-image','url(images/rabbit_update_1.png)');
			}
		var actScr=welcomeMode['step_'+welcomeMove]['text'];
		var lpos=welcomeMode['step_'+welcomeMove].position[0];
		var tpos=welcomeMode['step_'+welcomeMove].position[1];
		var bubbleStyle=welcomeMode['step_'+welcomeMove].speechStyle;
		$('#Stage_welText').html(actScr);
		$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos).css('height',$('#Stage_welText').outerHeight()+54);
		$('#Stage_welcomeGroup').removeClass(speechBubblePos);
		$('#Stage_welcomeGroup').addClass(bubbleStyle);
		AdobeEdge.getComposition("EDGE-1817669").getStage().play(animPlayArrRev[welcomeMove]);
		speechBubblePos=bubbleStyle;
		parent.globalAudioPause();
	}
if(welcomeMove==0)
	{
		$('#Stage_left_slider_act').attr('src','images/left_slider_deact.png').css('cursor','default');
	}
		
});
      //Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_right_slider_act}", "click", function(sym,e){
	if(welcomeMove<(weltextlen-1))
	{
		selectedIndex=0;
		welcomeMove++;
		$('#Stage_left_slider_act').attr('src','images/left_slider_act.png').css('cursor','pointer');		
		var actScr=welcomeMode['step_'+welcomeMove]['text'];
		var lpos=welcomeMode['step_'+welcomeMove].position[0];
		var tpos=welcomeMode['step_'+welcomeMove].position[1];
		var bubbleStyle=welcomeMode['step_'+welcomeMove].speechStyle;
		$('#Stage_welText').html(actScr);
		$('#Stage_welcomeGroup').css('left',lpos).css('top',tpos).css('height',$('#Stage_welText').outerHeight()+54);
		$('#Stage_welcomeGroup').removeClass(speechBubblePos);$('#Stage_welcomeGroup').addClass(bubbleStyle);
		AdobeEdge.getComposition("EDGE-1817669").getStage().play(animPlayArr[welcomeMove]);
		speechBubblePos=bubbleStyle;
		parent.globalAudioPause();
	}
	if(welcomeMove==(weltextlen-1))
	{
		$('#Stage_right_slider_act').attr('src','images/right_slider_deact.png').css('cursor','default');
	}
	});
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_audio_icon_normal}", "click", function(sym,e){
		  passText=$('#Stage_welText').text();
		  parent.globalAudioName = welcomeMode['step_'+welcomeMove]['audio'];
		  parent.playGlobalAudio(passText);
		});
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         //console.log(this.getPosition());

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3652, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 59000, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         $('.bubbleDivMulti::after').css('display','none');

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         $('#Stage_welcomeGroup').css('box-shadow','rgba(0, 0, 0, 0.25) 1px 1px 2px 1px')

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 61505, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19500, function(sym, e) {
         $('#Stage_shoot_txt').css('color','#000000');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         $('#Stage_shoot_txt').css('color','#ffffff');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         $('#Stage_shoot_txt').css('color','#ffffff');
         
         $('#Stage_Attmpt_txt').text('Attempts: 0');
         $('#Stage_point_txt').text('Points: 0');
         $('#Stage_Reset_btn').css('background-color','rgb(88, 89, 91)');
         $('#Stage_Reset_txt').css('color','#000000');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         $('#Stage_shoot_txt').css('color','#000000');
         
         $('#Stage_Attmpt_txt').text('Attempts: 0');
         $('#Stage_point_txt').text('Points: 0');
         $('#Stage_Reset_btn').css('background-color','rgb(88, 89, 91)');
         $('#Stage_Reset_txt').css('color','#000000');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32000, function(sym, e) {
         $('#Stage_Attmpt_txt').text('Attempts: 1');
         $('#Stage_point_txt').text('Points: 1');
         $('#Stage_Reset_btn').css('background-color','rgb(255, 203, 5)');
         $('#Stage_Reset_txt').css('color','#000000');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36000, function(sym, e) {
         $('#Stage_Attmpt_txt').text('Attempts: 1');
         $('#Stage_point_txt').text('Points: 1');
         $('#Stage_Reset_btn').css('background-color','rgb(255, 203, 5)');
         $('#Stage_Reset_txt').css('color','#000000');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41500, function(sym, e) {
         $('#Stage_Reset_btn').css('background-color','rgb(88, 89, 91)');
         $('#Stage_Reset_txt').css('color','#000000');
         $('#Stage_shoot_txt').css('color','#ffffff');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 49500, function(sym, e) {
         $('#Stage_shoot_txt').css('color','#000000');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 54750, function(sym, e) {
         $('#Stage_Attmpt_txt').text('Attempts: 2');
         $('#Stage_point_txt').text('Points: 1');
         $('#Stage_Reset_btn').css('background-color','rgb(255, 203, 5)');
         $('#Stage_Reset_txt').css('color','#000000');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
         $('#Stage_Attmpt_txt').text('Attempts: 2');
         $('#Stage_point_txt').text('Points: 1');
         $('#Stage_Reset_btn').css('background-color','rgb(255, 203, 5)');
         $('#Stage_Reset_txt').css('color','#000000');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31250, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30250, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 52250, function(sym, e) {
         

      });
      //Edge binding end

})("stage");
   //Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'highAnim'
(function(symbolName){Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym,e){this.play(0)});
//Edge binding end
})("highAnim");
   //Edge symbol end:'highAnim'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
   //Edge symbol end:'Preloader'

})(jQuery, AdobeEdge, "EDGE-1817669");

$(document).ready(function(){	
	$(document).on('keyup', function(e){	
	if($('#Stage_welcomeGroup').css('opacity') == 1)		
	{
		console.log(parent.parentTab,$('.helpwindow').css('display'))
		if(parent.parentTab == 'welcome' && parent.$('.helpwindow').css('display') == 'none')
			{			
				var ctKeyode = e.which || e.keyCode;			
				if(ctKeyode == 39)
					{
						$('#Stage_right_slider_act').trigger('click');
					}
				if(ctKeyode == 37)
					{
						$('#Stage_left_slider_act').trigger('click');
					}
			}
	}	
	})	
})