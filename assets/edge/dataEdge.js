
	var welcomeMode = {
		'step_0':{
				'bgimg':'step_0',
				'text':'Welcome to Marble Collisions!<br/>In this lab, you will investigate the effects of unbalanced forces by shooting marbles into a basket.',
				'audio':'vlmcbw_01.mp3',
				'speechStyle':'bubbleDivNone',
				'position':[274,230],
				'anim':{}
				},
		'step_1':{
				'bgimg':'step_1',
				'text':'For each trial, you will use the spring to shoot a green marble at a red marble.',
				'audio':'vlmcbw_02.mp3',
				'speechStyle':'bubbleDivMulti',
				'position':[215,275],
				'anim':{}
				},
		'step_2':{
				'bgimg':'step_1',
				'text':'You can choose the amount of force for each shot. Select Low, Medium, or High for the spring&#x00027;s force.',
				'audio':'vlmcbw_03.mp3',
				'speechStyle':'bubbleDivMulti',
				'position':[245,135],
				'anim':{}
				},
		'step_3':{
				'bgimg':'step_2',
				'text':'You can also select the size of each marble. The larger marbles have more mass than the smaller marbles.',
				'audio':'vlmcbw_04.mp3',
				'speechStyle':'bubbleDivMulti',
				'position':[464,130],
				'anim':{}
				},				
		'step_4':{
				'bgimg':'step_1',
				'text':'Once you&#x00027;ve made your selections, select Shoot to pull back the spring and launch the green marble. The red marble will only end up in the basket if you&#x00027;ve selected the correct force and marble sizes.',
				'audio':'vlmcbw_05.mp3',
				'speechStyle':'bubbleDivMultidouble',
				'position':[130,10],
				'anim':{}
				},		
		'step_5':{
				'bgimg':'step_4',
				'text':'Select the Reset button after each trial to shoot another marble. The basket will change positions each time. See how many baskets you can make out of 10 by correctly predicting the results of each marble collision!',
				'audio':'vlmcbw_06.mp3',
				'speechStyle':'bubbleDivBottom',
				'position':[45,320],
				'anim':{}
				},
		'step_6':{
				'bgimg':'step_4',
				'text':'Select Explore to begin exploring on your own. Or select Activity for a guided exploration. Select Info at any time to learn more about balanced and unbalanced forces.',
				'audio':'vlmcbw_07.mp3',
				'speechStyle':'bubbleDivNone',
				'position':[558,31],
				'anim':{}
				}				
				
		};
var weltextlen = Number(Object.keys(welcomeMode).length);
var animPlayArr = [0,2000,4000,12000,25000,36000,60000];
var animPlayArrRev = [0,2500,4000,12000,25000,36000,60000];

var welcomeMove = 0;
var speechBubblePos = 'bubbleDivNone';