// 地図の初期化
var map = L.map('map').setView([35.6895, 139.6917], 13);

// タイルレイヤーの追加
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// カスタムボタンの追加
var customControl = L.Control.extend({
    options: {
        position: 'topright'
    },
    onAdd: function () {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

        var gearBtn = L.DomUtil.create('button', 'leaflet-control-custom', container);
        gearBtn.innerHTML = '⚙️';// 歯車アイコンを表示
        L.DomEvent.on(gearBtn, 'click', function() {
            var controls = document.getElementById('custom-controls');
            controls.style.display = controls.style.display === 'none' ? 'block' : 'none';
        });

        return container;
    }
});

map.addControl(new customControl());

// カスタムボタンのイベントリスナー追加
document.getElementById('reference-btn').addEventListener('click', function() {
    showTabContent('reference-content');
});

document.getElementById('terms-btn').addEventListener('click', function() {
    showTabContent('terms-content');
});

document.getElementById('reset-timestamp-btn').addEventListener('click', function() {
    lastAlertTimestamp = 0;
    alert('タイムスタンプをリセットしました。');
});

// タブの内容を表示する関数
function showTabContent(tabId) {
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(content) {
        content.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}


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

    {lat: 35.7455452, lng: 139.8019847, name: "交通事故No.1"},
    {lat: 35.7720481, lng: 139.7859405, name: "交通事故No.2"},
    {lat: 35.7865950, lng: 139.7915313, name: "交通事故No.3"},
    {lat: 35.7768248, lng: 139.7846592, name: "交通事故No.4"},
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
    {lat: 35.7508997, lng: 139.8006978, name: "交通事故No.17"},{lat: 35.7414011, lng: 139.8038975, name: "交通事故No.18"},{lat: 35.7776011, lng: 139.8019307, name: "交通事故No.19"},{lat: 35.7783794, lng: 139.7535308, name: "交通事故No.20"},{lat: 35.7773172, lng: 139.7765389, name: "交通事故No.21"},{lat: 35.7577474, lng: 139.8233183, name: "交通事故No.23"},{lat: 35.7759291, lng: 139.8361689, name: "交通事故No.24"},{lat: 35.7692356, lng: 139.8187108, name: "交通事故No.25"},{lat: 35.7718722, lng: 139.8365689, name: "交通事故No.26"},{lat: 35.7740542, lng: 139.8193425, name: "交通事故No.27"},{lat: 35.7685411, lng: 139.8220356, name: "交通事故No.28"},{lat: 35.7626125, lng: 139.8217890, name: "交通事故No.29"},{lat: 35.7690561, lng: 139.8098767, name: "交通事故No.30"},{lat: 35.8066369, lng: 139.8064875, name: "交通事故No.31"},{lat: 35.8043583, lng: 139.8041472, name: "交通事故No.32"},{lat: 35.8027519, lng: 139.7854089, name: "交通事故No.33"},{lat: 35.7929053, lng: 139.8039100, name: "交通事故No.34"},{lat: 35.8060797, lng: 139.7664928, name: "交通事故No.35"},{lat: 35.8031483, lng: 139.7590806, name: "交通事故No.36"},{lat: 35.7895289, lng: 139.8047125, name: "交通事故No.37"},{lat: 35.7503394, lng: 139.8016167, name: "交通事故No.38"},{lat: 35.7506750, lng: 139.8041222, name: "交通事故No.39"},{lat: 35.7414744, lng: 139.7929347, name: "交通事故No.40"},{lat: 35.7509403, lng: 139.8028558, name: "交通事故No.41"},{lat: 35.7462617, lng: 139.8038931, name: "交通事故No.42"},{lat: 35.7425742, lng: 139.8041536, name: "交通事故No.43"},{lat: 35.7759492, lng: 139.8017517, name: "交通事故No.44"},{lat: 35.7858403, lng: 139.7926431, name: "交通事故No.45"},{lat: 35.7654594, lng: 139.8038147, name: "交通事故No.46"},{lat: 35.7855319, lng: 139.7501328, name: "交通事故No.47"},{lat: 35.7756694, lng: 139.7833950, name: "交通事故No.48"},{lat: 35.7853689, lng: 139.8237806, name: "交通事故No.49"},{lat: 35.7759689, lng: 139.8372972, name: "交通事故No.50"},{lat: 35.7717067, lng: 139.8053278, name: "交通事故No.51"},{lat: 35.7693414, lng: 139.8224694, name: "交通事故No.52"},{lat: 35.7761961, lng: 139.8065881, name: "交通事故No.53"},{lat: 35.7758027, lng: 139.8122575, name: "交通事故No.54"},{lat: 35.7625309, lng: 139.8033486, name: "交通事故No.55"},{lat: 35.7853685, lng: 139.8237806, name: "交通事故No.56"},{lat: 35.7759027, lng: 139.8240153, name: "交通事故No.57"},{lat: 35.7620979, lng: 139.8234533, name: "交通事故No.58"},{lat: 35.7906466, lng: 139.8362322, name: "交通事故No.59"},{lat: 35.7638914, lng: 139.8212413, name: "交通事故No.60"},{lat: 35.7776090, lng: 139.8057422, name: "交通事故No.61"},{lat: 35.7904305, lng: 139.8169817, name: "交通事故No.62"},{lat: 35.8069417, lng: 139.7762642, name: "交通事故No.63"},{lat: 35.8082408, lng: 139.7691781, name: "交通事故No.64"},{lat: 35.7503394, lng: 139.8016167, name: "交通事故No.65"},{lat: 35.7545431, lng: 139.8016194, name: "交通事故No.66"},{lat: 35.7773208, lng: 139.7860553, name: "交通事故No.67"},{lat: 35.7773031, lng: 139.7864844, name: "交通事故No.68"},{lat: 35.7790281, lng: 139.8050884, name: "交通事故No.69"},{lat: 35.7833186, lng: 139.7660156, name: "交通事故No.70"},
    {lat: 35.7673172, lng: 139.8012025, name: "交通事故No.344"}, {lat: 35.7906528, lng: 139.7629000, name: "交通事故No.345"}, {lat: 35.7688791, lng: 139.8178697, name: "交通事故No.347"}, {lat: 35.7983456, lng: 139.8361811, name: "交通事故No.348"}, {lat: 35.7698667, lng: 139.8169931, name: "交通事故No.349"}, {lat: 35.7652444, lng: 139.8053461, name: "交通事故No.350"}, {lat: 35.7930953, lng: 139.7872961, name: "交通事故No.351"}, {lat: 35.7716044, lng: 139.7753142, name: "交通事故No.352"}, {lat: 35.7738800, lng: 139.7840361, name: "交通事故No.353"}, {lat: 35.7904070, lng: 139.7676517, name: "交通事故No.354"}, {lat: 35.7764539, lng: 139.7965989, name: "交通事故No.355"}, {lat: 35.7857842, lng: 139.7849833, name: "交通事故No.357"}, {lat: 35.7861111, lng: 139.8361181, name: "交通事故No.358"}, {lat: 35.7699639, lng: 139.8351842, name: "交通事故No.359"}, {lat: 35.7854608, lng: 139.8398361, name: "交通事故No.360"}, {lat: 35.7653919, lng: 139.8066014, name: "交通事故No.361"}, {lat: 35.7992839, lng: 139.8030431, name: "交通事故No.362"}, {lat: 35.7957822, lng: 139.8038144, name: "交通事故No.363"}, {lat: 35.7926639, lng: 139.7882111, name: "交通事故No.364"}, {lat: 35.8010822, lng: 139.7724972, name: "交通事故No.365"}, {lat: 35.7544514, lng: 139.7888056, name: "交通事故No.366"}, {lat: 35.7542364, lng: 139.7878850, name: "交通事故No.367"}, {lat: 35.7446889, lng: 139.7900814, name: "交通事故No.368"}, {lat: 35.7542164, lng: 139.7986614, name: "交通事故No.369"}, {lat: 35.7736964, lng: 139.7732422, name: "交通事故No.370"}, {lat: 35.7745300, lng: 139.7429892, name: "交通事故No.371"}, {lat: 35.7834756, lng: 139.7539208, name: "交通事故No.373"}, {lat: 35.7707419, lng: 139.8399961, name: "交通事故No.374"}, {lat: 35.7984781, lng: 139.8359194, name: "交通事故No.375"}, {lat: 35.7735336, lng: 139.8069325, name: "交通事故No.376"}, {lat: 35.7844892, lng: 139.8030903, name: "交通事故No.377"}, {lat: 35.7641547, lng: 139.8079528, name: "交通事故No.378"}, {lat: 35.7734581, lng: 139.8265556, name: "交通事故No.379"}, {lat: 35.7862972, lng: 139.8384603, name: "交通事故No.380"}, {lat: 35.7930653, lng: 139.7870244, name: "交通事故No.381"}, {lat: 35.8006161, lng: 139.7964947, name: "交通事故No.382"}, {lat: 35.7862503, lng: 139.8064022, name: "交通事故No.383"}, {lat: 35.7446331, lng: 139.8025175, name: "交通事故No.384"}, {lat: 35.7482747, lng: 139.8026689, name: "交通事故No.385"}, {lat: 35.7742153, lng: 139.7729819, name: "交通事故No.386"}, {lat: 35.7763639, lng: 139.7698219, name: "交通事故No.387"}, {lat: 35.7717000, lng: 139.7887028, name: "交通事故No.388"}, {lat: 35.7739086, lng: 139.7754033, name: "交通事故No.389"}, {lat: 35.7765586, lng: 139.7972472, name: "交通事故No.390"}, {lat: 35.7718617, lng: 139.7698522, name: "交通事故No.391"}, {lat: 35.7765772, lng: 139.8359264, name: "交通事故No.392"}, {lat: 35.7745618, lng: 139.8069139, name: "交通事故No.393"}, {lat: 35.7635806, lng: 139.8178028, name: "交通事故No.394"}, {lat: 35.7671681, lng: 139.8064133, name: "交通事故No.395"}, {lat: 35.7735197, lng: 139.8397611, name: "交通事故No.396"}, {lat: 35.7721517, lng: 139.8261175, name: "交通事故No.397"}, {lat: 35.7736064, lng: 139.8335039, name: "交通事故No.398"}, {lat: 35.7757500, lng: 139.8242822, name: "交通事故No.399"}, {lat: 35.7983981, lng: 139.8355483, name: "交通事故No.400"}, {lat: 35.7721639, lng: 139.8399103, name: "交通事故No.401"},
    {lat: 35.7673181, lng: 139.8187103, name: "交通事故No.402"}, {lat: 35.7640300, lng: 139.8069139, name: "交通事故No.403"}, {lat: 35.7945814, lng: 139.7697258, name: "交通事故No.404"}, {lat: 35.7926544, lng: 139.7882094, name: "交通事故No.405"}, {lat: 35.7904758, lng: 139.8036458, name: "交通事故No.406"}, {lat: 35.7905464, lng: 139.7628625, name: "交通事故No.407"},{lat: 35.7720794, lng: 139.7886858, name: "交通事故No.409"}, {lat: 35.7741644, lng: 139.7964389, name: "交通事故No.410"}, {lat: 35.7739989, lng: 139.7888639, name: "交通事故No.411"},{lat: 35.7848661, lng: 139.7541650, name: "交通事故No.412"}, {lat: 35.7698333, lng: 139.7904225, name: "交通事故No.413"}, {lat: 35.7673264, lng: 139.7946603, name: "交通事故No.414"},{lat: 35.7739264, lng: 139.7562133, name: "交通事故No.416"}, {lat: 35.7745564, lng: 139.8362161, name: "交通事故No.417"}, {lat: 35.7742972, lng: 139.8399664, name: "交通事故No.418"}, {lat: 35.7852603, lng: 139.8392439, name: "交通事故No.419"},{lat: 35.7892344, lng: 139.8358170, name: "交通事故No.421"}, {lat: 35.7981703, lng: 139.8361794, name: "交通事故No.422"}, {lat: 35.7984072, lng: 139.7944578, name: "交通事故No.423"}, {lat: 35.8021850, lng: 139.7698883, name: "交通事故No.424"}, {lat: 35.7444842, lng: 139.8054447, name: "交通事故No.425"}, {lat: 35.7853234, lng: 139.7872681, name: "交通事故No.429"}, {lat: 35.7849236, lng: 139.7666472, name: "交通事故No.430"}, {lat: 35.7722153, lng: 139.8391764, name: "交通事故No.431"}, {lat: 35.7684717, lng: 139.8191975, name: "交通事故No.432"}, {lat: 35.7545919, lng: 139.8065197, name: "交通事故No.433"}, {lat: 35.7738289, lng: 139.8033181, name: "交通事故No.434"}, {lat: 35.7760539, lng: 139.8033200, name: "交通事故No.435"}, {lat: 35.7762011, lng: 139.8031736, name: "交通事故No.436"}, {lat: 35.7766525, lng: 139.8094931, name: "交通事故No.437"}, {lat: 35.7718481, lng: 139.8358517, name: "交通事故No.438"}, {lat: 35.7721358, lng: 139.8260181, name: "交通事故No.439"}, {lat: 35.8014208, lng: 139.7625397, name: "交通事故No.440"}, {lat: 35.7947897, lng: 139.7876906, name: "交通事故No.441"}, {lat: 35.7546311, lng: 139.7869900, name: "交通事故No.442"}, {lat: 35.7706861, lng: 139.7964000, name: "交通事故No.443"}, {lat: 35.7743128, lng: 139.7879786, name: "交通事故No.444"}, {lat: 35.7695017, lng: 139.7912964, name: "交通事故No.445"}, {lat: 35.7708394, lng: 139.7691600, name: "交通事故No.446"}, {lat: 35.7716806, lng: 139.7413239, name: "交通事故No.447"}, {lat: 35.7727711, lng: 139.7879592, name: "交通事故No.448"}, {lat: 35.7744525, lng: 139.7844206, name: "交通事故No.449"}, {lat: 35.7723294, lng: 139.8002228, name: "交通事故No.450"}, {lat: 35.7735147, lng: 139.7729803, name: "交通事故No.451"},{lat: 35.7865931, lng: 139.8334194, name: "交通事故No.453"},{lat: 35.7766828, lng: 139.8068956, name: "交通事故No.455"}, {lat: 35.7672403, lng: 139.8391728, name: "交通事故No.456"}, {lat: 35.7644528, lng: 139.8254194, name: "交通事故No.457"}, {lat: 35.7687408, lng: 139.8226911, name: "交通事故No.458"}, {lat: 35.7949369, lng: 139.8361972, name: "交通事故No.459"}, {lat: 35.7848606, lng: 139.8068253, name: "交通事故No.460"}, {lat: 35.8012792, lng: 139.8032444, name: "交通事故No.461"}, {lat: 35.7947403, lng: 139.8016161, name: "交通事故No.462"}, {lat: 35.8013994, lng: 139.8032197, name: "交通事故No.463"}, {lat: 35.7516481, lng: 139.8033325, name: "交通事故No.464"},{lat: 35.7680131, lng: 139.7766292, name: "交通事故No.466"}, {lat: 35.7764139, lng: 139.7566642, name: "交通事故No.467"}, {lat: 35.7697794, lng: 139.7881581, name: "交通事故No.468"},{lat: 35.7731528, lng: 139.7563636, name: "交通事故No.470"}, {lat: 35.7735078, lng: 139.7756611, name: "交通事故No.472"}, {lat: 35.7855878, lng: 139.7697028, name: "交通事故No.473"}, {lat: 35.7648820, lng: 139.8346553, name: "交通事故No.474"}, {lat: 35.7734747, lng: 139.8264569, name: "交通事故No.475"}, {lat: 35.7590449, lng: 139.8235919, name: "交通事故No.476"}, {lat: 35.7725522, lng: 139.8259417, name: "交通事故No.477"}, {lat: 35.7739890, lng: 139.8397367, name: "交通事故No.479"}, {lat: 35.7699111, lng: 139.8397361, name: "交通事故No.480"}, {lat: 35.8070414, lng: 139.7568614, name: "交通事故No.481"}, {lat: 35.7995078, lng: 139.7765506, name: "交通事故No.482"},{lat: 35.8018042, lng: 139.7581414, name: "交通事故No.484"}, {lat: 35.7852980, lng: 139.8065331, name: "交通事故No.485"}, {lat: 35.7948022, lng: 139.7765931, name: "交通事故No.486"}, {lat: 35.7721870, lng: 139.8032836, name: "交通事故No.487"}, {lat: 35.7765825, lng: 139.7698233, name: "交通事故No.488"}, {lat: 35.7734936, lng: 139.7878394, name: "交通事故No.489"}, {lat: 35.7855679, lng: 139.8198583, name: "交通事故No.490"}, {lat: 35.7695708, lng: 139.8428022, name: "交通事故No.491"}, {lat: 35.764609, lng: 139.807464, name: "交通事故No.492"}, {lat: 35.793563, lng: 139.832117, name: "交通事故No.493"}, {lat: 35.793610, lng: 139.786731, name: "交通事故No.494"}, {lat: 35.786333, lng: 139.787059, name: "交通事故No.495"}, {lat: 35.807319, lng: 139.769528, name: "交通事故No.496"}, {lat: 35.801237, lng: 139.776510, name: "交通事故No.497"},{lat: 35.785895, lng: 139.803042, name: "交通事故No.499"}, {lat: 35.764110, lng: 139.769873, name: "交通事故No.500"}, {lat: 35.783865, lng: 139.762608, name: "交通事故No.501"}, {lat: 35.772929, lng: 139.772908, name: "交通事故No.502"}, {lat: 35.770473, lng: 139.737377, name: "交通事故No.503"}, {lat: 35.772069, lng: 139.839716, name: "交通事故No.504"}, {lat: 35.772315, lng: 139.826433, name: "交通事故No.505"}, {lat: 35.772282, lng: 139.823837, name: "交通事故No.506"}, {lat: 35.772220, lng: 139.833378, name: "交通事故No.507"}, {lat: 35.768722, lng: 139.806567, name: "交通事故No.508"}, {lat: 35.771706, lng: 139.806785, name: "交通事故No.509"}, {lat: 35.773038, lng: 139.804562, name: "交通事故No.510"}, {lat: 35.771655, lng: 139.823341, name: "交通事故No.511"}, {lat: 35.794925, lng: 139.773485, name: "交通事故No.512"}, {lat: 35.806711, lng: 139.767360, name: "交通事故No.513"}, {lat: 35.748408, lng: 139.798278, name: "交通事故No.514"}, {lat: 35.770596, lng: 139.800533, name: "交通事故No.515"},{lat: 35.770872, lng: 139.796415, name: "交通事故No.517"}, {lat: 35.765068, lng: 139.806592, name: "交通事故No.518"}, {lat: 35.773599, lng: 139.823872, name: "交通事故No.519"}, {lat: 35.784837, lng: 139.806766, name: "交通事故No.520"}, {lat: 35.799516, lng: 139.775393, name: "交通事故No.521"}, {lat: 35.798505, lng: 139.790013, name: "交通事故No.522"}, {lat: 35.801921, lng: 139.792787, name: "交通事故No.523"}, {lat: 35.803591, lng: 139.783348, name: "交通事故No.524"}, {lat: 35.786135, lng: 139.806353, name: "交通事故No.525"}, {lat: 35.801827, lng: 139.803220, name: "交通事故No.526"},{lat: 35.769501, lng: 139.791296, name: "交通事故No.528"}, {lat: 35.774148, lng: 139.752030, name: "交通事故No.529"}, {lat: 35.776420, lng: 139.772858, name: "交通事故No.530"}, {lat: 35.772165, lng: 139.759803, name: "交通事故No.531"}, {lat: 35.771235, lng: 139.786426, name: "交通事故No.532"}, {lat: 35.776642, lng: 139.759828, name: "交通事故No.533"},{lat: 35.772012, lng: 139.784628, name: "交通事故No.534"}, {lat: 35.785672, lng: 139.807561, name: "交通事故No.535"}, {lat: 35.764742, lng: 139.826322, name: "交通事故No.536"}, {lat: 35.792320, lng: 139.835857, name: "交通事故No.537"}, {lat: 35.770143, lng: 139.835892, name: "交通事故No.538"}, {lat: 35.777333, lng: 139.841419, name: "交通事故No.539"}, {lat: 35.793364, lng: 139.832547, name: "交通事故No.540"}, {lat: 35.793656, lng: 139.773188, name: "交通事故No.541"}, {lat: 35.806658, lng: 139.818698, name: "交通事故No.542"}, {lat: 35.751518, lng: 139.801576, name: "交通事故No.543"}, {lat: 35.751513, lng: 139.791793, name: "交通事故No.544"}, {lat: 35.749458, lng: 139.806211, name: "交通事故No.545"}, {lat: 35.751524, lng: 139.801389, name: "交通事故No.547"}, {lat: 35.770665, lng: 139.786854, name: "交通事故No.548"}, {lat: 35.770304, lng: 139.803519, name: "交通事故No.549"}, {lat: 35.783516, lng: 139.769263, name: "交通事故No.550"}, {lat: 35.770439, lng: 139.769195, name: "交通事故No.551"}, {lat: 35.776643, lng: 139.777346, name: "交通事故No.553"}, {lat: 35.767031, lng: 139.806515, name: "交通事故No.554"}, {lat: 35.765246, lng: 139.823457, name: "交通事故No.555"}, {lat: 35.768360, lng: 139.835878, name: "交通事故No.556"}, {lat: 35.772324, lng: 139.833456, name: "交通事故No.557"}, {lat: 35.767228, lng: 139.821738, name: "交通事故No.558"}, {lat: 35.763825, lng: 139.805824, name: "交通事故No.559"}, {lat: 35.793508, lng: 139.835851, name: "交通事故No.560"}, {lat: 35.765471, lng: 139.805842, name: "交通事故No.561"}, {lat: 35.801389, lng: 139.776575, name: "交通事故No.562"}, {lat: 35.752525, lng: 139.801901, name: "交通事故No.563"}, {lat: 35.749471, lng: 139.806207, name: "交通事故No.564"}, {lat: 35.776433, lng: 139.796374, name: "交通事故No.565"}, {lat: 35.785069, lng: 139.787607, name: "交通事故No.566"}, {lat: 35.769861, lng: 139.806436, name: "交通事故No.567"},{lat: 35.759744, lng: 139.823895, name: "交通事故No.568"}, {lat: 35.793284, lng: 139.787542, name: "交通事故No.571"}, {lat: 35.796937, lng: 139.807494, name: "交通事故No.572"}, {lat: 35.792091, lng: 139.818506, name: "交通事故No.573"}, {lat: 35.773083, lng: 139.803160, name: "交通事故No.574"}, {lat: 35.770315, lng: 139.773665, name: "交通事故No.575"}, {lat: 35.772160, lng: 139.839847, name: "交通事故No.576"}, {lat: 35.770547, lng: 139.835417, name: "交通事故No.577"}, {lat: 35.770330, lng: 139.839863, name: "交通事故No.578"}, {lat: 35.793424, lng: 139.832733, name: "交通事故No.579"}, {lat: 35.774689, lng: 139.806374, name: "交通事故No.580"}, {lat: 35.785987, lng: 139.835816, name: "交通事故No.581"}, {lat: 35.776597, lng: 139.839822, name: "交通事故No.582"},{lat: 35.786674, lng: 139.803149, name: "交通事故No.584"}, {lat: 35.801670, lng: 139.774691, name: "交通事故No.585"}, {lat: 35.744509, lng: 139.806577, name: "交通事故No.586"}, {lat: 35.770304, lng: 139.773663, name: "交通事故No.587"}, {lat: 35.765182, lng: 139.803544, name: "交通事故No.588"}, {lat: 35.772034, lng: 139.786447, name: "交通事故No.589"}, {lat: 35.754605, lng: 139.769779, name: "交通事故No.590"}, {lat: 35.773569, lng: 139.773734, name: "交通事故No.591"}, {lat: 35.753524, lng: 139.769737, name: "交通事故No.592"}, {lat: 35.785197, lng: 139.817926, name: "交通事故No.593"}, {lat: 35.770318, lng: 139.806710, name: "交通事故No.594"}, {lat: 35.776884, lng: 139.803789, name: "交通事故No.595"}, {lat: 35.774629, lng: 139.806681, name: "交通事故No.596"}, {lat: 35.773030, lng: 139.832739, name: "交通事故No.597"}, {lat: 35.769874, lng: 139.806533, name: "交通事故No.598"}, {lat: 35.770731, lng: 139.816972, name: "交通事故No.599"}, {lat: 35.793506, lng: 139.806603, name: "交通事故No.601"}
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



