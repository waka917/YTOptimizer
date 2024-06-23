var btn_json = {
    "next_btn": false,
    "mute_btn": false,
    "play_btn": true,
    "subtitles_btn": false,
    "settings_btn": false,
    "size_btn": false,
    "remote_btn": false,
    "fullscreen_btn": false
}

// storage.syncの場合
//chrome.storage.sync.clear();
// storage.localの場合
//chrome.storage.local.clear();

function next_btn() {
    //bool値反転
    btn_json.next_btn = !btn_json.next_btn;

    //content.jsにデータ送信
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id,
            JSON.stringify(btn_json),
            function (response) {
            });
    });

    //データ保存
    chrome.storage.local.set({btn_disable: btn_json}, function() {
        console.log("save data");
        console.log(btn_json);
    });
}

function mute_btn() {
    //bool値反転
    btn_json.mute_btn = !btn_json.mute_btn;

    //content.jsにデータ送信
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id,
            JSON.stringify(btn_json),
            function (response) {
            });
    });

    //データ保存
    chrome.storage.local.set({btn_disable: btn_json}, function() {
        console.log("save data");
        console.log(btn_json);
    });
}

function play_btn() {
    //bool値反転
    btn_json.play_btn = !btn_json.play_btn;

    //content.jsにデータ送信
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id,
            JSON.stringify(btn_json),
            function (response) {
            });
    });

    //データ保存
    chrome.storage.local.set({btn_disable: btn_json}, function() {
        console.log("save data");
        console.log(btn_json);
    });
}

function subtitles_btn() {
    //bool値反転
    btn_json.subtitles_btn = !btn_json.subtitles_btn;

    //content.jsにデータ送信
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id,
            JSON.stringify(btn_json),
            function (response) {
            });
    });

    //データ保存
    chrome.storage.local.set({btn_disable: btn_json}, function() {
        console.log("save data");
        console.log(btn_json);
    });
}

function settings_btn() {
    //bool値反転
    btn_json.settings_btn = !btn_json.settings_btn;

    //content.jsにデータ送信
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id,
            JSON.stringify(btn_json),
            function (response) {
            });
    });

    //データ保存
    chrome.storage.local.set({btn_disable: btn_json}, function() {
        console.log("save data");
        console.log(btn_json);
    });
}

function size_btn() {
    //bool値反転
    btn_json.size_btn = !btn_json.size_btn;

    //content.jsにデータ送信
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id,
            JSON.stringify(btn_json),
            function (response) {
            });
    });

    //データ保存
    chrome.storage.local.set({btn_disable: btn_json}, function() {
        console.log("save data");
        console.log(btn_json);
    });
}

function remote_btn() {
    //bool値反転
    btn_json.remote_btn = !btn_json.remote_btn;

    //content.jsにデータ送信
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id,
            JSON.stringify(btn_json),
            function (response) {
            });
    });

    //データ保存
    chrome.storage.local.set({btn_disable: btn_json}, function() {
        console.log("save data");
        console.log(btn_json);
    });
}

function fullscreen_btn() {
    //bool値反転
    btn_json.fullscreen_btn = !btn_json.fullscreen_btn;

    //content.jsにデータ送信
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id,
            JSON.stringify(btn_json),
            function (response) {
            });
    });

    //データ保存
    chrome.storage.local.set({btn_disable: btn_json}, function() {
        console.log("save data");
        console.log(btn_json);
    });
}

function log() {
    console.log("test_log");
    var test = chrome.extension.getBackgroundPage().test_value;
    //console.log(test);
    return;
}

//デバッグ
function debug01() {
    chrome.storage.local.clear();
}

document.getElementById('tgl_next').addEventListener('click', next_btn);
document.getElementById('tgl_mute').addEventListener('click', mute_btn);
document.getElementById('tgl_play').addEventListener('click', play_btn);
document.getElementById('tgl_subtitles').addEventListener('click', subtitles_btn);
document.getElementById('tgl_settings').addEventListener('click', settings_btn);
document.getElementById('tgl_size').addEventListener('click', size_btn);
document.getElementById('tgl_remote').addEventListener('click', remote_btn);
document.getElementById('tgl_fullscreen').addEventListener('click', fullscreen_btn);
//document.getElementById('tgl_debug01').addEventListener('click', debug01);


//document.getElementById('log').addEventListener('click', log);


chrome.storage.local.get('btn_disable', function(data) {
    console.log(data.btn_disable);
    // 5000msに実行されるコード
    setTimeout(() => {
        console.log(data.btn_disable);
        //データが空だった場合
        if(!data.btn_disable){
            chrome.storage.local.set({btn_disable: btn_json}, function() {
                console.log("save data");
                console.log(btn_json);
            });
        }else{
            btn_json = data.btn_disable;
            console.log(btn_json);
            tgl_sync();
        }
    }, 250);
});


//デバッグ
abc();
function abc(){
    chrome.storage.local.get('btn_disable', function(data) {
        setTimeout(() => {
            console.log("test2");
            console.log(data.btn_disable);
            abc();
        }, 3000);
    });
}



//トグル状態を設定内容に同期する
function tgl_sync(){
    if(btn_json.next_btn){
        btn_json.next_btn = !btn_json.next_btn
        document.getElementById('tgl_next').click();
    }

    if(btn_json.mute_btn){
        btn_json.mute_btn = !btn_json.mute_btn;
        document.getElementById('tgl_mute').click();
    }

    if(btn_json.play_btn){
        btn_json.play_btn = !btn_json.play_btn;
        document.getElementById('tgl_play').click();
    }

    if(btn_json.subtitles_btn){
        btn_json.subtitles_btn = !btn_json.subtitles_btn;
        document.getElementById('tgl_subtitles').click();
    }

    if(btn_json.settings_btn){
        btn_json.settings_btn = !btn_json.settings_btn;
        document.getElementById('tgl_settings').click();
    }

    if(btn_json.size_btn){
        btn_json.size_btn = !btn_json.size_btn;
        document.getElementById('tgl_size').click();
    }

    if(btn_json.remote_btn){
        btn_json.remote_btn = !btn_json.remote_btn;
        document.getElementById('tgl_remote').click();
    }

    if(btn_json.fullscreen_btn){
        btn_json.fullscreen_btn = !btn_json.fullscreen_btn;
        document.getElementById('tgl_fullscreen').click();
    }
}


//console.log(document.getElementById('tgl_next'));
//console.log("Toggle 1 is " + (document.getElementById('tgl_next').checked ? "On" : "Off"));
//document.getElementById('tgl_next').click();
