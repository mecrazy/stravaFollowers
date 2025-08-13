javascript:(function(func){

var jqVer={"$":{"full":"","sep":[],"match":false},"jQuery":{"full":"","sep":[],"match":false}};
if(typeof($)!='undefined'){jqVer.$.full=$().jquery}
if(typeof(jQuery)!='undefined'){jqVer.jQuery.full=jQuery().jquery}
var tempMatch=jqVer.$.full.match(/^([0-9]+)\.([0-9]+)\.([0-9]+)$/);
if(tempMatch!=null){jqVer.$.match=true;jqVer.$.sep.push(Number(tempMatch[1]));jqVer.$.sep.push(Number(tempMatch[2]));jqVer.$.sep.push(Number(tempMatch[3]))}
tempMatch=jqVer.jQuery.full.match(/^([0-9]+)\.([0-9]+)\.([0-9]+)$/);
if(tempMatch!=null){jqVer.jQuery.match=true;jqVer.jQuery.sep.push(Number(tempMatch[1]));jqVer.jQuery.sep.push(Number(tempMatch[2]));jqVer.jQuery.sep.push(Number(tempMatch[3]))}

var newJQ=true;
if(jqVer.$.match||jqVer.jQuery.match){
	if(jqVer.$.match){
		if(jqVer.$.sep[0]>=2){
			if(jqVer.$.sep[1]>=1){
				newJQ=false;
				func($)
			}
		}
	}
	if(newJQ){
		if(jqVer.jQuery.match){
			if(jqVer.jQuery.sep[0]>=2){
				if(jqVer.jQuery.sep[1]>=1){
					newJQ=false;
					func(jQuery)
				}
			}
		}
	}
}
if(newJQ){
	var scr=document.createElement("script");scr.src="//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
	scr.onload=function(){func(jQuery.noConflict(true))};
	document.body.appendChild(scr)
}

})

