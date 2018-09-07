var forceLevel = 0;				// 0 - Low, 1 - Medium, 2 - High
var basketPosition = 0; 			// 0 - Low, 1 - Medium, 2 - High
var basketPosition1 = 0; 			// 0 - Low, 1 - Medium, 2 - High
var buttonId;
var attemptCount = 0;
var basketCount = 0;
var leftVal = 0;
var ballScenario = 0;
var greenSelection = 0;
var redSelection = 1;
var sliderVal = 10;
var prevLeft = 79;
var dropped = false;
var currentStep = 'initial';

// initial speed
var timeout;
var timeOut = false;
var ballLand = false;

var timer;

var rigSelection = false;
var resultShown = false;
var ballIndex = 0;

var actSteps = [ [0,0,0],
				 [1,0,0],
				 [1,0,1]
				]
var audioStepCount = 0;

var feedBackTxt = {
	"explore":
		[
			"Select the spring force, the size of the green marble, and the size of the red marble. Then select Shoot to see if you made a basket.<br/><br/>See how many baskets you can make with different settings!",
			"<b> Great shot!</b> Select Reset to try to make another basket.",
			"<b> You missed!</b> But remember where the red marble ended up. The basket may be in a different spot next time.<br/><br/>Select Reset to try again."
		], // 0 - step, 1 - makes basket, 2 - miss basket
	"activity":	
		{
			"initial":[
				"In this activity, you will observe how forces affect the motion of marbles.<br/><br/>Even when the marbles are not moving, there are forces acting on them. Gravity is pulling them down. The table is pushing them up. These forces are balanced, so the marbles do not move.",
				"You will use a spring to apply a new force to the green marble. This will make the forces unbalanced and cause the green marble to move. Some of this force will be passed on to the red marble when the marbles collide.",
				"Start by selecting a small spring force, the small green marble, and the small red marble."
			],
			"step":[
				
				"Let’s try increasing the force but using the same sized marbles. Select medium spring force, the small green marble, and the small red marble.",
				"Let’s find out what happens if we change the mass of one marble. Select medium spring force, the large green marble, and the small red marble."
			],
			"wrongSel":[
				"Try again. Select small spring force, small green marble, and small red marble.",
				"Try again. Select medium spring force, the small green marble, and the small red marble.",
				"Try again. Select the medium force, the large green marble, and the small red marble."
				
			],
			"correctSel":[
				"Good! Now select Shoot to collide the marbles and see if you made a basket. ",
				"Good! Do you think the red marble will travel a shorter or longer distance than your first shot? Will you make a basket? Write down your prediction. Then select Shoot to see if you are right.",
				"Good! Now make a prediction. How far will the red marble travel? Do you think it will end up in the basket? Write down your prediction. Then select Shoot."
				
			],
			"missBasket":[
				"You missed! But make a note of how far the red marble traveled. How do you think the force affected the outcome? What would happen if you used more force?",
				"You didn’t make a basket. But was your prediction correct? Kudos to you if you said the marble would travel farther if more force was applied!<br/><br/>How do you think the mass of each marble affected the outcome? What would happen if you increased the mass of one marble? ",
				"You missed! But check your prediction. Did you correctly predict that increasing the mass of the green marble would cause the smaller red marble to travel farther? If so, kudos to you."
				
			],
			"makeBasket":[
				"Great shot! Make a note of how far the red marble traveled. How do you think the force affected the outcome? What would happen if you used more force?",
				"Great shot! Was your prediction correct? Kudos to you if you said the marble would travel farther if more force was applied!<br/><br/>How do you think the mass of each marble affected the outcome? What would happen if you increased the mass of one marble? ",
				"Nice shot, champ! You made the basket.<br/><br/>Check your prediction. Did you correctly predict that increasing the mass of the green marble would cause the smaller red marble to travel farther? If so, kudos to you."
				
			]
			/* callSlide(feedBackTxt.activity.initial[actStep].step[actStep].wrongSel[actStep].correctSel[actStep].missBasket[actStep].makeBasket[actStep]); */
		
	}
}

