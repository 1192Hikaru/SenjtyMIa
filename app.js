// 地図の初期化
var map = L.map('map').setView([35.6895, 139.6917], 10); // Tokyoの緯度経度

// タイルレイヤーの追加
L.tileLayer('MPcreate1017/{z}/{x}/{y}.png', { // タイルのパスを指定
    maxZoom: 20, // 使用しているタイルのズームレベルに合わせる
    tileSize: 256,
    zoomOffset: -1
}).addTo(map);

