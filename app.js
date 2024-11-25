// 地図の初期化
var map = L.map('map').setView([35.6895, 139.6917], 13);

// タイルレイヤーの追加
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// カスタムアイコンの作成
var blueIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]
});
var Azure1 = L.icon({
    iconUrl: 'Icon/Icons-Land-Vista-Map-Markers-Map-Marker-Ball-Azure.256.png',
    iconSize: [41, 41],// アイコンのサイズを指定
    iconAnchor: [12, 41],// アイコンのアンカー位置を指定
    popupAnchor: [1, -34],// ポップアップのアンカー位置を指定
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]// 影のサイズを指定
});
var ChartreuseIcon1 = L.icon({
    iconUrl: 'Icon/Icons-Land-Vista-Map-Markers-Map-Marker-Ball-Chartreuse.256.png',
    iconSize: [41, 41],// アイコンのサイズを指定
    iconAnchor: [12, 41],// アイコンのアンカー位置を指定
    popupAnchor: [1, -34],// ポップアップのアンカー位置を指定
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]// 影のサイズを指定
});
var redIcon1 = L.icon({
    iconUrl: 'Icon/Icons-Land-Vista-Map-Markers-Map-Marker-Ball-Pink.256.png', // 赤いマーカーアイコンのURLを指定
    iconSize: [41, 41],// アイコンのサイズを指定
    iconAnchor: [12, 41],// アイコンのアンカー位置を指定
    popupAnchor: [1, -34],// ポップアップのアンカー位置を指定
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]// 影のサイズを指定
});
var Azure2 = L.icon({
    iconUrl: 'Icon/Icons-Land-Vista-Map-Markers-Map-Marker-Marker-Outside-Azure.256.png',
    iconSize: [41, 41],// アイコンのサイズを指定
    iconAnchor: [12, 41],// アイコンのアンカー位置を指定
    popupAnchor: [1, -34],// ポップアップのアンカー位置を指定
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]// 影のサイズを指定
});
var ChartreuseIcon2 = L.icon({
    iconUrl: 'Icon/Icons-Land-Vista-Map-Markers-Map-Marker-Marker-Outside-Chartreuse.256.png',
    iconSize: [41, 41],// アイコンのサイズを指定
    iconAnchor: [12, 41],// アイコンのアンカー位置を指定
    popupAnchor: [1, -34],// ポップアップのアンカー位置を指定
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]// 影のサイズを指定
});
var redIcon2 = L.icon({
    iconUrl: 'Icon/Icons-Land-Vista-Map-Markers-Map-Marker-Marker-Outside-Pink.256.png', // 赤いマーカーアイコンのURLを指定
    iconSize: [41, 41],// アイコンのサイズを指定
    iconAnchor: [12, 41],// アイコンのアンカー位置を指定
    popupAnchor: [1, -34],// ポップアップのアンカー位置を指定
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]// 影のサイズを指定
});

var AdministratorIcon = L.icon({
    iconUrl: 'Icon/Icons8-Windows-8-Users-Administrator.512.png',
    iconSize: [41, 41],// アイコンのサイズを指定
    iconAnchor: [12, 41],// アイコンのアンカー位置を指定
    popupAnchor: [1, -34],// ポップアップのアンカー位置を指定
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]// 影のサイズを指定
});

var fortificationsIcon = L.icon({
    iconUrl: 'Icon/fortificationsIcon.png',
    iconSize: [41, 41],// アイコンのサイズを指定
    iconAnchor: [12, 41],// アイコンのアンカー位置を指定
    popupAnchor: [1, -34],// ポップアップのアンカー位置を指定
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]// 影のサイズを指定
});

// 危険な場所のマーカーを追加
var dangerZones = [
    {lat: 35.9602, lng: 139.7891, name: "地点CCCACC", info: "ここは交通事故が多発する地点です"},
    {lat: 35.7957822, lng: 139.7728736, name: "121", info: "ここは急カーブがあり注意が必要です"},
    {lat: 35.685034, lng: 139.736093, name: "1111", info: "ここは見通しの悪い交差点です"},
    {lat: 35.7455452, lng: 139.8019847, name: "交通事故No.1"},
    {lat: 35.7720481, lng: 139.7859405, name: "交通事故No.2"},
    {lat: 35.7865950, lng: 139.7915313, name: "交通事故No.3"}
];

var suspiciousMarkers = [
    {lat: 35.9602, lng: 139.7891, name: "地点CCO", info: "黒いフードの男がパンチラインにクリティカルヒット"},
    {lat: 35.6895, lng: 139.6917, name: "不審者情報1"},
    {lat: 35.6995, lng: 139.7017, name: "不審者情報2"}
];

