console.log("START");

let disable = false;

// ブラウザのUserAgentを取得
const userAgent = navigator.userAgent.toLowerCase();
console.log("UserAgent:", userAgent);
if (userAgent.includes("macintosh")) {
    // デスクトップ時の表示
    console.log("This is an Macintosh");

    /*
    setInterval(function() {
        // ここに毎秒実行したい処理を書く
        console.log('This message is logged every second!');
        main();
    }, 10000);
    */

    /*
    // id追加
    window.onload = function() {
        console.log("START2");
        const target = document.getElementById('player-full-bleed-container');
    console.log(target);
    };
    */

    
    //let fullscreenbtn = document.querySelector('.ytp-fullscreen-button');
    //fullscreenbtn.id = "ytp-fullscreen-buttonid";

    //#region 監視
    const target = document.body;

    // オブザーバーの作成
    const observer = new MutationObserver(records => {
        console.log('オブサーバ');
        main2();
        //ablesvg2();
        //change_disablesvg2();
    });
    // 監視オプションの作成
    const options = {
        attributes: true,
        characterData: true,
        subtree: true
    };
    // 監視の開始
    observer.observe(target, options);
    

    //main();
    //disable_btn();

} else {
    // モバイル表示時の処理
    console.log("This is not an Macintosh");

    setTimeout(() => {
        // 5秒後に実行されるコード
        console.log("5 seconds have passed!");
        let togglebtncontainer = document.getElementsByClassName('ytm-autonav-toggle-button-container');
        console.log(togglebtncontainer.length);
        for(let i = 0; i < togglebtncontainer.length; i++){
            togglebtncontainer[i].style.width = togglebtncontainer[i].offsetWidth * 1.2 + "px";
            togglebtncontainer[i].style.height = togglebtncontainer[i].offsetHeight * 1.2 + "px";
        }

        let ClosedCaptioningButtonHost = document.getElementsByClassName('YtmClosedCaptioningButtonHost');
        console.log(ClosedCaptioningButtonHost.length);
        for(let i = 0; i < ClosedCaptioningButtonHost.length; i++){
            ClosedCaptioningButtonHost[i].style.width = ClosedCaptioningButtonHost[i].offsetWidth * 1.2 + "px";
            ClosedCaptioningButtonHost[i].style.height = ClosedCaptioningButtonHost[i].offsetHeight * 1.2 + "px";
        }

        let playersettingsicon = document.getElementsByClassName('icon-button player-settings-icon');
        console.log(playersettingsicon.length);
        for(let i = 0; i < playersettingsicon.length; i++){
            playersettingsicon[i].style.width =  playersettingsicon[i].offsetWidth * 1.2 + "px";
            playersettingsicon[i].style.height = playersettingsicon[i].offsetHeight * 1.2 + "px";
        }

        let fullscreenicon = document.getElementsByClassName('icon-button fullscreen-icon');
        console.log(fullscreenicon.length);
        for(let i = 0; i < fullscreenicon.length; i++){
            fullscreenicon[i].style.width =  fullscreenicon[i].offsetWidth * 1.2 + "px";
            fullscreenicon[i].style.height = fullscreenicon[i].offsetHeight * 1.2 + "px";
        }
    }, 5000);
    
}


function main2(){
    var title = document.title;
    console.log(title);
    if (title != "YouTube"){
        main();
    }
}