var objPos = {

	"springLevels":{ 
		"animEndWidth": "64px", 			// spring width  0 - Low, 1 - Medium, 2 - High
		"wid": [54,44,34], 			// spring width  0 - Low, 1 - Medium, 2 - High
		"left": [53,30,10] 			// spring left  0 - Low, 1 - Medium, 2 - High
	},
	"greenShoot":{ 
		"initialPos": [88,218], 	//Green ball Initial position
		"animateEnd": [385,340], 	//Animate end left position for Green ball { 0 - Small , 1 - Big }
		"forceLevelEndPos": [246, 236, 226],		// 0 - Low, 1 - Medium, 2 - High
		"duration": [60,40,20], 		// 0 - Low, 1 - Medium, 2 - High
		"animLeft": "350px"
	},
	
	"hitChange":{
		"wid":[20,34],					//Green ball
		"imgNameBack":['small','large'],					//image name Start
		"imgNameFront":['green','red'],					//image name End 
		"initialPos": [221,207]
	},
	"redShoot":[ 
		{
			"initialPos": [371,0], 		//red ball Initial position
			"animateEnd":430,				//Animate 1 end left position for Green ball	
			"duration": [15,12,9], 		// 0 - Low, 1 - Medium, 2 - High
		},
		{
			"basketEndAnim":[  [472,448], [472,528], [472,617] ],		 // 0 - Low, 1 - Medium, 2 - High
					/* 	0 - Low, 
						1 - Medium, 
						2 - High, 
						3 - Stop End of the table, 
						4 - Move out of 3rd ball	*/
			"animBasketPosLarge":[10.35,16.69,22.25,4.2,27.9], 		
			"animBasketPosLarge":[10.35,16.69,22.25,4.2,27.9], 		
			"animBasketPosSmall":[10.35,16.69,22.25,4.2,27.9], 		
			/* "scenario":[ 
						[0,3,1,0], // Low
						[1,0,2,1], // Medium
						[2,1,4,2]  // High
					] */
			"scenario":[ 
						[1,0,2,1], // Low
						[2,1,3,2], // Medium
						[3,2,4,3]  // High
					]
		},
	],	
	"basketPosition": [561,663,767]	,	 	//basket left position 
	"animDuration": [90,60,30]		 	// 0 - Low, 1 - Medium, 2 - High
}

var greenCollide = {
						'left':[ 
							[0, 30, 30, 0 ],  //LOW
							[0, 30, 140, 0],  //MED
							[0, 30, 150, 0]   //HIGH
						],
						'symbol':[ 
							['+', '-', '+', '+' ],  //LOW
							['+', '-', '+', '+' ],  //MED
							['+', '-', '+', '+' ]   //HIGH
						],
						'duration':[ 
							[0, 2000, 1500, 0 ],  //LOW
							[0, 1500, 3000, 0],  //MED
							[0, 1000, 2000, 1000]   //HIGH
						]
					}
						
var objSelection = [0,0,0];	
var currentStep1 = 0;
var play1=document.getElementById('audioAnim')  
var myArray = ['basketBottom1','basketBottom2','basketBottom3'];
var lastRandomNum = myArray[Math.floor(Math.random()*3)];

$(document).ready(function(){		
	var ele = $("#explore").html();
	$("#explore").hide();
	$("#explore .expFoodBar").hide();
	/* $("#activity").html(ele).hide();	 */
	actInitialize();	
	$("#"+cpage).show();
	
	$('.activeSlider').off('click').on('click', expSlideDiv);
	//callSlide(feedBackTxt.explore[0]);
	currentStep = 'initial';
	//rightAttemptFun();
	$('#'+cpage+" #shootBtn").off("click");
	$(".expDiv").css('display','none');	
	$(".expDiv").css('left','-500px');	
});
function funcInitialization(id){
	$("#activity, #explore, .emptyDiv, .commonWorkArea").off("click").on("click",closeSlider);
	$('#'+cpage+" .basketPos").off("click").on("click",basket_position);
	$('#'+cpage+" .force").off("click").on("click",spring_force);
	$('#'+cpage+" .grnMar").off("click").on("click", ballSelection('grnMarGrp','grnMarHit'));  
	$('#'+cpage+" .redMar").off("click").on("click", ballSelection('redMarGrp','redMarForce'));	
	$('#'+cpage+" #shootBtn").off("click").on("click",shoot_trigger);
	$('#'+cpage+" #resetBtn").off("click").on("click",resetAll);
	//spring_force()
}
var chnY ;
var closeSlider = function(){
	if(parseInt($('.expDiv').css('left'))>= 0 ) SliderOkClick("close");
}
var ballSelection = function(parId, currId){
	
	var idTxt = 0;	
	if(currId.charAt(0) == 'r') idTxt = 1;
	/* $('#'+cpage+" #"+currId).show(); */
	return function(event){	
		/* alert(currId); */
		$('#'+cpage+" #"+currId).show();
		$('#'+cpage+" ."+$(this).attr('class')).css({'background-color': 'transparent'});
		$('#'+cpage+" #"+$(this).attr('id')).css({'background-color': 'yellow','border-radius': '50%'});
		var getId = $("."+parId).find(this).index();
		if(idTxt){
			ball = ballsm[getId];
			if(getId){height = 430;
			}else{height = 440;				
			}
			chnY = ball.position.y;
		}
		if(idTxt == 0) greenSelection = getId;
		else redSelection = getId;
		$('#'+cpage+" #"+currId).css({"width":objPos.hitChange.wid[getId]+"px","height":objPos.hitChange.wid[getId]+"px","top":objPos.hitChange.initialPos[getId]+"px"});
		$('#'+cpage+" #"+currId).css({"background-image":"url('./assets/images/activity/"+objPos.hitChange.imgNameFront[idTxt]+"_"+objPos.hitChange.imgNameBack[getId]+".png')"});
		objSelection[idTxt+1] = 1;
		if(currId == 'grnMarHit' && objSelection[0] == 0) $('#'+cpage+" #"+currId).css({"left":"256px"});
		/* if(objSelection[0] == 1 && objSelection[1] == 1 && objSelection[2] == 1)   */enableBtn();
			
		/* if(cpage == "activity" && idTxt == 0) $('#'+cpage+" .redMar").off("click").on("click", ballSelection('redMarGrp','redMarForce'));	 */
		$('#'+cpage+" .redMar").off("click").on("click", ballSelection('redMarGrp','redMarForce'));	
		/* if(cpage == "activity" && ((idTxt == 1) || (objSelection[0] == 1 && objSelection[1] == 1 && objSelection[2] == 1 && objSelection[3] != 1))) {	 */
		if(cpage == "activity" && ((idTxt == 1) || (objSelection[0] == 1 && objSelection[1] == 1 && objSelection[2] == 1))) {	
			actObjSelection();
		}
		if(cpage == "activity") event.stopImmediatePropagation();
	}
}

