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


　追加され続けることを防ぐjs
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
    {lat: 35.9602, lng: 139.7891, name: "地点C"},
    {lat: 35.4106, lng: 139.4413, name: "2691"},
    {lat: 35.4024383, lng: 139.4542867, name: "2696"},
    {lat: 35.4054361, lng: 139.4547890, name: "2701"},
    {lat: 354030427, lng: 1394550290, name: "2704"}, {lat: 354121817, lng: 1394538114, name: "2707"}, {lat: 354126848, lng: 1394556822, name: "2717"}, {lat: 354121622, lng: 1394605701, name: "2718"}, {lat: 354149465, lng: 1394533843, name: "2725"}, {lat: 354130133, lng: 1394532117, name: "2726"}, {lat: 354136387, lng: 1394621385, name: "2728"}, {lat: 354026908, lng: 1394635365, name: "2735"}, {lat: 354055017, lng: 1394618311, name: "2736"}, {lat: 354035943, lng: 1394634487, name: "2738"}, {lat: 354045511, lng: 1394617213, name: "2754"}, {lat: 354029751, lng: 1394620884, name: "2756"}, {lat: 354056223, lng: 1394654307, name: "2758"}, {lat: 354009449, lng: 1394559917, name: "2769"}, {lat: 354030094, lng: 1394603764, name: "2773"}, {lat: 354004740, lng: 1394635735, name: "2775"}, {lat: 354010444, lng: 1394609674, name: "2784"}, {lat: 354019419, lng: 1394550662, name: "2785"}, {lat: 354008173, lng: 1394706900, name: "2788"}, {lat: 353931815, lng: 1394628439, name: "2791"}, {lat: 353952295, lng: 1394528462, name: "2799"}, {lat: 353944964, lng: 1394525611, name: "2813"}, {lat: 353941216, lng: 1394501184, name: "2816"}, {lat: 353934944, lng: 1394531181, name: "2817"}, {lat: 353850532, lng: 1394437015, name: "2822"}, {lat: 353830331, lng: 1394310992, name: "2832"}, {lat: 353807195, lng: 1394404361, name: "2833"}, {lat: 353807739, lng: 1394405838, name: "2835"}, {lat: 353827171, lng: 1394358152, name: "2844"}, {lat: 353945811, lng: 1394402576, name: "2850"}, {lat: 353910187, lng: 1394320137, name: "2852"}, {lat: 353916993, lng: 1394442847, name: "2853"}, {lat: 353948205, lng: 1394401616, name: "2860"}, {lat: 353937867, lng: 1394340765, name: "2862"}, {lat: 353946241, lng: 1394347674, name: "2868"}, {lat: 353903763, lng: 1394324953, name: "2870"}, {lat: 353859797, lng: 1394411690, name: "2872"}, {lat: 354034764, lng: 1394410989, name: "2879"}, {lat: 354023082, lng: 1394416700, name: "2880"}, {lat: 354024224, lng: 1394421802, name: "2889"}, {lat: 354009046, lng: 1394413941, name: "2891"}, {lat: 354009868, lng: 1394429042, name: "2895"}, {lat: 354022778, lng: 1394416496, name: "2896"}, {lat: 353528675, lng: 1394627870, name: "2904"}, {lat: 353633246, lng: 1394520946, name: "2911"}, {lat: 353732954, lng: 1394640278, name: "2915"}, {lat: 353755247, lng: 1394742675, name: "2925"}, {lat: 353651160, lng: 1394424892, name: "2931"}, {lat: 353710362, lng: 1394501645, name: "2938"}, {lat: 353643920, lng: 1394424922, name: "2939"}, {lat: 353637871, lng: 1394341189, name: "2944"}, {lat: 353625563, lng: 1394450123, name: "2945"}, {lat: 353550047, lng: 1394436691, name: "2955"}, {lat: 353550245, lng: 1394412634, name: "2957"}, {lat: 353600679, lng: 1394443879, name: "2959"}, {lat: 353554159, lng: 1394417267, name: "2961"}, {lat: 353755346, lng: 1394313929, name: "2972"}, {lat: 353720455, lng: 1394316643, name: "2973"}, {lat: 353729389, lng: 1394323095, name: "2974"}, {lat: 353733920, lng: 1394328411, name: "2980"}, {lat: 353728232, lng: 1394235872, name: "2981"}, {lat: 353621748, lng: 1394249189, name: "2987"}, {lat: 353658488, lng: 1394244600, name: "2998"}, {lat: 353442169, lng: 1394355851, name: "3005"}, {lat: 353456346, lng: 1394454633, name: "3007"}, {lat: 353505060, lng: 1394407632, name: "3017"}, {lat: 353532541, lng: 1394345284, name: "3018"}, {lat: 353403327, lng: 1394335818, name: "3024"}, {lat: 353443578, lng: 1394306510, name: "3025"}, {lat: 353509296, lng: 1394332878, name: "3026"}, {lat: 353530682, lng: 1394319465, name: "3034"}, {lat: 353513511, lng: 1394347422, name: "3041"}, {lat: 353619223, lng: 1394115344, name: "3048"}, {lat: 353532498, lng: 1393926022, name: "3052"}, {lat: 353248456, lng: 1394333557, name: "3058"}, {lat: 353244528, lng: 1394318818, name: "3067"}, {lat: 353324791, lng: 1394236246, name: "3078"}, {lat: 353327067, lng: 1394329290, name: "3079"}, {lat: 353502485, lng: 1394237997, name: "3089"}, {lat: 353507017, lng: 1394311986, name: "3102"}, {lat: 353823662, lng: 1393940205, name: "3114"}, {lat: 353811919, lng: 1393911343, name: "3126"}, {lat: 353859429, lng: 1394026957, name: "3128"}, {lat: 353830050, lng: 1393853699, name: "3130"}, {lat: 353754157, lng: 1393929908, name: "3136"}, {lat: 353758739, lng: 1393940348, name: "3137"}, {lat: 353824624, lng: 1393818003, name: "3138"}, {lat: 353832939, lng: 1394007452, name: "3142"}, {lat: 353834624, lng: 1394003052, name: "3150"}, {lat: 353852205, lng: 1393809409, name: "3156"}, {lat: 353929808, lng: 1393921002, name: "3158"}, {lat: 354013565, lng: 1393939376, name: "3167"}, {lat: 353854045, lng: 1393736438, name: "3170"}, {lat: 353955524, lng: 1394012524, name: "3172"}, {lat: 353920377, lng: 1394010880, name: "3183"}, {lat: 353925639, lng: 1393833974, name: "3184"}, {lat: 353934293, lng: 1394002634, name: "3186"}, {lat: 353913168, lng: 1393833772, name: "3188"}, {lat: 353736029, lng: 1393810671, name: "3198"}, {lat: 353635872, lng: 1393944518, name: "3208"}, {lat: 353632376, lng: 1393850599, name: "3210"}, {lat: 353733088, lng: 1393920294, name: "3213"}, {lat: 353612152, lng: 1393910283, name: "3217"}, {lat: 353717540, lng: 1393749421, name: "3221"}, {lat: 353625057, lng: 1393812203, name: "3224"}, {lat: 353826869, lng: 1393702885, name: "3244"}, {lat: 353926099, lng: 1393713694, name: "3245"}, {lat: 353754230, lng: 1393613171, name: "3261"}, {lat: 353920403, lng: 1393600744, name: "3266"}, {lat: 353832340, lng: 1393631538, name: "3267"}, {lat: 354018689, lng: 1393600569, name: "3270"}, {lat: 354008399, lng: 1393716974, name: "3272"}, {lat: 353838886, lng: 1393649425, name: "3277"}, {lat: 353836589, lng: 1393543644, name: "3280"}, {lat: 353832323, lng: 1393631572, name: "3285"}, {lat: 353832998, lng: 1393647409, name: "3286"}, {lat: 353805353, lng: 1393647739, name: "3293"}, {lat: 353814796, lng: 1394130575, name: "3306"}, {lat: 353909649, lng: 1394119382, name: "3307"}, {lat: 353850219, lng: 1394135932, name: "3308"}, {lat: 353842965, lng: 1394156332, name: "3318"}, {lat: 353828401, lng: 1394144099, name: "3319"}, {lat: 353758579, lng: 1394248682, name: "3320"}, {lat: 353722899, lng: 1394105752, name: "3322"}, {lat: 353642450, lng: 1394108998, name: "3325"}, {lat: 353737042, lng: 1394103603, name: "3334"}, {lat: 353647313, lng: 1393959698, name: "3335"}, {lat: 353701496, lng: 1394051943, name: "3346"}, {lat: 353731847, lng: 1394006913, name: "3347"}, {lat: 353932309, lng: 1394159626, name: "3350"}, {lat: 353929911, lng: 1394143918, name: "3351"}, {lat: 353920586, lng: 1394151435, name: "3354"}, {lat: 353910579, lng: 1394318057, name: "3359"}, {lat: 353901713, lng: 1394244243, name: "3361"}, {lat: 354049204, lng: 1394205786, name: "3363"}, {lat: 354112689, lng: 1394210835, name: "3369"}, {lat: 354006428, lng: 1394219953, name: "3370"}, {lat: 354048872, lng: 1394213305, name: "3373"}, {lat: 354035413, lng: 1394245062, name: "3374"}, {lat: 354059255, lng: 1394157854, name: "3377"}, {lat: 354007371, lng: 1394219683, name: "3378"}, {lat: 354113186, lng: 1394148323, name: "3379"}, {lat: 353946608, lng: 1394114944, name: "3384"}, {lat: 354029888, lng: 1393947398, name: "3390"}, {lat: 354201689, lng: 1394434051, name: "3406"}, {lat: 354214765, lng: 1394439163, name: "3407"}, {lat: 354133026, lng: 1394319022, name: "3411"}, {lat: 354159731, lng: 1394359491, name: "3412"}, {lat: 354133967, lng: 1394140046, name: "3416"}, {lat: 354153209, lng: 1394226779, name: "3417"}, {lat: 354149767, lng: 1394208159, name: "3419"}, {lat: 354147914, lng: 1394213333, name: "3420"}, {lat: 354210534, lng: 1394142199, name: "3422"}, {lat: 354316610, lng: 1394053195, name: "3426"}, {lat: 354321276, lng: 1394100550, name: "3434"}, {lat: 354249811, lng: 1394152533, name: "3436"}, {lat: 354114699, lng: 1394254414, name: "3438"}, {lat: 354108409, lng: 1394346065, name: "3443"}, {lat: 354053429, lng: 1394309421, name: "3451"}, {lat: 354115137, lng: 1394255890, name: "3454"}, {lat: 354235483, lng: 1394006421, name: "3456"}, {lat: 354132457, lng: 1394023456, name: "3463"}, {lat: 354208187, lng: 1394033722, name: "3466"}, {lat: 354144704, lng: 1394027467, name: "3469"}, {lat: 354129266, lng: 1394023377, name: "3473"}, {lat: 354310585, lng: 1393947941, name: "3479"}, {lat: 354306643, lng: 1393913849, name: "3487"}, {lat: 354300697, lng: 1394020180, name: "3491"}, {lat: 354258066, lng: 1394017816, name: "3492"}, {lat: 354245221, lng: 1394037589, name: "3496"}, {lat: 354224498, lng: 1393846823, name: "3499"}, {lat: 354119379, lng: 1393919225, name: "3510"}, {lat: 354129692, lng: 1393913266, name: "3521"}, {lat: 354156125, lng: 1393813743, name: "3522"}, {lat: 354225971, lng: 1393922813, name: "3523"}, {lat: 354100604, lng: 1393927696, name: "3531"}, {lat: 354110185, lng: 1393558121, name: "3534"}, {lat: 354119323, lng: 1393659175, name: "3539"}, {lat: 354053155, lng: 1393653555, name: "3545"}, {lat: 354201419, lng: 1393537756, name: "3548"}, {lat: 354053650, lng: 1393730973, name: "3553"}, {lat: 354110612, lng: 1393558281, name: "3563"}, {lat: 354149697, lng: 1393704171, name: "3571"}, {lat: 354219387, lng: 1393710894, name: "3574"}, {lat: 354342884, lng: 1394438642, name: "3593"}, {lat: 354330505, lng: 1394423082, name: "3594"}, {lat: 354316471, lng: 1394508050, name: "3598"}, {lat: 354252971, lng: 1394347369, name: "3601"}, {lat: 354248474, lng: 1394314535, name: "3603"}, {lat: 354305918, lng: 1394402985, name: "3606"}, {lat: 354302511, lng: 1394533001, name: "3613"}, {lat: 354306195, lng: 1394557530, name: "3615"}, {lat: 354316979, lng: 1394538661, name: "3619"}, {lat: 354358820, lng: 1394344122, name: "3629"}, {lat: 354423028, lng: 1394346576, name: "3630"}, {lat: 354408062, lng: 1394417739, name: "3633"}, {lat: 354358443, lng: 1394242254, name: "3639"}, {lat: 354419710, lng: 1394111962, name: "3651"}, {lat: 354334126, lng: 1394055552, name: "3655"}, {lat: 354338484, lng: 1394133925, name: "3657"}, {lat: 354329689, lng: 1394315032, name: "3673"}, {lat: 354316652, lng: 1394225699, name: "3676"}, {lat: 354458827, lng: 1394500277, name: "3677"}, {lat: 354415753, lng: 1394501217, name: "3680"}, {lat: 354443591, lng: 1394422986, name: "3681"}, {lat: 354418133, lng: 1394458985, name: "3683"}, {lat: 354417693, lng: 1394531043, name: "3684"}, {lat: 354427164, lng: 1394444646, name: "3689"}, {lat: 354535411, lng: 1394443552, name: "3692"}, {lat: 354605697, lng: 1394412375, name: "3704"}, {lat: 354648818, lng: 1394217881, name: "3712"}, {lat: 354506769, lng: 1394146018, name: "3713"}, {lat: 354429015, lng: 1394103835, name: "3721"}, {lat: 354455977, lng: 1394148521, name: "3728"}, {lat: 354528595, lng: 1394133279, name: "3731"}, {lat: 354518379, lng: 1394130719, name: "3732"}, {lat: 354426840, lng: 1394107116, name: "3735"}
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
