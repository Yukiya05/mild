$(document).ready(() => {
    window.setTimeout(() => {
        $("html,body").animate({ scrollTop: 1000 });
    }, 1000);

    //今日の日付データを変数hidukeに格納
    var hiduke = new Date();

    //年・月・日・曜日を取得する
    var year = hiduke.getFullYear();
    var month = hiduke.getMonth() + 1;
    var date = hiduke.getDate();
    var week = hiduke.getDay();
    var hour = hiduke.getHours();
    var min = hiduke.getMinutes();

    //時間の小数表示化
    hour = hour + (min / 60);

    let jigen;
    let seatNumber;
    let roomNumber;
    //時限自動入力ここから
    if ((hour > 8.0) && (hour < 10.5)) {
        //1時限
        jigen = encodeURI("1時限");
    } else if ((hour >= 10.5) && (hour < 12.16)) {
        //2時限
        jigen = encodeURI("2時限");
    } else if ((hour > 12.5) && (hour < 14.5)) {
        //3時限
        jigen = encodeURI("3時限");
    } else if ((hour >= 14.5) && (hour < 16.16)) {
        //4時限
        jigen = encodeURI("4時限");
    } else if ((hour >= 16.16) && (hour < 17.83)) {
        //5時限
        jigen = encodeURI("5時限");
    }
    //ここまで

    //曜日判断と座席番号自動入力ここから(3年後期仕様)
    if (week == 1 && (jigen == encodeURI("1時限"))) {
        //電子工学Ⅱ（西田）
        seatNumber = encodeURI("");
        roomNumber = encodeURI(1111);
    } else if (week == 1 && (jigen == encodeURI("2時限"))) {
        //電力伝送工学Ⅱ（住吉谷）
        seatNumber = encodeURI("");
        roomNumber = encodeURI(1111);
    } else if (week == 2 && (jigen == encodeURI("2時限"))) {
        //電気法規（西）
        seatNumber = encodeURI(60);
        roomNumber = encodeURI(1111);
    } else if (week == 2 && (jigen == encodeURI("3時限"))) {
        //電気材料Ⅱ（花井）
        seatNumber = encodeURI(54);
        roomNumber = encodeURI(1111);
    } else if (week == 3 && (jigen == encodeURI("1時限"))) {
        //ディジタル制御（松岡）
        seatNumber = encodeURI(57);
        roomNumber = encodeURI(1111);
    } else if (week == 4 && (jigen == encodeURI("1時限"))) {
        //発変電工学Ⅱ（篠原）
        seatNumber = encodeURI("");
        roomNumber = encodeURI(1111);
    } else if (week == 4 && (jigen == encodeURI("2時限"))) {
        //制御工学Ⅱ（松岡）
        seatNumber = encodeURI(68);
        roomNumber = encodeURI(1111);
    } else if (week == 5 && (jigen == encodeURI("1時限"))) {
        //パワエレⅡ（ネバ）
        seatNumber = encodeURI(118);
        roomNumber = encodeURI(1111);
    } else if (week == 5 && (jigen == encodeURI("2時限"))) {
        //インタミ（坂田）
        seatNumber = encodeURI("");
        roomNumber = encodeURI("文系センター棟" + 3 + "階PC教室D");
    } else if (week == 5 && (jigen == encodeURI("3時限"))) {
        //実験
        seatNumber = encodeURI("");
        roomNumber = encodeURI("");
    } else if (week == 5 && (jigen == encodeURI("4時限"))){
        //実験
        seatNumber = encodeURI("");
        roomNumber = encodeURI("");
    } else {
        //授業時間外
        seatNumber = encodeURI("");
        roomNumber = encodeURI("");
    }
    //ここまで

    let gakusekiNumber = encodeURI("TE200368");
    let day = encodeURI(year + "-" + zeroPadding(month, 2) + "-" + zeroPadding(date, 2));

    document.getElementById('iframe_id').contentWindow.location.replace("https://docs.google.com/forms/d/e/1FAIpQLSd7o-otLh7x33V5kporT-LFLIarosod8ztpD5xG_9jfFxvwKA/viewform?entry.507636156=" + seatNumber + "&entry.2084606003=" + roomNumber + "&entry.788982146=" + day + "&entry.1894648323=" + jigen + "&entry.981673260=" + gakusekiNumber);
});

//文字列を0で埋める関数
//numにオリジナルの数字を、lengthに桁数をいれてください。
function zeroPadding(num, length) {
    return ('0000000000' + num).slice(-length);
}