var actObjSelection = function(num){
	/* if(forceLevel == actSteps[currentStep1][0] && greenSelection == actSteps[currentStep1][1] && redSelection == actSteps[currentStep1][2]){
		callSlide(feedBackTxt.activity[1][1]);
		//$('#'+cpage+" .basketPos").off("click").on("click",basket_position);
		$('#'+cpage+" #shootBtn").prop('disabled',false);
		$('#'+cpage+" .force").off("click");
		$('#'+cpage+" .grnMar").off("click"); 
		$('#'+cpage+" .redMar").off("click"); 
	}
	else { callSlide(feedBackTxt.activity[1][0][currentStep1]) } */
	if(cpage == "explore") enableBtn();
	else if(cpage == "activity")
	{
		
		if((forceLevel == 0 && redSelection == 0 && greenSelection == 0 && actStep == 0) || (forceLevel == 1 && redSelection == 0 && greenSelection == 0 && actStep == 1) || (forceLevel == 1 && redSelection == 0 && greenSelection == 1 && actStep == 2)){
			/* alert("ENABLED select Shoot "); */
			currentStep = 'correctSel'+actStep;
			rightAttemptFun();
			//callSlide(feedBackTxt.activity.correctSel[actStep]);
			/* $(".force").off("click"); */
			$('#'+cpage+" #shootBtn").prop('disabled',false).css({cursor:'pointer','background-image':'url(./assets/images/activity/shootBtn_E.png)',color:'#000'}).off("click").on("click",shoot_trigger);
			if(cpage == "activity"){
				setTimeout(function(){
					$('#'+cpage+' #empty1').show();
				}, 1);
			}
		}
		else if(objSelection[0] == 1 && objSelection[1] == 1 && objSelection[2] == 1){
			/* alert("Select Correct Settings"); */
			//currentStep = 'wrongSel';
			wrongAttemptFun('stop');
			
			//callSlide(feedBackTxt.activity.wrongSel[actStep]);
			if(cpage == "activity"){
				setTimeout(function(){
					$('#'+cpage+' #empty1').hide();
				}, 1);
			}
		}
		 
	}
	
	
}


var basket_position = function(){
	objSelection[3] = 1;
	var getId = Math.floor($('#'+cpage+" .basketLevelGrp").find(this).index());
	basketPosition = getId;
	$('#'+cpage+" #basketObj").css({"left":objPos.basketPosition[getId]+"px"}).show();
	$('#'+cpage+" .basketPos").css({"background-color":"#ffffff"});	
	$('#'+cpage+" #pos_"+(getId+1)).css({"background-color":"#ffcb05"});
	enableBtn();
	var timer = setTimeout(function(){
		if(!timeOut) {
			callSlide(feedBackTxt.activity[2][0])
		}
	}, 5000);
}

var enableBtn = function(){

	if(objSelection.indexOf(0) == -1 && cpage != 'activity') {
		$('#'+cpage+" #shootBtn").prop('disabled',false).css({cursor:'pointer','background-image':'url(./assets/images/activity/shootBtn_E.png)',color:'#000'}).off("click").on("click",shoot_trigger);
		
		if(cpage == "activity"){
			setTimeout(function(){
				$('#'+cpage+' #empty1').show();
			}, 1);
		}
		
	}else{	
		$('#'+cpage+" #shootBtn").prop('disabled',true).css({cursor:'default','background-image':'url(./assets/images/activity/shootBtn_D.png)',color:'#fff'}).off("click");
		if(cpage == "activity"){
			setTimeout(function(){
				$('#'+cpage+' #empty1').hide();
			}, 1);
		}
	}
}
var spring_force = function(event){
	var getId = $('#'+cpage+' .progress').find(this).index();
	objSelection[0] = 1;	
	forceLevel = getId;
	
	$('#'+cpage+" .force").css({"background-color":"#ffffff"});
	$('#'+cpage+" #level_"+(getId+1)).css({"background-color":"#ffcb05"});
	$('#'+cpage+" #spring").css({"width":objPos.springLevels.wid[getId]+"px"});
	$('#'+cpage+" #grnMarHit").css('left', objPos.greenShoot.forceLevelEndPos[getId]+'px');
	enableBtn();
	
	if(cpage == "activity") event.stopImmediatePropagation();
	/* if(cpage == "activity") $('#'+cpage+" .grnMar").off("click").on("click", ballSelection('grnMarGrp','grnMarHit'));   */
	$('#'+cpage+" .grnMar").off("click").on("click", ballSelection('grnMarGrp','grnMarHit'));  
	
	/* if(objSelection[0] == 1 && objSelection[1] == 1 && objSelection[2] == 1 && objSelection[3] != 1)  actObjSelection(); */
	if(objSelection[0] == 1 && objSelection[1] == 1 && objSelection[2] == 1)  actObjSelection();
	
}