function main(){
console.log("TEST1");

//ピンチ無効
document.addEventListener("touchmove", (e3) => {
    if (e3.touches.length > 1) {
      e3.preventDefault();
    }
  }, { passive: false });

// 画面ロック機能
let miniPlayerButton = document.querySelector('.ytp-miniplayer-button');
console.log(miniPlayerButton);
let disablebtn = miniPlayerButton.cloneNode(true);
let subtitlesbutton = document.querySelector('.ytp-subtitles-button');
miniPlayerButton.remove();
disablebtn.classList.remove('ytp-miniplayer-button'); // 古いクラス名を削除します
disablebtn.classList.add('ytp-disable-button'); // 新しいクラス名を追加します
disablebtn.addEventListener('click', change_disable, false);
document.querySelector('.ytp-right-controls').insertBefore(disablebtn, subtitlesbutton);
disablebtn.setAttribute('title', '操作無効（i）');
disablebtn.setAttribute('data-title-no-tooltip', '操作無効');
disablebtn.setAttribute('aria-label', '操作無効（i）');

//disablebtn.children.remove();
for(let i = 0; i < disablebtn.children.length; i++){
    disablebtn.children[i].remove();
}

//let subtitlesbutton2 = document.querySelector('.ytp-subtitles-button');

// HTMLコードを定義します
let htmlCode = '<svg height="100%" width="100%" version="1.1" viewBox="0 0 36 36"><use class="ytp-svg-shadow" xlink:href="#ytp-id-111"></use><path height="79%" width="79%" d="M14.7133 10.5089C14.7133 10.369 14.6667 10.2525 14.5734 10.136C14.1073 9.53007 13.8743 8.76099 13.9442 7.89871C14.084 6.4771 15.226 5.33515 16.6476 5.14871C18.5586 4.91566 20.19 6.38387 20.19 8.24828C20.19 8.94744 19.9569 9.59999 19.5607 10.136C19.4908 10.2292 19.4209 10.369 19.4209 10.5089C19.4209 11.0682 20.12 11.3013 20.4696 10.8585C21.0289 10.136 21.3319 9.25041 21.3319 8.2716C21.3319 5.75465 19.1412 3.7271 16.5544 4.03007C14.5734 4.26312 13.012 5.87117 12.8022 7.82879C12.6857 8.97074 13.0353 10.0428 13.6645 10.8585C14.0141 11.3013 14.7133 11.0449 14.7133 10.5089Z M24.6412 14.4474C24.1518 14.3775 23.6857 14.5873 23.3828 14.9136C23.2196 14.2843 22.6603 13.8182 21.9845 13.8182C21.5417 13.8182 21.1455 14.028 20.8891 14.3309C20.7027 13.7483 20.1667 13.3288 19.5141 13.3288C19.1179 13.3288 18.7684 13.4919 18.4887 13.7483V8.2949C18.4887 7.57244 17.976 6.91989 17.2535 6.80337C16.3679 6.68684 15.6222 7.386 15.6222 8.22499V17.9199C15.6222 18.1063 15.3658 18.1996 15.2726 18.0364L13.5946 15.4962C13.1984 14.9136 12.3362 14.7737 11.6836 15.2165C11.0311 15.6593 10.798 16.4983 11.1942 17.0809C11.1942 17.0809 15.8785 24.1657 15.9018 24.189C16.7408 25.3775 18.1158 26.1 19.6306 26.1H21.3086C23.8023 26.1 25.8764 24.0957 25.8997 21.6021C25.8997 21.5788 25.8997 21.5322 25.8997 21.5089V15.939C25.8764 15.2165 25.3637 14.5407 24.6412 14.4474Z" fill="#fff" id="ytp-id-111"></path></svg>';

// HTMLコードを親要素に追加します
disablebtn.innerHTML += htmlCode;



let ytpchromecontrols = document.getElementsByClassName('ytp-chrome-controls');

let ytpchromebottom = document.getElementsByClassName('ytp-chrome-bottom');
console.log(ytpchromecontrols);
console.log(ytpchromecontrols[0].offsetHeight);
ytpchromebottom[0].style.bottom = ytpchromecontrols[0].offsetHeight / 2 + 16 + "px";

for(let i = 0; i < ytpchromecontrols.length; i++){
    //ytpchromecontrols[i].style.marginTop = ytpchromecontrols[i].offsetHeight / 2 + "px";
    ytpchromecontrols[i].style.marginTop = 21 + "px";
    ytpchromecontrols[i].style.justifyContent = "space-between";
}

/* 自動再生が消えるバグの解消
let ctrl_r = document.getElementsByClassName('ytp-right-controls');
for(let i = 0; i < ctrl_r.length; i++){
    ctrl_r[i].style.width = 700 + "px";
}
*/

let ytpbtn = document.getElementsByClassName('ytp-button');
for(let i = 0; i < ytpbtn.length; i++){
    ytpbtn[i].style.marginLeft = 5 + "px";
    ytpbtn[i].style.marginRight = 5 + "px";
    ytpbtn[i].style.width = ytpbtn[i].offsetWidth * 1.2 + "px";
    ytpbtn[i].style.height = ytpbtn[i].offsetHeight * 1.2 + "px";
}

let ytpcontrols_l = document.getElementsByClassName('ytp-left-controls');
for(let i = 0; i < ytpcontrols_l.length; i++){
    ytpcontrols_l[i].style.height = ytpcontrols_l[i].offsetHeight * 1.4 + "px";
    ytpcontrols_l[i].style.flex = " ";
    ytpcontrols_l[i].style.width = "350px";
}

let ytpcontrols_ls = document.querySelectorAll('.ytp-exp-bottom-control-flexbox .ytp-left-controls');
for(let i = 0; i < ytpcontrols_ls.length; i++){
    //ytpcontrols_ls[i].style.webkitFlex = "";
    ytpcontrols_ls[i].style.flex = "unset";
    console.log("Test");
}

let ytpmutebtn = document.getElementsByClassName('ytp-mute-button');
let ytpvolumepanel = document.getElementsByClassName('ytp-volume-panel');
for(let i = 0; i < ytpvolumepanel.length; i++){
    //ytpvolumepanel[i].style.width = 80 + "px";
    ytpvolumepanel[i].style.marginLeft = 4 + "px";
    ytpvolumepanel[i].style.marginRight = 8 + "px";
    ytpvolumepanel[i].style.height = ytpmutebtn[i].offsetHeight + "px";
}

let ytpfinescrubbingplay = document.getElementsByClassName('ytp-fine-scrubbing-play');
for(let i = 0; i < ytpfinescrubbingplay.length; i++){
    ytpfinescrubbingplay[i].style.width = 68 + "px";
    ytpfinescrubbingplay[i].style.height = 68 + "px";
    ytpfinescrubbingplay[i].style.bottom = 200 + "px";
    ytpfinescrubbingplay[i].style.right = 710 + "px";
}

let ytpfinescrubbingdismiss = document.getElementsByClassName('ytp-fine-scrubbing-dismiss');
for(let i = 0; i < ytpfinescrubbingdismiss.length; i++){
    ytpfinescrubbingdismiss[i].style.width = 50 + "px";
    ytpfinescrubbingdismiss[i].style.height = 50 + "px";
    ytpfinescrubbingdismiss[i].style.bottom = 209 + "px";
    ytpfinescrubbingdismiss[i].style.left = 710 + "px";
}

let ytptimedisplay = document.getElementsByClassName('ytp-time-display');
for(let i = 0; i < ytptimedisplay.length; i++){
    ytptimedisplay[i].style.padding = 0 + "px";
    //ytptimedisplay[i].style.marginLeft = 5 + "px";
    //ytptimedisplay[i].style.marginRight = 5 + "px";
    //ytptimedisplay[i].style.width = ytptimedisplay[i].offsetWidth * 1.4 + "px";
    //ytptimedisplay[i].style.height = ytptimedisplay[i].offsetHeight * 1.4 + "px";
    ytptimedisplay[i].style.fontSize = 110 + "%";
    ytptimedisplay[i].style.lineHeight = ytpmutebtn[i].offsetHeight + "px";
}

/* 再生ボタンを複製
let clone = document.querySelector('.ytp-left-controls').cloneNode(true);
document.querySelector('.ytp-chrome-controls').appendChild(clone);
*/

//再生ボタンをバー中央に移動
let ytpplaybtn = document.getElementsByClassName('ytp-play-button');
for(let i = 0; i < ytpplaybtn.length; i++){
    console.log("TEST7");
    var chromectrl = document.getElementsByClassName('ytp-chrome-controls');
    ytpplaybtn[i].options = 'absolute';
    ytpplaybtn[i].style.right = (chromectrl.offsetWidth - ((ytpplaybtn[i].marginLeft + ytpplaybtn[i].style.paddingLeft)*2 + ytpplaybtn[i].offsetWidth)) / 2 + "px";
    console.log((chromectrl.offsetWidth - ((ytpplaybtn[i].marginLeft + ytpplaybtn[i].style.paddingLeft)*2 + ytpplaybtn[i].offsetWidth)) / 2);

    //ytpplaybtn[i].style.flex = "1";
    const element5 = document.querySelector(".ytp-chrome-controls");
    const children = element5.children[1];
    console.log(children);
    element5.insertBefore(ytpplaybtn[0], element5.children[1]);
}

let annotation = document.querySelector('.annotation-type-custom');
annotation.remove();
//disablesvg();

}