var agingMarkers = [
    {
        lat: 35.75,
        lng: 139.79444,
        name: "宮元町歩道橋",
        routeName: "吾妻橋伊興町線(都道461号線)",
        inspectionYear: 2020,
        score: "Ⅰ",
        treatmentStatus: "－"
    },
    {
        lat: 35.745,
        lng: 139.79639,
        name: "河原町歩道橋",
        routeName: "吾妻橋伊興町線(都道461号線)",
        inspectionYear: 2020,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    },
    {
        lat: 35.75496,
        lng: 139.80139,
        name: "千住大川町歩道橋",
        routeName: "国道4号",
        inspectionYear: 2019,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    },
    {
        lat: 35.75704,
        lng: 139.80187,
        name: "千住新橋（右岸下り）",
        routeName: "国道4号",
        inspectionYear: 2018,
        score: "Ⅲ",
        treatmentStatus: "措置着手済み"
    },
    {
        lat: 35.75682,
        lng: 139.80251,
        name: "千住新橋（右岸上り）",
        routeName: "国道4号",
        inspectionYear: 2020,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    },
    {
        lat: 35.7501,
        lng: 139.80429,
        name: "北千住駅西口ペデストリアンデッキ",
        routeName: "足立47",
        inspectionYear: 2019,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    },
    {
        lat: 35.74657,
        lng: 139.80385,
        name: "北千住駅構内跨線人道橋",
        routeName: "千住東343",
        inspectionYear: 2022,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    },
    {
        lat: 35.74333,
        lng: 139.80528,
        name: "東町歩道橋",
        routeName: "吾妻橋伊興町線(都道461号線)",
        inspectionYear: 2020,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    },
    {
        lat: 35.74417,
        lng: 139.81111,
        name: "関屋歩道橋",
        routeName: "吾妻橋伊興町線(都道461号線)",
        inspectionYear: 2020,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    },
    {
        lat: 35.74278,
        lng: 139.81333,
        name: "千住曙町歩道橋",
        routeName: "言問大谷田線(都道314号線)",
        inspectionYear: 2020,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    },
    {
        lat: 35.74284,
        lng: 139.81794,
        name: "堀切駅跨線人道橋",
        routeName: "-",
        inspectionYear: 2022,
        score: "Ⅲ",
        treatmentStatus: "措置未着手"
    },
    {
        lat: 35.74501,
        lng: 139.79805,
        name: "案内標識",
        routeName: "一般国道 4 号",
        inspectionYear: 2022,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    },
    {
        lat: 35.7438,
        lng: 139.79751,
        name: "案内標識",
        routeName: "一般国道 4 号",
        inspectionYear: 2022,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    },
    {
        lat: 35.74358,
        lng: 139.80083,
        name: "道路標識",
        routeName: "都道461号線",
        inspectionYear: 2021,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    },
    {
        lat: 35.75,
        lng: 139.79083,
        name: "尾竹橋",
        routeName: "上野尾竹橋線(都道313号線)",
        inspectionYear: 2019,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    },
    {
        lat: 35.75636,
        lng: 139.80176,
        name: "千住新橋右岸（下り）",
        routeName: "国道4号",
        inspectionYear: 2019,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    },
    {
        lat: 35.75598,
        lng: 139.80184,
        name: "千住新橋右岸（上り）",
        routeName: "国道4号",
        inspectionYear: 2018,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    },
    {
        lat: 35.73909,
        lng: 139.79722,
        name: "千住大橋（下）",
        routeName: "国道4号",
        inspectionYear: 2018,
        score: "Ⅲ",
        treatmentStatus: "措置着手済み"
    },
    {
        lat: 35.73899,
        lng: 139.79753,
        name: "千住大橋（ランプ）",
        routeName: "国道4号",
        inspectionYear: 2021,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    },
    {
        lat: 35.74323,
        lng: 139.8026,
        name: "やっちゃば人道橋",
        routeName: "千住東350",
        inspectionYear: 2019,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    },
    {
        lat: 35.74403,
        lng: 139.81445,
        name: "堀切橋",
        routeName: "言問大谷田線(都道314号線)",
        inspectionYear: 2019,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    },
    {
        lat: 35.74028,
        lng: 139.81194,
        name: "千住汐入大橋",
        routeName: "言問大谷田線(都道314号線)",
        inspectionYear: 2019,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    },
    {
        lat: 35.74266,
        lng: 139.81795,
        name: "堀切２号橋",
        routeName: "ー",
        inspectionYear: 2022,
        score: "Ⅱ",
        treatmentStatus: "予防保全段階"
    }
];


var constructionMarkers = [
    {lat: 35.6595, lng: 139.6617, name: "工事情報1"},
    {lat: 35.6495, lng: 139.6517, name: "工事情報2"}
];

// レイヤーグループの作成
var dangerLayer = L.layerGroup();
var suspiciousLayer = L.layerGroup();
var agingLayer = L.layerGroup();
var constructionLayer = L.layerGroup();