var timerOut;
var shoot_trigger = function(){	
	$('#'+cpage+" #resetBtn").off("click");
	$('#'+cpage+" #shootBtn").off("click");
	dropped = false;
	timeOut = true;
	clearTimeout(timer);	
	
	if(cpage == 'activity'){ 
		if(parseInt($('.expDiv').css("left")) >= 0)	{
			clearTimeout(timerOut);
			timerOut = setTimeout(function(){ callAnimate(); }, 1000);
		}else callAnimate();	
	}else {
		callAnimate();
	}
	
	$('#'+cpage+" .basketPos").off("click");
	$('#'+cpage+" .force").off("click");
	$('#'+cpage+" .grnMar").off("click");  
	$('#'+cpage+" .redMar").off("click");
	rigSelection = false;
	$('#emptyAct').show();
	$('#empty1').hide();
}
var callAnimate = function(){

	$('#'+cpage+" #shootBtn").off("click");
	$('#'+cpage+" .emptyDiv").show();	
	sliderVal = $('#'+cpage+" #slider1").prop('value');
	var timeDuration = objPos.animDuration[forceLevel];	
	
	if(greenSelection == 1)
	$('#'+cpage+" #grnMarHit" ).stop().animate({left:'340px'}, objPos.greenShoot.duration[forceLevel], function() {	});	
	else
	$('#'+cpage+" #grnMarHit" ).stop().animate({left:'353px'}, objPos.greenShoot.duration[forceLevel], function() {	});	
	
	
	
	$('#'+cpage+' #spring').stop().animate(
		{'width':objPos.springLevels.animEndWidth},
		{
			duration:objPos.greenShoot.duration[forceLevel],
			complete:function(){
			
				scenarioSelection();
				if((basketPosition+1) == (ballScenario)){
					rigSelection = true;
				}		
				var dur = '';
				var rot = 0;
				var position = 400;
				
				if( greenSelection == 1 && redSelection == 0){

					if( forceLevel == 0){ 
						dur = '1.5s';
						position = 40;
						rot = 120;
					} else if(forceLevel == 1){ 
						dur = '2s';
						position = 80;
						rot = 360;
					} else if(forceLevel == 2){ 
						dur = '2s';
						rot = 360;
						position = 120;
					}		
					
					 move('#'+cpage+" #grnMarHit")	  
					.x(0)
					.duration('0s')
					.rotate(0)
					.end();					 
					 
					 move('#'+cpage+" #grnMarHit")	 
					.ease('out') 
					.x(position)
					.duration(dur)
					.rotate(rot)
					.end();
					
				}
			
			
				if( greenSelection == 0 && redSelection == 1){

					if( forceLevel == 0){ 
						dur = '1.5s';
						position = -20;
						rot = -120;
					} else if(forceLevel == 1){ 
						dur = '2s';
						position = -40;
						rot = -270;
					} else if(forceLevel == 2){ 
						dur = '2s';
						rot = -360;
						position = -60;
					}	
					
					move('#'+cpage+" #grnMarHit")	  
					.x(0)
					.duration('0s')
					.rotate(0)
					.end();				 
				 
					move('#'+cpage+" #grnMarHit")	 
					.ease('out') 
					.x(position)
					.duration(dur)
					.rotate(rot)
					.end();					
				}
			
				$("#audioAnim").attr('src','assets/audio/hit_ball.mp3');
				//alert("Hit");
				pushBall();	
				if(!disableSafari) play1.play();
				/* $('#'+cpage+" #redMarForce").stop().animate(
				{'left':objPos.redShoot[0].animateEnd+'px'},
				{
					duration:100,
					complete:function(){
						
					}
				}); */
			}
		}
	);
}



/* Burak Kanber */
var width = 1200;
var height = 430;
var canvas = ctx = false;
var frameRate = 1/40; // Seconds
var frameDelay = frameRate * 1000; // ms
var loopTimer = false;

// 1 = velocity: {x: 2.62, y: 0},mass: 0.02, 
// 2 = velocity: {x: 9.05, y: 0},mass: 0.02, 
// 1 = velocity: {x: 50, y: 0},mass: 0.02, 
/**/
// small ball 223, largeball = 207




var ballsm =[ {
    position: {x: 371, y: 223},
    velocity: {x: 2.62, y: 0},
    mass: 0.23, //kg
    radius: 10, // 1px = 1cm
    restitution: -0.7
    },{
    position: {x: 371, y: 207},
    velocity: {x: 2.62, y: 0},
    mass: 0.02, //kg
    radius: 10, // 1px = 1cm
    restitution: -0.5
    }];
	var ball = ballsm[0];



