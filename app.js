// マップの初期化
var map = L.map('map').setView([35.6895, 139.6917], 13);

// タイルレイヤーの追加
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 危険な場所のマーカーを追加
var dangerZones = [
    {lat: 35.9602, lng: 139.7891, name: "地点CCCA"},
    {lat: 35.7016297, lng: 139.7671897, name: "101"},
    {lat: 35.6850775, lng: 139.7833950, name: "102"},
    {lat: 35.6529006, lng: 139.7514003, name: "103"},
    {lat: 35.6938458, lng: 139.6990742, name: "104"},
    {lat: 35.7102044, lng: 139.7316856, name: "105"},
    {lat: 35.7291661, lng: 139.7912083, name: "106"},
    {lat: 35.6989006, lng: 139.8118236, name: "107"},
    {lat: 35.7020397, lng: 139.8259014, name: "108"},
    {lat: 35.6261503, lng: 139.7212967, name: "109"},
    {lat: 35.6158272, lng: 139.6978642, name: "110"},
    {lat: 35.5741250, lng: 139.6754394, name: "111"},
    {lat: 35.6462264, lng: 139.6249211, name: "112"},
    {lat: 35.6454153, lng: 139.7178347, name: "113"},
    {lat: 35.6915153, lng: 139.6686706, name: "114"},
    {lat: 35.7158428, lng: 139.5968992, name: "115"},
    {lat: 35.7328872, lng: 139.7150478, name: "116"},
    {lat: 35.7541442, lng: 139.7218664, name: "117"},
    {lat: 35.7332236, lng: 139.7613925, name: "118"},
    {lat: 35.7540167, lng: 139.7180694, name: "119"},
    {lat: 35.7664847, lng: 139.6422778, name: "120"},
    {lat: 35.7957822, lng: 139.7728736, name: "121"},
    {lat: 35.7387856, lng: 139.8561683, name: "122"},
    {lat: 35.6990025, lng: 139.8678058, name: "123"},
    {lat: 35.6717764, lng: 139.3327192, name: "201"},
    {lat: 35.7276639, lng: 139.3654400, name: "202"},
    {lat: 35.7022469, lng: 139.5435714, name: "203"},
    {lat: 35.6881744, lng: 139.5603364, name: "204"},
    {lat: 35.7839694, lng: 139.2919633, name: "205"},
    {lat: 35.6790042, lng: 139.4918783, name: "206"},
    {lat: 35.7120656, lng: 139.3625397, name: "207"},
    {lat: 35.6546972, lng: 139.5673244, name: "208"},
    {lat: 35.5104142, lng: 139.4777094, name: "209"},
    {lat: 35.7049789, lng: 139.5218389, name: "210"},
    {lat: 35.7183083, lng: 139.5019750, name: "211"},
    {lat: 35.6611494, lng: 139.3913700, name: "212"},
    {lat: 35.7581258, lng: 139.4674314, name: "213"},
    {lat: 35.7061922, lng: 139.4823250, name: "214"},
    {lat: 35.7004789, lng: 139.4398458, name: "215"},
    {lat: 35.7317794, lng: 139.3357775, name: "218"},
    {lat: 35.6274144, lng: 139.5717925, name: "219"},
    {lat: 35.7519514, lng: 139.4275058, name: "220"},
    {lat: 35.7878428, lng: 139.5333217, name: "221"},
    {lat: 35.7582375, lng: 139.5288025, name: "222"},
    {lat: 35.7426586, lng: 139.4074472, name: "223"},
    {lat: 35.6427639, lng: 139.4331278, name: "224"},
    {lat: 35.6330056, lng: 139.5035942, name: "225"},
    {lat: 35.7429014, lng: 139.3197578, name: "227"},
    {lat: 35.7319125, lng: 139.2006650, name: "228"},
    {lat: 35.7417414, lng: 139.5567889, name: "229"},
    {lat: 35.7593761, lng: 139.3337933, name: "303"},
    {lat: 35.7344308, lng: 139.2760900, name: "305"},
    {lat: 35.8415578, lng: 139.0913820, name: "308"},
    {lat: 34.7553019, lng: 139.3541233, name: "361"},
    {lat: 34.3604519, lng: 139.2539572, name: "363"},
    {lat: 34.2039042, lng: 139.1346014, name: "364"},
    {lat: 33.0580681, lng: 139.8005367, name: "381"},
    {lat: 27.0908125, lng: 142.1987583, name: "401"},
    {lat: 27.0958125, lng: 142.1987583, name: "421"},
    {lat: 35.685034, lng: 139.736093, name: "111"},
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


