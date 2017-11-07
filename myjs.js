var channelList = ["dootbeep","bort_hammer","freecodecamp","ESL_SC2", "OgamingSC2", "cretetion","habathcx", "RobotCaleb", "noobs2ninjas","brunofin","comster404","yaraskygaming"];
var channels = {

  dootbeep : ["","",""],
  bort_hammer : ["","",""],
  freecodecamp : ["","",""],
  ESL_SC2 : ["","",""],
  OgamingSC2 : ["","",""],
  cretetion : ["","",""],
  habathcx : ["","",""],
  RobotCaleb : ["","",""],
  noobs2ninjas : ["","",""],
  brunofin : ["","",""],
  comster404 : ["","",""],
  yaraskygaming :  ["","",""]
};
var url;
$(document).ready(function(){

  console.log(url);
  channelList.forEach(function(channel){
    url = 'https://wind-bow.gomix.me/twitch-api/streams/' +channel + "?callback=?";
    $.getJSON(url,function(getJson){
      if (getJson.stream ){
        channels[channel][0] = 'Online';
      }
      else{
        channels[channel][0] = 'Offline';
      }

    });
  });
  channelList.forEach(function(channel){

    url= 'https://wind-bow.gomix.me/twitch-api/channels/' + channel + "?callback=?";

    $.getJSON(url,function(getJson){
      channels[channel][1] = getJson.name;
      channels[channel][2] = getJson.logo;  
      console.log(channels); 
      if(channels[channel][1])   {
        if (channels[channel][0] === 'Online'){
        console.log(channels[channel][2]);
        let channelRow =' <div class="user online"><a href ="' + getJson.url + '" target="_blank"><img src="'+channels[channel][2]+'" class="user-image" ><h3 class="user-name">'+ channels[channel][1]+'</h3></a><p class="user-article">'+ channels[channel][0]+'</p></div> ';
        $(".info").append(channelRow); 
       }
       else{

        let channelRow =' <div class="user offline"><a href ="' + getJson.url + ' "target="_blank"><img src="'+channels[channel][2]+'" class="user-image" ><h3 class="user-name">'+ channels[channel][1]+'</h3></a><p class="user-article">'+ channels[channel][0]+'</p></div> ';
        $(".info").append(channelRow);
       }
      }else{
        let channelRow =' <div class="user notfound"><img src="'+'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwURbYTq6fKcKunSEWZ473p3K490degzoQUBuZzI9Dyuv4ls7L'+'" class="user-image" ><h3 class="user-name"> Not found</h3><p class="user-article">___oLo___</p></div> ';
        $(".info").append(channelRow); 
      }
    });
  });

  
    
  $('.choice-1').on('click',function(){
        $("div.offline,div.notfound,div.online").show();
        
    });
  $('.choice-2').on('click',function(){
        $("div.online").hide();      
        $("div.offline,div.notfound").show();
    });
  $('.choice-3').on('click',function(){
        $("div.offline,div.notfound").hide();   
        $("div.online").show();   
    }); 


});






