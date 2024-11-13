// マップの初期化
var map = L.map('map').setView([35.6895, 139.6917], 13);

// タイルレイヤーの追加
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 危険な場所のマーカーを追加
var dangerZones = [
    {lat: 35.6895, lng: 139.6917, name: "地点AD"},
    {lat: 35.6980, lng: 139.7000, name: "地点BE"},
    {lat: 35.9602, lng: 139.7891, name: "地点CF"},
    {lat: 35.4106, lng: 139.4413, name: "2691"},
    {lat: 35.4024, lng: 139.4542, name: "2696"},
    {lat: 35.4054, lng: 139.4547, name: "270A"},
    {lat: 35.4030, lng: 139.4550, name: "270D"}
];

dangerZones.forEach(function(zone) {
    L.marker([zone.lat, zone.lng]).addTo(map).bindPopup(zone.name);
});


// 現在地の追跡
map.locate({setView: true, watch: true, maxZoom: 16});

// 音楽を再生する関数
var alertSound = document.getElementById('alertSound');

function playSound() {
    alertSound.currentTime = 0; // 音楽を最初から再生
    alertSound.play();
}

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map).bindPopup("あなたはここにいます").openPopup();
    L.circle(e.latlng, radius).addTo(map);

    dangerZones.forEach(function(zone) {
        var distance = map.distance(e.latlng, [zone.lat, zone.lng]);
        if (distance < 100) { // 100メートル以内に近づいたら警告
            playSound(); // 音楽を鳴らす
            alert("警告: " + zone.name + " に近づいています！100-2");
        }
    });
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);


　追加され続けることを防ぐjs
// マップの初期化
var map = L.map('map').setView([35.6895, 139.6917], 13);

// タイルレイヤーの追加
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 危険な場所のマーカーを追加
var dangerZones = [
    {lat: 35.6895, lng: 139.6917, name: "地点QQ"},
    {lat: 35.6980, lng: 139.7000, name: "地点WW"},
    {lat: 35.9602, lng: 139.7891, name: "地点EE"},
    {lat: 35.4106, lng: 139.4413, name: "RRRRR"},
    ];

dangerZones.forEach(function(zone) {
    L.marker([zone.lat, zone.lng]).addTo(map).bindPopup(zone.name);
});

// 現在地マーカーと円を保持する変数を作成
var currentLocationMarker;
var currentLocationCircle;

// 音楽を再生する関数
var alertSound = document.getElementById('alertSound');

function playSound() {
    alertSound.currentTime = 0; // 音楽を最初から再生
    alertSound.play();
}

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    // 既存の現在地マーカーと円を削除
    if (currentLocationMarker) {
        map.removeLayer(currentLocationMarker);
    }
    if (currentLocationCircle) {
        map.removeLayer(currentLocationCircle);
    }

     // 新しい現在地マーカーと円を追加
    currentLocationMarker = L.marker(e.latlng).addTo(map).bindPopup("あなたはここにいます").openPopup();
    currentLocationCircle = L.circle(e.latlng, radius).addTo(map);

    dangerZones.forEach(function(zone) {
        var distance = map.distance(e.latlng, [zone.lat, zone.lng]);
        if (distance < 100) { // 10メートル以内に近づいたら警告
            alert("警告: " + zone.name + " に近づいています！100m以内");
            playSound(); // 音楽を鳴らす
        }
    });
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);