function change_disable(){
    if(disable){
        able_color();
        able_btn();
        disable = false;
    }else{
        disable_color();
        disable_btn();
        disable = true;
    }
}

function disable_color(){
    console.log("TEST7");

    var nextbtn_href = document.querySelector('.ytp-next-button').children[0].children[0].getAttribute('href').substring(1);
    let nextbtn = document.querySelector('.ytp-next-button').children[0].getElementById(nextbtn_href);
    nextbtn.style.fill = '#7e7e7e';

    var subtitlesbtn_href = document.querySelector('.ytp-subtitles-button').children[0].children[0].getAttribute('href').substring(1);
    let subtitlesbtn = document.querySelector('.ytp-subtitles-button').children[0].getElementById(subtitlesbtn_href);
    subtitlesbtn.style.fill = '#7e7e7e';

    //var settingbtn_href = document.querySelector('.ytp-settings-button').children[0].children[0].getAttribute('href').substring(1);
    //let settingbtn = document.querySelector('.ytp-settings-button').children[0].getElementById(settingbtn_href);
    //settingbtn.style.fill = '#7e7e7e';

    //var miniplayerbtn_href = document.querySelector('.ytp-miniplayer-button').children[0].children[0].getAttribute('href').substring(1);
    //let miniplayerbtn = document.querySelector('.ytp-miniplayer-button').children[0].getElementById(miniplayerbtn_href);
    //miniplayerbtn.style.fill = '#7e7e7e';

    var sizebtn_href = document.querySelector('.ytp-size-button').children[0].children[0].getAttribute('href').substring(1);
    let sizebtn = document.querySelector('.ytp-size-button').children[0].getElementById(sizebtn_href);
    sizebtn.style.fill = '#7e7e7e';

    var remotebtn_href = document.querySelector('.ytp-remote-button').children[0].children[0].getAttribute('href').substring(1);
    let remotebtn = document.querySelector('.ytp-remote-button').children[0].getElementById(remotebtn_href);
    console.log(document.querySelector('.ytp-remote-button').children[0]);
    remotebtn.style.fill = '#7e7e7e';

    let fullscreenbtn = document.querySelector('.ytp-fullscreen-button').children[0];
    for(let i = 0; i < fullscreenbtn.children.length; i++){
        var fullscreenbtn2_href = fullscreenbtn.children[i].children[0].getAttribute('href').substring(1);
        let fullscreenbtn2 = fullscreenbtn.children[i].children[1];
        fullscreenbtn2.style.fill = '#7e7e7e';
    }
}