(function($){

var style ='<style type="text/css" id="cutsom_style_xyz">';
style+='#pregress_xyz{display:none;background-color:#000000;color:#ffffff;opacity:0.4;position:fixed;top:0px;left:0px;right:0px;bottom:0px;height:100%;width:100%;z-index:99901}';
style+='#mylist_xyz{display:none;box-shadow:-3px 6px 5px;width:48%;height:80%;overflow-y:scroll;z-index:9999;position:fixed;top:10px;right:10px;background-color:#ffffff;}';
style+='.cell-xyz{margin:0px;padding:3px 5px;border-style:solid;border-color:#afafaf;border-width:1px 0px 0px 1px;}';
style+='.cell-xyz-blank{background-color:#eaeaea;}';
style+='.table-xyz{margin:0px;padding:0px;background-color:#ffffff;border-collapse:collapse;border-style:solid;border-color:#afafaf;border-width:0px 1px 1px 0px;width:100%;}';
style+='#blinking_outer_a_xyz{position:relative;width:100%;height:100%;margin:0px;padding:0px;}';
style+='#blinking_outer_b_xyz{position:absolute;top:0px;right:0px;bottom:0px;left:0px;display:block;width:70%;height:48px;margin:auto;}';
style+='.blinking_xyz{font-size:24px;text-align:center;display:block;width:100%;height:32px;line-height:32px;margin:0px auto;}';
style+='.blinking_xyz{-webkit-animation:blink 1.0s ease-in-out infinite alternate;-moz-animation:blink 1.0s ease-in-out infinite alternate;animation:blink 1.0s ease-in-out infinite alternate;}';
style+='#progressbar_outer_xyz{text-align:center;display:block;width:100%;height:18px;line-height:18px;margin:5px 0px 0px 0px;padding:0px;border-radius:6px;background-color:#ffffff;overflow:hidden;}';
style+='#progressbar_inner_a_xyz{text-align:center;display:block;height:14px;line-height:14px;margin:2px;padding:0px;border-radius:8px;background-color:transparent;overflow:hidden;}';
style+='#progressbar_inner_b_xyz{text-align:center;display:block;width:0%;height:14px;line-height:14px;margin:0px;padding:0px;border-radius:8px;background-color:#000000;overflow:visible;font-size:12px;}';
style+='@-webkit-keyframes blink{0% {opacity:0;}100% {opacity:1;}}';
style+='@-moz-keyframes blink{0% {opacity:0;}100% {opacity:1;}}';
style+='@keyframes blink{0% {opacity:0;}100% {opacity:1;}}';
style+='.btn_xyz{margin:3px 0px;display:inline-block;padding:1px 5px;border-style:solid;border-width:1px;border-radius:4px;box-shadow:inset 0 1px 0 rgba(255,255,255,0.2);text-shadow:0 1px 0 rgba(0,0,0,0.2);}';
style+='#btn_toggle_link_xyz{color:#ffffff;background:#03A9F4;border-color:#0f9ada;}';
style+='.table-body-xyz a{text-decoration:underline;}';
style+='#btn_toggle_match_xyz,#btn_download_xyz{color:#454545;background:#eaeaea;border-color:#9c9c9c;}';
style+='#btn_close_xyz{color:#ffffff;background:#fd9535;border-color:#da6202;}';
style+='</style>';

var lang=detectLang();
var strings={
	"en":{
		"starting":"Starting ....",
		"analyzingFollowing":"Counting followings",
		"analyzingFollowers":"Counting followers",
		"following":"following",
		"followers":"followers",
		"btnToggleLink":"TOGGLE LINK",
		"btnShowUnmatch":"SHOW UNMATCHED",
		"btnShowAll":"SHOW ALL",
		"btnDownloadCsv":"DOWNLOAD CSV",
		"btnClose":"CLOSE"
	},
	"ja":{
		"starting":"処理開始中 ....",
		"analyzingFollowing":"あなたがフォローするユーザをカウント中",
		"analyzingFollowers":"あなたをフォローするユーザをカウント中",
		"following":"あなたがフォロー",
		"followers":"あなたをフォロー",
		"btnToggleLink":"リンクON/OFF",
		"btnShowUnmatch":"不一致のみ表示",
		"btnShowAll":"全員表示",
		"btnDownloadCsv":"CSVをダウンロード",
		"btnClose":"閉じる"
	},
	"ru":{
		"starting":"начало ....",
		"analyzingFollowing":"Подсчет голосов",
		"analyzingFollowers":"Подсчет подписчиков",
		"following":"следующих",
		"followers":"последователей",
		"btnToggleLink":"Вкл выкл связи",
		"btnShowUnmatch":"ПОКАЖИТЕ НЕОПРЕДЕЛЕННЫЙ",
		"btnShowAll":"ПОКАЗАТЬ ВСЕ",
		"btnDownloadCsv":"СКАЧАТЬ CSV",
		"btnClose":"ЗАКРЫТЬ"
	},
	"zh":{
		"starting":"开始 ....",
		"analyzingFollowing":"计数如下",
		"analyzingFollowers":"计数粉丝",
		"following":"如下",
		"followers":"追随者",
		"btnToggleLink":"链接开关",
		"btnShowUnmatch":"显示不匹配的",
		"btnShowAll":"显示所有",
		"btnDownloadCsv":"下载CSV",
		"btnClose":"关"
	},
};

if($('#cutsom_style_xyz').length>0){$('#cutsom_style_xyz').remove()}
$('head').append(style);

var io={"dashboard":"https://www.strava.com/dashboard","user":"","base":"","followers":[],"followersId":[],"following":[],"followingId":[]};

var bg=$('<div>').attr('id','pregress_xyz').append(
	$('<div>').attr('id','blinking_outer_a_xyz').append(
		$('<div>').attr('id','blinking_outer_b_xyz').append(
			$('<div>').attr('id','blinking_text_xyz').addClass('blinking_xyz').text(strings[lang].starting)
		).append(
			$('<div>').attr('id','progressbar_outer_xyz').append(
				$('<div>').attr('id','progressbar_inner_a_xyz').append(
					$('<div>').attr('id','progressbar_inner_b_xyz').css("width","0%").text('0%')
				)
			)
		)
	)
);

$('#mylist_xyz').remove();
$.when($('body').append(bg)).done(function(){
	$.when($('#pregress_xyz').fadeIn()).done(function(){
		start()
	})
});

if($('body').attr('data-event-xyz')!='on'){

	$('body').attr('data-event-xyz','on');

	$(document).on('click','#btn_toggle_link_xyz',function(){
		var tdArr=$('.table-body-xyz').find('td');
		var action='';
		if(tdArr.find('a').length>0){
			action='disable'
		}else{
			action='enable'
		}
		if(action=='enable'){
			tdArr.each(function(){
				var athleteName=$(this).text();
				var athleteId=$(this).attr('data-id');
				if((athleteName!='')&&(athleteId!='')){
					$(this).html(
						$('<a>').attr({'target':'_blank','href':'https://www.strava.com/athletes/'+athleteId}).text(athleteName)
					)
				}
			})
		}else if(action=='disable'){
			tdArr.each(function(){
				var athleteName=$(this).text();
				var athleteId=$(this).attr('data-id');
				if((athleteName!='')&&(athleteId!='')){
					$(this).text(athleteName)
				}
			})
		}
	});

	$(document).on('click','#btn_close_xyz',function(){
		$('#mylist_xyz').fadeOut(function(){
			$(this).remove();
			$('#cutsom_style_xyz').remove()
		})
	});

	$(document).on('click','#btn_toggle_match_xyz',function(){
		var mode=$(this).attr('data-mode');
		if(mode=='all'){
			$(this).attr('data-mode','unmatch').text(strings[lang].btnShowAll);
			$('.match-xyz').hide()
		}else if(mode=='unmatch'){
			$(this).attr('data-mode','all').text(strings[lang].btnShowUnmatch);
			$('.match-xyz').show()
		}
	});

	$(document).on('click','#btn_download_xyz',function(){
		var lineArr={"following":[],"followers":[],"id":[]};
		$('.table-xyz tbody').find('tr').each(function(){
			var status=$(this).css('display');
			if(status!='none'){
				var rowData={"following":$(this).find('td').eq(0).text(),"followers":$(this).find('td').eq(1).text(),"id":""};
				rowData.following=rowData.following.replace('"','""');
				rowData.followers=rowData.followers.replace('"','""');
				if($(this).find('td').eq(0).attr("data-id")){rowData.id=$(this).find('td').eq(0).attr("data-id")}
				if($(this).find('td').eq(1).attr("data-id")){rowData.id=$(this).find('td').eq(1).attr("data-id")}
				lineArr.following.push(rowData.following);
				lineArr.followers.push(rowData.followers);
				lineArr.id.push(rowData.id)
			}
		}).eq(0).each(function(){
			var dmt=",";
			var crlf="\r\n";
			var csv=dmt+'"following"'+dmt+'"followers"'+dmt+'"link"';
			for(var i=0;i<lineArr.following.length;i++){
				var rowNum=i+1;
				csv+=crlf+rowNum+dmt+'"'+lineArr.following[i]+'"'+dmt+'"'+lineArr.followers[i]+'"'+dmt+'https://www.strava.com/athletes/'+lineArr.id[i]
			}
			console.log(csv);
			var link=document.createElement('a');
			link.href=window.URL.createObjectURL(new Blob([csv]));
			var filename=dateFormat.format(new Date(),'yyyyMMddhhmmss');
			filename='strava_follers_'+filename+'.csv';
			link.download=filename;
			link.click()
		})
	})

}

function start(){
	$.ajax({url:io.dashboard,dataType:'html'}).done(function(data){
		var props=JSON.parse($(data).find('div.dashboard-mfe').eq(0).attr('data-react-props'));
		var myId = props.appContext.feedProps.currentAthleteId;
		var countObj = {
			"following":{
				"count":props.appContext.followingCount,
				"href":'https://www.strava.com/athletes/' + myId + '/follows?type=following',
				"list":[],
				"page":0,
				"complete":false
			},
			"followers":{
				"count":props.appContext.followersCount,
				"href":'https://www.strava.com/athletes/' + myId + '/follows?type=followers',
				"list":[],
				"page":0,
				"complete":false
			}
		};
		getList(countObj);
	}).fail(function(jqXHR,textStatus,errorThrown){
		console.log(jqXHR,textStatus,errorThrown);
		alert('Failed to get data from "'+io.dashboard+'".')
	})
}

function getList(DYNAMIC){
		if(!DYNAMIC.following.complete){
			DYNAMIC.following.page++;
			$.ajax({url:DYNAMIC.following.href + '&page=' + DYNAMIC.following.page,dataType:'json'}).fail(function(){
				console.log('error')
			}).done(function(data){
				if(data.follows.length > 0){
					DYNAMIC.following.list = DYNAMIC.following.list.concat(data.follows);
				}else{
					DYNAMIC.following.complete = true;
				}
				var percentile = Math.floor(100 * (DYNAMIC.following.list.length/DYNAMIC.following.count));
				$('#blinking_text_xyz').text(strings[lang].analyzingFollowing);
				$('#progressbar_inner_b_xyz').text(percentile+'%').stop(true,true).animate({'width':percentile+'%'});
				getList(DYNAMIC);
			})
		}else if(!DYNAMIC.followers.complete){
			DYNAMIC.followers.page++;
			$.ajax({url:DYNAMIC.followers.href + '&page=' + DYNAMIC.followers.page,dataType:'json'}).fail(function(){
				console.log('error')
			}).done(function(data){
				if(data.follows.length > 0){
					DYNAMIC.followers.list = DYNAMIC.followers.list.concat(data.follows);
				}else{
					DYNAMIC.followers.complete = true;
				}
				var percentile = Math.floor(100 * (DYNAMIC.followers.list.length/DYNAMIC.followers.count));
				$('#blinking_text_xyz').text(strings[lang].analyzingFollowers);
				$('#progressbar_inner_b_xyz').text(percentile+'%').stop(true,true).animate({'width':percentile+'%'});
				getList(DYNAMIC);
			})
		}else{
			dynamicToIO(DYNAMIC);
		}

}

function dynamicToIO(DYNAMIC){
	DYNAMIC.following.list.sort(function(a, b){
		return a[0].follow_status.localeCompare(b[0].follow_status);
	});
	DYNAMIC.followers.list.sort(function(a, b){
		return a[0].follow_status.localeCompare(b[0].follow_status);
	});
	DYNAMIC.mergeId = [];
	DYNAMIC.followingId = [];
	DYNAMIC.followersId = [];

	for(var i=0;i<DYNAMIC.following.list.length;i++){
		if(DYNAMIC.following.list[i][0].follow_status === 'accepted'){
			DYNAMIC.mergeId.push(DYNAMIC.following.list[i][0].followee_id);
			DYNAMIC.followingId.push(DYNAMIC.following.list[i][0].followee_id);
		}
	}

	for(var i=0;i<DYNAMIC.followers.list.length;i++){
		if(DYNAMIC.followers.list[i][0].follow_status === 'accepted'){
			DYNAMIC.mergeId.push(DYNAMIC.followers.list[i][0].follower_id);
			DYNAMIC.followersId.push(DYNAMIC.followers.list[i][0].follower_id);
		}
	}
	DYNAMIC.mergeId = Array.from(new Set(DYNAMIC.mergeId));
	console.log(DYNAMIC);
	complete(DYNAMIC);
}

function complete(io){
	$('#pregress_xyz').fadeOut().remove();
	var tableSrc=generateTable(io);
	$('body').append($('<div>').attr({'id':'mylist_xyz'}).append(tableSrc)).eq(0).each(function(){$('#mylist_xyz').fadeIn()})
}

function generateTable(io){
	var table='<table class="table-xyz">';
	table+='<thead>';
	table+='<tr><th class="cell-xyz" colspan="2" style="text-align:center;background-color:#b0e0e6;">';
	table+='<button class="btn_xyz" id="btn_toggle_link_xyz">'+strings[lang].btnToggleLink+'</button>&nbsp;';
	table+='<button class="btn_xyz" id="btn_toggle_match_xyz" data-mode="all">'+strings[lang].btnShowUnmatch+'</button>&nbsp;';
	table+='<button class="btn_xyz" id="btn_download_xyz">'+strings[lang].btnDownloadCsv+'</button>&nbsp;';
	table+='<button class="btn_xyz" id="btn_close_xyz">'+strings[lang].btnClose+'</button>';
	table+='</th></tr>';
	table+='<tr><th class="cell-xyz" style="text-align:center;background-color:#b0e0e6;">'+strings[lang].following+'</th><th class="cell-xyz" style="text-align:center;background-color:#b0e0e6;">'+strings[lang].followers+'</th></tr>';
	table+='</thead>';
	table+='<tbody class="table-body-xyz">';
	for(var i=0;i<io.mergeId.length;i++){
		var posFollowing = $.inArray(io.mergeId[i],io.followingId);
		var posFollowers = $.inArray(io.mergeId[i],io.followersId);
		if((posFollowing>=0)&&(posFollowers>=0)){
			var nameFollowing=io.following.list[posFollowing][1].athlete.firstname + ' ' + io.following.list[posFollowing][1].athlete.lastname;
			var nameFollowers=io.followers.list[posFollowers][1].athlete.firstname + ' ' + io.followers.list[posFollowers][1].athlete.lastname;
			var idFollowing=io.followingId[posFollowing];
			var idFollowers=io.followersId[posFollowers];
			table+='<tr class="match-xyz"><td class="cell-xyz" data-id="'+idFollowing+'">'+nameFollowing+'</td><td class="cell-xyz" data-id="'+idFollowers+'">'+nameFollowers+'</td></tr>';			
		}else if((posFollowing>=0)&&(posFollowers<0)){
			var nameFollowing=io.following.list[posFollowing][1].athlete.firstname + ' ' + io.following.list[posFollowing][1].athlete.lastname;
			var idFollowing=io.followingId[posFollowing];
			table+='<tr class="unmatch-xyz"><td class="cell-xyz" data-id="'+idFollowing+'">'+nameFollowing+'</td><td class="cell-xyz cell-xyz-blank"></td></tr>';
		}else if((posFollowing<0)&&(posFollowers>=0)){
			var nameFollowers=io.followers.list[posFollowers][1].athlete.firstname + ' ' + io.followers.list[posFollowers][1].athlete.lastname;
			var idFollowers=io.followersId[posFollowers];
			table+='<tr class="unmatch-xyz"><td class="cell-xyz cell-xyz-blank"></td><td class="cell-xyz" data-id="'+idFollowers+'">'+nameFollowers+'</td></tr>';
		}
	}
	table+='</tbody></table>';
	return table
}

function detectLang(){
	var lang=(window.navigator.languages&&window.navigator.languages[0])||
		window.navigator.language||
		window.navigator.userLanguage||
		window.navigator.browserLanguage;
	if(lang.match(/^ja(\-[a-zA-Z]+)?/i)){
		lang='ja'
	}else if(lang.match(/^ru(\-[a-zA-Z]+)?/i)){
		lang='ru'
	}else if(lang.match(/^zh(\-[a-zA-Z]+)?/i)){
		lang='zh'
	}else{
		lang='en'
	}
	return lang
}

var dateFormat={
	_fmt:{
		hh:function(date){return ('0'+date.getHours()).slice(-2)},
		h:function(date){return date.getHours()},
		mm:function(date){return ('0'+date.getMinutes()).slice(-2)},
		m:function(date){return date.getMinutes()},
		ss:function(date){return ('0'+date.getSeconds()).slice(-2)},
		dd:function(date){return ('0'+date.getDate()).slice(-2)},
		d:function(date){return date.getDate()},
		s:function(date){return date.getSeconds()},
		yyyy:function(date){return date.getFullYear()+''},
		yy:function(date){return date.getYear()+''},
		t:function(date){return date.getDate()<=3 ? ["st", "nd", "rd"][date.getDate()-1]:'th'},
		w:function(date){return ["Sun","$on","Tue","Wed","Thu","Fri","Sat"][date.getDay()]},
		MMMM:function(date){return ["January","February","$arch","April","$ay","June","July","August","September","October","November","December"][date.getMonth()]},
		MMM:function(date){return ["Jan","Feb","$ar","Apr","$ay","Jun","Jly","Aug","Spt","Oct","Nov","Dec"][date.getMonth()]},
		MM:function(date){return ('0'+(date.getMonth()+1)).slice(-2)},
		M:function(date){return date.getMonth()+1},
		$:function(date){return 'M'}
	},_priority:["hh","h","mm","m","ss","dd","d","s","yyyy","yy","t","w","MMMM","MMM","MM","M","$"],
	format:function(date,format){return this._priority.reduce((res,fmt)=>res.replace(fmt,this._fmt[fmt](date)),format)}
}

});