var moveDis = [0.52,2.62,9.05,70,60]	;
var massChange = [1.6,0.02,0.023,0.0218,0.23];
var tempmass = massChange[0];

var Cd = 0.47;  // Dimensionless
var rho = 1.22; // kg / m^3
var A = Math.PI * ball.radius * ball.radius / (10000); // m^2
var ag = 9.81;  // m / s^2
var mouse = {x: 0, y: 0, isDown: true};


var setup = function() {
    // $('#redMarForce').css({'position':'absolute','left':(ball.position.x)+'px','top':(ball.position.y)+'px'})
}
var ang = 0,enterOnce = true,ballStepLevel=0;
var tempang =-1;
var sameangcount =0;

var loop = function() {

    if ( 1 ) {
        // Do physics
            // Drag force: Fd = -1/2 * Cd * A * rho * v * v
        var Fx = -0.5 * Cd * A * rho * ball.velocity.x * ball.velocity.x * ball.velocity.x / Math.abs(ball.velocity.x);
        var Fy = -0.5 * Cd * A * rho * ball.velocity.y * ball.velocity.y * ball.velocity.y / Math.abs(ball.velocity.y);
        
        Fx = (isNaN(Fx) ? 0 : Fx);
        Fy = (isNaN(Fy) ? 0 : Fy);
        
            // Calculate acceleration ( F = ma )
        var ax = Fx / ball.mass;
        var ay = ag + (Fy / ball.mass);
		/* console.log(ball.position.x+"::"+ball.position.y); */
            // Integrate to get velocity
        ball.velocity.x += ax*frameRate;
        ball.velocity.y += ay*frameRate;
        
            // Integrate to get position
        ball.position.x += ball.velocity.x*frameRate*100;
        ball.position.y += ball.velocity.y*frameRate*100;
		
		//console.log(sameangcount, Math.round(tempang), Math.round(ang), ball.restitution,  ball.mass, ball.velocity.x, ball.position.x ,ball.position.y)
		
		if(ballStepLevel == 0 || ballStepLevel == 2){ang+=12*ball.velocity.x;}else{ang+=12*ball.velocity.x;}
		
		/* console.log(ball.position.x+"::"+ball.position.y); */
		
		
		//console.log(ang+' ball.velocity.x'+ ball.velocity.x)
		
		
		// ball - 1 basket 3 = 0.05;
		// ball - 2 basket 3 = 0.001;
		// ball - 1 basket 2 = 0.001;
		
		sameangcount++
		
		if(sameangcount == 2){
			if(!resultShown) {
				resultShown = true;
				ballResults();
			}
			clearInterval(loopTimer);
			if(cpage == 'activity') {
				/* alert("112"); */
				ballActionEnd();
			}
		}
		if(ballStepLevel){ball.velocity.x = ball.velocity.x; ball.restitution= -0.01; ball.mass = .001- ball.velocity.x/100 }
		if(Math.round(tempang) != Math.round(ang)){ sameangcount =0; tempang=ang; }
		
		$('#'+cpage+" #redMarForce").css({'transform':'rotate('+ang+'deg)'})
		$('#'+cpage+" #redMarForce").css({'position':'absolute','left':(ball.position.x)+'px','top':(ball.position.y)+'px'})
		
    }
    // Handle collisions
	if (ball.position.x<535 - ball.radius - ball.radius && ball.position.y > chnY - ball.radius && ballStepLevel == 0) {
		
		//$("#audioAnim").play();
		if(ballScenario == 0){ 
			ball.restitution= -0.01;
			ball.mass = tempmass;
			tempmass = tempmass-tempmass*0.08;
		}		
        ball.velocity.y *= ball.restitution;
        ball.position.y = (chnY+8) - ball.radius;
		
    }
    if (ball.position.y > height - ball.radius) {
		mouse.isDown = true;
        ball.velocity.y *= ball.restitution;
        ball.position.y = height - ball.radius;	
		
    }
	/* console.log(rigSelection+' '+ball.position.y); */
		if((ballScenario)<(basketPosition+1)){
			if(redSelection == 0) width = $('#'+cpage+" #basketObj").position().left;
			if(redSelection == 1) width = $('#'+cpage+" #basketObj").position().left - 14;
		}
		//console.log(ball.position.y+' '+(height-10));
	if((width-ball.position.x)> 90 && ballStepLevel == 1 && ball.position.y>=(height-10)){
		//clearInterval(loopTimer);
	}
	/* if (ball.position.x > width - ball.radius){ // Ball Hits the Basket
	alert("WID");
	}
	if (ball.position.y>=(height-10)){            // Ball Hits the Floor
	alert("HEI");
	} */
    if (ball.position.x > width - ball.radius || ball.position.x >1000 && ball.position.y>350) {
		/* console.log( ballScenario+' '+basketPosition); */
		/* console.log(ball.position.x) */
		//clearInterval(loopTimer);
		ballStepLevel = 1;
        ball.velocity.x *= ball.restitution;
        ball.position.x = width - ball.radius;
		if(!resultShown) {
			resultShown = true;
			ballResults();
		}
		tagtag =true;
		
    } 
	//if(tagtag){ball.velocity.x = ball.velocity.x/5 }
    if (ball.position.x < 510 && ballStepLevel == 1 ) { 
		ballStepLevel = 2;         
		ball.velocity.x *= ball.restitution; 
       // ball.position.x = ball.radius;
    }
	//if placeed right pos	
	if(rigSelection && ball.position.y>353){
		clearInterval(loopTimer);
		
		setTimeout(function(){
			if(cpage == 'activity') {
				/* alert("111"); */
				ballActionEnd();
			}
		}, 1000);
		
		if(ballScenario == (basketPosition+1)){
			$("#audioAnim").attr('src','assets/audio/basket_down.mp3');
			//alert("Made basket");
			if(!disableSafari) play1.play();
		}
		if(!resultShown) {
			resultShown = true;
			ballResults();
		}
	}
	// console.log(ball.position.x)
	/* $('#'+cpage+" #resetBtn").off("click").on("click",resetAll);
	$('#'+cpage+" #resetBtn").prop('disabled',false).css({'background-color':'#414042','cursor':'pointer'}); */
}
    setup();
	