function able_color(){
    console.log("TEST7");

    var nextbtn_href = document.querySelector('.ytp-next-button').children[0].children[0].getAttribute('href').substring(1);
    let nextbtn = document.querySelector('.ytp-next-button').children[0].getElementById(nextbtn_href);
    nextbtn.style.fill = '#fff';

    var subtitlesbtn_href = document.querySelector('.ytp-subtitles-button').children[0].children[0].getAttribute('href').substring(1);
    let subtitlesbtn = document.querySelector('.ytp-subtitles-button').children[0].getElementById(subtitlesbtn_href);
    subtitlesbtn.style.fill = '#fff';

    //var settingbtn_href = document.querySelector('.ytp-settings-button').children[0].children[0].getAttribute('href').substring(1);
    //let settingbtn = document.querySelector('.ytp-settings-button').children[0].getElementById(settingbtn_href);
    //settingbtn.style.fill = '#fff';

    //var miniplayerbtn_href = document.querySelector('.ytp-miniplayer-button').children[0].children[0].getAttribute('href').substring(1);
    //let miniplayerbtn = document.querySelector('.ytp-miniplayer-button').children[0].getElementById(miniplayerbtn_href);
    //miniplayerbtn.style.fill = '#fff';

    var sizebtn_href = document.querySelector('.ytp-size-button').children[0].children[0].getAttribute('href').substring(1);
    let sizebtn = document.querySelector('.ytp-size-button').children[0].getElementById(sizebtn_href);
    sizebtn.style.fill = '#fff';

    var remotebtn_href = document.querySelector('.ytp-remote-button').children[0].children[0].getAttribute('href').substring(1);
    let remotebtn = document.querySelector('.ytp-remote-button').children[0].getElementById(remotebtn_href);
    console.log(document.querySelector('.ytp-remote-button').children[0]);
    remotebtn.style.fill = '#fff';

    let fullscreenbtn = document.querySelector('.ytp-fullscreen-button').children[0];
    for(let i = 0; i < fullscreenbtn.children.length; i++){
        var fullscreenbtn2_href = fullscreenbtn.children[i].children[0].getAttribute('href').substring(1);
        let fullscreenbtn2 = fullscreenbtn.children[i].children[1];
        fullscreenbtn2.style.fill = '#fff';
    }
}

