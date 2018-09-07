var MainNavigations=1;	
var baseConfig = {activityTitle:'Marble Collisions'};
var Tabs=["welcome","explore","activity"];
var TopMenuText=["Dig site","Lab"];
var rightMenuText=["Food Web","Tropic Game"];
//label background on top
var labelSettings = {
						0:'#313131', //monteryBay background
						1:'#313131'    //Amazon background
					};

//label background on right
var backgroundNcolor=[
						["#150958","#FFCC00"], //monteryBay background
						['#124521','#FFCC00'], //Amazon background
						["#6d6e71","#fff"]     //default Grey background
					 ];
//array for slider okbtn and img show and hide
var SlideStatusArr=[
						["imghide","okhide","sliderhide"],	// welcome
						["imgshow","okhide","slidershow"],  //explore
						["imghide","okshow","slidershow"]   //activity
				   ]; 			
//imghide  imgshow
// okhide  okshow
// sliderhide slidershow

//array for topmenu rightmenu and base image show and hide
var topNSideMenu=[
					["topmenuhide","rightmenuhide","baseimghide"], //welcome
					["topmenuhide","rightmenuhide","baseimghide"], //explore
					["topmenuhide","rightmenuhide","baseimghide"]  //activity
				 ]; 
//topmenuhide  topmenushow
// rightmenuhide  rightmenushow
// baseimghide baseimgshow

var templateHdr = {textActive:'#FFF',textNormal:'#fff'};
var selectedIndex = 0;
var prevMove = 0;
var defIndex = -1;	
var activitytag = true;	
var currentactivity = 0;
var parentTab;
var imgBase = "assets/images/";
var imgBaseAct = "assets/images/activity/";
var helpimgPath = "assets/images/help/";
var imgBaseWelcome = "assets/images/welcomebg/";
var speechBubblePos = 'bubbleDivNone';
var selBubbleLen = 0;
var bubbleStart = 0;
var imgPng = '.png';
var imgJpg = '.jpg';
var ctAttrExp;
var headerlabel = 'monterey';
var exoploreCtBubble = 'anchovy0';
var templateStateImg = {
	audiopause:'assets/images/template/audio_icon_normal.png',
	audioplay:'assets/images/template/audio_icon_play.png',
	leftslideract:'assets/images/template/left_slider_act.png',
	leftsliderdeact:'assets/images/template/left_slider_deact.png',
	rightslideract:'assets/images/template/right_slider_act.png',
	rightsliderdeact:'assets/images/template/right_slider_deact.png',
};
var imageName="monterey";	
var noOfSteps=16;
var currentStep1='welcome';
var wrongResPos=0;
var LengthFind=0;
var AudioText,audioIndex=0,stepIndex=0;
var getIdSplit=0;
var StateCheck=0;
var noStepArr=[];
var totalStepArr=[];
var FeedBack="Step";
var activeIcon="explore";
var slideImg="";
var rotateValue=-280;
var angleRot=180;
//incorrect Audio multiple
var incorrectText = [
						
					];
