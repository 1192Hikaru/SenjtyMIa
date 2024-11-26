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
var azureIcon1 = L.icon({
    iconUrl: 'Icon/Icons-Land-Vista-Map-Markers-Map-Marker-Ball-Azure.256.png',
    iconSize: [41, 41],// アイコンのサイズを指定
    iconAnchor: [12, 41],// アイコンのアンカー位置を指定
    popupAnchor: [1, -34],// ポップアップのアンカー位置を指定
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]// 影のサイズを指定
});
var chartreuseIcon1 = L.icon({
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
var azureIcon2 = L.icon({
    iconUrl: 'Icon/Icons-Land-Vista-Map-Markers-Map-Marker-Marker-Outside-Azure.256.png',
    iconSize: [41, 41],// アイコンのサイズを指定
    iconAnchor: [12, 41],// アイコンのアンカー位置を指定
    popupAnchor: [1, -34],// ポップアップのアンカー位置を指定
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]// 影のサイズを指定
});
var chartreuseIcon2 = L.icon({
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
    {lat: 35.9602, lng: 139.7891, name: "地点CCC改"},
    
    {lat: 35.7957822, lng: 139.7728736, name: "121"},
   
    {lat: 35.685034, lng: 139.736093, name: "1111"},

    {lat: 35.748715, lng: 139.805930, name: "22"},
    {lat: 35.747966, lng: 139.806220, name: "33"},
    {lat: 35.747936, lng: 139.806729, name: "44"},
    {lat: 35.748258, lng: 139.807142, name: "55"},
    {lat: 35.748833, lng: 139.807534, name: "66"},
    
   ];

var suspiciousMarkers = [
    {lat: 35.9602, lng: 139.7891, name: "地点CCOC", info: "黒いフードの男がパンチラインにクリティカルヒット"},
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
    {lat: 35.9602, lng: 139.7891, name: "地点CCC改"},
];


var constructionMarkers = [
    {lat: 35.6595, lng: 139.6617, name: "工事情報1"},
    {lat: 35.6495, lng: 139.6517, name: "工事情報2"},

    
    {lat: 35.9602, lng: 139.7891, name: "地点CCC改"},
];

// レイヤーグループの作成
var dangerLayer = L.layerGroup();
var suspiciousLayer = L.layerGroup();
var agingLayer = L.layerGroup();
var constructionLayer = L.layerGroup();

// 各マーカーをレイヤーグループに追加し、カスタムアイコンを適用
dangerZones.forEach(function(zone) {
    var marker = L.marker([zone.lat, zone.lng], { icon: redIcon1 }).addTo(dangerLayer);
    marker.bindPopup(`<b>${zone.name}</b>`);
});
suspiciousMarkers.forEach(function(zone) {
    var info = zone.info || '';
    var marker = L.marker([zone.lat, zone.lng], { icon: AdministratorIcon }).addTo(suspiciousLayer);
    marker.bindPopup(`<b>${zone.name}</b><br>${zone.info}`);
});
agingMarkers.forEach(function(zone) {
    var marker = L.marker([zone.lat, zone.lng], { icon: azureIcon2 }).addTo(agingLayer);
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


