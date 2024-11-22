// 地図の初期化
var map = L.map('map').setView([35.6895, 139.6917], 13);

// タイルレイヤーの追加
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// カスタムアイコンの作成
var blueIcon = L.ExtraMarkers.icon({
    icon: 'fa-number',
    number: '1',
    markerColor: 'blue',
    shape: 'circle',
    prefix: 'fa'
});

var redIcon = L.ExtraMarkers.icon({
    icon: 'fa-number',
    number: '2',
    markerColor: 'red',
    shape: 'circle',
    prefix: 'fa'
});

// 危険な場所のマーカーを追加
var dangerZones = [
    {lat: 35.9602, lng: 139.7891, name: "地点CCCACC"},
    {lat: 35.7957822, lng: 139.7728736, name: "121"},
    {lat: 35.685034, lng: 139.736093, name: "1111"},
    {lat: 35.7455452, lng: 139.8019847, name: "交通事故No.1"},
    {lat: 35.7720481, lng: 139.7859405, name: "交通事故No.2"},
    {lat: 35.7865950, lng: 139.7915313, name: "交通事故No.3"}
];

// 新しいマーカーの追加
var suspiciousMarkers = [
    {lat: 35.6895, lng: 139.6917, name: "不審者情報1"},
    {lat: 35.6995, lng: 139.7017, name: "不審者情報2"}
];

var agingMarkers = [
    {lat: 35.6795, lng: 139.6817, name: "老朽化情報1"},
    {lat: 35.6695, lng: 139.6717, name: "老朽化情報2"}
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
    L.marker([zone.lat, zone.lng], { icon: redIcon }).addTo(dangerLayer).bindPopup(zone.name);
});
suspiciousMarkers.forEach(function(zone) {
    L.marker([zone.lat, zone.lng], { icon: blueIcon }).addTo(suspiciousLayer).bindPopup(zone.name);
});
agingMarkers.forEach(function(zone) {
    L.marker([zone.lat, zone.lng], { icon: blueIcon }).addTo(agingLayer).bindPopup(zone.name);
});
constructionMarkers.forEach(function(zone) {
    L.marker([zone.lat, zone.lng], { icon: redIcon }).addTo(constructionLayer).bindPopup(zone.name);
});

// レイヤーコントロールの追加
var overlayMaps = {
    "危険ゾーン": dangerLayer,
    "不審者情報": suspiciousLayer,
    "老朽化情報": agingLayer,
    "工事情報": constructionLayer
};
L.control.layers(null, overlayMaps).addTo(map);

// 現在地マーカーを保持する変数を作成
var currentLocationMarker;

// 音楽を再生する関数
var alertSound = document.getElementById('alertSound');

function playSound() {
    alertSound.currentTime = 0; // 音楽を最初から再生
    alertSound.play();
}

function checkDangerZones(userLatLng) {
    dangerZones.forEach(function(zone) {
        var distance = map.distance(userLatLng, [zone.lat, zone.lng]);
        if (distance < 10) { // 10メートル以内に近づいたら警告
            playSound(); // 音楽を鳴らす
            alert("警告: " + zone.name + " に近づいています！");
        }
    });
}

function onLocationFound(e) {
    // 既存の現在地マーカーを削除
    if (currentLocationMarker) {
        map.removeLayer(currentLocationMarker);
    }

    // 新しい現在地マーカーを追加
    currentLocationMarker = L.marker(e.latlng).addTo(map).bindPopup("あなたはここにいます").openPopup();

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

// 初回の位置情報を取得
map.locate({setView: true, watch: true, maxZoom: 16});