//shell Audio
var FindState=["MonteryBay","AmazonRainForest"];
var FindLevel=["FoodWeb","TropicLevel"];
var SlideContents_explore = {
	"MonteryBay":
	{
		"FoodWeb":
		{
			'initial':{
				'Image':'',
				
				'AudioText':[["Select the spring force, the size of the green marble, and the size of the red marble. Then select Shoot to see if you made a basket.<br><br>See how many baskets you can make in 10 attempts with different settings!"],["Select the spring force, the size of the green marble, and the size of the red marble. Then select Shoot to see if you made a basket.<br><br>See how many baskets you can make in 10 attempts with different settings!"],[]],
				
				'audio':[["vlmcbe_01.mp3"],["vlmcbe_01.mp3"],[]]
			  },
			'next':{
				'Image':'',
				'AudioText':[["Try another shot. Select the spring force, the size of the green marble, and size of the red marble. Then select Shoot."],["Try another shot. Select the spring force, the size of the green marble, and size of the red marble. Then select Shoot."],[]],
				
				'audio':[["vlmcbe_02.mp3"],["vlmcbe_02.mp3"],[]]
			  },
			'makingBasket':{
				'Image':'',
				'AudioText':[[],['Great shot! Select Reset to try to make another basket.'],[]],
				
				'audio':[[],['vlmcbe_03.mp3'],[]]
			  },
			'missingBasket':{
				'Image':'',
				'AudioText':[[],['You missed! But remember where the red marble ended up. The basket may be in a different spot next time.<br><br>Select Reset to try again.'],[]],
				
				'audio':[[],['vlmcbe_04.mp3'],[]]
			  },
			'missingBasketOut':{
				'Image':'',
				'AudioText':[[],['You overshot the basket. The green marble struck the red marble with such force that it flew right out of the picture!<br/><br/>Select Reset to try again.'],[]],
				
				'audio':[[],['vlmcbe_05.mp3'],[]]
			  },
			'missingBasketFront':{
				'Image':'',
				'AudioText':[[],['You missed! The green marble did not strike the red marble with enough force to make it roll off the table.<br/><br/>Select Reset to try again.'],[]],
				
				'audio':[[],['vlmcbe_06.mp3'],[]]
			  },
			'makingBasket10':{
				'Image':'',
				'AudioText':[[],['Nice shot! You made <span class="ans">0</span> out of 10 baskets.<br/><br/>Select Reset to start over and try to improve your score. Or go to Activity for a guided activity.'],[]],
				
				'audio':[[],['vlmcbe_03.mp3'],[]]
			  },
			'missingBasket10':{
				'Image':'',
				'AudioText':[[],['Nice try. You made <span class="ans">0</span> out of 10 baskets.<br/><br/>Select Reset to start over and try to improve your score. Or go to Activity for a guided activity.'],[]],
				
				'audio':[[],['vlmcbe_04.mp3'],[]]
			/*   },
			'missingBasketOut10':{
				'Image':'',
				'AudioText':[[],['Nice try. You made <span class="ans">0</span> out of 10 baskets.<br/><br/>Select Reset to start over and try to improve your score. Or go to Activity for a guided activity.'],[]],
				
				'audio':[[],['vlmcbe_05.mp3'],[]]
			  },
			'missingBasketFront10':{
				'Image':'',
				'AudioText':[[],['Nice try. You made <span class="ans">0</span> out of 10 baskets.<br/><br/>Select Reset to start over and try to improve your score. Or go to Activity for a guided activity.'],[]],
				
				'audio':[[],['vlmcbe_06.mp3'],[]] */
			  }
		}
	}
};

