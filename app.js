// マップの初期化
var map = L.map('map').setView([35.6895, 139.6917], 13);

// タイルレイヤーの追加
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 危険な場所のマーカーを追加
var dangerZones = [
    {lat: 35.9602, lng: 139.7891, name: "地点CCCAC"},
    
    {lat: 35.7957822, lng: 139.7728736, name: "121"},
   
    {lat: 35.685034, lng: 139.736093, name: "1111"},
    
    {lat: 35.7455452, lng: 139.8019847, name: "交通事故No.1"}, 
    {lat: 35.7720481, lng: 139.7859405, name: "交通事故No.2"},
{lat: 35.7865950, lng: 139.7915313, name: "交通事故No.3"},
{lat: 35.7768248, lng: 139.7846592, name: "交通事故No.4"},
{lat: 35.7692772, lng: 139.7401360, name: "交通事故No.5"},
{lat: 35.7859922, lng: 139.7844678, name: "交通事故No.6"},
{lat: 35.7927052, lng: 139.8141541, name: "交通事故No.7"},
{lat: 35.7690185, lng: 139.8172719, name: "交通事故No.8"},
{lat: 35.7759071, lng: 139.8220942, name: "交通事故No.9"},
{lat: 35.8124909, lng: 139.8212583, name: "交通事故No.10"},
{lat: 35.7900597, lng: 139.8018964, name: "交通事故No.11"},
{lat: 35.8143861, lng: 139.7685086, name: "交通事故No.12"},
{lat: 35.7874327, lng: 139.8169750, name: "交通事故No.13"},
{lat: 35.8163603, lng: 139.7694139, name: "交通事故No.14"},
{lat: 35.7872519, lng: 139.7935333, name: "交通事故No.15"},
{lat: 35.7858153, lng: 139.8019428, name: "交通事故No.16"},
{lat: 35.7508997, lng: 139.8006978, name: "交通事故No.17"},
{lat: 35.7414011, lng: 139.8038975, name: "交通事故No.18"},
{lat: 35.7776011, lng: 139.8019307, name: "交通事故No.19"},
{lat: 35.7783794, lng: 139.7535308, name: "交通事故No.20"},
{lat: 35.7773172, lng: 139.7765389, name: "交通事故No.21"},
{lat: 35.7548544, lng: 139.7568411, name: "交通事故No.22"},
{lat: 35.7577474, lng: 139.8233183, name: "交通事故No.23"},
{lat: 35.7759291, lng: 139.8361689, name: "交通事故No.24"},
{lat: 35.7692356, lng: 139.8187108, name: "交通事故No.25"},
{lat: 35.7718722, lng: 139.8365689, name: "交通事故No.26"},
{lat: 35.7740542, lng: 139.8193425, name: "交通事故No.27"},
{lat: 35.7685411, lng: 139.8220356, name: "交通事故No.28"},
{lat: 35.7626125, lng: 139.8217890, name: "交通事故No.29"},
{lat: 35.7690561, lng: 139.8098767, name: "交通事故No.30"},
{lat: 35.8066369, lng: 139.8064875, name: "交通事故No.31"},
{lat: 35.8043583, lng: 139.8041472, name: "交通事故No.32"},
{lat: 35.8027519, lng: 139.7854089, name: "交通事故No.33"},
{lat: 35.7929053, lng: 139.8039100, name: "交通事故No.34"},
{lat: 35.8060797, lng: 139.7664928, name: "交通事故No.35"},
{lat: 35.8031483, lng: 139.7590806, name: "交通事故No.36"},
{lat: 35.7895289, lng: 139.8047125, name: "交通事故No.37"},
{lat: 35.7503394, lng: 139.8016167, name: "交通事故No.38"},
{lat: 35.7506750, lng: 139.8041222, name: "交通事故No.39"},
{lat: 35.7414744, lng: 139.7929347, name: "交通事故No.40"},
{lat: 35.7509403, lng: 139.8028558, name: "交通事故No.41"},
{lat: 35.7462617, lng: 139.8038931, name: "交通事故No.42"},
{lat: 35.7425742, lng: 139.8041536, name: "交通事故No.43"},
{lat: 35.7759492, lng: 139.8017517, name: "交通事故No.44"},
{lat: 35.7858403, lng: 139.7926431, name: "交通事故No.45"},
{lat: 35.7654594, lng: 139.8038147, name: "交通事故No.46"},
{lat: 35.7855319, lng: 139.7501328, name: "交通事故No.47"},
{lat: 35.7756694, lng: 139.7833950, name: "交通事故No.48"},
{lat: 35.7853689, lng: 139.8237806, name: "交通事故No.49"},
{lat: 35.7759689, lng: 139.8372972, name: "交通事故No.50"},
{lat: 35.7717067, lng: 139.8053278, name: "交通事故No.51"},
{lat: 35.7693414, lng: 139.8224694, name: "交通事故No.52"},
{lat: 35.7761961, lng: 139.8065881, name: "交通事故No.53"},
{lat: 35.7758027, lng: 139.8122575, name: "交通事故No.54"},
{lat: 35.7625309, lng: 139.8033486, name: "交通事故No.55"},
{lat: 35.7853685, lng: 139.8237806, name: "交通事故No.56"},
{lat: 35.7759027, lng: 139.8240153, name: "交通事故No.57"},
{lat: 35.7620979, lng: 139.8234533, name: "交通事故No.58"},
{lat: 35.7906466, lng: 139.8362322, name: "交通事故No.59"},
{lat: 35.7638914, lng: 139.8212413, name: "交通事故No.60"},
{lat: 35.7776090, lng: 139.8057422, name: "交通事故No.61"},
{lat: 35.7904305, lng: 139.8169817, name: "交通事故No.62"},
{lat: 35.8069417, lng: 139.7762642, name: "交通事故No.63"},
{lat: 35.8082408, lng: 139.7691781, name: "交通事故No.64"},
{lat: 35.7503394, lng: 139.8016167, name: "交通事故No.65"},
{lat: 35.7545431, lng: 139.8016194, name: "交通事故No.66"},
{lat: 35.7773208, lng: 139.7860553, name: "交通事故No.67"},
{lat: 35.7773031, lng: 139.7864844, name: "交通事故No.68"},
{lat: 35.7790281, lng: 139.8050884, name: "交通事故No.69"},
{lat: 35.7833186, lng: 139.7660156, name: "交通事故No.70"},
{lat: 35.628819, lng: 139.4613587, name: "交通事故No.71"},
{lat: 35.655723, lng: 139.4810364, name: "交通事故No.72"},
    {lat: 35.635812, lng: 139.4628331, name: "交通事故No.73"},
    {lat: 35.734743, lng: 139.4543225, name: "交通事故No.74"},
    {lat: 35.615587, lng: 139.4746857, name: "交通事故No.75"},
    {lat: 35.641028, lng: 139.4641449, name: "交通事故No.76"}, 
    {lat: 35.618695, lng: 139.4731908, name: "交通事故No.77"}, 
    {lat: 35.603868, lng: 139.4827232, name: "交通事故No.78"},
    {lat: 35.548476, lng: 139.4827076, name: "交通事故No.79"}, 
    {lat: 35.546294, lng: 139.4926468, name: "交通事故No.80"}, 
    {lat: 35.655456, lng: 139.4935717, name: "交通事故No.81"},
    {lat: 35.653688, lng: 139.4959887, name: "交通事故No.82"}, 
    {lat: 35.706755, lng: 139.5031314, name: "交通事故No.83"},
    {lat: 35.615133, lng: 139.4837074, name: "交通事故No.84"}, 
    {lat: 35.613751, lng: 139.5033222, name: "交通事故No.85"},
    {lat: 35.746717, lng: 139.4539353, name: "交通事故No.86"},
    {lat: 35.742128, lng: 139.4740544, name: "交通事故No.87"},
    {lat: 35.730349, lng: 139.4818767, name: "交通事故No.88"},
    {lat: 35.738752, lng: 139.4901703, name: "交通事故No.89"},
    {lat: 35.749672, lng: 139.4914303, name: "交通事故No.90"}, 
    {lat: 35.742344, lng: 139.4724880, name: "交通事故No.91"}, 
    {lat: 35.720967, lng: 139.4828969, name: "交通事故No.92"},
    {lat: 35.456786, lng: 139.4833207, name: "交通事故No.93"},
    {lat: 35.516374, lng: 139.4805246, name: "交通事故No.94"},
    {lat: 35.432595, lng: 139.4740089, name: "交通事故No.95"}, {lat: 35.609882, lng: 139.4459764, name: "交通事故No.96"}, {lat: 35.611595, lng: 139.4803809, name: "交通事故No.97"}, {lat: 35.651285, lng: 139.4751514, name: "交通事故No.98"}, {lat: 35.633330, lng: 139.4852182, name: "交通事故No.99"}, {lat: 35.549257, lng: 139.4951838, name: "交通事故No.100"}, {lat: 35.548198, lng: 139.4847663, name: "交通事故No.101"}, {lat: 35.559767, lng: 139.4823561, name: "交通事故No.102"}, {lat: 35.640546, lng: 139.4924897, name: "交通事故No.103"}, {lat: 35.626369, lng: 139.5112029, name: "交通事故No.104"}, {lat: 35.824694, lng: 139.4843543, name: "交通事故No.105"}, {lat: 35.738536, lng: 139.4806311, name: "交通事故No.106"}, {lat: 35.743069, lng: 139.4824567, name: "交通事故No.107"}, {lat: 35.501682, lng: 139.4808975, name: "交通事故No.108"}, {lat: 35.519832, lng: 139.4613861, name: "交通事故No.109"}, {lat: 35.629005, lng: 139.4711959, name: "交通事故No.110"}, {lat: 35.707996, lng: 139.4654745, name: "交通事故No.111"}, {lat: 35.642594, lng: 139.5044002, name: "交通事故No.112"}, {lat: 35.611472, lng: 139.4901784, name: "交通事故No.113"}, {lat: 35.557855, lng: 139.4826776, name: "交通事故No.114"}, {lat: 35.605583, lng: 139.5030803, name: "交通事故No.115"}, {lat: 35.624704, lng: 139.5032371, name: "交通事故No.116"}, {lat: 35.801465, lng: 139.5023105, name: "交通事故No.117"}, {lat: 35.647500, lng: 139.4948693, name: "交通事故No.118"}, {lat: 35.642794, lng: 139.4838866, name: "交通事故No.119"}, {lat: 35.636495, lng: 139.4955010, name: "交通事故No.120"}, {lat: 35.646384, lng: 139.4900035, name: "交通事故No.121"}, {lat: 35.732463, lng: 139.4657558, name: "交通事故No.122"}, {lat: 35.801680, lng: 139.4756404, name: "交通事故No.123"}, {lat: 35.822637, lng: 139.4643354, name: "交通事故No.124"}, {lat: 35.812716, lng: 139.4836932, name: "交通事故No.125"}, {lat: 35.810737, lng: 139.4836653, name: "交通事故No.126"}, {lat: 35.644903, lng: 139.4521245, name: "交通事故No.127"}, {lat: 35.650265, lng: 139.4612063, name: "交通事故No.128"}, {lat: 35.541337, lng: 139.4925498, name: "交通事故No.129"}, {lat: 35.702210, lng: 139.4813491, name: "交通事故No.130"}, {lat: 35.631038, lng: 139.5028261, name: "交通事故No.131"}, {lat: 35.601092, lng: 139.4924181, name: "交通事故No.132"}, {lat: 35.719746, lng: 139.4940473, name: "交通事故No.133"}, {lat: 35.549618, lng: 139.4917551, name: "交通事故No.134"}, {lat: 35.636291, lng: 139.4910889, name: "交通事故No.135"}, {lat: 35.554357, lng: 139.5008045, name: "交通事故No.136"}, {lat: 35.650412, lng: 139.4916893, name: "交通事故No.137"}, {lat: 35.726483, lng: 139.4844270, name: "交通事故No.138"}, {lat: 35.832833, lng: 139.4612563, name: "交通事故No.139"}, {lat: 35.724250, lng: 139.4809329, name: "交通事故No.140"},
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


