$(document).ready(function(){
	//
	// 手順3 関数アプリのURLへアクセス
	$.get( "https://kansuudayoooooo.azurewebsites.net/api/kaunta?code=rntuwEpnPsSG4l5hxdAi1jblxGRbskkxkDuZ86tFUS/MsafcV0gmqA==" ).done( function(value) {
		//
		// 手順９ 表示する
		$("#text").html(value);
	});
});