function disable_btn(){
    console.log("test2");
    let progressbarcontainer = document.getElementsByClassName('ytp-progress-bar-container');
    for(let i = 0; i < progressbarcontainer.length; i++){
        progressbarcontainer[i].style.pointerEvents = "none";
    }

    /*
    let ytpvolumepanel = document.getElementsByClassName('ytp-volume-panel');
    for(let i = 0; i < ytpvolumepanel.length; i++){
        ytpvolumepanel[i].style.pointerEvents = "none";
    }
    */

    let ytpbtn = document.getElementsByClassName('ytp-button');
    for(let i = 0; i < ytpbtn.length; i++){
        ytpbtn[i].style.pointerEvents = "none";
    }

    let ytpplaybtn = document.getElementsByClassName('ytp-play-button ytp-button');
    for(let i = 0; i < ytpplaybtn.length; i++){
        ytpplaybtn[i].style.pointerEvents = "auto";
    }

    let disablebtn = document.getElementsByClassName('ytp-disable-button');
    for(let i = 0; i < disablebtn.length; i++){
        disablebtn[i].style.pointerEvents = "auto";
    }

    let ytpmutebtn = document.getElementsByClassName('ytp-mute-button ytp-button');
    for(let i = 0; i < ytpmutebtn.length; i++){
        ytpmutebtn[i].style.pointerEvents = "auto";
    }

    let ytpsettingbtn = document.getElementsByClassName('ytp-settings-button');
    for(let i = 0; i < ytpsettingbtn.length; i++){
        ytpsettingbtn[i].style.pointerEvents = "auto";
    }
}

function able_btn(){
    console.log("test3");
    let progressbarcontainer = document.getElementsByClassName('ytp-progress-bar-container');
    for(let i = 0; i < progressbarcontainer.length; i++){
        progressbarcontainer[i].style.pointerEvents = "auto";
    }

    let ytpvolumepanel = document.getElementsByClassName('ytp-volume-panel');
    for(let i = 0; i < ytpvolumepanel.length; i++){
        ytpvolumepanel[i].style.pointerEvents = "auto";
    }

    let ytpbtn = document.getElementsByClassName('ytp-button');
    for(let i = 0; i < ytpbtn.length; i++){
        ytpbtn[i].style.pointerEvents = "auto";
    }
}
