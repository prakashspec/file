/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bg_blur',
            type:'image',
            tag:'img',
            rect:['-113px','-144px','924px','587px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bg_blur.png",'0px','0px']
         },
         {
            id:'bg',
            display:'none',
            type:'image',
            rect:['0px','0px','924px','588px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
         },
         {
            id:'Reset_btn',
            display:'none',
            type:'rect',
            rect:['22px','532px','135px','39px','auto','auto'],
            fill:["rgba(88,89,91,1.00)"],
            stroke:[1,"rgba(171,173,176,1.00)","solid"],
            c:[
            {
               id:'Reset_txt',
               type:'text',
               rect:['33px','8px','auto','auto','auto','auto'],
               text:"Reset",
               font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none",""]
            }]
         },
         {
            id:'table',
            display:'none',
            type:'image',
            tag:'img',
            rect:['158px','205px','388px','279px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"table.png",'0px','0px']
         },
         {
            id:'Attmpt_txt',
            display:'none',
            type:'text',
            rect:['197px','545px','auto','auto','auto','auto'],
            text:"Attempts: 0",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","700","none","normal"]
         },
         {
            id:'point_txt',
            display:'none',
            type:'text',
            rect:['337px','548px','auto','auto','auto','auto'],
            text:"Points: 0",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","bold","none","normal"]
         },
         {
            id:'spring',
            display:'none',
            type:'image',
            tag:'img',
            rect:['194px','216px','65px','25px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"spring.png",'0px','0px']
         },
         {
            id:'green_hit',
            display:'none',
            type:'image',
            rect:['225px','207px','35px','35px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"green_hit.png",'0px','0px']
         },
         {
            id:'green_hit_small',
            display:'none',
            type:'image',
            rect:['226px','221px','21px','21px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"green_small.png",'0px','0px']
         },
         {
            id:'red_force',
            display:'none',
            type:'image',
            rect:['353px','220px','21px','21px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"red_force.png",'0px','0px']
         },
         {
            id:'red_force1',
            display:'none',
            type:'image',
            tag:'img',
            rect:['370px','205px','34px','34px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"red_large.png",'0px','0px']
         },
         {
            id:'basketShadow',
            display:'none',
            type:'image',
            tag:'img',
            rect:['765px','441px','98px','28px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"basketShadow.png",'0px','0px']
         },
         {
            id:'basket',
            display:'none',
            type:'image',
            tag:'img',
            rect:['768px','345px','93px','114px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"basket.png",'0px','0px']
         },
         {
            id:'Panel',
            display:'none',
            type:'rect',
            rect:['138px','13px','530px','100px','auto','auto'],
            fill:["rgba(50,50,50,1.00)"],
            stroke:[1,"rgba(255,255,255,1.00)","solid"],
            c:[
            {
               id:'opn1',
               type:'rect',
               rect:['141px','7px','2px','86px','auto','auto'],
               fill:["rgba(88,89,91,1.00)"],
               stroke:[1,"rgb(255, 255, 255)","none"]
            },
            {
               id:'opn2',
               type:'rect',
               rect:['285px','7px','2px','86px','auto','auto'],
               fill:["rgba(88,89,91,1.00)"],
               stroke:[1,"rgb(255, 255, 255)","none"]
            },
            {
               id:'opn3',
               type:'rect',
               rect:['429px','7px','2px','86px','auto','auto'],
               fill:["rgba(88,89,91,1.00)"],
               stroke:[1,"rgb(255, 255, 255)","none"]
            },
            {
               id:'Low_txt',
               type:'text',
               rect:['9px','73px','29px','auto','auto','auto'],
               text:"Low",
               font:['Arial, Helvetica, sans-serif',11,"rgba(255,255,255,1.00)","normal","none",""]
            },
            {
               id:'Medium_txt',
               type:'text',
               rect:['46px','72px','auto','auto','auto','auto'],
               text:"Medium",
               font:['Arial, Helvetica, sans-serif',11,"rgba(255,255,255,1.00)","normal","none",""]
            },
            {
               id:'High_txt',
               type:'text',
               rect:['95px','73px','auto','auto','auto','auto'],
               text:"High",
               font:['Arial, Helvetica, sans-serif',11,"rgba(255,255,255,1.00)","normal","none",""]
            },
            {
               id:'Red_txt',
               type:'text',
               rect:['308px','12px','auto','auto','auto','auto'],
               text:"Red Marble",
               font:['Arial, Helvetica, sans-serif',[1,"em"],"rgba(255,255,255,1.00)","normal","none",""]
            },
            {
               id:'Green_txt',
               type:'text',
               rect:['161px','12px','auto','auto','auto','auto'],
               text:"Green Marble",
               font:['Arial, Helvetica, sans-serif',[1,"em"],"rgba(255,255,255,1.00)","normal","none",""]
            },
            {
               id:'Spring_txt',
               type:'text',
               rect:['13px','12px','auto','auto','auto','auto'],
               text:"Spring Force",
               font:['Arial, Helvetica, sans-serif',[1,"em"],"rgba(255,255,255,1.00)","normal","none",""]
            },
            {
               id:'Bar_line',
               type:'rect',
               rect:['30px','50px','63px','6px','auto','auto'],
               fill:["rgba(255,255,255,1.00)"],
               stroke:[1,"rgb(255, 255, 255)","none"]
            },
            {
               id:'select1',
               type:'ellipse',
               rect:['9px','40px','22px','25px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(255,255,255,1)"],
               stroke:[1,"rgb(255, 255, 255)","none"]
            },
            {
               id:'select3',
               type:'ellipse',
               rect:['89px','43px','22px','25px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(255,255,255,1)"],
               stroke:[1,"rgb(255, 255, 255)","none"]
            },
            {
               id:'select2',
               type:'ellipse',
               rect:['51px','40px','22px','25px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(255,255,255,1)"],
               stroke:[1,"rgb(255, 255, 255)","none"]
            },
            {
               id:'red_select',
               display:'none',
               type:'ellipse',
               rect:['310px','51px','26px','26px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(255,255,0,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'red_small',
               type:'image',
               tag:'img',
               rect:['309px','50px','28px','28px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"red_small.png",'0px','0px']
            },
            {
               id:'red_large',
               type:'image',
               tag:'img',
               rect:['355px','37px','48px','48px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"red_large.png",'0px','0px']
            },
            {
               id:'green_select',
               display:'none',
               type:'ellipse',
               rect:['211px','42px','46px','46px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(255,255,0,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'green_small',
               type:'image',
               tag:'img',
               rect:['165px','49px','28px','28px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"green_small.png",'0px','0px']
            },
            {
               id:'green_large',
               type:'image',
               tag:'img',
               rect:['208px','37px','48px','48px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"green_large.png",'0px','0px']
            },
            {
               id:'shootBtn_E',
               display:'none',
               type:'image',
               rect:['446px','16px','69px','69px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"shootBtn_E.png",'0px','0px']
            },
            {
               id:'shootBtn_D',
               type:'image',
               tag:'img',
               rect:['446px','12px','73px','73px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"shootBtn_D.png",'0px','0px']
            },
            {
               id:'shoot_txt',
               type:'text',
               rect:['463px','43px','auto','auto','auto','auto'],
               text:"Shoot",
               font:['Arial, Helvetica, sans-serif',12,"rgba(255,255,255,1.00)","700","none",""]
            }]
         },
         {
            id:'select_high',
            display:'none',
            type:'ellipse',
            rect:['289px','60px','19px','18px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(255,203,5,1.00)"],
            stroke:[1,"rgb(255, 255, 255)","none"]
         },
         {
            id:'welcomeGroup',
            type:'group',
            rect:['291px','199px','360','132','auto','auto'],
            c:[
            {
               id:'audio_icon_normal',
               type:'image',
               tag:'img',
               rect:['9px','12px','28px','28px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"audio_icon_normal2.png",'0px','0px']
            },
            {
               id:'welText',
               type:'text',
               rect:['48px','12px','311px','auto','auto','auto'],
               text:"Test"
            },
            {
               id:'right_slider_act',
               type:'image',
               tag:'img',
               rect:['186px','98px','28px','28px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"right_slider_act2.png",'0px','0px']
            },
            {
               id:'left_slider_act',
               type:'image',
               tag:'img',
               rect:['146px','98px','28px','28px','auto','auto'],
               cursor:['pointer'],
               fill:["rgba(0,0,0,0)",im+"left_slider_act2.png",'0px','0px']
            }]
         },
         {
            id:'camera_icon',
            display:'none',
            type:'image',
            rect:['876px','540','40px','40px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"camera_icon.png",'0px','0px']
         },
         {
            id:'arrow_1',
            display:'none',
            type:'image',
            tag:'img',
            rect:['752','0px','20px','31px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"arrow_1.png",'0px','0px']
         },
         {
            id:'arrow_2',
            display:'none',
            type:'image',
            tag:'img',
            rect:['827','-1px','20px','31px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"arrow_2.png",'0px','0px']
         },
         {
            id:'arrow_3',
            display:'none',
            type:'image',
            tag:'img',
            rect:['887','-5px','20px','31px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"arrow_3.png",'0px','0px']
         },
         {
            id:'cursor',
            display:'none',
            type:'image',
            rect:['95px','163px','31px','31px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"cursor.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_red_small}": [
            ["style", "top", '51px'],
            ["style", "height", '24px'],
            ["style", "left", '311px'],
            ["style", "width", '24px']
         ],
         "${_table}": [
            ["style", "top", '204px'],
            ["style", "display", 'none'],
            ["style", "height", '279px'],
            ["style", "opacity", '0'],
            ["style", "left", '157px'],
            ["style", "width", '388px']
         ],
         "${_opn2}": [
            ["color", "background-color", 'rgba(88,89,91,1)'],
            ["style", "top", '7px'],
            ["style", "height", '86px'],
            ["style", "border-style", 'none'],
            ["style", "left", '285px'],
            ["style", "width", '2px']
         ],
         "${_Reset_btn}": [
            ["color", "background-color", 'rgba(88,89,91,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '133px'],
            ["style", "top", '532px'],
            ["style", "height", '37px'],
            ["color", "border-color", 'rgba(171,173,176,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_Reset_txt}": [
            ["style", "top", '7px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '43px'],
            ["style", "font-size", 'large']
         ],
         "${_arrow_3}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '892px'],
            ["style", "display", 'none']
         ],
         "${_point_txt}": [
            ["style", "top", '543px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '336px'],
            ["style", "font-size", 'large']
         ],
         "${_green_large}": [
            ["style", "top", '42px'],
            ["style", "height", '44px'],
            ["style", "left", '212px'],
            ["style", "width", '44px']
         ],
         "${_green_select}": [
            ["style", "top", '50px'],
            ["style", "display", 'none'],
            ["style", "height", '27px'],
            ["color", "background-color", 'rgba(255,255,0,1.00)'],
            ["style", "left", '165px'],
            ["style", "width", '27px']
         ],
         "${_welcomeGroup}": [
            ["style", "height", '145px'],
            ["style", "opacity", '1'],
            ["color", "border-color", 'rgb(0, 0, 0)'],
            ["style", "display", 'block']
         ],
         "${_green_hit_small}": [
            ["style", "top", '220px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["motion", "location", '236.00003487723px 231.00001743862px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '20px'],
            ["style", "display", 'none'],
            ["style", "left", '226px'],
            ["style", "width", '20px']
         ],
         "${_Bar_line}": [
            ["style", "top", '51px'],
            ["style", "height", '5px'],
            ["style", "border-style", 'none'],
            ["style", "left", '38px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ],
         "${_select3}": [
            ["style", "top", '42px'],
            ["style", "height", '24px'],
            ["style", "left", '97px'],
            ["style", "width", '26px']
         ],
         "${_right_slider_act}": [
            ["style", "top", '98px'],
            ["style", "left", '186px'],
            ["style", "cursor", 'pointer']
         ],
         "${_basket}": [
            ["style", "top", '346px'],
            ["style", "opacity", '0'],
            ["style", "left", '767px'],
            ["style", "display", 'none']
         ],
         "${_cursor}": [
            ["style", "height", '31px'],
            ["motion", "location", '110.5px 178.5px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "width", '31px']
         ],
         "${_shoot_txt}": [
            ["style", "top", '41px'],
            ["style", "font-weight", 'bolder'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '464px'],
            ["style", "font-size", '12px']
         ],
         "${_arrow_1}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '741px'],
            ["style", "top", '0px']
         ],
         "${_audio_icon_normal}": [
            ["style", "top", '12px'],
            ["style", "left", '9px'],
            ["style", "cursor", 'pointer']
         ],
         "${_red_select}": [
            ["style", "top", '49px'],
            ["color", "background-color", 'rgba(255,255,0,1)'],
            ["style", "height", '28px'],
            ["style", "display", 'none'],
            ["style", "left", '309px'],
            ["style", "width", '28px']
         ],
         "${_welText}": [
            ["style", "top", '12px'],
            ["style", "width", '311px'],
            ["style", "line-height", '24px'],
            ["style", "left", '48px'],
            ["style", "font-size", '16px']
         ],
         "${_opn3}": [
            ["color", "background-color", 'rgba(88,89,91,1)'],
            ["style", "top", '7px'],
            ["style", "height", '86px'],
            ["style", "border-style", 'none'],
            ["style", "left", '429px'],
            ["style", "width", '2px']
         ],
         "${_shootBtn_E}": [
            ["style", "top", '16px'],
            ["style", "height", '69px'],
            ["style", "display", 'none'],
            ["style", "left", '446px'],
            ["style", "width", '69px']
         ],
         "${_arrow_2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "top", '0px']
         ],
         "${_red_large}": [
            ["style", "top", '40px'],
            ["style", "height", '44px'],
            ["style", "left", '355px'],
            ["style", "width", '44px']
         ],
         "${_Green_txt}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '163px'],
            ["style", "font-size", '1em'],
            ["style", "top", '10px'],
            ["style", "text-indent", '0%'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "word-spacing", '0em']
         ],
         "${_High_txt}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '99px'],
            ["style", "font-size", '11px'],
            ["style", "top", '71px'],
            ["style", "text-indent", '0px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "word-spacing", '0px']
         ],
         "${_Attmpt_txt}": [
            ["style", "top", '543px'],
            ["style", "opacity", '0'],
            ["style", "font-weight", '700'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "left", '199px'],
            ["style", "font-size", 'large']
         ],
         "${_shootBtn_D}": [
            ["style", "top", '16px'],
            ["style", "height", '69px'],
            ["style", "display", 'block'],
            ["style", "left", '446px'],
            ["style", "width", '69px']
         ],
         "${_green_small}": [
            ["style", "top", '51px'],
            ["style", "height", '24px'],
            ["style", "left", '167px'],
            ["style", "width", '24px']
         ],
         "${_select1}": [
            ["style", "top", '42px'],
            ["style", "height", '24px'],
            ["style", "left", '17px'],
            ["style", "width", '25px']
         ],
         "${_Panel}": [
            ["color", "background-color", 'rgba(50,50,50,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "top", '13px'],
            ["style", "height", '100px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '196px']
         ],
         "${_select_high}": [
            ["style", "top", '59px'],
            ["color", "background-color", 'rgba(255,203,5,1.00)'],
            ["style", "height", '18px'],
            ["style", "display", 'none'],
            ["style", "left", '297px'],
            ["style", "width", '19px']
         ],
         "${_red_force}": [
            ["transform", "rotateZ", '0deg'],
            ["motion", "location", '381px 231px'],
            ["style", "height", '20px'],
            ["style", "display", 'none'],
            ["style", "width", '20px']
         ],
         "${_Low_txt}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '18px'],
            ["style", "width", 'auto'],
            ["style", "top", '71px'],
            ["style", "text-indent", '0px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '11px']
         ],
         "${_bg_blur}": [
            ["style", "top", '0px'],
            ["style", "height", '588px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_basketShadow}": [
            ["style", "top", '441px'],
            ["style", "opacity", '0'],
            ["style", "left", '766px'],
            ["style", "display", 'none']
         ],
         "${_green_hit}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '180deg'],
            ["motion", "location", '251.98333740234px 225px'],
            ["style", "display", 'none'],
            ["style", "height", '34px'],
            ["style", "width", '34px']
         ],
         "${_Medium_txt}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '48px'],
            ["style", "font-size", '11px'],
            ["style", "top", '71px'],
            ["style", "text-indent", '0px'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "word-spacing", '0px']
         ],
         "${_Spring_txt}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '23px'],
            ["style", "font-size", '1em'],
            ["style", "top", '10px'],
            ["style", "text-indent", '0%'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "word-spacing", '0em']
         ],
         "${_left_slider_act}": [
            ["style", "top", '98px'],
            ["style", "left", '146px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Red_txt}": [
            ["style", "letter-spacing", '0em'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '314px'],
            ["style", "font-size", '1em'],
            ["style", "top", '10px'],
            ["style", "text-indent", '0%'],
            ["style", "font-family", 'Roboto-Regular'],
            ["style", "word-spacing", '0em']
         ],
         "${_bg}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_spring}": [
            ["style", "top", '216px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '193px'],
            ["style", "width", '65px']
         ],
         "${_camera_icon}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "top", '541px'],
            ["style", "left", '878px']
         ],
         "${_etxt2Copy}": [
            ["style", "top", '497px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '705px'],
            ["style", "font-size", '15px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '924px'],
            ["style", "height", '588px'],
            ["style", "overflow", 'hidden']
         ],
         "${_opn1}": [
            ["color", "background-color", 'rgba(88,89,91,1.00)'],
            ["style", "top", '7px'],
            ["style", "height", '86px'],
            ["style", "border-style", 'none'],
            ["style", "left", '141px'],
            ["style", "width", '2px']
         ],
         "${_select2}": [
            ["style", "top", '42px'],
            ["style", "height", '24px'],
            ["style", "left", '57px'],
            ["style", "width", '25px']
         ],
         "${_red_force1}": [
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '34px'],
            ["style", "display", 'none'],
            ["motion", "location", '387px 222px'],
            ["style", "width", '34px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 61505,
         autoPlay: false,
         labels: {
            "Step_0": 1000,
            "Step 1": 2000,
            "Step_2": 4000,
            "Step_3": 12000,
            "Step_4": 25000,
            "Step_5": 36000,
            "Step_6": 60000
         },
         timeline: [
            { id: "eid87", tween: [ "style", "${_arrow_3}", "opacity", '1', { fromValue: '0'}], position: 60500, duration: 500 },
            { id: "eid249", tween: [ "style", "${_green_select}", "width", '27px', { fromValue: '27px'}], position: 17000, duration: 0 },
            { id: "eid255", tween: [ "style", "${_green_select}", "width", '48px', { fromValue: '27px'}], position: 47500, duration: 0 },
            { id: "eid183", tween: [ "style", "${_select_high}", "left", '297px', { fromValue: '297px'}], position: 9500, duration: 0 },
            { id: "eid185", tween: [ "style", "${_select_high}", "left", '257px', { fromValue: '297px'}], position: 45500, duration: 0 },
            { id: "eid45", tween: [ "style", "${_point_txt}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid279", tween: [ "style", "${_camera_icon}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid277", tween: [ "style", "${_camera_icon}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid205", tween: [ "style", "${_red_select}", "top", '49px', { fromValue: '49px'}], position: 19500, duration: 0 },
            { id: "eid206", tween: [ "style", "${_red_select}", "top", '39px', { fromValue: '49px'}], position: 49500, duration: 0 },
            { id: "eid200", tween: [ "style", "${_red_select}", "left", '309px', { fromValue: '309px'}], position: 19500, duration: 0 },
            { id: "eid203", tween: [ "style", "${_red_select}", "left", '354px', { fromValue: '309px'}], position: 49500, duration: 0 },
            { id: "eid268", tween: [ "motion", "${_green_hit_small}", [[236,231,0,0],[363,231,0,0]]], position: 30000, duration: 250 },
            { id: "eid18", tween: [ "style", "${_basket}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid53", tween: [ "motion", "${_cursor}", [[110.5,178.5,0,0],[171.97,108.29,30.72,-14.96,142.07,-69.17],[206.1,96.36,134.85,-33.8,36.44,-9.13],[308.64,81.21,0,0]]], position: 6500, duration: 2000 },
            { id: "eid72", tween: [ "motion", "${_cursor}", [[308.64,81.21,0,0],[337.91,102.64,93.3,0,99.97,0],[376.21,85.5,0,0]]], position: 15000, duration: 1500 },
            { id: "eid76", tween: [ "motion", "${_cursor}", [[376.21,85.5,0,0],[519.5,99.5,0,0]]], position: 17500, duration: 1500 },
            { id: "eid129", tween: [ "motion", "${_cursor}", [[519.5,99.5,0,0],[680.79,78.64,0,0]]], position: 27500, duration: 1500 },
            { id: "eid157", tween: [ "motion", "${_cursor}", [[680.79,78.64,0,0],[527.93,488.43,-509.9,295.33,-244.47,141.59],[89.5,560.5,0,0]]], position: 38500, duration: 2000 },
            { id: "eid179", tween: [ "motion", "${_cursor}", [[89.5,560.5,0,0],[492.24,466.15,61.06,-289.84,75.48,-358.26],[266.64,81.93,0,0]]], position: 43000, duration: 2000 },
            { id: "eid189", tween: [ "motion", "${_cursor}", [[266.64,81.93,0,0],[369.5,99.07,103.74,0,144.41,0],[430.93,86.22,0,0]]], position: 46000, duration: 1000 },
            { id: "eid196", tween: [ "motion", "${_cursor}", [[430.93,86.22,0,0],[526.61,101.93,90.27,0,128,0],[579.5,83.36,0,0]]], position: 48000, duration: 1000 },
            { id: "eid210", tween: [ "motion", "${_cursor}", [[579.5,83.36,0,0],[679.5,83.36,0,0]]], position: 50000, duration: 1000 },
            { id: "eid271", tween: [ "motion", "${_green_hit}", [[251.98,225,0,0],[251.98,225,0,0]]], position: 47500, duration: 0 },
            { id: "eid274", tween: [ "motion", "${_green_hit}", [[251.98,225,0,0],[357.58,225,0,0]]], position: 52000, duration: 250 },
            { id: "eid12", tween: [ "style", "${_spring}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid6", tween: [ "style", "${_bg}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid151", tween: [ "transform", "${_red_force}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 30250, duration: 1000 },
            { id: "eid9", tween: [ "style", "${_table}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid82", tween: [ "style", "${_arrow_2}", "opacity", '1', { fromValue: '0'}], position: 60500, duration: 500 },
            { id: "eid86", tween: [ "style", "${_shootBtn_E}", "display", 'block', { fromValue: 'none'}], position: 19500, duration: 0 },
            { id: "eid163", tween: [ "style", "${_shootBtn_E}", "display", 'none', { fromValue: 'block'}], position: 41500, duration: 0 },
            { id: "eid211", tween: [ "style", "${_shootBtn_E}", "display", 'block', { fromValue: 'none'}], position: 49500, duration: 0 },
            { id: "eid252", tween: [ "style", "${_green_select}", "top", '50px', { fromValue: '50px'}], position: 17000, duration: 0 },
            { id: "eid253", tween: [ "style", "${_green_select}", "top", '40px', { fromValue: '50px'}], position: 47500, duration: 0 },
            { id: "eid75", tween: [ "style", "${_arrow_1}", "display", 'block', { fromValue: 'none'}], position: 60500, duration: 0 },
            { id: "eid22", tween: [ "style", "${_Panel}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid19", tween: [ "style", "${_basketShadow}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid79", tween: [ "style", "${_arrow_2}", "display", 'block', { fromValue: 'none'}], position: 60500, duration: 0 },
            { id: "eid43", tween: [ "style", "${_point_txt}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid15", tween: [ "style", "${_basket}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid40", tween: [ "style", "${_Attmpt_txt}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid93", tween: [ "style", "${_green_select}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
            { id: "eid164", tween: [ "style", "${_green_select}", "display", 'none', { fromValue: 'block'}], position: 41500, duration: 0 },
            { id: "eid190", tween: [ "style", "${_green_select}", "display", 'block', { fromValue: 'none'}], position: 47500, duration: 0 },
            { id: "eid8", tween: [ "style", "${_bg}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid101", tween: [ "style", "${_welcomeGroup}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid102", tween: [ "style", "${_welcomeGroup}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid1", tween: [ "style", "${_bg_blur}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_Reset_btn}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid14", tween: [ "style", "${_spring}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid63", tween: [ "style", "${_spring}", "width", '65px', { fromValue: '65px'}], position: 2000, duration: 0 },
            { id: "eid64", tween: [ "style", "${_spring}", "width", '34px', { fromValue: '65px'}], position: 9500, duration: 0 },
            { id: "eid139", tween: [ "style", "${_spring}", "width", '64px', { fromValue: '34px'}], position: 30000, duration: 0 },
            { id: "eid186", tween: [ "style", "${_spring}", "width", '44px', { fromValue: '64px'}], position: 45500, duration: 0 },
            { id: "eid216", tween: [ "style", "${_spring}", "width", '64px', { fromValue: '44px'}], position: 52000, duration: 0 },
            { id: "eid94", tween: [ "style", "${_red_select}", "display", 'block', { fromValue: 'none'}], position: 19500, duration: 0 },
            { id: "eid165", tween: [ "style", "${_red_select}", "display", 'none', { fromValue: 'block'}], position: 41500, duration: 0 },
            { id: "eid197", tween: [ "style", "${_red_select}", "display", 'block', { fromValue: 'none'}], position: 49500, duration: 0 },
            { id: "eid21", tween: [ "style", "${_basketShadow}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid42", tween: [ "style", "${_Attmpt_txt}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid147", tween: [ "motion", "${_red_force}", [[381,231,0,0],[691.11,256.49,318.86,93.09,347.23,101.38],[835.29,406.71,0,0]]], position: 30250, duration: 1000 },
            { id: "eid169", tween: [ "style", "${_basketShadow}", "left", '766px', { fromValue: '766px'}], position: 2000, duration: 0 },
            { id: "eid171", tween: [ "style", "${_basketShadow}", "left", '559px', { fromValue: '766px'}], position: 41500, duration: 0 },
            { id: "eid50", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 500 },
            { id: "eid57", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 500 },
            { id: "eid69", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 13500, duration: 500 },
            { id: "eid81", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 20250, duration: 500 },
            { id: "eid126", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 26500, duration: 500 },
            { id: "eid131", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 29500, duration: 500 },
            { id: "eid154", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 37500, duration: 500 },
            { id: "eid160", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 41000, duration: 500 },
            { id: "eid176", tween: [ "style", "${_cursor}", "opacity", '1', { fromValue: '0'}], position: 42000, duration: 500 },
            { id: "eid215", tween: [ "style", "${_cursor}", "opacity", '0', { fromValue: '1'}], position: 51500, duration: 500 },
            { id: "eid67", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 890 },
            { id: "eid150", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid105", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 500 },
            { id: "eid62", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 3750, duration: 195 },
            { id: "eid55", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 500 },
            { id: "eid106", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 10250, duration: 303 },
            { id: "eid107", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 12500, duration: 500 },
            { id: "eid108", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 24314, duration: 436 },
            { id: "eid110", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 25500, duration: 500 },
            { id: "eid111", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 35075, duration: 500 },
            { id: "eid58", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 36506, duration: 494 },
            { id: "eid2", tween: [ "style", "${_welcomeGroup}", "opacity", '0', { fromValue: '1'}], position: 59250, duration: 500 },
            { id: "eid3", tween: [ "style", "${_welcomeGroup}", "opacity", '1', { fromValue: '0'}], position: 60505, duration: 500 },
            { id: "eid120", tween: [ "transform", "${_green_hit}", "rotateZ", '180deg', { fromValue: '180deg'}], position: 17000, duration: 0 },
            { id: "eid48", tween: [ "style", "${_cursor}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
            { id: "eid25", tween: [ "style", "${_Panel}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid226", tween: [ "motion", "${_red_force1}", [[387,222,0,0],[631.53,261.55,193.32,102.27,270.63,143.16],[765.77,402.98,31.21,58.55,62.33,116.91],[774.14,431.43,0,0]]], position: 52250, duration: 1250 },
            { id: "eid234", tween: [ "motion", "${_red_force1}", [[774.14,431.43,0,0],[802.62,415.71,57.11,8.57,20.08,3.01],[825.56,434.29,0,0]]], position: 53500, duration: 410 },
            { id: "eid238", tween: [ "motion", "${_red_force1}", [[825.56,434.29,0,0],[831.41,439.91,85.4,-0.97,16.36,-0.19],[958.39,441.43,0,0]]], position: 53910, duration: 840 },
            { id: "eid166", tween: [ "style", "${_green_hit}", "display", 'none', { fromValue: 'none'}], position: 41500, duration: 0 },
            { id: "eid191", tween: [ "style", "${_green_hit}", "display", 'block', { fromValue: 'none'}], position: 47500, duration: 0 },
            { id: "eid88", tween: [ "style", "${_shootBtn_D}", "display", 'none', { fromValue: 'block'}], position: 19500, duration: 0 },
            { id: "eid162", tween: [ "style", "${_shootBtn_D}", "display", 'block', { fromValue: 'none'}], position: 41500, duration: 0 },
            { id: "eid212", tween: [ "style", "${_shootBtn_D}", "display", 'none', { fromValue: 'block'}], position: 49500, duration: 0 },
            { id: "eid119", tween: [ "style", "${_bg_blur}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid261", tween: [ "style", "${_green_hit_small}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
            { id: "eid269", tween: [ "style", "${_green_hit_small}", "display", 'none', { fromValue: 'block'}], position: 41500, duration: 0 },
            { id: "eid83", tween: [ "style", "${_arrow_3}", "display", 'block', { fromValue: 'none'}], position: 60500, duration: 0 },
            { id: "eid199", tween: [ "style", "${_red_select}", "width", '28px', { fromValue: '28px'}], position: 19500, duration: 0 },
            { id: "eid201", tween: [ "style", "${_red_select}", "width", '47px', { fromValue: '28px'}], position: 49500, duration: 0 },
            { id: "eid37", tween: [ "style", "${_Reset_btn}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid198", tween: [ "style", "${_red_select}", "height", '28px', { fromValue: '28px'}], position: 19500, duration: 0 },
            { id: "eid202", tween: [ "style", "${_red_select}", "height", '48px', { fromValue: '28px'}], position: 49500, duration: 0 },
            { id: "eid59", tween: [ "style", "${_select_high}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
            { id: "eid161", tween: [ "style", "${_select_high}", "display", 'none', { fromValue: 'block'}], position: 41500, duration: 0 },
            { id: "eid184", tween: [ "style", "${_select_high}", "display", 'block', { fromValue: 'none'}], position: 45500, duration: 0 },
            { id: "eid85", tween: [ "style", "${_red_force}", "display", 'block', { fromValue: 'none'}], position: 19500, duration: 0 },
            { id: "eid167", tween: [ "style", "${_red_force}", "display", 'none', { fromValue: 'block'}], position: 41500, duration: 0 },
            { id: "eid220", tween: [ "transform", "${_red_force1}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 49500, duration: 0 },
            { id: "eid227", tween: [ "transform", "${_red_force1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 52250, duration: 495 },
            { id: "eid229", tween: [ "transform", "${_red_force1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 52745, duration: 408 },
            { id: "eid231", tween: [ "transform", "${_red_force1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 53153, duration: 384 },
            { id: "eid235", tween: [ "transform", "${_red_force1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 53537, duration: 418 },
            { id: "eid239", tween: [ "transform", "${_red_force1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 53955, duration: 442 },
            { id: "eid240", tween: [ "transform", "${_red_force1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 54397, duration: 353 },
            { id: "eid251", tween: [ "style", "${_green_select}", "left", '165px', { fromValue: '165px'}], position: 17000, duration: 0 },
            { id: "eid254", tween: [ "style", "${_green_select}", "left", '210px', { fromValue: '165px'}], position: 47500, duration: 0 },
            { id: "eid207", tween: [ "style", "${_red_force1}", "display", 'block', { fromValue: 'none'}], position: 49500, duration: 0 },
            { id: "eid11", tween: [ "style", "${_table}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid250", tween: [ "style", "${_green_select}", "height", '27px', { fromValue: '27px'}], position: 17000, duration: 0 },
            { id: "eid256", tween: [ "style", "${_green_select}", "height", '48px', { fromValue: '27px'}], position: 47500, duration: 0 },
            { id: "eid168", tween: [ "style", "${_basket}", "left", '767px', { fromValue: '767px'}], position: 2000, duration: 0 },
            { id: "eid170", tween: [ "style", "${_basket}", "left", '561px', { fromValue: '767px'}], position: 41500, duration: 0 },
            { id: "eid78", tween: [ "style", "${_arrow_1}", "opacity", '1', { fromValue: '0'}], position: 60500, duration: 500 }         ]
      }
   }
},
"highAnim": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      s: [1,'rgb(0, 0, 0)','solid'],
      r: ['0px','0px','141px','32px','auto','auto'],
      id: 'highlightWel',
      t: 'rect',
      v: 'none',
      f: ['rgba(192,192,192,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_highlightWel}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["subproperty", "boxShadow.color", 'rgba(255,204,0,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '144px'],
            ["style", "top", '0px'],
            ["style", "border-width", '0px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(255,204,0,1.00)'],
            ["style", "height", '33px'],
            ["subproperty", "boxShadow.spread", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.blur", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '32px'],
            ["style", "width", '141px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "dg136", tween: [ "style", "${_highlightWel}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg138", tween: [ "subproperty", "${_highlightWel}", "boxShadow.blur", '20px', { fromValue: '0px'}], position: 0, duration: 1000 },
            { id: "dg139", tween: [ "subproperty", "${_highlightWel}", "boxShadow.blur", '0px', { fromValue: '20px'}], position: 1000, duration: 1000 },
            { id: "dg140", tween: [ "style", "${_highlightWel}", "width", '144px', { fromValue: '144px'}], position: 0, duration: 0 },
            { id: "dg137", tween: [ "style", "${_highlightWel}", "height", '33px', { fromValue: '33px'}], position: 0, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1817669");