var ballActionEnd = function(){
	if((basketPosition+1) == (ballScenario)) {
		currentStep = 'makeBasket'+(actStep-1);
		rightAttemptFun();
		ballLand = true;
		currentStep1 = currentStep1+1;
	}else{		
		currentStep = 'missBasket'+(actStep-1);
		rightAttemptFun();
	}

}
var tagtag = false;	
var ballResults = function(){
	if(cpage == "explore"){
		$('#'+cpage+" #resetBtn").off("click").on("click",resetAll);
		$('#'+cpage+" #resetBtn").prop('disabled',false).css({'z-index':100,'background-color':'rgb(255, 203, 5)','cursor':'pointer'});	 
	}
	/* alert("2 :: "+basketPosition+" : "+ballScenario); */
	//console.log(basketPosition +' :: '+ forceLevel+' :: '+ ballScenario)
	attemptCount++;
	$('#'+cpage+" #txt_7").html(attemptCount);
	if(cpage == 'activity') actStep = actStep+1;
	if((basketPosition+1) == (ballScenario)) {
		/* alert("1"); */
		if(cpage == "explore"){
			
			if(attemptCount < 10) currentStep = 'makingBasket';
			else{
				/* $('.ans').html(basketCount); */
				currentStep = 'makingBasket10';
			}
				/* attemptCount = 0;
				basketCount = 0;
				$('#'+cpage+" #txt_7").html(attemptCount);
				$('#'+cpage+" #txt_8").html(basketCount); */
			
			rightAttemptFun();
		} 
		if(cpage == "activity"){
			/* callSlide(feedBackTxt.activity.makeBasket[actStep]); */			
			currentStep = 'makeBasket'+(actStep-1);
			/* rightAttemptFun(); */
			
			//callSlide(feedBackTxt.activity.makeBasket[actStep]);
			
			ballLand = true;
			currentStep1 = currentStep1+1;
			/* alert("Congrats..."); */
		}
		basketCount++;
		$('#'+cpage+" #txt_8").html(basketCount);		
				
		if(cpage == "activity"){
			
		}
	}else{
		/* changePop(feedBackTxt.explore[2]);	  */
		/* alert("2"); */
		$('#'+cpage+" .basketPos").off("click").on("click",basket_position);
		if(cpage == "explore") {	
			
			/* currentStep = 'missingBasket'; */
			if(attemptCount < 10) { currentStep = 'missingBasket'; }
			else {currentStep = 'missingBasket10'; }
			
			if((greenSelection == 1 && redSelection == 0 && forceLevel == 2) || (greenSelection == 1 && redSelection == 1 && forceLevel == 2 && basketPosition != 2) || (greenSelection == 0 && redSelection == 0 && forceLevel == 2 && basketPosition != 2)){
				/* currentStep = 'missingBasketOut'; */
				if(attemptCount < 10) { currentStep = 'missingBasketOut'; }
				else { currentStep = 'missingBasket10'; }
			}	
			if(greenSelection == 0 && redSelection == 1 && forceLevel == 0){ 
				/* currentStep = 'missingBasketFront'; */
				if(attemptCount < 10) { currentStep = 'missingBasketFront'; }
				else { currentStep = 'missingBasket10'; }
			}
			rightAttemptFun();
		}
		
			
		if(cpage == "activity"){		
			currentStep = 'missBasket'+(actStep-1);
			/* rightAttemptFun(); */
			//callSlide(feedBackTxt.activity.missBasket[actStep]);
		}
		$('#'+cpage+" .emptyDiv").hide();
	}
}
function pushBall()
{
mouse.x = 25;
mouse.y = 383;


mouse.isDown = false;
loopTimer = setInterval(loop, frameDelay);
}