var SlideContents_activity = {

	"MonteryBay":
	{
		"FoodWeb":
		{
			'initial':{
				'Image':'',
				'AudioText':[["In this activity, you will observe how forces affect the motion of marbles.<br/><br/>Even when the marbles are not moving, there are forces acting on them. Gravity is pulling them down. The table is pushing them up. These forces are balanced, so the marbles do not move.",
				"You will use a spring to apply a new force to the green marble. This will make the forces unbalanced and cause the green marble to move. Some of this force will be passed on to the red marble when the marbles collide.",
				"Start by selecting a low spring force, the small green marble, and the small red marble."],["In this activity, you will observe how forces affect the motion of marbles.<br/><br/>Even when the marbles are not moving, there are forces acting on them. Gravity is pulling them down. The table is pushing them up. These forces are balanced, so the marbles do not move.",
				"You will use a spring to apply a new force to the green marble. This will make the forces unbalanced and cause the green marble to move. Some of this force will be passed on to the red marble when the marbles collide.",
				"Start by selecting a low spring force, the small green marble, and the small red marble."],['Try again. Select low spring force, small green marble, and small red marble.']],
				
				'audio':[["vlmcba_01.mp3", "vlmcba_02.mp3", "vlmcba_03.mp3"],[ "vlmcba_01.mp3", "vlmcba_02.mp3", "vlmcba_03.mp3"],['vlmcba_wrong_01.mp3']]//0
			  },
			 'correctSel0':{
				'Image':'',
				'AudioText':[[],['Good! Now select Shoot to collide the marbles and see if you made a basket.'],[]],
				'audio':[[],['vlmcba_04.mp3'],[]]//0
			  },
			  'makeBasket0':{
				'Image':'',
				'AudioText':[[],['Great shot! Make a note of how far the red marble traveled. How do you think the force affected the outcome? What would happen if you used more force?','Let’s try increasing the force but using the same sized marbles. Select medium spring force, the small green marble, and the small red marble.'],['Try again. Select medium spring force, the small green marble, and the small red marble.']],
				
				'audio':[[],['vlmcba_05.mp3','vlmcba_06.mp3'],['vlmcba_wrong_02.mp3']]//0
			  },
			  'missBasket0':{
				'Image':'',
				'AudioText':[[],['You missed! But make a note of how far the red marble traveled. How do you think the force affected the outcome? What would happen if you used more force?','Let’s try increasing the force but using the same sized marbles. Select medium spring force, the small green marble, and the small red marble.'],['Try again. Select medium spring force, the small green marble, and the small red marble.']],
				
				'audio':[[],['vlmcba_09.mp3','vlmcba_10.mp3'],['vlmcba_wrong_02.mp3']]//0
			  },
			  'correctSel1':{
				'Image':'',
				'AudioText':[[],['Good! Do you think the red marble will travel a shorter or longer distance than your first shot? Will you make a basket? Write down your prediction. Then select Shoot to see if you are right.'],[]],
				'audio':[[],['vlmcba_11.mp3'],[]]//0
			  },
			  'makeBasket1':{
				'Image':'',
				'AudioText':[[],['Great shot! Was your prediction correct? Kudos to you if you said the marble would travel farther if more force was applied!<br><br>How do you think the mass of each marble affected the outcome? What would happen if you increased the mass of one marble?','Let’s find out what happens if we change the mass of one marble. Select medium spring force, the large green marble, and the small red marble.'],['Try again. Select the medium force, the large green marble, and the small red marble.']],//0
				'audio':[[],['vlmcba_12.mp3','vlmcba_13.mp3'],['vlmcba_wrong_03.mp3']]//0
			  },
			  'missBasket1':{
				'Image':'',
				'AudioText':[[],['You didn’t make a basket. But was your prediction correct? Kudos to you if you said the marble would travel farther if more force was applied!<br><br>How do you think the mass of each marble affected the outcome? What would happen if you increased the mass of one marble?','Let’s find out what happens if we change the mass of one marble. Select medium spring force, the large green marble, and the small red marble.'],['Try again. Select the medium force, the large green marble, and the small red marble.']],
				
				'audio':[[],['vlmcba_14.mp3','vlmcba_15.mp3'],['vlmcba_wrong_03.mp3']]//0
			  },
			   'correctSel2':{
				'Image':'',
				'AudioText':[[],['Good! Now make a prediction. How far will the red marble travel? Do you think it will end up in the basket? Write down your prediction. Then select Shoot.'],[]],
				'audio':[[],['vlmcba_16.mp3'],[]]//0
			  },
			   'makeBasket2':{
				'Image':'',
				'AudioText':[[],['Nice shot, champ! You made the basket.<br><br>Check your prediction. Did you correctly predict that increasing the mass of the green marble would cause the smaller red marble to travel farther? If so, kudos to you.','You have reached the end of this Guided Activity. But there are many more combinations to try. Now go to Explore mode, where you can keep shooting marbles. Test out different forces and marble sizes and try to make as many baskets as you can!'],[]],
				'audio':[[],['vlmcba_17.mp3','vlmcba_18.mp3'],[]]//0
			  },
			  'missBasket2':{
				'Image':'',
				'AudioText':[[],['You missed! But check your prediction. Did you correctly predict that increasing the mass of the green marble would cause the smaller red marble to travel farther? If so, kudos to you.','You have reached the end of this Guided Activity. But there are many more combinations to try. Now go to Explore mode, where you can keep shooting marbles. Test out different forces and marble sizes and try to make as many baskets as you can!'],[]],
				'audio':[[],['vlmcba_19.mp3','vlmcba_20.mp3'],[]]//0
			  },
		}
	},
	"AmazonRainForest":
	{
		"FoodWeb":
		{
			
		}
	}
};
//information icon background text
var info_background = {
	'block0':{
			'img':'audio_icon',
			'text':"A <b>force</b> is a push or a pull on an object.",
			'audio':"vlmcbi_01.mp3"
		},
	'block1':{
			'img':'audio_icon',
			'text':"The <b>net force</b> is the overall force on an object.",
			'audio':"vlmcbi_02.mp3"
		},
	'block2':{
			'img':'audio_icon',
			'text':"Objects that are not moving have forces acting on them. The forces are <b>balanced</b>. The net force equals 0.",
			'audio':"vlmcbi_03.mp3"
		},
	'block3':{
			'img':'audio_icon',
			'text':"If the forces acting on an object are <b>unbalanced</b>, the object may start to move or change speed or direction. The net force is no longer 0.",
			'audio':"vlmcbi_04.mp3"
			},
	'block4':{
			'img':'audio_icon',
			'text':"<b>Gravity</b> is a force of attraction between objects. Earth’s gravity pulls objects down toward Earth’s center.",
			'audio':"vlmcbi_05.mp3"
			}	
		};
//information icon help text
var info_help = {
	'block0':{
			'img':'Info_icon',
			'imgText':'Welcome',
			'text':"This mode shows you how to use the lab.",
			'audio':"help_1.mp3"
			},	
	'block1':{
			'img':'Info_icon',
			'imgText':'Explore',
			'text':"This mode lets you explore the lab on your own.",
			'audio':"help_2.mp3"
			},	
	'block2':{
			'img':'Info_icon',
			'imgText':'Activity',
			'text':"This mode guides you through an activity with step-by-step instructions.",
			'audio':"help_3.mp3"
			},
	'block3':{
			'img':'Info_icon',
			'imgText':'info_icon.png',
			'text':"This button provides Background Information and Help.",
			'audio':"help_4.mp3"
			},
	'block4':{
			'img':'Info_icon',
			'imgText':'camera_icon.png',
			'text':"This button takes a picture of your screen and saves it on your device.",
			'audio':"help_5.mp3"
		}
	};
