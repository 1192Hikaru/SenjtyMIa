// 地図の初期化
var map = L.map('map').setView([35.6895, 139.6917], 10); // Tokyoの緯度経度

// タイルレイヤーの追加
L.tileLayer('MPcreate1017/{z}/{x}/{y}.png', { // タイルのパスを指定
    maxZoom: 20, // 使用しているタイルのズームレベルに合わせる
    tileSize: 256,
    zoomOffset: -1
}).addTo

// 危険な場所のマーカーを追加
var dangerZones = [
    {lat: 35.6895, lng: 139.6917, name: "地点A"},
    {lat: 35.6980, lng: 139.7000, name: "地点B"}
];

dangerZones.forEach(function(zone) {
    L.marker([zone.lat, zone.lng]).addTo(map).bindPopup(zone.name);
});

// 現在地の追跡
map.locate({setView: true, watch: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map).bindPopup("あなたはここにいます").openPopup();

    L.circle(e.latlng, radius).addTo(map);

    dangerZones.forEach(function(zone) {
        var distance = map.distance(e.latlng, [zone.lat, zone.lng]);
        if (distance < 100) { // 100メートル以内に近づいたら警告
            alert("警告: " + zone.name + " に近づいています！");
        }
    });
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);