function scenarioSelection(){	
	if((greenSelection == 0) && (redSelection == 0)) {ballScenario = objPos.redShoot[1].scenario[forceLevel][0]; ballIndex = 0;}
	else if((greenSelection == 0) && (redSelection == 1)) {ballScenario = objPos.redShoot[1].scenario[forceLevel][1]; ballIndex = 1;}
	else if((greenSelection == 1) && (redSelection == 0)) {ballScenario = objPos.redShoot[1].scenario[forceLevel][2]; ballIndex = 2;}
	else if((greenSelection == 1) && (redSelection == 1)) {ballScenario = objPos.redShoot[1].scenario[forceLevel][3]; ballIndex = 3;}
	  /**/
	/*if(ballScenario == 1) ball.velocity.x = 2.62;
	else if(ballScenario == 2) ball.velocity.x = 9.05;
	else if(ballScenario == 3) ball.velocity.x = 70;
	else if(ballScenario == 0){
		ball.velocity.x = -20;
		
	}
	else if(ballScenario == 4) ball.velocity.x = 40;*/	
	ball.velocity.x = moveDis[ballScenario];
	
	 
	ball.mass = massChange[ballScenario];
	if((greenSelection == 1) && (redSelection == 0) && ballScenario == 4) {
		ball.mass = 0.025;
	}
}


function changePop(val) {
	if(cpage == 'explore') $('.expFoodBar').hide();
	rotateValue = -280;
	angleRot1 = 180;
	$('.expPara').html(val);
	$('.activeSlider').trigger('click');
	setHeight();
}
var actStep = 0;
var actInitialize = function(){
	
	$('#'+cpage+" .basketPos").css({"background-color":"#ffffff"}).removeClass("active");
	$('#'+cpage+" #basketObj").hide();
	$('#'+cpage+" .force").css({"background-color":"#ffffff"}).removeClass("active");
	$('#'+cpage+" #shootBtn").prop('disabled',true).css({cursor:'default','background-image':'url(./assets/images/activity/shootBtn_D.png)',color:'#fff'}).off("click");
	$('#'+cpage+" #resetBtn").prop('disabled',true).css({'z-index':0,'background-color':'#58595b','color':'rgb(0, 0, 0)','cursor':'default'});
	
	$('#'+cpage+" .force").off("click");	
	$('#'+cpage+" .basketPos").off("click");
	$('#'+cpage+" .grnMar").off("click");  
	$('#'+cpage+" .redMar").off("click");
	
	if(cpage == "explore"){
		funcInitialization('#'+cpage);
		actStep = 0;
	} else if(cpage == "activity"){
		$("#activity, #explore, .emptyDiv, .commonWorkArea").off("click").on("click",closeSlider);
		$('#'+cpage+" .force").off("click").on("click",spring_force);
		
		//callSlide(feedBackTxt.activity.initial[actStep]);//After this  below will show
		/* callSlide(feedBackTxt.activity.step[actStep]); */
	}
	
	
	$('#'+cpage+" #grnMarHit").css({"left":objPos.greenShoot.forceLevelEndPos[forceLevel]+"px","top":objPos.hitChange.initialPos[greenSelection]+"px","width":objPos.hitChange.wid[greenSelection]+"px","height":objPos.hitChange.wid[greenSelection]+"px","background-image":"url('./assets/images/activity/"+objPos.hitChange.imgNameFront[0]+"_"+objPos.hitChange.imgNameBack[greenSelection]+".png')"}).hide();
	
	
	$('#'+cpage+" #redMarForce").css({"left":objPos.redShoot[0].initialPos[0]+"px","top":objPos.hitChange.initialPos[redSelection]+"px","width":objPos.hitChange.wid[redSelection]+"px","height":objPos.hitChange.wid[redSelection]+"px","background-image":"url('./assets/images/activity/"+objPos.hitChange.imgNameFront[1]+"_"+objPos.hitChange.imgNameBack[redSelection]+".png')"}).hide();
	
	$('#'+cpage+" .grnMar, "+'#'+cpage+" .redMar").css({"background-color":"transparent"});
	
	/* basketPosition = Math.floor(Math.random()*3); */
	basketPosition1 = randomDiffElement(lastRandomNum, myArray)
	/* alert(basketPosition); */
	$('.basketBotArea').hide();
	/* $('#'+cpage+" #basketBottom"+(basketPosition+1)).show(); */
	$('#'+cpage+" #"+basketPosition1).show();
	basketPosition = Number(basketPosition1.split("basketBottom")[1])-1;
	
	
	
	$('#'+cpage+" #basketObj").css({"left":objPos.basketPosition[Number(basketPosition1.split("basketBottom")[1])-1]+"px"}).show();
	/* $('#'+cpage+" #basketObj").css({"left":objPos.basketPosition[basketPosition]+"px"}).show(); */
	// $('#'+cpage+" #basketObj").css({"left":objPos.basketPosition[basketPosition]+"px"});
	/* if(basketPosition == 0) ball.velocity.x = 2.62;
	else if(basketPosition == 1) ball.velocity.x = 9.05;
	else if(basketPosition == 2) ball.velocity.x = 70; */
	$('#'+cpage+" #grnMarHit").rotate({angle:180});
	$('#'+cpage+" #redMarForce").stop();
	$('#'+cpage+" #redMarForce").css({transform: 'rotate(0deg)'})
	setTimeout(function(){ $('#'+cpage+" #redMarForce").css({transform: 'rotate(0deg)'}) }, 3000);
	play1=document.getElementById('audioAnim')  
	play1.pause();
	play1.currentTime=0;
	
}

