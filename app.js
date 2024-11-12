// マップの初期化
var map = L.map('map').setView([35.6895, 139.6917], 13);

// タイルレイヤーの追加
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 危険な場所のマーカーを追加
var dangerZones = [
    {lat: 35.6895, lng: 139.6917, name: "地点A"},
    {lat: 35.6980, lng: 139.7000, name: "地点B"},
    {lat: 35.9602, lng: 139.7891, name: "地点C"}
];

dangerZones.forEach(function(zone) {
    L.marker([zone.lat, zone.lng]).addTo(map).bindPopup(zone.name);
});

// 現在地マーカーを保持する変数を作成
var currentLocationMarker;

// 音楽を再生する関数
var alertSound = document.getElementById('alertSound');

function playSound() {
    alertSound.currentTime = 0; // 音楽を最初から再生
    alertSound.play();
}

function onLocationFound(e) {
    // 既存の現在地マーカーを削除
    if (currentLocationMarker) {
        map.removeLayer(currentLocationMarker);
    }

    // 新しい現在地マーカーを追加
    currentLocationMarker = L.marker(e.latlng).addTo(map).bindPopup("あなたはここにいます").openPopup();

    dangerZones.forEach(function(zone) {
        var distance = map.distance(e.latlng, [zone.lat, zone.lng]);
        if (distance < 10) { // 10メートル以内に近づいたら警告
            alert("警告: " + zone.name + " に近づいています！");
            playSound(); // 音楽を鳴らす
        }
    });
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);