// 各マーカーをレイヤーグループに追加し、カスタムアイコンを適用
dangerZones.forEach(function(zone) {
    var info = zone.info || ''; // infoがない場合は空文字列を設定
    var marker = L.marker([zone.lat, zone.lng], { icon: redIcon1 }).addTo(dangerLayer);
    marker.bindPopup(`<b>${zone.name}</b><br>${zone.info}`);
});
suspiciousMarkers.forEach(function(zone) {
    var info = zone.info || '';
    var marker = L.marker([zone.lat, zone.lng], { icon: AdministratorIcon }).addTo(suspiciousLayer);
    marker.bindPopup(`<b>${zone.name}</b><br>${zone.info}`);
});
agingMarkers.forEach(function(zone) {
    var marker = L.marker([zone.lat, zone.lng], { icon: Azure2 }).addTo(agingLayer);
    marker.bindPopup(`<b>${zone.name}</b><br>路線名: ${zone.routeName}<br>点検年: ${zone.inspectionYear}<br>判定区分: ${zone.score}<br>措置状況: ${zone.treatmentStatus}`);
});
constructionMarkers.forEach(function(zone) {
    var info = zone.info || '';
    var marker = L.marker([zone.lat, zone.lng], { icon: fortificationsIcon }).addTo(constructionLayer);
    marker.bindPopup(`<b>${zone.name}</b><br>${zone.info}`);
});

// 初期表示するレイヤーを設定
var overlayMaps = {
    "危険ゾーン": dangerLayer,
    "不審者情報": suspiciousLayer,
    "老朽化情報": agingLayer,
    "工事情報": constructionLayer
};
var layerControl = L.control.layers(null, overlayMaps, { collapsed: false }).addTo(map);

// すべてのレイヤーを初期表示
dangerLayer.addTo(map);
suspiciousLayer.addTo(map);
agingLayer.addTo(map);
constructionLayer.addTo(map);

// 現在地マーカーを保持する変数を作成
var currentLocationMarker;

// 初回位置取得済みフラグを追加
var initialLocationSet = false;

// アラートの最終表示時間を保持するオブジェクトを作成
var lastAlertTime = {};
var lastAlertTimestamp = 0;
var alertTriggered = false;

// アクティブレイヤーを取得する関数
function getActiveLayers() {
    var activeLayers = [];
    map.eachLayer(function (layer) {
        if (layer instanceof L.LayerGroup) {
            activeLayers.push(layer);
        }
    });
    return activeLayers;
}

// 音楽を再生する関数
var alertSound = document.getElementById('alertSound');

function playSound() {
    alertSound.currentTime = 0; // 音楽を最初から再生
    alertSound.play();
}

function checkDangerZones(userLatLng) {
    alertTriggered = false;  // まずフラグをリセット

    // 現在表示されているレイヤーのみチェックするためにアクティブレイヤーを取得
    var activeLayers = getActiveLayers();

    activeLayers.forEach(function(layerGroup) {
        layerGroup.eachLayer(function(layer) {
            var zone = layer.getLatLng();
            var distance = map.distance(userLatLng, [zone.lat, zone.lng]);
            var currentTime = new Date().getTime();

            if (distance < 100 && !alertTriggered && (currentTime - lastAlertTimestamp) > 3000) { // 3秒間隔でアラートを一度だけ鳴らす
                if (!lastAlertTime[zone] || (currentTime - lastAlertTime[zone]) > 300000) { // 最終アラートから5分経過しているかを確認
                    lastAlertTime[zone] = currentTime; // 最終アラート時間を更新
                    playSound(); // 音楽を鳴らす
                    //alert("警告: " + layer.getPopup().getContent() + " に近づいています！");
                    // ポップアップのコンテンツから名前部分を抽出
                    var popupContent = layer.getPopup().getContent();
                    var name = popupContent.match(/<b>(.*?)<\/b>/)[1];
                    alert("警告: " + name + " に近づいています！");
                    alertTriggered = true;  // アラートを一回だけにする
                    lastAlertTimestamp = currentTime; // アラートのタイムスタンプを更新
                }
            }
        });
    });
}

function onLocationFound(e) {
    // 既存の現在地マーカーを削除
    if (currentLocationMarker) {
        map.removeLayer(currentLocationMarker);
    }

    // 新しい現在地マーカーを追加
    currentLocationMarker = L.marker(e.latlng).addTo(map);

    // 初回のみポップアップを表示
    if (!initialLocationSet) {
        currentLocationMarker.bindPopup("あなたはここにいます").openPopup();
        map.setView(e.latlng, 16);
        initialLocationSet = true;
    }

    // 危険ゾーンのチェック
    checkDangerZones(e.latlng);
}

// 初回の位置情報取得時にも危険ゾーンをチェック
map.on('locationfound', onLocationFound);

// エラーハンドリング
function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

// タイムスタンプをリセットするボタンのイベントリスナーを追加
document.getElementById('resetButton').addEventListener('click', function() {
    lastAlertTime = {};
    alert("タイムスタンプがリセットされました。");
});

// 初回の位置情報を取得
map.locate({ setView: false, watch: true, maxZoom: 16 });