var randomDiffElement = function(last, myArray) {
   if (myArray.length == 0) {
      return;
   } else if (myArray.length == 1) {
      return myArray[0];
   } else {
      var num = 0;
      do {
         num = Math.floor(Math.random() * myArray.length);
		 lastRandomNum = myArray[num];
		 /* console.log(lastRandomNum); */
      } while (myArray[num] == last);
      return myArray[num];
   }
}
var resetAll = function(){	
	
	if($(this).attr('id') == 'resetBtn'){
		globalAudioPause();		
	}
     move('#'+cpage+" #grnMarHit")        
        .rotate(0)
		.duration('0s')
        .end();

	sameangcount =0;
	tempang =-1;
	tempmass = massChange[0];
	greenSelection = 0;
	redSelection = 1;
	//basketPosition = 0;
	forceLevel = 0; 
	objSelection = [0,0,0];	
	clearInterval(loopTimer);
	width = 1200;
	height = 430;
	canvas = ctx = false;
	frameRate = 1/40; // Seconds
	frameDelay = frameRate * 1000; // ms
	loopTimer = false;
	rigSelection = false;
	resultShown = false;
	ballsm =[ {
    position: {x: 371, y: 223},
    velocity: {x: 2.62, y: 0},
    mass: 0.23, //kg
    radius: 10, // 1px = 1cm
    restitution: -0.7
    },{
    position: {x: 371, y: 207},
    velocity: {x: 2.62, y: 0},
    mass: 0.02, //kg
    radius: 10, // 1px = 1cm
    restitution: -0.5
    }];
	ball = ballsm[0];
	
	Cd = 0.47;  // Dimensionless
	rho = 1.22; // kg / m^3
	A = Math.PI * ball.radius * ball.radius / (10000); // m^2
	ag = 9.81;  // m / s^2
	mouse = {x: 0, y: 0, isDown: true};
	ang = 0,enterOnce = true,ballStepLevel=0;
	
	/* currentStep1 = 0; */
	timeOut = false;
	clearTimeout(timeout);
	$('#'+cpage+' #grnMarHit').stop();		
	$('#'+cpage+" #shootBtn").off("click").on("click",shoot_trigger);
	//ball={x:350,y:205,xs:14,ys:0};	
	$('#'+cpage+" .emptyDiv").hide();
	if(!navArrow){		
		if(cpage == 'activity' || (cpage == 'explore' && cpageClk)) {
			currentStep = "initial";
			cpageClk = false;
		} else currentStep = "next";
	} else navArrow = false;
	if($(this).attr('id') == 'resetBtn' && attemptCount >= 10){
		
		attemptCount = 0;
		basketCount = 0;
		$('#'+cpage+" #txt_7").html(attemptCount);
		$('#'+cpage+" #txt_8").html(basketCount);
		currentStep = "initial";
		AudioText=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["AudioText"][audioIndex][stepIndex];
		globalAudioName=window["SlideContents_"+activeIcon][FindState[getIdSplit]][FindLevel[StateCheck]][currentStep]["audio"][audioIndex][stepIndex];
		$(".expDiv .expPara").html(AudioText);
	}
	/* if(cpage != 'activity'){
	
		//rightAttemptFun(); 
		rotateValue = -280;
		angleRot1 = 0;
		$('.expDiv').stop().animate({left:rotateValue},0,function(){
			$('#'+cpage+' .activeSlider').rotate({
				angle:0,
				center:["50%", "50%"],
				animateTo:angleRot1,
				duration:0
			});			
		});		
		
	} */
	if(cpage == 'explore') if(parseInt($('.expDiv').css('left'))>= 0 ) SliderOkClick("close");
	if(cpage == 'activity') if(parseInt($('.expDiv').css("left")) < 0)	SliderOkClick("open");
	actInitialize();
	$('#emptyAct').show();
	$('#'+cpage+" #shootBtn").off("click");	
}
var slide=false;
function callSlide(val) {
	/* rotateValue = -280;
	angleRot1 = 180; */
	$('.expAudio').off('click').on('click', playGlobalAudio);			
	//$('#'+cpage+' .activeSlider').off('click').on('click', expSlideDiv);
	$('.expPara').html(val);
	setHeight();
	//$('#'+cpage+' .activeSlider').trigger('click');
	slide=true;
	expSlideDiv()
}

function expSlideDiv(e)
	{		
		globalAudioPause();
		if(slide){
			rotateValue = 0;
			slide = false;
		} else {
			rotateValue = ($('.expDiv').position().left >= 0)?-280:0;	
		}				
		angleRot = (rotateValue >= 0)?0:180;				
		$('.expDiv').stop().animate({left:rotateValue},800,function(){					
			$('.activeSlider').rotate({
				angle:0,
				center:["50%", "50%"],
				animateTo:angleRot,
				duration:0
			});			
		});		
	}

function setHeight()
	{
		var startH = 0;		
		var temptime = window.setTimeout(function(){
			startH = $('.expPara').height();
			
			$('.expDiv').css('height',startH+60)			
		},100)
	} 