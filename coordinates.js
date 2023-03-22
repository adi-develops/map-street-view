import * as olProj from 'ol/proj';

// Array of the coordinates and corresponding image files

const coordinates = [
  {
    file_name: "HMTpano_000001_000000.jpg",
    longitude_latitude: [10.93376479, 50.98380407],
  },
  {
    file_name: "HMTpano_000001_000001.jpg",
    longitude_latitude: [10.93377411, 50.98376802],
  },
  {
    file_name: "HMTpano_000001_000002.jpg",
    longitude_latitude: [10.93378524, 50.9837232],
  },
  {
    file_name: "HMTpano_000001_000003.jpg",
    longitude_latitude: [10.93378027, 50.98368124],
  },
  {
    file_name: "HMTpano_000001_000004.jpg",
    longitude_latitude: [10.93373754, 50.98364982],
  },
  {
    file_name: "HMTpano_000001_000005.jpg",
    longitude_latitude: [10.9336743, 50.983634],
  },
  {
    file_name: "HMTpano_000001_000006.jpg",
    longitude_latitude: [10.93361004, 50.98363497],
  },
  {
    file_name: "HMTpano_000001_000007.jpg",
    longitude_latitude: [10.93356273, 50.98366071],
  },
  {
    file_name: "HMTpano_000001_000008.jpg",
    longitude_latitude: [10.93354303, 50.98370195],
  },
  {
    file_name: "HMTpano_000001_000009.jpg",
    longitude_latitude: [10.93353315, 50.98374614],
  },
  {
    file_name: "HMTpano_000002_000000.jpg",
    longitude_latitude: [10.9339256, 50.98411762],
  },
  {
    file_name: "HMTpano_000002_000001.jpg",
    longitude_latitude: [10.93386468, 50.98411187],
  },
  {
    file_name: "HMTpano_000002_000002.jpg",
    longitude_latitude: [10.93379259, 50.98410578],
  },
  {
    file_name: "HMTpano_000002_000003.jpg",
    longitude_latitude: [10.93371997, 50.98410156],
  },
  {
    file_name: "HMTpano_000002_000004.jpg",
    longitude_latitude: [10.93364581, 50.98409901],
  },
  {
    file_name: "HMTpano_000002_000005.jpg",
    longitude_latitude: [10.93357214, 50.98409614],
  },
  {
    file_name: "HMTpano_000002_000006.jpg",
    longitude_latitude: [10.93349849, 50.98409098],
  },
  {
    file_name: "HMTpano_000002_000007.jpg",
    longitude_latitude: [10.93344204, 50.9840548],
  },
  {
    file_name: "HMTpano_000002_000008.jpg",
    longitude_latitude: [10.93343525, 50.9840072],
  },
  {
    file_name: "HMTpano_000002_000009.jpg",
    longitude_latitude: [10.93344392, 50.98396116],
  },
  {
    file_name: "HMTpano_000003_000000.jpg",
    longitude_latitude: [10.93383585, 50.98597698],
  },
  {
    file_name: "HMTpano_000003_000001.jpg",
    longitude_latitude: [10.93381967, 50.98593295],
  },
  {
    file_name: "HMTpano_000003_000002.jpg",
    longitude_latitude: [10.93377728, 50.98590108],
  },
  {
    file_name: "HMTpano_000003_000003.jpg",
    longitude_latitude: [10.9337145, 50.98588882],
  },
  {
    file_name: "HMTpano_000003_000004.jpg",
    longitude_latitude: [10.93364669, 50.98589653],
  },
  {
    file_name: "HMTpano_000003_000005.jpg",
    longitude_latitude: [10.93357972, 50.98591233],
  },
  {
    file_name: "HMTpano_000003_000006.jpg",
    longitude_latitude: [10.93351198, 50.98592856],
  },
  {
    file_name: "HMTpano_000003_000007.jpg",
    longitude_latitude: [10.93344345, 50.98594419],
  },
  {
    file_name: "HMTpano_000003_000008.jpg",
    longitude_latitude: [10.93337456, 50.9859592],
  },
  {
    file_name: "HMTpano_000003_000009.jpg",
    longitude_latitude: [10.93330475, 50.98597258],
  },
  {
    file_name: "HMTpano_000003_000010.jpg",
    longitude_latitude: [10.93323421, 50.98598401],
  },
  {
    file_name: "HMTpano_000003_000011.jpg",
    longitude_latitude: [10.93316246, 50.98599369],
  },
  {
    file_name: "HMTpano_000003_000012.jpg",
    longitude_latitude: [10.93309218, 50.98600267],
  },
  {
    file_name: "HMTpano_000003_000013.jpg",
    longitude_latitude: [10.93302037, 50.9860115],
  },
  {
    file_name: "HMTpano_000003_000014.jpg",
    longitude_latitude: [10.93294884, 50.98602003],
  },
  {
    file_name: "HMTpano_000003_000015.jpg",
    longitude_latitude: [10.93287742, 50.98602813],
  },
  {
    file_name: "HMTpano_000003_000016.jpg",
    longitude_latitude: [10.93280589, 50.98603551],
  },
  {
    file_name: "HMTpano_000003_000017.jpg",
    longitude_latitude: [10.93273478, 50.98604261],
  },
  {
    file_name: "HMTpano_000003_000018.jpg",
    longitude_latitude: [10.93266354, 50.98604912],
  },
  {
    file_name: "HMTpano_000003_000019.jpg",
    longitude_latitude: [10.93259533, 50.98605825],
  },
  {
    file_name: "HMTpano_000003_000020.jpg",
    longitude_latitude: [10.93252384, 50.98606912],
  },
  {
    file_name: "HMTpano_000003_000021.jpg",
    longitude_latitude: [10.93245293, 50.98607916],
  },
  {
    file_name: "HMTpano_000003_000022.jpg",
    longitude_latitude: [10.93238138, 50.98608631],
  },
  {
    file_name: "HMTpano_000003_000023.jpg",
    longitude_latitude: [10.93230564, 50.98608552],
  },
  {
    file_name: "HMTpano_000003_000024.jpg",
    longitude_latitude: [10.93223396, 50.98606759],
  },
  {
    file_name: "HMTpano_000003_000025.jpg",
    longitude_latitude: [10.93218343, 50.98602972],
  },
  {
    file_name: "HMTpano_000003_000026.jpg",
    longitude_latitude: [10.93217004, 50.98598223],
  },
  {
    file_name: "HMTpano_000003_000027.jpg",
    longitude_latitude: [10.93217983, 50.98593634],
  },
  {
    file_name: "HMTpano_000003_000028.jpg",
    longitude_latitude: [10.93219376, 50.98589183],
  },
  {
    file_name: "HMTpano_000003_000029.jpg",
    longitude_latitude: [10.93220689, 50.98584709],
  },
  {
    file_name: "HMTpano_000003_000030.jpg",
    longitude_latitude: [10.93221738, 50.98580189],
  },
  {
    file_name: "HMTpano_000003_000031.jpg",
    longitude_latitude: [10.93222566, 50.98575627],
  },
  {
    file_name: "HMTpano_000003_000032.jpg",
    longitude_latitude: [10.93223125, 50.98571098],
  },
  {
    file_name: "HMTpano_000003_000033.jpg",
    longitude_latitude: [10.93223474, 50.98566522],
  },
  {
    file_name: "HMTpano_000003_000034.jpg",
    longitude_latitude: [10.93223741, 50.9856196],
  },
  {
    file_name: "HMTpano_000003_000035.jpg",
    longitude_latitude: [10.93224019, 50.98557358],
  },
  {
    file_name: "HMTpano_000003_000036.jpg",
    longitude_latitude: [10.93224208, 50.98552827],
  },
  {
    file_name: "HMTpano_000003_000037.jpg",
    longitude_latitude: [10.93224295, 50.98548212],
  },
  {
    file_name: "HMTpano_000003_000038.jpg",
    longitude_latitude: [10.93224282, 50.9854361],
  },
  {
    file_name: "HMTpano_000003_000039.jpg",
    longitude_latitude: [10.9322411, 50.98539062],
  },
  {
    file_name: "HMTpano_000003_000040.jpg",
    longitude_latitude: [10.93223776, 50.98534494],
  },
  {
    file_name: "HMTpano_000003_000041.jpg",
    longitude_latitude: [10.93223371, 50.98529944],
  },
  {
    file_name: "HMTpano_000003_000042.jpg",
    longitude_latitude: [10.93222881, 50.98525308],
  },
  {
    file_name: "HMTpano_000003_000043.jpg",
    longitude_latitude: [10.93222325, 50.98520705],
  },
  {
    file_name: "HMTpano_000003_000044.jpg",
    longitude_latitude: [10.93221728, 50.98516105],
  },
  {
    file_name: "HMTpano_000003_000045.jpg",
    longitude_latitude: [10.9322112, 50.98511514],
  },
  {
    file_name: "HMTpano_000003_000046.jpg",
    longitude_latitude: [10.93220473, 50.98506935],
  },
  {
    file_name: "HMTpano_000003_000047.jpg",
    longitude_latitude: [10.93219823, 50.98502362],
  },
  {
    file_name: "HMTpano_000003_000048.jpg",
    longitude_latitude: [10.93219196, 50.98497795],
  },
  {
    file_name: "HMTpano_000003_000049.jpg",
    longitude_latitude: [10.9321861, 50.98493216],
  },
  {
    file_name: "HMTpano_000003_000050.jpg",
    longitude_latitude: [10.9321804, 50.98488607],
  },
  {
    file_name: "HMTpano_000003_000051.jpg",
    longitude_latitude: [10.93217456, 50.98483987],
  },
  {
    file_name: "HMTpano_000003_000052.jpg",
    longitude_latitude: [10.93216749, 50.98479353],
  },
  {
    file_name: "HMTpano_000003_000053.jpg",
    longitude_latitude: [10.93215898, 50.98474802],
  },
  {
    file_name: "HMTpano_000003_000054.jpg",
    longitude_latitude: [10.93214913, 50.98470237],
  },
  {
    file_name: "HMTpano_000003_000055.jpg",
    longitude_latitude: [10.9321378, 50.98465676],
  },
  {
    file_name: "HMTpano_000003_000056.jpg",
    longitude_latitude: [10.93212507, 50.98461134],
  },
  {
    file_name: "HMTpano_000003_000057.jpg",
    longitude_latitude: [10.9321109, 50.98456626],
  },
  {
    file_name: "HMTpano_000003_000058.jpg",
    longitude_latitude: [10.93209605, 50.98452195],
  },
  {
    file_name: "HMTpano_000003_000059.jpg",
    longitude_latitude: [10.93208192, 50.98447796],
  },
  {
    file_name: "HMTpano_000003_000060.jpg",
    longitude_latitude: [10.93206783, 50.98443256],
  },
  {
    file_name: "HMTpano_000003_000061.jpg",
    longitude_latitude: [10.9320543, 50.9843874],
  },
  {
    file_name: "HMTpano_000003_000062.jpg",
    longitude_latitude: [10.93204238, 50.98434246],
  },
  {
    file_name: "HMTpano_000003_000063.jpg",
    longitude_latitude: [10.93203193, 50.98429722],
  },
  {
    file_name: "HMTpano_000003_000064.jpg",
    longitude_latitude: [10.93202402, 50.98425226],
  },
  {
    file_name: "HMTpano_000003_000065.jpg",
    longitude_latitude: [10.93201543, 50.98420748],
  },
  {
    file_name: "HMTpano_000003_000066.jpg",
    longitude_latitude: [10.932, 50.98416409],
  },
  {
    file_name: "HMTpano_000003_000067.jpg",
    longitude_latitude: [10.93197378, 50.98412333],
  },
  {
    file_name: "HMTpano_000003_000068.jpg",
    longitude_latitude: [10.9319353, 50.98408668],
  },
  {
    file_name: "HMTpano_000003_000069.jpg",
    longitude_latitude: [10.9318853, 50.98405535],
  },
  {
    file_name: "HMTpano_000003_000070.jpg",
    longitude_latitude: [10.93182864, 50.98402832],
  },
  {
    file_name: "HMTpano_000003_000071.jpg",
    longitude_latitude: [10.93176769, 50.98400436],
  },
  {
    file_name: "HMTpano_000003_000072.jpg",
    longitude_latitude: [10.93170471, 50.98398221],
  },
  {
    file_name: "HMTpano_000003_000073.jpg",
    longitude_latitude: [10.93163996, 50.98396089],
  },
  {
    file_name: "HMTpano_000003_000074.jpg",
    longitude_latitude: [10.93157532, 50.98394064],
  },
  {
    file_name: "HMTpano_000003_000075.jpg",
    longitude_latitude: [10.93150894, 50.98392087],
  },
  {
    file_name: "HMTpano_000003_000076.jpg",
    longitude_latitude: [10.93144152, 50.98390212],
  },
  {
    file_name: "HMTpano_000003_000077.jpg",
    longitude_latitude: [10.93137386, 50.9838839],
  },
  {
    file_name: "HMTpano_000003_000078.jpg",
    longitude_latitude: [10.93130621, 50.98386598],
  },
  {
    file_name: "HMTpano_000003_000079.jpg",
    longitude_latitude: [10.93123939, 50.98384834],
  },
  {
    file_name: "HMTpano_000003_000080.jpg",
    longitude_latitude: [10.93117217, 50.98382988],
  },
  {
    file_name: "HMTpano_000003_000081.jpg",
    longitude_latitude: [10.93110701, 50.98381056],
  },
  {
    file_name: "HMTpano_000003_000082.jpg",
    longitude_latitude: [10.9310419, 50.98378885],
  },
  {
    file_name: "HMTpano_000003_000083.jpg",
    longitude_latitude: [10.93098006, 50.98376493],
  },
  {
    file_name: "HMTpano_000003_000084.jpg",
    longitude_latitude: [10.93092103, 50.98373774],
  },
  {
    file_name: "HMTpano_000003_000085.jpg",
    longitude_latitude: [10.93086504, 50.98370831],
  },
  {
    file_name: "HMTpano_000003_000086.jpg",
    longitude_latitude: [10.93080903, 50.98367892],
  },
  {
    file_name: "HMTpano_000003_000087.jpg",
    longitude_latitude: [10.93075049, 50.98365325],
  },
  {
    file_name: "HMTpano_000003_000088.jpg",
    longitude_latitude: [10.93068791, 50.9836343],
  },
  {
    file_name: "HMTpano_000003_000089.jpg",
    longitude_latitude: [10.93062152, 50.98362379],
  },
  {
    file_name: "HMTpano_000003_000090.jpg",
    longitude_latitude: [10.93055115, 50.98362255],
  },
  {
    file_name: "HMTpano_000003_000091.jpg",
    longitude_latitude: [10.93048112, 50.9836284],
  },
  {
    file_name: "HMTpano_000003_000092.jpg",
    longitude_latitude: [10.93041024, 50.98363757],
  },
  {
    file_name: "HMTpano_000003_000093.jpg",
    longitude_latitude: [10.93033966, 50.98364666],
  },
  {
    file_name: "HMTpano_000003_000094.jpg",
    longitude_latitude: [10.9302683, 50.98365564],
  },
  {
    file_name: "HMTpano_000003_000095.jpg",
    longitude_latitude: [10.93019764, 50.98366414],
  },
  {
    file_name: "HMTpano_000003_000096.jpg",
    longitude_latitude: [10.9301256, 50.98367234],
  },
  {
    file_name: "HMTpano_000003_000097.jpg",
    longitude_latitude: [10.93005565, 50.98368023],
  },
  {
    file_name: "HMTpano_000003_000098.jpg",
    longitude_latitude: [10.92998418, 50.98368836],
  },
  {
    file_name: "HMTpano_000003_000099.jpg",
    longitude_latitude: [10.92991291, 50.98369646],
  },
  {
    file_name: "HMTpano_000003_000100.jpg",
    longitude_latitude: [10.92984192, 50.98370457],
  },
  {
    file_name: "HMTpano_000003_000101.jpg",
    longitude_latitude: [10.92977139, 50.9837126],
  },
  {
    file_name: "HMTpano_000003_000102.jpg",
    longitude_latitude: [10.92970078, 50.98372057],
  },
  {
    file_name: "HMTpano_000003_000103.jpg",
    longitude_latitude: [10.92963004, 50.98372849],
  },
  {
    file_name: "HMTpano_000003_000104.jpg",
    longitude_latitude: [10.92956013, 50.98373625],
  },
  {
    file_name: "HMTpano_000003_000105.jpg",
    longitude_latitude: [10.92948977, 50.98374283],
  },
  {
    file_name: "HMTpano_000003_000106.jpg",
    longitude_latitude: [10.92941833, 50.98374844],
  },
  {
    file_name: "HMTpano_000003_000107.jpg",
    longitude_latitude: [10.92934685, 50.9837532],
  },
  {
    file_name: "HMTpano_000003_000108.jpg",
    longitude_latitude: [10.92927489, 50.98375771],
  },
  {
    file_name: "HMTpano_000003_000109.jpg",
    longitude_latitude: [10.92920246, 50.98376202],
  },
  {
    file_name: "HMTpano_000003_000110.jpg",
    longitude_latitude: [10.92912979, 50.98376538],
  },
  {
    file_name: "HMTpano_000003_000111.jpg",
    longitude_latitude: [10.92905772, 50.9837682],
  },
  {
    file_name: "HMTpano_000003_000112.jpg",
    longitude_latitude: [10.92898645, 50.98377085],
  },
  {
    file_name: "HMTpano_000003_000113.jpg",
    longitude_latitude: [10.92891707, 50.98377633],
  },
  {
    file_name: "HMTpano_000003_000114.jpg",
    longitude_latitude: [10.92885526, 50.9837931],
  },
  {
    file_name: "HMTpano_000003_000115.jpg",
    longitude_latitude: [10.92880896, 50.98382438],
  },
  {
    file_name: "HMTpano_000003_000116.jpg",
    longitude_latitude: [10.92877712, 50.98386381],
  },
  {
    file_name: "HMTpano_000003_000117.jpg",
    longitude_latitude: [10.92874804, 50.98390584],
  },
  {
    file_name: "HMTpano_000003_000118.jpg",
    longitude_latitude: [10.92871845, 50.98394788],
  },
  {
    file_name: "HMTpano_000003_000119.jpg",
    longitude_latitude: [10.92868838, 50.98398984],
  },
  {
    file_name: "HMTpano_000003_000120.jpg",
    longitude_latitude: [10.92865757, 50.98403156],
  },
  {
    file_name: "HMTpano_000003_000121.jpg",
    longitude_latitude: [10.92862605, 50.98407352],
  },
  {
    file_name: "HMTpano_000003_000122.jpg",
    longitude_latitude: [10.92859448, 50.98411526],
  },
  {
    file_name: "HMTpano_000003_000123.jpg",
    longitude_latitude: [10.92856333, 50.98415613],
  },
  {
    file_name: "HMTpano_000003_000124.jpg",
    longitude_latitude: [10.92853199, 50.98419685],
  },
  {
    file_name: "HMTpano_000003_000125.jpg",
    longitude_latitude: [10.92849992, 50.98423773],
  },
  {
    file_name: "HMTpano_000003_000126.jpg",
    longitude_latitude: [10.92846804, 50.98427863],
  },
  {
    file_name: "HMTpano_000003_000127.jpg",
    longitude_latitude: [10.9284361, 50.98431936],
  },
  {
    file_name: "HMTpano_000003_000128.jpg",
    longitude_latitude: [10.92840427, 50.98436015],
  },
  {
    file_name: "HMTpano_000003_000129.jpg",
    longitude_latitude: [10.92837204, 50.98440099],
  },
  {
    file_name: "HMTpano_000003_000130.jpg",
    longitude_latitude: [10.92833809, 50.98444182],
  },
  {
    file_name: "HMTpano_000003_000131.jpg",
    longitude_latitude: [10.92830319, 50.98448142],
  },
  {
    file_name: "HMTpano_000003_000132.jpg",
    longitude_latitude: [10.92826687, 50.98452162],
  },
  {
    file_name: "HMTpano_000003_000133.jpg",
    longitude_latitude: [10.9282318, 50.98456177],
  },
  {
    file_name: "HMTpano_000003_000134.jpg",
    longitude_latitude: [10.92819672, 50.98460195],
  },
  {
    file_name: "HMTpano_000003_000135.jpg",
    longitude_latitude: [10.92816453, 50.98464228],
  },
  {
    file_name: "HMTpano_000003_000136.jpg",
    longitude_latitude: [10.92813345, 50.98468399],
  },
  {
    file_name: "HMTpano_000003_000137.jpg",
    longitude_latitude: [10.92810521, 50.98472567],
  },
  {
    file_name: "HMTpano_000003_000138.jpg",
    longitude_latitude: [10.92807954, 50.98476764],
  },
  {
    file_name: "HMTpano_000003_000139.jpg",
    longitude_latitude: [10.92805561, 50.9848106],
  },
  {
    file_name: "HMTpano_000003_000140.jpg",
    longitude_latitude: [10.92803122, 50.98485365],
  },
  {
    file_name: "HMTpano_000003_000141.jpg",
    longitude_latitude: [10.92800556, 50.98489617],
  },
  {
    file_name: "HMTpano_000003_000142.jpg",
    longitude_latitude: [10.92797826, 50.98493832],
  },
  {
    file_name: "HMTpano_000003_000143.jpg",
    longitude_latitude: [10.92794863, 50.9849801],
  },
  {
    file_name: "HMTpano_000003_000144.jpg",
    longitude_latitude: [10.92791042, 50.98501945],
  },
  {
    file_name: "HMTpano_000003_000145.jpg",
    longitude_latitude: [10.92786588, 50.98505436],
  },
  {
    file_name: "HMTpano_000003_000146.jpg",
    longitude_latitude: [10.92783904, 50.98509367],
  },
  {
    file_name: "HMTpano_000004_000000.jpg",
    longitude_latitude: [10.9276844, 50.9843059],
  },
  {
    file_name: "HMTpano_000004_000001.jpg",
    longitude_latitude: [10.92774643, 50.98428165],
  },
  {
    file_name: "HMTpano_000004_000002.jpg",
    longitude_latitude: [10.92781987, 50.98427048],
  },
  {
    file_name: "HMTpano_000004_000003.jpg",
    longitude_latitude: [10.927894, 50.98427811],
  },
  {
    file_name: "HMTpano_000004_000004.jpg",
    longitude_latitude: [10.92796173, 50.98429475],
  },
  {
    file_name: "HMTpano_000004_000005.jpg",
    longitude_latitude: [10.92802899, 50.98431286],
  },
  {
    file_name: "HMTpano_000004_000006.jpg",
    longitude_latitude: [10.92809578, 50.98433095],
  },
  {
    file_name: "HMTpano_000004_000007.jpg",
    longitude_latitude: [10.92816228, 50.98434927],
  },
  {
    file_name: "HMTpano_000004_000008.jpg",
    longitude_latitude: [10.92822689, 50.98437011],
  },
  {
    file_name: "HMTpano_000004_000009.jpg",
    longitude_latitude: [10.92829093, 50.98438595],
  },
  {
    file_name: "HMTpano_000004_000010.jpg",
    longitude_latitude: [10.92835441, 50.98438116],
  },
  {
    file_name: "HMTpano_000004_000011.jpg",
    longitude_latitude: [10.92840474, 50.9843532],
  },
  {
    file_name: "HMTpano_000004_000012.jpg",
    longitude_latitude: [10.92844083, 50.98431505],
  },
  {
    file_name: "HMTpano_000004_000013.jpg",
    longitude_latitude: [10.92847148, 50.98427378],
  },
  {
    file_name: "HMTpano_000005_000000.jpg",
    longitude_latitude: [10.92840063, 50.98375112],
  },
  {
    file_name: "HMTpano_000005_000001.jpg",
    longitude_latitude: [10.92843041, 50.98375496],
  },
  {
    file_name: "HMTpano_000005_000002.jpg",
    longitude_latitude: [10.92850142, 50.98376365],
  },
  {
    file_name: "HMTpano_000005_000003.jpg",
    longitude_latitude: [10.92857291, 50.98377121],
  },
  {
    file_name: "HMTpano_000005_000004.jpg",
    longitude_latitude: [10.92864394, 50.98377665],
  },
  {
    file_name: "HMTpano_000005_000005.jpg",
    longitude_latitude: [10.9287157, 50.9837799],
  },
  {
    file_name: "HMTpano_000005_000006.jpg",
    longitude_latitude: [10.92878745, 50.98378064],
  },
  {
    file_name: "HMTpano_000005_000007.jpg",
    longitude_latitude: [10.92885952, 50.98377934],
  },
  {
    file_name: "HMTpano_000005_000008.jpg",
    longitude_latitude: [10.92893196, 50.9837767],
  },
  {
    file_name: "HMTpano_000005_000009.jpg",
    longitude_latitude: [10.92900438, 50.98377371],
  },
  {
    file_name: "HMTpano_000006_000000.jpg",
    longitude_latitude: [10.9294241, 50.98375006],
  },
  {
    file_name: "HMTpano_000006_000001.jpg",
    longitude_latitude: [10.92947686, 50.98373377],
  },
  {
    file_name: "HMTpano_000006_000002.jpg",
    longitude_latitude: [10.9295235, 50.98370258],
  },
  {
    file_name: "HMTpano_000006_000003.jpg",
    longitude_latitude: [10.92954944, 50.98366234],
  },
  {
    file_name: "HMTpano_000006_000004.jpg",
    longitude_latitude: [10.92956385, 50.98361816],
  },
  {
    file_name: "HMTpano_000006_000005.jpg",
    longitude_latitude: [10.92957601, 50.98357328],
  },
  {
    file_name: "HMTpano_000006_000006.jpg",
    longitude_latitude: [10.92958866, 50.98352787],
  },
  {
    file_name: "HMTpano_000006_000007.jpg",
    longitude_latitude: [10.92960208, 50.98348301],
  },
  {
    file_name: "HMTpano_000006_000008.jpg",
    longitude_latitude: [10.9296162, 50.98343846],
  },
  {
    file_name: "HMTpano_000006_000009.jpg",
    longitude_latitude: [10.92963135, 50.98339397],
  },
  {
    file_name: "HMTpano_000006_000010.jpg",
    longitude_latitude: [10.92963935, 50.9833508],
  },
  {
    file_name: "HMTpano_000006_000011.jpg",
    longitude_latitude: [10.92962271, 50.98331037],
  },
  {
    file_name: "HMTpano_000006_000012.jpg",
    longitude_latitude: [10.92957335, 50.98328311],
  },
  {
    file_name: "HMTpano_000006_000013.jpg",
    longitude_latitude: [10.92950779, 50.98326841],
  },
  {
    file_name: "HMTpano_000006_000014.jpg",
    longitude_latitude: [10.9294381, 50.9832569],
  },
  {
    file_name: "HMTpano_000006_000015.jpg",
    longitude_latitude: [10.92936928, 50.98324462],
  },
  {
    file_name: "HMTpano_000006_000016.jpg",
    longitude_latitude: [10.92930022, 50.98323313],
  },
  {
    file_name: "HMTpano_000006_000017.jpg",
    longitude_latitude: [10.92923133, 50.98322207],
  },
  {
    file_name: "HMTpano_000006_000018.jpg",
    longitude_latitude: [10.92916093, 50.98321076],
  },
  {
    file_name: "HMTpano_000006_000019.jpg",
    longitude_latitude: [10.92909625, 50.98318181],
  },
  {
    file_name: "HMTpano_000006_000020.jpg",
    longitude_latitude: [10.92912793, 50.98313407],
  },
  {
    file_name: "HMTpano_000007_000000.jpg",
    longitude_latitude: [10.93075254, 50.98364114],
  },
  {
    file_name: "HMTpano_000007_000001.jpg",
    longitude_latitude: [10.93081228, 50.98366564],
  },
  {
    file_name: "HMTpano_000007_000002.jpg",
    longitude_latitude: [10.93086912, 50.98369622],
  },
  {
    file_name: "HMTpano_000007_000003.jpg",
    longitude_latitude: [10.93088053, 50.98374569],
  },
  {
    file_name: "HMTpano_000007_000004.jpg",
    longitude_latitude: [10.93085051, 50.98378759],
  },
  {
    file_name: "HMTpano_000007_000005.jpg",
    longitude_latitude: [10.93082389, 50.9838291],
  },
  {
    file_name: "HMTpano_000007_000006.jpg",
    longitude_latitude: [10.93080172, 50.98387264],
  },
  {
    file_name: "HMTpano_000007_000007.jpg",
    longitude_latitude: [10.93077983, 50.98391607],
  },
  {
    file_name: "HMTpano_000007_000008.jpg",
    longitude_latitude: [10.93075728, 50.98395912],
  },
  {
    file_name: "HMTpano_000007_000009.jpg",
    longitude_latitude: [10.93073485, 50.98400204],
  },
  {
    file_name: "HMTpano_000007_000010.jpg",
    longitude_latitude: [10.93071349, 50.98404456],
  },
  {
    file_name: "HMTpano_000007_000011.jpg",
    longitude_latitude: [10.93069461, 50.98408806],
  },
  {
    file_name: "HMTpano_000008_000000.jpg",
    longitude_latitude: [10.9321166, 50.98453122],
  },
  {
    file_name: "HMTpano_000008_000001.jpg",
    longitude_latitude: [10.9321306, 50.98457064],
  },
  {
    file_name: "HMTpano_000008_000002.jpg",
    longitude_latitude: [10.93213968, 50.98461709],
  },
  {
    file_name: "HMTpano_000008_000003.jpg",
    longitude_latitude: [10.93211314, 50.9846634],
  },
  {
    file_name: "HMTpano_000008_000004.jpg",
    longitude_latitude: [10.93203875, 50.98467868],
  },
  {
    file_name: "HMTpano_000008_000005.jpg",
    longitude_latitude: [10.93196614, 50.98467389],
  },
  {
    file_name: "HMTpano_000008_000006.jpg",
    longitude_latitude: [10.9318948, 50.98466663],
  },
  {
    file_name: "HMTpano_000008_000007.jpg",
    longitude_latitude: [10.93182276, 50.98465919],
  },
  {
    file_name: "HMTpano_000008_000008.jpg",
    longitude_latitude: [10.93175173, 50.98465174],
  },
  {
    file_name: "HMTpano_000008_000009.jpg",
    longitude_latitude: [10.93168024, 50.98464395],
  },
  {
    file_name: "HMTpano_000008_000010.jpg",
    longitude_latitude: [10.93160934, 50.98463593],
  },
  {
    file_name: "HMTpano_000008_000011.jpg",
    longitude_latitude: [10.93153756, 50.98462731],
  },
  {
    file_name: "HMTpano_000008_000012.jpg",
    longitude_latitude: [10.93146723, 50.98461796],
  },
  {
    file_name: "HMTpano_000008_000013.jpg",
    longitude_latitude: [10.93139806, 50.98460935],
  },
  {
    file_name: "HMTpano_000008_000014.jpg",
    longitude_latitude: [10.93133396, 50.9846135],
  },
  {
    file_name: "HMTpano_000008_000015.jpg",
    longitude_latitude: [10.93129337, 50.9846438],
  },
  {
    file_name: "HMTpano_000008_000016.jpg",
    longitude_latitude: [10.9312804, 50.98468658],
  },
  {
    file_name: "HMTpano_000009_000000.jpg",
    longitude_latitude: [10.93142078, 50.98433033],
  },
  {
    file_name: "HMTpano_000009_000001.jpg",
    longitude_latitude: [10.9314039, 50.98437535],
  },
  {
    file_name: "HMTpano_000009_000002.jpg",
    longitude_latitude: [10.93138447, 50.98441957],
  },
  {
    file_name: "HMTpano_000009_000003.jpg",
    longitude_latitude: [10.93136404, 50.98446372],
  },
  {
    file_name: "HMTpano_000009_000004.jpg",
    longitude_latitude: [10.93134371, 50.98450789],
  },
  {
    file_name: "HMTpano_000009_000005.jpg",
    longitude_latitude: [10.93133781, 50.98455047],
  },
  {
    file_name: "HMTpano_000009_000006.jpg",
    longitude_latitude: [10.93136182, 50.9845885],
  },
  {
    file_name: "HMTpano_000009_000007.jpg",
    longitude_latitude: [10.93141639, 50.98461291],
  },
  {
    file_name: "HMTpano_000009_000008.jpg",
    longitude_latitude: [10.93148428, 50.98462428],
  },
  {
    file_name: "HMTpano_000010_000000.jpg",
    longitude_latitude: [10.93222386, 50.98581994],
  },
  {
    file_name: "HMTpano_000010_000001.jpg",
    longitude_latitude: [10.93221898, 50.98586696],
  },
  {
    file_name: "HMTpano_000010_000002.jpg",
    longitude_latitude: [10.93221398, 50.98591231],
  },
  {
    file_name: "HMTpano_000010_000003.jpg",
    longitude_latitude: [10.9322085, 50.98595741],
  },
  {
    file_name: "HMTpano_000010_000004.jpg",
    longitude_latitude: [10.93220259, 50.98600332],
  },
  {
    file_name: "HMTpano_000010_000005.jpg",
    longitude_latitude: [10.93218696, 50.98604926],
  },
  {
    file_name: "HMTpano_000010_000006.jpg",
    longitude_latitude: [10.93215936, 50.98609269],
  },
  {
    file_name: "HMTpano_000010_000007.jpg",
    longitude_latitude: [10.93212161, 50.98613288],
  },
  {
    file_name: "HMTpano_000010_000008.jpg",
    longitude_latitude: [10.93208017, 50.98617084],
  },
  {
    file_name: "HMTpano_000010_000009.jpg",
    longitude_latitude: [10.93203748, 50.98620793],
  },
  {
    file_name: "HMTpano_000010_000010.jpg",
    longitude_latitude: [10.93199365, 50.98624537],
  },
  {
    file_name: "HMTpano_000010_000011.jpg",
    longitude_latitude: [10.93195018, 50.98628219],
  },
  {
    file_name: "HMTpano_000010_000012.jpg",
    longitude_latitude: [10.93190636, 50.98631868],
  },
  {
    file_name: "HMTpano_000010_000013.jpg",
    longitude_latitude: [10.93186277, 50.98635488],
  },
  {
    file_name: "HMTpano_000010_000014.jpg",
    longitude_latitude: [10.93181623, 50.98639022],
  },
  {
    file_name: "HMTpano_000010_000015.jpg",
    longitude_latitude: [10.93175931, 50.98642074],
  },
  {
    file_name: "HMTpano_000010_000016.jpg",
    longitude_latitude: [10.93168892, 50.98643942],
  },
  {
    file_name: "HMTpano_000010_000017.jpg",
    longitude_latitude: [10.93161211, 50.9864413],
  },
  {
    file_name: "HMTpano_000010_000018.jpg",
    longitude_latitude: [10.93153917, 50.98642964],
  },
  {
    file_name: "HMTpano_000010_000019.jpg",
    longitude_latitude: [10.93147202, 50.98640978],
  },
  {
    file_name: "HMTpano_000010_000020.jpg",
    longitude_latitude: [10.93141015, 50.98638547],
  },
  {
    file_name: "HMTpano_000010_000021.jpg",
    longitude_latitude: [10.93135077, 50.98635843],
  },
  {
    file_name: "HMTpano_000010_000022.jpg",
    longitude_latitude: [10.93129251, 50.98633163],
  },
  {
    file_name: "HMTpano_000010_000023.jpg",
    longitude_latitude: [10.93123295, 50.98630629],
  },
  {
    file_name: "HMTpano_000010_000024.jpg",
    longitude_latitude: [10.93117106, 50.98628386],
  },
  {
    file_name: "HMTpano_000010_000025.jpg",
    longitude_latitude: [10.9311055, 50.98626453],
  },
  {
    file_name: "HMTpano_000010_000026.jpg",
    longitude_latitude: [10.93103854, 50.98624894],
  },
  {
    file_name: "HMTpano_000010_000027.jpg",
    longitude_latitude: [10.93096955, 50.98623639],
  },
  {
    file_name: "HMTpano_000010_000028.jpg",
    longitude_latitude: [10.93089943, 50.98622613],
  },
  {
    file_name: "HMTpano_000010_000029.jpg",
    longitude_latitude: [10.93082875, 50.98621718],
  },
  {
    file_name: "HMTpano_000010_000030.jpg",
    longitude_latitude: [10.93075765, 50.98620945],
  },
  {
    file_name: "HMTpano_000010_000031.jpg",
    longitude_latitude: [10.93068614, 50.98620279],
  },
  {
    file_name: "HMTpano_000010_000032.jpg",
    longitude_latitude: [10.93061445, 50.98619788],
  },
  {
    file_name: "HMTpano_000010_000033.jpg",
    longitude_latitude: [10.93054255, 50.98619555],
  },
  {
    file_name: "HMTpano_000010_000034.jpg",
    longitude_latitude: [10.93047166, 50.98619652],
  },
  {
    file_name: "HMTpano_000010_000035.jpg",
    longitude_latitude: [10.9303994, 50.98620051],
  },
  {
    file_name: "HMTpano_000010_000036.jpg",
    longitude_latitude: [10.93032841, 50.9862072],
  },
  {
    file_name: "HMTpano_000010_000037.jpg",
    longitude_latitude: [10.93025687, 50.98621379],
  },
  {
    file_name: "HMTpano_000010_000038.jpg",
    longitude_latitude: [10.93018506, 50.98621966],
  },
  {
    file_name: "HMTpano_000010_000039.jpg",
    longitude_latitude: [10.93011287, 50.98622326],
  },
  {
    file_name: "HMTpano_000010_000040.jpg",
    longitude_latitude: [10.93004006, 50.98622357],
  },
  {
    file_name: "HMTpano_000010_000041.jpg",
    longitude_latitude: [10.92996738, 50.98621997],
  },
  {
    file_name: "HMTpano_000010_000042.jpg",
    longitude_latitude: [10.92989555, 50.9862122],
  },
  {
    file_name: "HMTpano_000010_000043.jpg",
    longitude_latitude: [10.92982504, 50.98620201],
  },
  {
    file_name: "HMTpano_000010_000044.jpg",
    longitude_latitude: [10.92975463, 50.98618967],
  },
  {
    file_name: "HMTpano_000010_000045.jpg",
    longitude_latitude: [10.92968524, 50.98617617],
  },
  {
    file_name: "HMTpano_000010_000046.jpg",
    longitude_latitude: [10.92961662, 50.9861616],
  },
  {
    file_name: "HMTpano_000010_000047.jpg",
    longitude_latitude: [10.92954861, 50.98614578],
  },
  {
    file_name: "HMTpano_000010_000048.jpg",
    longitude_latitude: [10.92948167, 50.9861279],
  },
  {
    file_name: "HMTpano_000010_000049.jpg",
    longitude_latitude: [10.92941674, 50.98610743],
  },
  {
    file_name: "HMTpano_000010_000050.jpg",
    longitude_latitude: [10.92935396, 50.98608431],
  },
  {
    file_name: "HMTpano_000010_000051.jpg",
    longitude_latitude: [10.9292939, 50.98605799],
  },
  {
    file_name: "HMTpano_000010_000052.jpg",
    longitude_latitude: [10.92923796, 50.98602996],
  },
  {
    file_name: "HMTpano_000010_000053.jpg",
    longitude_latitude: [10.9291782, 50.98600961],
  },
  {
    file_name: "HMTpano_000010_000054.jpg",
    longitude_latitude: [10.92911232, 50.98600636],
  },
  {
    file_name: "HMTpano_000010_000055.jpg",
    longitude_latitude: [10.92904948, 50.98602357],
  },
  {
    file_name: "HMTpano_000010_000056.jpg",
    longitude_latitude: [10.92898935, 50.98604898],
  },
  {
    file_name: "HMTpano_000010_000057.jpg",
    longitude_latitude: [10.92892652, 50.98607322],
  },
  {
    file_name: "HMTpano_000010_000058.jpg",
    longitude_latitude: [10.92886005, 50.98609308],
  },
  {
    file_name: "HMTpano_000010_000059.jpg",
    longitude_latitude: [10.92879211, 50.98610872],
  },
  {
    file_name: "HMTpano_000010_000060.jpg",
    longitude_latitude: [10.92872482, 50.98612477],
  },
  {
    file_name: "HMTpano_000010_000061.jpg",
    longitude_latitude: [10.92866061, 50.98614432],
  },
  {
    file_name: "HMTpano_000010_000062.jpg",
    longitude_latitude: [10.92860089, 50.98616808],
  },
  {
    file_name: "HMTpano_000010_000063.jpg",
    longitude_latitude: [10.9285462, 50.98619651],
  },
  {
    file_name: "HMTpano_000010_000064.jpg",
    longitude_latitude: [10.92849683, 50.98622858],
  },
  {
    file_name: "HMTpano_000010_000065.jpg",
    longitude_latitude: [10.9284497, 50.98626327],
  },
  {
    file_name: "HMTpano_000010_000066.jpg",
    longitude_latitude: [10.92840393, 50.98629861],
  },
  {
    file_name: "HMTpano_000010_000067.jpg",
    longitude_latitude: [10.92835851, 50.98633348],
  },
  {
    file_name: "HMTpano_000010_000068.jpg",
    longitude_latitude: [10.92831209, 50.98636838],
  },
  {
    file_name: "HMTpano_000010_000069.jpg",
    longitude_latitude: [10.92826426, 50.98640339],
  },
  {
    file_name: "HMTpano_000010_000070.jpg",
    longitude_latitude: [10.92821595, 50.9864373],
  },
  {
    file_name: "HMTpano_000010_000071.jpg",
    longitude_latitude: [10.92816625, 50.98647054],
  },
  {
    file_name: "HMTpano_000010_000072.jpg",
    longitude_latitude: [10.9281166, 50.98650316],
  },
  {
    file_name: "HMTpano_000010_000073.jpg",
    longitude_latitude: [10.92806771, 50.98653642],
  },
  {
    file_name: "HMTpano_000010_000074.jpg",
    longitude_latitude: [10.92802154, 50.98657162],
  },
  {
    file_name: "HMTpano_000010_000075.jpg",
    longitude_latitude: [10.92797986, 50.98660835],
  },
  {
    file_name: "HMTpano_000010_000076.jpg",
    longitude_latitude: [10.92794272, 50.9866468],
  },
  {
    file_name: "HMTpano_000010_000077.jpg",
    longitude_latitude: [10.92791026, 50.98668759],
  },
  {
    file_name: "HMTpano_000010_000078.jpg",
    longitude_latitude: [10.92788364, 50.98673017],
  },
  {
    file_name: "HMTpano_000010_000079.jpg",
    longitude_latitude: [10.92786221, 50.98677307],
  },
  {
    file_name: "HMTpano_000010_000080.jpg",
    longitude_latitude: [10.92784504, 50.98681674],
  },
  {
    file_name: "HMTpano_000010_000081.jpg",
    longitude_latitude: [10.9278305, 50.98686099],
  },
  {
    file_name: "HMTpano_000010_000082.jpg",
    longitude_latitude: [10.92781724, 50.9869058],
  },
  {
    file_name: "HMTpano_000010_000083.jpg",
    longitude_latitude: [10.92780356, 50.9869507],
  },
  {
    file_name: "HMTpano_000010_000084.jpg",
    longitude_latitude: [10.92778932, 50.98699548],
  },
  {
    file_name: "HMTpano_000010_000085.jpg",
    longitude_latitude: [10.92777483, 50.98704029],
  },
  {
    file_name: "HMTpano_000010_000086.jpg",
    longitude_latitude: [10.92775969, 50.98708467],
  },
  {
    file_name: "HMTpano_000010_000087.jpg",
    longitude_latitude: [10.9277439, 50.9871289],
  },
  {
    file_name: "HMTpano_000010_000088.jpg",
    longitude_latitude: [10.9277278, 50.98717319],
  },
  {
    file_name: "HMTpano_000010_000089.jpg",
    longitude_latitude: [10.92771072, 50.98721693],
  },
  {
    file_name: "HMTpano_000010_000090.jpg",
    longitude_latitude: [10.92769258, 50.98726079],
  },
  {
    file_name: "HMTpano_000010_000091.jpg",
    longitude_latitude: [10.92767394, 50.98730522],
  },
  {
    file_name: "HMTpano_000010_000092.jpg",
    longitude_latitude: [10.9276549, 50.98734955],
  },
  {
    file_name: "HMTpano_000010_000093.jpg",
    longitude_latitude: [10.92763641, 50.98739329],
  },
  {
    file_name: "HMTpano_000010_000094.jpg",
    longitude_latitude: [10.9276188, 50.9874374],
  },
  {
    file_name: "HMTpano_000010_000095.jpg",
    longitude_latitude: [10.92760236, 50.98748231],
  },
  {
    file_name: "HMTpano_000010_000096.jpg",
    longitude_latitude: [10.92758815, 50.98752686],
  },
  {
    file_name: "HMTpano_000010_000097.jpg",
    longitude_latitude: [10.92757649, 50.98757145],
  },
  {
    file_name: "HMTpano_000010_000098.jpg",
    longitude_latitude: [10.92756703, 50.98761601],
  },
  {
    file_name: "HMTpano_000010_000099.jpg",
    longitude_latitude: [10.92755959, 50.98766146],
  },
  {
    file_name: "HMTpano_000010_000100.jpg",
    longitude_latitude: [10.92755361, 50.9877078],
  },
  {
    file_name: "HMTpano_000010_000101.jpg",
    longitude_latitude: [10.9275485, 50.98775351],
  },
  {
    file_name: "HMTpano_000010_000102.jpg",
    longitude_latitude: [10.92754378, 50.98779895],
  },
  {
    file_name: "HMTpano_000010_000103.jpg",
    longitude_latitude: [10.92753986, 50.98784419],
  },
  {
    file_name: "HMTpano_000010_000104.jpg",
    longitude_latitude: [10.92753791, 50.98788969],
  },
  {
    file_name: "HMTpano_000010_000105.jpg",
    longitude_latitude: [10.92754022, 50.98793518],
  },
  {
    file_name: "HMTpano_000010_000106.jpg",
    longitude_latitude: [10.92754898, 50.98798009],
  },
  {
    file_name: "HMTpano_000010_000107.jpg",
    longitude_latitude: [10.92756385, 50.98802427],
  },
  {
    file_name: "HMTpano_000010_000108.jpg",
    longitude_latitude: [10.92758176, 50.98806836],
  },
  {
    file_name: "HMTpano_000010_000109.jpg",
    longitude_latitude: [10.92759944, 50.98811267],
  },
  {
    file_name: "HMTpano_000010_000110.jpg",
    longitude_latitude: [10.92761644, 50.98815681],
  },
  {
    file_name: "HMTpano_000010_000111.jpg",
    longitude_latitude: [10.92763766, 50.98819918],
  },
  {
    file_name: "HMTpano_000010_000112.jpg",
    longitude_latitude: [10.92767411, 50.98823631],
  },
  {
    file_name: "HMTpano_000010_000113.jpg",
    longitude_latitude: [10.92772683, 50.9882634],
  },
  {
    file_name: "HMTpano_000010_000114.jpg",
    longitude_latitude: [10.92779188, 50.98827862],
  },
  {
    file_name: "HMTpano_000010_000115.jpg",
    longitude_latitude: [10.92786224, 50.98828871],
  },
  {
    file_name: "HMTpano_000010_000116.jpg",
    longitude_latitude: [10.9279333, 50.98829778],
  },
  {
    file_name: "HMTpano_000010_000117.jpg",
    longitude_latitude: [10.92800463, 50.98830684],
  },
  {
    file_name: "HMTpano_000010_000118.jpg",
    longitude_latitude: [10.92807577, 50.98831712],
  },
  {
    file_name: "HMTpano_000010_000119.jpg",
    longitude_latitude: [10.92814553, 50.98832994],
  },
  {
    file_name: "HMTpano_000010_000120.jpg",
    longitude_latitude: [10.92821391, 50.98834515],
  },
  {
    file_name: "HMTpano_000010_000121.jpg",
    longitude_latitude: [10.92828159, 50.98836261],
  },
  {
    file_name: "HMTpano_000010_000122.jpg",
    longitude_latitude: [10.92834714, 50.98838123],
  },
  {
    file_name: "HMTpano_000010_000123.jpg",
    longitude_latitude: [10.92841283, 50.9884007],
  },
  {
    file_name: "HMTpano_000010_000124.jpg",
    longitude_latitude: [10.92847882, 50.98842035],
  },
  {
    file_name: "HMTpano_000010_000125.jpg",
    longitude_latitude: [10.92854463, 50.9884401],
  },
  {
    file_name: "HMTpano_000010_000126.jpg",
    longitude_latitude: [10.92861022, 50.98845956],
  },
  {
    file_name: "HMTpano_000010_000127.jpg",
    longitude_latitude: [10.92867558, 50.98847849],
  },
  {
    file_name: "HMTpano_000010_000128.jpg",
    longitude_latitude: [10.9287407, 50.98849698],
  },
  {
    file_name: "HMTpano_000010_000129.jpg",
    longitude_latitude: [10.92880694, 50.98851518],
  },
  {
    file_name: "HMTpano_000010_000130.jpg",
    longitude_latitude: [10.92887354, 50.9885329],
  },
  {
    file_name: "HMTpano_000010_000131.jpg",
    longitude_latitude: [10.92893963, 50.98855043],
  },
  {
    file_name: "HMTpano_000010_000132.jpg",
    longitude_latitude: [10.92900648, 50.98856826],
  },
  {
    file_name: "HMTpano_000010_000133.jpg",
    longitude_latitude: [10.92907272, 50.98858593],
  },
  {
    file_name: "HMTpano_000010_000134.jpg",
    longitude_latitude: [10.92913928, 50.98860337],
  },
  {
    file_name: "HMTpano_000010_000135.jpg",
    longitude_latitude: [10.92920513, 50.98862176],
  },
  {
    file_name: "HMTpano_000010_000136.jpg",
    longitude_latitude: [10.92926945, 50.98864175],
  },
  {
    file_name: "HMTpano_000010_000137.jpg",
    longitude_latitude: [10.9293341, 50.98866205],
  },
  {
    file_name: "HMTpano_000010_000138.jpg",
    longitude_latitude: [10.92939949, 50.98868098],
  },
  {
    file_name: "HMTpano_000010_000139.jpg",
    longitude_latitude: [10.92946626, 50.98869835],
  },
  {
    file_name: "HMTpano_000010_000140.jpg",
    longitude_latitude: [10.9295332, 50.9887138],
  },
  {
    file_name: "HMTpano_000010_000141.jpg",
    longitude_latitude: [10.92960097, 50.98872817],
  },
  {
    file_name: "HMTpano_000010_000142.jpg",
    longitude_latitude: [10.92966929, 50.98874183],
  },
  {
    file_name: "HMTpano_000010_000143.jpg",
    longitude_latitude: [10.92973778, 50.98875501],
  },
  {
    file_name: "HMTpano_000010_000144.jpg",
    longitude_latitude: [10.92980639, 50.98876776],
  },
  {
    file_name: "HMTpano_000010_000145.jpg",
    longitude_latitude: [10.92987469, 50.98878005],
  },
  {
    file_name: "HMTpano_000010_000146.jpg",
    longitude_latitude: [10.92994283, 50.98879187],
  },
  {
    file_name: "HMTpano_000010_000147.jpg",
    longitude_latitude: [10.93001394, 50.9888035],
  },
  {
    file_name: "HMTpano_000010_000148.jpg",
    longitude_latitude: [10.93008476, 50.98881446],
  },
  {
    file_name: "HMTpano_000010_000149.jpg",
    longitude_latitude: [10.93015518, 50.98882543],
  },
  {
    file_name: "HMTpano_000010_000150.jpg",
    longitude_latitude: [10.93022573, 50.9888369],
  },
  {
    file_name: "HMTpano_000010_000151.jpg",
    longitude_latitude: [10.93029639, 50.988849],
  },
  {
    file_name: "HMTpano_000010_000152.jpg",
    longitude_latitude: [10.93036605, 50.9888615],
  },
  {
    file_name: "HMTpano_000010_000153.jpg",
    longitude_latitude: [10.93043659, 50.98887439],
  },
  {
    file_name: "HMTpano_000010_000154.jpg",
    longitude_latitude: [10.9305069, 50.98888712],
  },
  {
    file_name: "HMTpano_000010_000155.jpg",
    longitude_latitude: [10.93057625, 50.98890002],
  },
  {
    file_name: "HMTpano_000010_000156.jpg",
    longitude_latitude: [10.93064432, 50.98891433],
  },
  {
    file_name: "HMTpano_000010_000157.jpg",
    longitude_latitude: [10.93071225, 50.98893076],
  },
  {
    file_name: "HMTpano_000010_000158.jpg",
    longitude_latitude: [10.93077897, 50.98894883],
  },
  {
    file_name: "HMTpano_000010_000159.jpg",
    longitude_latitude: [10.93084437, 50.98896827],
  },
  {
    file_name: "HMTpano_000010_000160.jpg",
    longitude_latitude: [10.93090854, 50.9889887],
  },
  {
    file_name: "HMTpano_000010_000161.jpg",
    longitude_latitude: [10.93097229, 50.98900989],
  },
  {
    file_name: "HMTpano_000010_000162.jpg",
    longitude_latitude: [10.93103598, 50.98903146],
  },
  {
    file_name: "HMTpano_000010_000163.jpg",
    longitude_latitude: [10.93110018, 50.98905041],
  },
  {
    file_name: "HMTpano_000010_000164.jpg",
    longitude_latitude: [10.93116548, 50.98905797],
  },
  {
    file_name: "HMTpano_000010_000165.jpg",
    longitude_latitude: [10.93122615, 50.98904443],
  },
  {
    file_name: "HMTpano_000010_000166.jpg",
    longitude_latitude: [10.93126667, 50.98901054],
  },
  {
    file_name: "HMTpano_000010_000167.jpg",
    longitude_latitude: [10.93129111, 50.98896906],
  },
  {
    file_name: "HMTpano_000010_000168.jpg",
    longitude_latitude: [10.93131143, 50.98892559],
  },
  {
    file_name: "HMTpano_000010_000169.jpg",
    longitude_latitude: [10.93133047, 50.98888156],
  },
  {
    file_name: "HMTpano_000010_000170.jpg",
    longitude_latitude: [10.93134903, 50.98883752],
  },
  {
    file_name: "HMTpano_000010_000171.jpg",
    longitude_latitude: [10.93136642, 50.9887934],
  },
  {
    file_name: "HMTpano_000010_000172.jpg",
    longitude_latitude: [10.93138182, 50.98874886],
  },
  {
    file_name: "HMTpano_000010_000173.jpg",
    longitude_latitude: [10.93139671, 50.98870402],
  },
  {
    file_name: "HMTpano_000010_000174.jpg",
    longitude_latitude: [10.93140779, 50.98866001],
  },
  {
    file_name: "HMTpano_000010_000175.jpg",
    longitude_latitude: [10.93141664, 50.98861443],
  },
  {
    file_name: "HMTpano_000010_000176.jpg",
    longitude_latitude: [10.93142479, 50.98856971],
  },
  {
    file_name: "HMTpano_000010_000177.jpg",
    longitude_latitude: [10.93142982, 50.98852411],
  },
  {
    file_name: "HMTpano_000010_000178.jpg",
    longitude_latitude: [10.93142848, 50.98847916],
  },
  {
    file_name: "HMTpano_000010_000179.jpg",
    longitude_latitude: [10.93142193, 50.98843396],
  },
  {
    file_name: "HMTpano_000010_000180.jpg",
    longitude_latitude: [10.9314142, 50.98838848],
  },
  {
    file_name: "HMTpano_000010_000181.jpg",
    longitude_latitude: [10.93140715, 50.98834309],
  },
  {
    file_name: "HMTpano_000010_000182.jpg",
    longitude_latitude: [10.93140118, 50.9882976],
  },
  {
    file_name: "HMTpano_000010_000183.jpg",
    longitude_latitude: [10.93139713, 50.9882521],
  },
  {
    file_name: "HMTpano_000010_000184.jpg",
    longitude_latitude: [10.93139523, 50.98820692],
  },
  {
    file_name: "HMTpano_000010_000185.jpg",
    longitude_latitude: [10.93139415, 50.9881618],
  },
  {
    file_name: "HMTpano_000010_000186.jpg",
    longitude_latitude: [10.93139303, 50.98811722],
  },
  {
    file_name: "HMTpano_000010_000187.jpg",
    longitude_latitude: [10.93138464, 50.98807378],
  },
  {
    file_name: "HMTpano_000010_000188.jpg",
    longitude_latitude: [10.93136935, 50.98802984],
  },
  {
    file_name: "HMTpano_000010_000189.jpg",
    longitude_latitude: [10.93135711, 50.98798469],
  },
  {
    file_name: "HMTpano_000010_000190.jpg",
    longitude_latitude: [10.93134996, 50.98793918],
  },
  {
    file_name: "HMTpano_000010_000191.jpg",
    longitude_latitude: [10.93134557, 50.9878935],
  },
  {
    file_name: "HMTpano_000010_000192.jpg",
    longitude_latitude: [10.93134235, 50.98784766],
  },
  {
    file_name: "HMTpano_000010_000193.jpg",
    longitude_latitude: [10.93133929, 50.98780229],
  },
  {
    file_name: "HMTpano_000010_000194.jpg",
    longitude_latitude: [10.9313361, 50.9877566],
  },
  {
    file_name: "HMTpano_000010_000195.jpg",
    longitude_latitude: [10.93133308, 50.98771123],
  },
  {
    file_name: "HMTpano_000010_000196.jpg",
    longitude_latitude: [10.93133025, 50.98766595],
  },
  {
    file_name: "HMTpano_000010_000197.jpg",
    longitude_latitude: [10.9313277, 50.98762049],
  },
  {
    file_name: "HMTpano_000010_000198.jpg",
    longitude_latitude: [10.93132579, 50.98757525],
  },
  {
    file_name: "HMTpano_000010_000199.jpg",
    longitude_latitude: [10.93132406, 50.98752953],
  },
  {
    file_name: "HMTpano_000010_000200.jpg",
    longitude_latitude: [10.93132446, 50.98748381],
  },
  {
    file_name: "HMTpano_000010_000201.jpg",
    longitude_latitude: [10.93132981, 50.98743751],
  },
  {
    file_name: "HMTpano_000010_000202.jpg",
    longitude_latitude: [10.93134211, 50.98739177],
  },
  {
    file_name: "HMTpano_000010_000203.jpg",
    longitude_latitude: [10.93136128, 50.9873474],
  },
  {
    file_name: "HMTpano_000010_000204.jpg",
    longitude_latitude: [10.93138594, 50.98730387],
  },
  {
    file_name: "HMTpano_000010_000205.jpg",
    longitude_latitude: [10.9314138, 50.98726124],
  },
  {
    file_name: "HMTpano_000010_000206.jpg",
    longitude_latitude: [10.93144182, 50.98721888],
  },
  {
    file_name: "HMTpano_000010_000207.jpg",
    longitude_latitude: [10.93146838, 50.98717681],
  },
  {
    file_name: "HMTpano_000010_000208.jpg",
    longitude_latitude: [10.93149306, 50.98713445],
  },
  {
    file_name: "HMTpano_000010_000209.jpg",
    longitude_latitude: [10.93151758, 50.98709137],
  },
  {
    file_name: "HMTpano_000010_000210.jpg",
    longitude_latitude: [10.93154159, 50.98704811],
  },
  {
    file_name: "HMTpano_000010_000211.jpg",
    longitude_latitude: [10.9315653, 50.98700518],
  },
  {
    file_name: "HMTpano_000010_000212.jpg",
    longitude_latitude: [10.93158717, 50.98696195],
  },
  {
    file_name: "HMTpano_000010_000213.jpg",
    longitude_latitude: [10.9316066, 50.98691847],
  },
  {
    file_name: "HMTpano_000010_000214.jpg",
    longitude_latitude: [10.93162255, 50.98687443],
  },
  {
    file_name: "HMTpano_000010_000215.jpg",
    longitude_latitude: [10.93163429, 50.98683006],
  },
  {
    file_name: "HMTpano_000010_000216.jpg",
    longitude_latitude: [10.9316395, 50.98678525],
  },
  {
    file_name: "HMTpano_000010_000217.jpg",
    longitude_latitude: [10.93163645, 50.98674042],
  },
  {
    file_name: "HMTpano_000010_000218.jpg",
    longitude_latitude: [10.93162978, 50.98669549],
  },
  {
    file_name: "HMTpano_000010_000219.jpg",
    longitude_latitude: [10.93161668, 50.98665144],
  },
  {
    file_name: "HMTpano_000010_000220.jpg",
    longitude_latitude: [10.9315951, 50.98660904],
  },
  {
    file_name: "HMTpano_000010_000221.jpg",
    longitude_latitude: [10.9315652, 50.98656784],
  },
  {
    file_name: "HMTpano_000010_000222.jpg",
    longitude_latitude: [10.93153907, 50.98652324],
  },
  {
    file_name: "HMTpano_000010_000223.jpg",
    longitude_latitude: [10.93155066, 50.98647428],
  },
  {
    file_name: "HMTpano_000010_000224.jpg",
    longitude_latitude: [10.93161409, 50.98644381],
  },
  {
    file_name: "HMTpano_000010_000225.jpg",
    longitude_latitude: [10.93169212, 50.98645433],
  },
  {
    file_name: "HMTpano_000010_000226.jpg",
    longitude_latitude: [10.93172432, 50.9864993],
  },
  {
    file_name: "HMTpano_000010_000227.jpg",
    longitude_latitude: [10.93170975, 50.98654469],
  },
  {
    file_name: "HMTpano_000010_000228.jpg",
    longitude_latitude: [10.93168779, 50.98658691],
  },
  {
    file_name: "HMTpano_000010_000229.jpg",
    longitude_latitude: [10.93167557, 50.98662989],
  },
  {
    file_name: "HMTpano_000010_000230.jpg",
    longitude_latitude: [10.93167706, 50.98667333],
  },
  {
    file_name: "HMTpano_000010_000231.jpg",
    longitude_latitude: [10.93169451, 50.986715],
  },
  {
    file_name: "HMTpano_000010_000232.jpg",
    longitude_latitude: [10.93173127, 50.98675094],
  },
  {
    file_name: "HMTpano_000010_000233.jpg",
    longitude_latitude: [10.93178478, 50.98677798],
  },
  {
    file_name: "HMTpano_000010_000234.jpg",
    longitude_latitude: [10.93184903, 50.98679604],
  },
  {
    file_name: "HMTpano_000010_000235.jpg",
    longitude_latitude: [10.93191536, 50.98680667],
  },
  {
    file_name: "HMTpano_000010_000236.jpg",
    longitude_latitude: [10.93198306, 50.986807],
  },
  {
    file_name: "HMTpano_000010_000237.jpg",
    longitude_latitude: [10.93205378, 50.98680011],
  },
  {
    file_name: "HMTpano_000010_000238.jpg",
    longitude_latitude: [10.932125, 50.98679383],
  },
  {
    file_name: "HMTpano_000010_000239.jpg",
    longitude_latitude: [10.93219703, 50.98678989],
  },
  {
    file_name: "HMTpano_000010_000240.jpg",
    longitude_latitude: [10.93226945, 50.98678853],
  },
  {
    file_name: "HMTpano_000010_000241.jpg",
    longitude_latitude: [10.9323423, 50.98679078],
  },
  {
    file_name: "HMTpano_000010_000242.jpg",
    longitude_latitude: [10.93241483, 50.98679714],
  },
  {
    file_name: "HMTpano_000010_000243.jpg",
    longitude_latitude: [10.93248558, 50.98680707],
  },
  {
    file_name: "HMTpano_000010_000244.jpg",
    longitude_latitude: [10.932555, 50.98682049],
  },
  {
    file_name: "HMTpano_000010_000245.jpg",
    longitude_latitude: [10.93262237, 50.98683659],
  },
  {
    file_name: "HMTpano_000010_000246.jpg",
    longitude_latitude: [10.93268895, 50.98685421],
  },
  {
    file_name: "HMTpano_000010_000247.jpg",
    longitude_latitude: [10.93275559, 50.98687241],
  },
  {
    file_name: "HMTpano_000010_000248.jpg",
    longitude_latitude: [10.93282194, 50.98689096],
  },
  {
    file_name: "HMTpano_000010_000249.jpg",
    longitude_latitude: [10.93288795, 50.98690974],
  },
  {
    file_name: "HMTpano_000010_000250.jpg",
    longitude_latitude: [10.93295434, 50.98692909],
  },
  {
    file_name: "HMTpano_000010_000251.jpg",
    longitude_latitude: [10.93302052, 50.98694883],
  },
  {
    file_name: "HMTpano_000010_000252.jpg",
    longitude_latitude: [10.933086, 50.98696854],
  },
  {
    file_name: "HMTpano_000010_000253.jpg",
    longitude_latitude: [10.93315135, 50.98698856],
  },
  {
    file_name: "HMTpano_000010_000254.jpg",
    longitude_latitude: [10.93321647, 50.98700896],
  },
  {
    file_name: "HMTpano_000010_000255.jpg",
    longitude_latitude: [10.93328288, 50.98702996],
  },
  {
    file_name: "HMTpano_000010_000256.jpg",
    longitude_latitude: [10.93335004, 50.98705068],
  },
  {
    file_name: "HMTpano_000010_000257.jpg",
    longitude_latitude: [10.93341575, 50.98707082],
  },
  {
    file_name: "HMTpano_000010_000258.jpg",
    longitude_latitude: [10.93348068, 50.98708968],
  },
  {
    file_name: "HMTpano_000010_000259.jpg",
    longitude_latitude: [10.93354919, 50.9871087],
  },
  {
    file_name: "HMTpano_000010_000260.jpg",
    longitude_latitude: [10.93361676, 50.98712653],
  },
  {
    file_name: "HMTpano_000010_000261.jpg",
    longitude_latitude: [10.93368372, 50.98714341],
  },
  {
    file_name: "HMTpano_000010_000262.jpg",
    longitude_latitude: [10.93375227, 50.98716002],
  },
  {
    file_name: "HMTpano_000010_000263.jpg",
    longitude_latitude: [10.93381963, 50.98717587],
  },
  {
    file_name: "HMTpano_000010_000264.jpg",
    longitude_latitude: [10.93388648, 50.98719094],
  },
  {
    file_name: "HMTpano_000010_000265.jpg",
    longitude_latitude: [10.93395465, 50.9872059],
  },
  {
    file_name: "HMTpano_000010_000266.jpg",
    longitude_latitude: [10.93402259, 50.98722037],
  },
  {
    file_name: "HMTpano_000010_000267.jpg",
    longitude_latitude: [10.93409207, 50.98723477],
  },
  {
    file_name: "HMTpano_000010_000268.jpg",
    longitude_latitude: [10.93416276, 50.9872489],
  },
  {
    file_name: "HMTpano_000010_000269.jpg",
    longitude_latitude: [10.93423425, 50.98726308],
  },
  {
    file_name: "HMTpano_000010_000270.jpg",
    longitude_latitude: [10.93430546, 50.98727728],
  },
  {
    file_name: "HMTpano_000010_000271.jpg",
    longitude_latitude: [10.93437585, 50.98729148],
  },
  {
    file_name: "HMTpano_000010_000272.jpg",
    longitude_latitude: [10.93444548, 50.98730576],
  },
  {
    file_name: "HMTpano_000010_000273.jpg",
    longitude_latitude: [10.93451416, 50.98732004],
  },
  {
    file_name: "HMTpano_000010_000274.jpg",
    longitude_latitude: [10.93458206, 50.98733418],
  },
  {
    file_name: "HMTpano_000010_000275.jpg",
    longitude_latitude: [10.93465271, 50.98734893],
  },
  {
    file_name: "HMTpano_000010_000276.jpg",
    longitude_latitude: [10.93472311, 50.9873637],
  },
  {
    file_name: "HMTpano_000010_000277.jpg",
    longitude_latitude: [10.93479362, 50.98737801],
  },
  {
    file_name: "HMTpano_000010_000278.jpg",
    longitude_latitude: [10.93486403, 50.98739162],
  },
  {
    file_name: "HMTpano_000010_000279.jpg",
    longitude_latitude: [10.93493424, 50.98740436],
  },
  {
    file_name: "HMTpano_000010_000280.jpg",
    longitude_latitude: [10.9350043, 50.98741619],
  },
  {
    file_name: "HMTpano_000010_000281.jpg",
    longitude_latitude: [10.9350746, 50.98742715],
  },
  {
    file_name: "HMTpano_000010_000282.jpg",
    longitude_latitude: [10.93514509, 50.98743708],
  },
  {
    file_name: "HMTpano_000010_000283.jpg",
    longitude_latitude: [10.93521657, 50.98744636],
  },
  {
    file_name: "HMTpano_000010_000284.jpg",
    longitude_latitude: [10.93528892, 50.98745509],
  },
  {
    file_name: "HMTpano_000010_000285.jpg",
    longitude_latitude: [10.93536104, 50.98746307],
  },
  {
    file_name: "HMTpano_000010_000286.jpg",
    longitude_latitude: [10.93543173, 50.98747051],
  },
  {
    file_name: "HMTpano_000010_000287.jpg",
    longitude_latitude: [10.93550314, 50.98747791],
  },
  {
    file_name: "HMTpano_000010_000288.jpg",
    longitude_latitude: [10.93557571, 50.98748524],
  },
  {
    file_name: "HMTpano_000010_000289.jpg",
    longitude_latitude: [10.93564897, 50.98749275],
  },
  {
    file_name: "HMTpano_000010_000290.jpg",
    longitude_latitude: [10.93572166, 50.98750104],
  },
  {
    file_name: "HMTpano_000010_000291.jpg",
    longitude_latitude: [10.93579234, 50.98751015],
  },
  {
    file_name: "HMTpano_000010_000292.jpg",
    longitude_latitude: [10.93586419, 50.98752072],
  },
  {
    file_name: "HMTpano_000010_000293.jpg",
    longitude_latitude: [10.93593662, 50.98753251],
  },
  {
    file_name: "HMTpano_000010_000294.jpg",
    longitude_latitude: [10.9360078, 50.98754566],
  },
  {
    file_name: "HMTpano_000010_000295.jpg",
    longitude_latitude: [10.93607665, 50.98755986],
  },
  {
    file_name: "HMTpano_000010_000296.jpg",
    longitude_latitude: [10.93614604, 50.98757535],
  },
  {
    file_name: "HMTpano_000010_000297.jpg",
    longitude_latitude: [10.93621562, 50.98759194],
  },
  {
    file_name: "HMTpano_000010_000298.jpg",
    longitude_latitude: [10.93628566, 50.98760972],
  },
  {
    file_name: "HMTpano_000010_000299.jpg",
    longitude_latitude: [10.93635255, 50.98762701],
  },
  {
    file_name: "HMTpano_000010_000300.jpg",
    longitude_latitude: [10.93641876, 50.98764458],
  },
  {
    file_name: "HMTpano_000010_000301.jpg",
    longitude_latitude: [10.93648571, 50.98766257],
  },
  {
    file_name: "HMTpano_000010_000302.jpg",
    longitude_latitude: [10.93655294, 50.98768072],
  },
  {
    file_name: "HMTpano_000010_000303.jpg",
    longitude_latitude: [10.93662091, 50.98769912],
  },
  {
    file_name: "HMTpano_000010_000304.jpg",
    longitude_latitude: [10.93668923, 50.98771794],
  },
  {
    file_name: "HMTpano_000010_000305.jpg",
    longitude_latitude: [10.93675814, 50.98773661],
  },
  {
    file_name: "HMTpano_000010_000306.jpg",
    longitude_latitude: [10.9368275, 50.98775507],
  },
  {
    file_name: "HMTpano_000010_000307.jpg",
    longitude_latitude: [10.93689475, 50.98777258],
  },
  {
    file_name: "HMTpano_000010_000308.jpg",
    longitude_latitude: [10.9369635, 50.98778985],
  },
  {
    file_name: "HMTpano_000010_000309.jpg",
    longitude_latitude: [10.93702991, 50.98780584],
  },
  {
    file_name: "HMTpano_000010_000310.jpg",
    longitude_latitude: [10.93709673, 50.98782177],
  },
  {
    file_name: "HMTpano_000010_000311.jpg",
    longitude_latitude: [10.9371636, 50.98783734],
  },
  {
    file_name: "HMTpano_000010_000312.jpg",
    longitude_latitude: [10.93723049, 50.98785244],
  },
  {
    file_name: "HMTpano_000010_000313.jpg",
    longitude_latitude: [10.93730063, 50.98786808],
  },
  {
    file_name: "HMTpano_000010_000314.jpg",
    longitude_latitude: [10.93737173, 50.98788358],
  },
  {
    file_name: "HMTpano_000010_000315.jpg",
    longitude_latitude: [10.93744337, 50.98789906],
  },
  {
    file_name: "HMTpano_000010_000316.jpg",
    longitude_latitude: [10.93751396, 50.98791391],
  },
  {
    file_name: "HMTpano_000010_000317.jpg",
    longitude_latitude: [10.93758498, 50.98792848],
  },
  {
    file_name: "HMTpano_000010_000318.jpg",
    longitude_latitude: [10.93765525, 50.9879431],
  },
  {
    file_name: "HMTpano_000010_000319.jpg",
    longitude_latitude: [10.9377246, 50.9879574],
  },
  {
    file_name: "HMTpano_000010_000320.jpg",
    longitude_latitude: [10.93779293, 50.98797145],
  },
  {
    file_name: "HMTpano_000010_000321.jpg",
    longitude_latitude: [10.93786382, 50.98798616],
  },
  {
    file_name: "HMTpano_000010_000322.jpg",
    longitude_latitude: [10.93793436, 50.98800086],
  },
  {
    file_name: "HMTpano_000010_000323.jpg",
    longitude_latitude: [10.93800293, 50.98801515],
  },
  {
    file_name: "HMTpano_000010_000324.jpg",
    longitude_latitude: [10.9380729, 50.98802992],
  },
  {
    file_name: "HMTpano_000010_000325.jpg",
    longitude_latitude: [10.9381417, 50.98804412],
  },
  {
    file_name: "HMTpano_000010_000326.jpg",
    longitude_latitude: [10.93821074, 50.98805842],
  },
  {
    file_name: "HMTpano_000010_000327.jpg",
    longitude_latitude: [10.93828023, 50.9880725],
  },
  {
    file_name: "HMTpano_000010_000328.jpg",
    longitude_latitude: [10.93834933, 50.98808636],
  },
  {
    file_name: "HMTpano_000010_000329.jpg",
    longitude_latitude: [10.93841902, 50.98810014],
  },
  {
    file_name: "HMTpano_000010_000330.jpg",
    longitude_latitude: [10.93848831, 50.98811371],
  },
  {
    file_name: "HMTpano_000010_000331.jpg",
    longitude_latitude: [10.9385575, 50.98812706],
  },
  {
    file_name: "HMTpano_000010_000332.jpg",
    longitude_latitude: [10.93862722, 50.98814032],
  },
  {
    file_name: "HMTpano_000010_000333.jpg",
    longitude_latitude: [10.9386962, 50.98815335],
  },
  {
    file_name: "HMTpano_000010_000334.jpg",
    longitude_latitude: [10.93876439, 50.9881723],
  },
  {
    file_name: "HMTpano_000010_000335.jpg",
    longitude_latitude: [10.93881601, 50.9882085],
  },
  {
    file_name: "HMTpano_000010_000336.jpg",
    longitude_latitude: [10.93882578, 50.98825607],
  },
  {
    file_name: "HMTpano_000010_000337.jpg",
    longitude_latitude: [10.93880673, 50.98830125],
  },
  {
    file_name: "HMTpano_000010_000338.jpg",
    longitude_latitude: [10.93877841, 50.98834362],
  },
  {
    file_name: "HMTpano_000010_000339.jpg",
    longitude_latitude: [10.9387467, 50.98838475],
  },
  {
    file_name: "HMTpano_000010_000340.jpg",
    longitude_latitude: [10.93871227, 50.98842483],
  },
  {
    file_name: "HMTpano_000010_000341.jpg",
    longitude_latitude: [10.93867547, 50.98846447],
  },
  {
    file_name: "HMTpano_000010_000342.jpg",
    longitude_latitude: [10.93863812, 50.98850433],
  },
  {
    file_name: "HMTpano_000010_000343.jpg",
    longitude_latitude: [10.93860154, 50.98854323],
  },
  {
    file_name: "HMTpano_000010_000344.jpg",
    longitude_latitude: [10.93856487, 50.98858241],
  },
  {
    file_name: "HMTpano_000010_000345.jpg",
    longitude_latitude: [10.93852793, 50.98862171],
  },
  {
    file_name: "HMTpano_000010_000346.jpg",
    longitude_latitude: [10.93848929, 50.98866014],
  },
  {
    file_name: "HMTpano_000010_000347.jpg",
    longitude_latitude: [10.93844923, 50.98869781],
  },
  {
    file_name: "HMTpano_000010_000348.jpg",
    longitude_latitude: [10.93841252, 50.98873479],
  },
  {
    file_name: "HMTpano_000010_000349.jpg",
    longitude_latitude: [10.93840049, 50.98877329],
  },
  {
    file_name: "HMTpano_000011_000000.jpg",
    longitude_latitude: [10.93325077, 50.98678681],
  },
  {
    file_name: "HMTpano_000011_000001.jpg",
    longitude_latitude: [10.93322119, 50.98680574],
  },
  {
    file_name: "HMTpano_000011_000002.jpg",
    longitude_latitude: [10.9331799, 50.98684283],
  },
  {
    file_name: "HMTpano_000011_000003.jpg",
    longitude_latitude: [10.93314131, 50.98688116],
  },
  {
    file_name: "HMTpano_000011_000004.jpg",
    longitude_latitude: [10.93310579, 50.98692056],
  },
  {
    file_name: "HMTpano_000011_000005.jpg",
    longitude_latitude: [10.93305388, 50.98695827],
  },
  {
    file_name: "HMTpano_000011_000006.jpg",
    longitude_latitude: [10.93297811, 50.98695768],
  },
  {
    file_name: "HMTpano_000011_000007.jpg",
    longitude_latitude: [10.93291086, 50.98695755],
  },
  {
    file_name: "HMTpano_000011_000008.jpg",
    longitude_latitude: [10.93284942, 50.98697573],
  },
  {
    file_name: "HMTpano_000011_000009.jpg",
    longitude_latitude: [10.93280086, 50.98700699],
  },
  {
    file_name: "HMTpano_000011_000010.jpg",
    longitude_latitude: [10.93275976, 50.98704389],
  },
  {
    file_name: "HMTpano_000011_000011.jpg",
    longitude_latitude: [10.93272323, 50.98708292],
  },
  {
    file_name: "HMTpano_000011_000012.jpg",
    longitude_latitude: [10.93268767, 50.98712292],
  },
  {
    file_name: "HMTpano_000011_000013.jpg",
    longitude_latitude: [10.93265352, 50.98716295],
  },
  {
    file_name: "HMTpano_000011_000014.jpg",
    longitude_latitude: [10.93262114, 50.98720352],
  },
  {
    file_name: "HMTpano_000011_000015.jpg",
    longitude_latitude: [10.93258831, 50.98724442],
  },
  {
    file_name: "HMTpano_000011_000016.jpg",
    longitude_latitude: [10.93255492, 50.98728399],
  },
  {
    file_name: "HMTpano_000011_000017.jpg",
    longitude_latitude: [10.93251984, 50.98732398],
  },
  {
    file_name: "HMTpano_000011_000018.jpg",
    longitude_latitude: [10.93247505, 50.987362],
  },
  {
    file_name: "HMTpano_000011_000019.jpg",
    longitude_latitude: [10.93240928, 50.98738678],
  },
  {
    file_name: "HMTpano_000011_000020.jpg",
    longitude_latitude: [10.93233421, 50.98739038],
  },
  {
    file_name: "HMTpano_000011_000021.jpg",
    longitude_latitude: [10.932262, 50.98738252],
  },
  {
    file_name: "HMTpano_000011_000022.jpg",
    longitude_latitude: [10.93219254, 50.98737183],
  },
  {
    file_name: "HMTpano_000011_000023.jpg",
    longitude_latitude: [10.93212378, 50.98736066],
  },
  {
    file_name: "HMTpano_000011_000024.jpg",
    longitude_latitude: [10.93205459, 50.98734999],
  },
  {
    file_name: "HMTpano_000011_000025.jpg",
    longitude_latitude: [10.9319861, 50.98733944],
  },
  {
    file_name: "HMTpano_000011_000026.jpg",
    longitude_latitude: [10.93192098, 50.9873378],
  },
  {
    file_name: "HMTpano_000011_000027.jpg",
    longitude_latitude: [10.93187667, 50.9873639],
  },
  {
    file_name: "HMTpano_000011_000028.jpg",
    longitude_latitude: [10.93186168, 50.98740612],
  },
  {
    file_name: "HMTpano_000012_000000.jpg",
    longitude_latitude: [10.93182518, 50.98774951],
  },
  {
    file_name: "HMTpano_000012_000001.jpg",
    longitude_latitude: [10.93184371, 50.98778608],
  },
  {
    file_name: "HMTpano_000012_000002.jpg",
    longitude_latitude: [10.93189491, 50.98781016],
  },
  {
    file_name: "HMTpano_000012_000003.jpg",
    longitude_latitude: [10.93195991, 50.98781052],
  },
  {
    file_name: "HMTpano_000012_000004.jpg",
    longitude_latitude: [10.93202539, 50.98779376],
  },
  {
    file_name: "HMTpano_000012_000005.jpg",
    longitude_latitude: [10.93209526, 50.98777903],
  },
  {
    file_name: "HMTpano_000012_000006.jpg",
    longitude_latitude: [10.9321682, 50.9877719],
  },
  {
    file_name: "HMTpano_000012_000007.jpg",
    longitude_latitude: [10.9322409, 50.98777067],
  },
  {
    file_name: "HMTpano_000012_000008.jpg",
    longitude_latitude: [10.93231364, 50.98777335],
  },
  {
    file_name: "HMTpano_000012_000009.jpg",
    longitude_latitude: [10.93238596, 50.98777895],
  },
  {
    file_name: "HMTpano_000012_000010.jpg",
    longitude_latitude: [10.93245684, 50.9877876],
  },
  {
    file_name: "HMTpano_000012_000011.jpg",
    longitude_latitude: [10.93252655, 50.98779876],
  },
  {
    file_name: "HMTpano_000012_000012.jpg",
    longitude_latitude: [10.93259643, 50.98781177],
  },
  {
    file_name: "HMTpano_000012_000013.jpg",
    longitude_latitude: [10.9326653, 50.98782622],
  },
  {
    file_name: "HMTpano_000012_000014.jpg",
    longitude_latitude: [10.93273174, 50.9878423],
  },
  {
    file_name: "HMTpano_000012_000015.jpg",
    longitude_latitude: [10.9327982, 50.98785905],
  },
  {
    file_name: "HMTpano_000012_000016.jpg",
    longitude_latitude: [10.93286524, 50.98787587],
  },
  {
    file_name: "HMTpano_000012_000017.jpg",
    longitude_latitude: [10.93293136, 50.9878947],
  },
  {
    file_name: "HMTpano_000012_000018.jpg",
    longitude_latitude: [10.93299592, 50.98791396],
  },
  {
    file_name: "HMTpano_000012_000019.jpg",
    longitude_latitude: [10.9330602, 50.9879336],
  },
  {
    file_name: "HMTpano_000012_000020.jpg",
    longitude_latitude: [10.93312456, 50.98795298],
  },
  {
    file_name: "HMTpano_000012_000021.jpg",
    longitude_latitude: [10.93318902, 50.98797218],
  },
  {
    file_name: "HMTpano_000012_000022.jpg",
    longitude_latitude: [10.93325449, 50.98799088],
  },
  {
    file_name: "HMTpano_000012_000023.jpg",
    longitude_latitude: [10.93331931, 50.98800905],
  },
  {
    file_name: "HMTpano_000012_000024.jpg",
    longitude_latitude: [10.9333824, 50.98802731],
  },
  {
    file_name: "HMTpano_000013_000000.jpg",
    longitude_latitude: [10.93207037, 50.98748001],
  },
  {
    file_name: "HMTpano_000013_000001.jpg",
    longitude_latitude: [10.93206931, 50.98751557],
  },
  {
    file_name: "HMTpano_000013_000002.jpg",
    longitude_latitude: [10.93206733, 50.98756129],
  },
  {
    file_name: "HMTpano_000013_000003.jpg",
    longitude_latitude: [10.93206514, 50.98760678],
  },
  {
    file_name: "HMTpano_000013_000004.jpg",
    longitude_latitude: [10.9320622, 50.98765198],
  },
  {
    file_name: "HMTpano_000013_000005.jpg",
    longitude_latitude: [10.93205683, 50.98769754],
  },
  {
    file_name: "HMTpano_000013_000006.jpg",
    longitude_latitude: [10.93203853, 50.9877437],
  },
  {
    file_name: "HMTpano_000013_000007.jpg",
    longitude_latitude: [10.93199894, 50.98778351],
  },
  {
    file_name: "HMTpano_000013_000008.jpg",
    longitude_latitude: [10.93194661, 50.98781609],
  },
  {
    file_name: "HMTpano_000013_000009.jpg",
    longitude_latitude: [10.93189449, 50.98784657],
  },
  {
    file_name: "HMTpano_000013_000010.jpg",
    longitude_latitude: [10.93185355, 50.98788106],
  },
  {
    file_name: "HMTpano_000013_000011.jpg",
    longitude_latitude: [10.93182669, 50.98792078],
  },
  {
    file_name: "HMTpano_000013_000012.jpg",
    longitude_latitude: [10.93181208, 50.9879633],
  },
  {
    file_name: "HMTpano_000013_000013.jpg",
    longitude_latitude: [10.93179355, 50.98800875],
  },
  {
    file_name: "HMTpano_000013_000014.jpg",
    longitude_latitude: [10.93174447, 50.98804599],
  },
  {
    file_name: "HMTpano_000013_000015.jpg",
    longitude_latitude: [10.93167325, 50.98806392],
  },
  {
    file_name: "HMTpano_000013_000016.jpg",
    longitude_latitude: [10.93159941, 50.98806779],
  },
  {
    file_name: "HMTpano_000013_000017.jpg",
    longitude_latitude: [10.93152628, 50.98806427],
  },
  {
    file_name: "HMTpano_000013_000018.jpg",
    longitude_latitude: [10.931455, 50.98805654],
  },
  {
    file_name: "HMTpano_000013_000019.jpg",
    longitude_latitude: [10.93138536, 50.98804764],
  },
  {
    file_name: "HMTpano_000013_000020.jpg",
    longitude_latitude: [10.93131534, 50.98803852],
  },
  {
    file_name: "HMTpano_000013_000021.jpg",
    longitude_latitude: [10.93124506, 50.98802894],
  },
  {
    file_name: "HMTpano_000013_000022.jpg",
    longitude_latitude: [10.9311755, 50.98802078],
  },
  {
    file_name: "HMTpano_000013_000023.jpg",
    longitude_latitude: [10.93110513, 50.98801514],
  },
  {
    file_name: "HMTpano_000013_000024.jpg",
    longitude_latitude: [10.93103383, 50.98801051],
  },
  {
    file_name: "HMTpano_000013_000025.jpg",
    longitude_latitude: [10.93096105, 50.9880057],
  },
  {
    file_name: "HMTpano_000013_000026.jpg",
    longitude_latitude: [10.93088999, 50.98799985],
  },
  {
    file_name: "HMTpano_000013_000027.jpg",
    longitude_latitude: [10.93081942, 50.98799674],
  },
  {
    file_name: "HMTpano_000013_000028.jpg",
    longitude_latitude: [10.93074913, 50.98800123],
  },
  {
    file_name: "HMTpano_000013_000029.jpg",
    longitude_latitude: [10.93068009, 50.98801234],
  },
  {
    file_name: "HMTpano_000013_000030.jpg",
    longitude_latitude: [10.93061146, 50.98802653],
  },
  {
    file_name: "HMTpano_000013_000031.jpg",
    longitude_latitude: [10.93054212, 50.98804077],
  },
  {
    file_name: "HMTpano_000013_000032.jpg",
    longitude_latitude: [10.93047058, 50.98805296],
  },
  {
    file_name: "HMTpano_000013_000033.jpg",
    longitude_latitude: [10.93039925, 50.98806158],
  },
  {
    file_name: "HMTpano_000013_000034.jpg",
    longitude_latitude: [10.93032675, 50.98806682],
  },
  {
    file_name: "HMTpano_000013_000035.jpg",
    longitude_latitude: [10.93025326, 50.98806862],
  },
  {
    file_name: "HMTpano_000013_000036.jpg",
    longitude_latitude: [10.93017931, 50.98806686],
  },
  {
    file_name: "HMTpano_000013_000037.jpg",
    longitude_latitude: [10.9301057, 50.98806105],
  },
  {
    file_name: "HMTpano_000013_000038.jpg",
    longitude_latitude: [10.93003304, 50.98805111],
  },
  {
    file_name: "HMTpano_000013_000039.jpg",
    longitude_latitude: [10.92996157, 50.98803792],
  },
  {
    file_name: "HMTpano_000013_000040.jpg",
    longitude_latitude: [10.92989179, 50.98802253],
  },
  {
    file_name: "HMTpano_000013_000041.jpg",
    longitude_latitude: [10.92982336, 50.98800515],
  },
  {
    file_name: "HMTpano_000013_000042.jpg",
    longitude_latitude: [10.92975624, 50.98798698],
  },
  {
    file_name: "HMTpano_000013_000043.jpg",
    longitude_latitude: [10.92968961, 50.98796887],
  },
  {
    file_name: "HMTpano_000013_000044.jpg",
    longitude_latitude: [10.92962333, 50.98795145],
  },
  {
    file_name: "HMTpano_000013_000045.jpg",
    longitude_latitude: [10.92955614, 50.98793618],
  },
  {
    file_name: "HMTpano_000013_000046.jpg",
    longitude_latitude: [10.92948772, 50.98792336],
  },
  {
    file_name: "HMTpano_000013_000047.jpg",
    longitude_latitude: [10.92941809, 50.98791286],
  },
  {
    file_name: "HMTpano_000013_000048.jpg",
    longitude_latitude: [10.92934743, 50.98790511],
  },
  {
    file_name: "HMTpano_000013_000049.jpg",
    longitude_latitude: [10.92927592, 50.98790071],
  },
  {
    file_name: "HMTpano_000013_000050.jpg",
    longitude_latitude: [10.92920369, 50.98789943],
  },
  {
    file_name: "HMTpano_000013_000051.jpg",
    longitude_latitude: [10.92913168, 50.98790058],
  },
  {
    file_name: "HMTpano_000013_000052.jpg",
    longitude_latitude: [10.92905955, 50.98790421],
  },
  {
    file_name: "HMTpano_000013_000053.jpg",
    longitude_latitude: [10.92898801, 50.98791037],
  },
  {
    file_name: "HMTpano_000013_000054.jpg",
    longitude_latitude: [10.92891714, 50.98791935],
  },
  {
    file_name: "HMTpano_000013_000055.jpg",
    longitude_latitude: [10.92884745, 50.98793167],
  },
  {
    file_name: "HMTpano_000013_000056.jpg",
    longitude_latitude: [10.92877934, 50.98794701],
  },
  {
    file_name: "HMTpano_000013_000057.jpg",
    longitude_latitude: [10.92871298, 50.98796539],
  },
  {
    file_name: "HMTpano_000013_000058.jpg",
    longitude_latitude: [10.92864787, 50.98798616],
  },
  {
    file_name: "HMTpano_000013_000059.jpg",
    longitude_latitude: [10.92858339, 50.98800801],
  },
  {
    file_name: "HMTpano_000013_000060.jpg",
    longitude_latitude: [10.92851992, 50.98803115],
  },
  {
    file_name: "HMTpano_000013_000061.jpg",
    longitude_latitude: [10.92845742, 50.98805541],
  },
  {
    file_name: "HMTpano_000013_000062.jpg",
    longitude_latitude: [10.92839591, 50.98808064],
  },
  {
    file_name: "HMTpano_000013_000063.jpg",
    longitude_latitude: [10.92833459, 50.98810639],
  },
  {
    file_name: "HMTpano_000013_000064.jpg",
    longitude_latitude: [10.9282733, 50.98813179],
  },
  {
    file_name: "HMTpano_000013_000065.jpg",
    longitude_latitude: [10.92821168, 50.98815683],
  },
  {
    file_name: "HMTpano_000013_000066.jpg",
    longitude_latitude: [10.92814952, 50.98818072],
  },
  {
    file_name: "HMTpano_000013_000067.jpg",
    longitude_latitude: [10.92808612, 50.98820314],
  },
  {
    file_name: "HMTpano_000013_000068.jpg",
    longitude_latitude: [10.92802087, 50.9882235],
  },
  {
    file_name: "HMTpano_000013_000069.jpg",
    longitude_latitude: [10.92795444, 50.98824143],
  },
  {
    file_name: "HMTpano_000013_000070.jpg",
    longitude_latitude: [10.92788673, 50.98825845],
  },
  {
    file_name: "HMTpano_000013_000071.jpg",
    longitude_latitude: [10.9278184, 50.98827406],
  },
  {
    file_name: "HMTpano_000013_000072.jpg",
    longitude_latitude: [10.92775031, 50.98828956],
  },
  {
    file_name: "HMTpano_000013_000073.jpg",
    longitude_latitude: [10.92768419, 50.98830794],
  },
  {
    file_name: "HMTpano_000013_000074.jpg",
    longitude_latitude: [10.92762014, 50.9883287],
  },
  {
    file_name: "HMTpano_000013_000075.jpg",
    longitude_latitude: [10.92755688, 50.98835052],
  },
  {
    file_name: "HMTpano_000013_000076.jpg",
    longitude_latitude: [10.9274937, 50.98837328],
  },
  {
    file_name: "HMTpano_000013_000077.jpg",
    longitude_latitude: [10.92743011, 50.98839596],
  },
  {
    file_name: "HMTpano_000013_000078.jpg",
    longitude_latitude: [10.92736605, 50.98841854],
  },
  {
    file_name: "HMTpano_000013_000079.jpg",
    longitude_latitude: [10.9273013, 50.98844106],
  },
  {
    file_name: "HMTpano_000013_000080.jpg",
    longitude_latitude: [10.92723766, 50.98846337],
  },
  {
    file_name: "HMTpano_000013_000081.jpg",
    longitude_latitude: [10.9271753, 50.98848566],
  },
  {
    file_name: "HMTpano_000013_000082.jpg",
    longitude_latitude: [10.9271128, 50.98850886],
  },
  {
    file_name: "HMTpano_000013_000083.jpg",
    longitude_latitude: [10.92704972, 50.98853371],
  },
  {
    file_name: "HMTpano_000013_000084.jpg",
    longitude_latitude: [10.92698764, 50.98855918],
  },
  {
    file_name: "HMTpano_000013_000085.jpg",
    longitude_latitude: [10.92692696, 50.98858559],
  },
  {
    file_name: "HMTpano_000013_000086.jpg",
    longitude_latitude: [10.92686851, 50.98861218],
  },
  {
    file_name: "HMTpano_000013_000087.jpg",
    longitude_latitude: [10.92681125, 50.98863963],
  },
  {
    file_name: "HMTpano_000013_000088.jpg",
    longitude_latitude: [10.92675391, 50.98866819],
  },
  {
    file_name: "HMTpano_000013_000089.jpg",
    longitude_latitude: [10.9266969, 50.98869777],
  },
  {
    file_name: "HMTpano_000013_000090.jpg",
    longitude_latitude: [10.92664004, 50.98872769],
  },
  {
    file_name: "HMTpano_000013_000091.jpg",
    longitude_latitude: [10.92658279, 50.98875802],
  },
  {
    file_name: "HMTpano_000013_000092.jpg",
    longitude_latitude: [10.92652617, 50.98878817],
  },
  {
    file_name: "HMTpano_000013_000093.jpg",
    longitude_latitude: [10.92646972, 50.98881838],
  },
  {
    file_name: "HMTpano_000013_000094.jpg",
    longitude_latitude: [10.92641321, 50.98884862],
  },
  {
    file_name: "HMTpano_000013_000095.jpg",
    longitude_latitude: [10.92635728, 50.98887842],
  },
  {
    file_name: "HMTpano_000013_000096.jpg",
    longitude_latitude: [10.92630199, 50.98890836],
  },
  {
    file_name: "HMTpano_000013_000097.jpg",
    longitude_latitude: [10.92624659, 50.9889388],
  },
  {
    file_name: "HMTpano_000013_000098.jpg",
    longitude_latitude: [10.92619155, 50.98897008],
  },
  {
    file_name: "HMTpano_000013_000099.jpg",
    longitude_latitude: [10.9261363, 50.98900104],
  },
  {
    file_name: "HMTpano_000013_000100.jpg",
    longitude_latitude: [10.92608138, 50.98903203],
  },
  {
    file_name: "HMTpano_000013_000101.jpg",
    longitude_latitude: [10.92602707, 50.98906293],
  },
  {
    file_name: "HMTpano_000013_000102.jpg",
    longitude_latitude: [10.9259728, 50.98909367],
  },
  {
    file_name: "HMTpano_000013_000103.jpg",
    longitude_latitude: [10.92591843, 50.98912408],
  },
  {
    file_name: "HMTpano_000013_000104.jpg",
    longitude_latitude: [10.92586422, 50.98915454],
  },
  {
    file_name: "HMTpano_000013_000105.jpg",
    longitude_latitude: [10.9258099, 50.98918447],
  },
  {
    file_name: "HMTpano_000013_000106.jpg",
    longitude_latitude: [10.92575656, 50.98921501],
  },
  {
    file_name: "HMTpano_000013_000107.jpg",
    longitude_latitude: [10.92570414, 50.98924589],
  },
  {
    file_name: "HMTpano_000013_000108.jpg",
    longitude_latitude: [10.92565182, 50.98927647],
  },
  {
    file_name: "HMTpano_000013_000109.jpg",
    longitude_latitude: [10.92559783, 50.98930788],
  },
  {
    file_name: "HMTpano_000013_000110.jpg",
    longitude_latitude: [10.92554376, 50.989339],
  },
  {
    file_name: "HMTpano_000013_000111.jpg",
    longitude_latitude: [10.92548931, 50.98936974],
  },
  {
    file_name: "HMTpano_000013_000112.jpg",
    longitude_latitude: [10.92543492, 50.98940019],
  },
  {
    file_name: "HMTpano_000013_000113.jpg",
    longitude_latitude: [10.92538056, 50.9894303],
  },
  {
    file_name: "HMTpano_000013_000114.jpg",
    longitude_latitude: [10.92532602, 50.98946002],
  },
  {
    file_name: "HMTpano_000013_000115.jpg",
    longitude_latitude: [10.92527006, 50.98949045],
  },
  {
    file_name: "HMTpano_000013_000116.jpg",
    longitude_latitude: [10.92521506, 50.98952025],
  },
  {
    file_name: "HMTpano_000013_000117.jpg",
    longitude_latitude: [10.92516176, 50.98955049],
  },
  {
    file_name: "HMTpano_000013_000118.jpg",
    longitude_latitude: [10.925109, 50.98958077],
  },
  {
    file_name: "HMTpano_000013_000119.jpg",
    longitude_latitude: [10.92505346, 50.98961178],
  },
  {
    file_name: "HMTpano_000013_000120.jpg",
    longitude_latitude: [10.92499823, 50.98964179],
  },
  {
    file_name: "HMTpano_000013_000121.jpg",
    longitude_latitude: [10.9249415, 50.98967086],
  },
  {
    file_name: "HMTpano_000013_000122.jpg",
    longitude_latitude: [10.92488332, 50.98969805],
  },
  {
    file_name: "HMTpano_000013_000123.jpg",
    longitude_latitude: [10.92482413, 50.98972528],
  },
  {
    file_name: "HMTpano_000013_000124.jpg",
    longitude_latitude: [10.92476607, 50.98975285],
  },
  {
    file_name: "HMTpano_000013_000125.jpg",
    longitude_latitude: [10.92470889, 50.98978182],
  },
  {
    file_name: "HMTpano_000013_000126.jpg",
    longitude_latitude: [10.92465391, 50.98981151],
  },
  {
    file_name: "HMTpano_000013_000127.jpg",
    longitude_latitude: [10.92459828, 50.98984183],
  },
  {
    file_name: "HMTpano_000013_000128.jpg",
    longitude_latitude: [10.92454201, 50.98987151],
  },
  {
    file_name: "HMTpano_000013_000129.jpg",
    longitude_latitude: [10.92448132, 50.98989809],
  },
  {
    file_name: "HMTpano_000013_000130.jpg",
    longitude_latitude: [10.92441606, 50.98991992],
  },
  {
    file_name: "HMTpano_000013_000131.jpg",
    longitude_latitude: [10.92434659, 50.98993681],
  },
  {
    file_name: "HMTpano_000013_000132.jpg",
    longitude_latitude: [10.92427503, 50.98994798],
  },
  {
    file_name: "HMTpano_000013_000133.jpg",
    longitude_latitude: [10.9242015, 50.98995488],
  },
  {
    file_name: "HMTpano_000013_000134.jpg",
    longitude_latitude: [10.92412733, 50.98995956],
  },
  {
    file_name: "HMTpano_000013_000135.jpg",
    longitude_latitude: [10.92405249, 50.98996208],
  },
  {
    file_name: "HMTpano_000013_000136.jpg",
    longitude_latitude: [10.92397677, 50.98996286],
  },
  {
    file_name: "HMTpano_000013_000137.jpg",
    longitude_latitude: [10.92390124, 50.98996223],
  },
  {
    file_name: "HMTpano_000013_000138.jpg",
    longitude_latitude: [10.92382625, 50.98996053],
  },
  {
    file_name: "HMTpano_000013_000139.jpg",
    longitude_latitude: [10.92375137, 50.98995848],
  },
  {
    file_name: "HMTpano_000013_000140.jpg",
    longitude_latitude: [10.92367874, 50.98995636],
  },
  {
    file_name: "HMTpano_000013_000141.jpg",
    longitude_latitude: [10.92360669, 50.98995418],
  },
  {
    file_name: "HMTpano_000013_000142.jpg",
    longitude_latitude: [10.92353368, 50.989952],
  },
  {
    file_name: "HMTpano_000013_000143.jpg",
    longitude_latitude: [10.92345952, 50.98994976],
  },
  {
    file_name: "HMTpano_000013_000144.jpg",
    longitude_latitude: [10.92338528, 50.98994787],
  },
  {
    file_name: "HMTpano_000013_000145.jpg",
    longitude_latitude: [10.92331403, 50.98994684],
  },
  {
    file_name: "HMTpano_000013_000146.jpg",
    longitude_latitude: [10.92324198, 50.98994659],
  },
  {
    file_name: "HMTpano_000013_000147.jpg",
    longitude_latitude: [10.92316948, 50.98994721],
  },
  {
    file_name: "HMTpano_000013_000148.jpg",
    longitude_latitude: [10.9230965, 50.98994868],
  },
  {
    file_name: "HMTpano_000013_000149.jpg",
    longitude_latitude: [10.92302341, 50.98995107],
  },
  {
    file_name: "HMTpano_000013_000150.jpg",
    longitude_latitude: [10.92295091, 50.98995433],
  },
  {
    file_name: "HMTpano_000013_000151.jpg",
    longitude_latitude: [10.92287883, 50.98995855],
  },
  {
    file_name: "HMTpano_000013_000152.jpg",
    longitude_latitude: [10.92280768, 50.9899636],
  },
  {
    file_name: "HMTpano_000013_000153.jpg",
    longitude_latitude: [10.92273445, 50.98996974],
  },
  {
    file_name: "HMTpano_000013_000154.jpg",
    longitude_latitude: [10.92266208, 50.98997674],
  },
  {
    file_name: "HMTpano_000013_000155.jpg",
    longitude_latitude: [10.92259167, 50.9899841],
  },
  {
    file_name: "HMTpano_000013_000156.jpg",
    longitude_latitude: [10.92251827, 50.98999171],
  },
  {
    file_name: "HMTpano_000013_000157.jpg",
    longitude_latitude: [10.92244653, 50.9899991],
  },
  {
    file_name: "HMTpano_000013_000158.jpg",
    longitude_latitude: [10.9223752, 50.99000649],
  },
  {
    file_name: "HMTpano_000013_000159.jpg",
    longitude_latitude: [10.92230164, 50.99001399],
  },
  {
    file_name: "HMTpano_000013_000160.jpg",
    longitude_latitude: [10.92222927, 50.99002115],
  },
  {
    file_name: "HMTpano_000013_000161.jpg",
    longitude_latitude: [10.92215841, 50.99002842],
  },
  {
    file_name: "HMTpano_000014_000000.jpg",
    longitude_latitude: [10.92465917, 50.9899597],
  },
  {
    file_name: "HMTpano_000014_000001.jpg",
    longitude_latitude: [10.92472025, 50.9899591],
  },
  {
    file_name: "HMTpano_000014_000002.jpg",
    longitude_latitude: [10.92479338, 50.98995795],
  },
  {
    file_name: "HMTpano_000014_000003.jpg",
    longitude_latitude: [10.92486663, 50.98995606],
  },
  {
    file_name: "HMTpano_000014_000004.jpg",
    longitude_latitude: [10.92493962, 50.98995427],
  },
  {
    file_name: "HMTpano_000014_000005.jpg",
    longitude_latitude: [10.92501299, 50.98995231],
  },
  {
    file_name: "HMTpano_000014_000006.jpg",
    longitude_latitude: [10.92508633, 50.98995009],
  },
  {
    file_name: "HMTpano_000014_000007.jpg",
    longitude_latitude: [10.92515729, 50.98994597],
  },
  {
    file_name: "HMTpano_000014_000008.jpg",
    longitude_latitude: [10.92522468, 50.98993553],
  },
  {
    file_name: "HMTpano_000014_000009.jpg",
    longitude_latitude: [10.92527995, 50.98991145],
  },
  {
    file_name: "HMTpano_000014_000010.jpg",
    longitude_latitude: [10.92530993, 50.98987308],
  },
  {
    file_name: "HMTpano_000014_000011.jpg",
    longitude_latitude: [10.92531331, 50.98982906],
  },
  {
    file_name: "HMTpano_000014_000012.jpg",
    longitude_latitude: [10.92530499, 50.98978367],
  },
  {
    file_name: "HMTpano_000014_000013.jpg",
    longitude_latitude: [10.92529546, 50.98973813],
  },
  {
    file_name: "HMTpano_000014_000014.jpg",
    longitude_latitude: [10.92528567, 50.98969271],
  },
  {
    file_name: "HMTpano_000014_000015.jpg",
    longitude_latitude: [10.92527413, 50.9896476],
  },
  {
    file_name: "HMTpano_000014_000016.jpg",
    longitude_latitude: [10.9252551, 50.98960448],
  },
  {
    file_name: "HMTpano_000014_000017.jpg",
    longitude_latitude: [10.92521653, 50.98957055],
  },
  {
    file_name: "HMTpano_000014_000018.jpg",
    longitude_latitude: [10.92515665, 50.98955609],
  },
  {
    file_name: "HMTpano_000014_000019.jpg",
    longitude_latitude: [10.92509162, 50.98956611],
  },
  {
    file_name: "HMTpano_000014_000020.jpg",
    longitude_latitude: [10.92503416, 50.98959159],
  },
  {
    file_name: "HMTpano_000015_000000.jpg",
    longitude_latitude: [10.9245413, 50.98984954],
  },
  {
    file_name: "HMTpano_000015_000001.jpg",
    longitude_latitude: [10.92451133, 50.98986751],
  },
  {
    file_name: "HMTpano_000015_000002.jpg",
    longitude_latitude: [10.92448914, 50.98990534],
  },
  {
    file_name: "HMTpano_000015_000003.jpg",
    longitude_latitude: [10.92451256, 50.98994183],
  },
  {
    file_name: "HMTpano_000015_000004.jpg",
    longitude_latitude: [10.92457188, 50.98996024],
  },
  {
    file_name: "HMTpano_000015_000005.jpg",
    longitude_latitude: [10.92464156, 50.98996346],
  },
  {
    file_name: "HMTpano_000015_000006.jpg",
    longitude_latitude: [10.92471312, 50.9899615],
  },
  {
    file_name: "HMTpano_000015_000007.jpg",
    longitude_latitude: [10.92478472, 50.98995871],
  },
  {
    file_name: "HMTpano_000015_000008.jpg",
    longitude_latitude: [10.92485702, 50.98995607],
  },
  {
    file_name: "HMTpano_000015_000009.jpg",
    longitude_latitude: [10.9249291, 50.98995379],
  },
  {
    file_name: "HMTpano_000015_000010.jpg",
    longitude_latitude: [10.92500121, 50.98995121],
  },
  {
    file_name: "HMTpano_000015_000011.jpg",
    longitude_latitude: [10.92507328, 50.98994823],
  },
  {
    file_name: "HMTpano_000015_000012.jpg",
    longitude_latitude: [10.92514554, 50.98994492],
  },
  {
    file_name: "HMTpano_000015_000013.jpg",
    longitude_latitude: [10.92521781, 50.98994162],
  },
  {
    file_name: "HMTpano_000015_000014.jpg",
    longitude_latitude: [10.9252907, 50.98993773],
  },
  {
    file_name: "HMTpano_000015_000015.jpg",
    longitude_latitude: [10.92536364, 50.98993285],
  },
  {
    file_name: "HMTpano_000015_000016.jpg",
    longitude_latitude: [10.92543542, 50.98992738],
  },
  {
    file_name: "HMTpano_000015_000017.jpg",
    longitude_latitude: [10.9255092, 50.98992188],
  },
  {
    file_name: "HMTpano_000015_000018.jpg",
    longitude_latitude: [10.92558092, 50.98991629],
  },
  {
    file_name: "HMTpano_000015_000019.jpg",
    longitude_latitude: [10.92565319, 50.98991085],
  },
  {
    file_name: "HMTpano_000015_000020.jpg",
    longitude_latitude: [10.92572497, 50.98990543],
  },
  {
    file_name: "HMTpano_000015_000021.jpg",
    longitude_latitude: [10.92579643, 50.98989994],
  },
  {
    file_name: "HMTpano_000015_000022.jpg",
    longitude_latitude: [10.92586788, 50.98989459],
  },
  {
    file_name: "HMTpano_000015_000023.jpg",
    longitude_latitude: [10.92594011, 50.98988958],
  },
  {
    file_name: "HMTpano_000015_000024.jpg",
    longitude_latitude: [10.9260129, 50.9898846],
  },
  {
    file_name: "HMTpano_000015_000025.jpg",
    longitude_latitude: [10.92608674, 50.98987933],
  },
  {
    file_name: "HMTpano_000015_000026.jpg",
    longitude_latitude: [10.92616099, 50.98987394],
  },
  {
    file_name: "HMTpano_000015_000027.jpg",
    longitude_latitude: [10.92623391, 50.98986885],
  },
  {
    file_name: "HMTpano_000015_000028.jpg",
    longitude_latitude: [10.92630595, 50.98986405],
  },
  {
    file_name: "HMTpano_000015_000029.jpg",
    longitude_latitude: [10.92637895, 50.98985927],
  },
  {
    file_name: "HMTpano_000015_000030.jpg",
    longitude_latitude: [10.92645277, 50.98985448],
  },
  {
    file_name: "HMTpano_000015_000031.jpg",
    longitude_latitude: [10.92652707, 50.98984973],
  },
  {
    file_name: "HMTpano_000015_000032.jpg",
    longitude_latitude: [10.9265988, 50.98984485],
  },
  {
    file_name: "HMTpano_000015_000033.jpg",
    longitude_latitude: [10.92667097, 50.9898398],
  },
  {
    file_name: "HMTpano_000015_000034.jpg",
    longitude_latitude: [10.92674275, 50.98983454],
  },
  {
    file_name: "HMTpano_000015_000035.jpg",
    longitude_latitude: [10.92681497, 50.98982907],
  },
  {
    file_name: "HMTpano_000015_000036.jpg",
    longitude_latitude: [10.92688762, 50.98982339],
  },
  {
    file_name: "HMTpano_000015_000037.jpg",
    longitude_latitude: [10.92696037, 50.98981767],
  },
  {
    file_name: "HMTpano_000015_000038.jpg",
    longitude_latitude: [10.92703339, 50.98981214],
  },
  {
    file_name: "HMTpano_000015_000039.jpg",
    longitude_latitude: [10.92710687, 50.9898064],
  },
  {
    file_name: "HMTpano_000015_000040.jpg",
    longitude_latitude: [10.92718044, 50.98980094],
  },
  {
    file_name: "HMTpano_000015_000041.jpg",
    longitude_latitude: [10.92725419, 50.98979541],
  },
  {
    file_name: "HMTpano_000015_000042.jpg",
    longitude_latitude: [10.92732818, 50.98978983],
  },
  {
    file_name: "HMTpano_000015_000043.jpg",
    longitude_latitude: [10.92740205, 50.98978405],
  },
  {
    file_name: "HMTpano_000015_000044.jpg",
    longitude_latitude: [10.92747608, 50.98977833],
  },
  {
    file_name: "HMTpano_000015_000045.jpg",
    longitude_latitude: [10.92755005, 50.9897727],
  },
  {
    file_name: "HMTpano_000015_000046.jpg",
    longitude_latitude: [10.92762446, 50.98976738],
  },
  {
    file_name: "HMTpano_000015_000047.jpg",
    longitude_latitude: [10.92769743, 50.98976211],
  },
  {
    file_name: "HMTpano_000015_000048.jpg",
    longitude_latitude: [10.92777179, 50.98975671],
  },
  {
    file_name: "HMTpano_000015_000049.jpg",
    longitude_latitude: [10.92784548, 50.9897515],
  },
  {
    file_name: "HMTpano_000015_000050.jpg",
    longitude_latitude: [10.92792008, 50.98974637],
  },
  {
    file_name: "HMTpano_000015_000051.jpg",
    longitude_latitude: [10.92799475, 50.98974115],
  },
  {
    file_name: "HMTpano_000015_000052.jpg",
    longitude_latitude: [10.9280689, 50.98973563],
  },
  {
    file_name: "HMTpano_000015_000053.jpg",
    longitude_latitude: [10.92814079, 50.98973003],
  },
  {
    file_name: "HMTpano_000015_000054.jpg",
    longitude_latitude: [10.92821255, 50.98972479],
  },
  {
    file_name: "HMTpano_000015_000055.jpg",
    longitude_latitude: [10.9282845, 50.98971923],
  },
  {
    file_name: "HMTpano_000015_000056.jpg",
    longitude_latitude: [10.92835741, 50.98971346],
  },
  {
    file_name: "HMTpano_000015_000057.jpg",
    longitude_latitude: [10.92843066, 50.98970794],
  },
  {
    file_name: "HMTpano_000015_000058.jpg",
    longitude_latitude: [10.92850429, 50.98970236],
  },
  {
    file_name: "HMTpano_000015_000059.jpg",
    longitude_latitude: [10.92857857, 50.98969668],
  },
  {
    file_name: "HMTpano_000015_000060.jpg",
    longitude_latitude: [10.92865305, 50.98969098],
  },
  {
    file_name: "HMTpano_000015_000061.jpg",
    longitude_latitude: [10.92872814, 50.98968531],
  },
  {
    file_name: "HMTpano_000015_000062.jpg",
    longitude_latitude: [10.92880364, 50.98967981],
  },
  {
    file_name: "HMTpano_000015_000063.jpg",
    longitude_latitude: [10.92887637, 50.98967451],
  },
  {
    file_name: "HMTpano_000015_000064.jpg",
    longitude_latitude: [10.92894923, 50.9896693],
  },
  {
    file_name: "HMTpano_000015_000065.jpg",
    longitude_latitude: [10.92902162, 50.98966445],
  },
  {
    file_name: "HMTpano_000015_000066.jpg",
    longitude_latitude: [10.92909403, 50.98965929],
  },
  {
    file_name: "HMTpano_000015_000067.jpg",
    longitude_latitude: [10.92916638, 50.98965429],
  },
  {
    file_name: "HMTpano_000015_000068.jpg",
    longitude_latitude: [10.92923988, 50.98964952],
  },
  {
    file_name: "HMTpano_000015_000069.jpg",
    longitude_latitude: [10.92931328, 50.98964446],
  },
  {
    file_name: "HMTpano_000015_000070.jpg",
    longitude_latitude: [10.92938571, 50.98963959],
  },
  {
    file_name: "HMTpano_000015_000071.jpg",
    longitude_latitude: [10.92945788, 50.98963424],
  },
  {
    file_name: "HMTpano_000015_000072.jpg",
    longitude_latitude: [10.92953037, 50.98962914],
  },
  {
    file_name: "HMTpano_000015_000073.jpg",
    longitude_latitude: [10.92960341, 50.98962409],
  },
  {
    file_name: "HMTpano_000015_000074.jpg",
    longitude_latitude: [10.92967559, 50.98961936],
  },
  {
    file_name: "HMTpano_000015_000075.jpg",
    longitude_latitude: [10.92974771, 50.9896142],
  },
  {
    file_name: "HMTpano_000015_000076.jpg",
    longitude_latitude: [10.92982037, 50.98960915],
  },
  {
    file_name: "HMTpano_000015_000077.jpg",
    longitude_latitude: [10.929894, 50.98960411],
  },
  {
    file_name: "HMTpano_000015_000078.jpg",
    longitude_latitude: [10.92996731, 50.98959915],
  },
  {
    file_name: "HMTpano_000015_000079.jpg",
    longitude_latitude: [10.93004248, 50.98959396],
  },
  {
    file_name: "HMTpano_000015_000080.jpg",
    longitude_latitude: [10.9301173, 50.98958901],
  },
  {
    file_name: "HMTpano_000015_000081.jpg",
    longitude_latitude: [10.93019173, 50.98958378],
  },
  {
    file_name: "HMTpano_000015_000082.jpg",
    longitude_latitude: [10.93026581, 50.98957851],
  },
  {
    file_name: "HMTpano_000015_000083.jpg",
    longitude_latitude: [10.93033909, 50.98957273],
  },
  {
    file_name: "HMTpano_000015_000084.jpg",
    longitude_latitude: [10.93041153, 50.98956655],
  },
  {
    file_name: "HMTpano_000015_000085.jpg",
    longitude_latitude: [10.93048331, 50.9895598],
  },
  {
    file_name: "HMTpano_000015_000086.jpg",
    longitude_latitude: [10.93055405, 50.98955199],
  },
  {
    file_name: "HMTpano_000015_000087.jpg",
    longitude_latitude: [10.93062556, 50.98954298],
  },
  {
    file_name: "HMTpano_000015_000088.jpg",
    longitude_latitude: [10.93069821, 50.98953251],
  },
  {
    file_name: "HMTpano_000015_000089.jpg",
    longitude_latitude: [10.93076879, 50.98952112],
  },
  {
    file_name: "HMTpano_000015_000090.jpg",
    longitude_latitude: [10.93083771, 50.98950867],
  },
  {
    file_name: "HMTpano_000015_000091.jpg",
    longitude_latitude: [10.93090843, 50.98949441],
  },
  {
    file_name: "HMTpano_000015_000092.jpg",
    longitude_latitude: [10.9309771, 50.98947859],
  },
  {
    file_name: "HMTpano_000015_000093.jpg",
    longitude_latitude: [10.93104325, 50.98946128],
  },
  {
    file_name: "HMTpano_000015_000094.jpg",
    longitude_latitude: [10.93110915, 50.98944202],
  },
  {
    file_name: "HMTpano_000015_000095.jpg",
    longitude_latitude: [10.93117378, 50.98942063],
  },
  {
    file_name: "HMTpano_000015_000096.jpg",
    longitude_latitude: [10.93123634, 50.98939789],
  },
  {
    file_name: "HMTpano_000015_000097.jpg",
    longitude_latitude: [10.93129719, 50.98937273],
  },
  {
    file_name: "HMTpano_000015_000098.jpg",
    longitude_latitude: [10.93135631, 50.98934592],
  },
  {
    file_name: "HMTpano_000015_000099.jpg",
    longitude_latitude: [10.93142632, 50.98932496],
  },
  {
    file_name: "HMTpano_000015_000100.jpg",
    longitude_latitude: [10.93150391, 50.98933547],
  },
  {
    file_name: "HMTpano_000015_000101.jpg",
    longitude_latitude: [10.93155665, 50.98937136],
  },
  {
    file_name: "HMTpano_000015_000102.jpg",
    longitude_latitude: [10.93158417, 50.98941466],
  },
  {
    file_name: "HMTpano_000015_000103.jpg",
    longitude_latitude: [10.9316015, 50.98945931],
  },
  {
    file_name: "HMTpano_000015_000104.jpg",
    longitude_latitude: [10.93161382, 50.98950426],
  },
  {
    file_name: "HMTpano_000015_000105.jpg",
    longitude_latitude: [10.93162512, 50.98954936],
  },
  {
    file_name: "HMTpano_000015_000106.jpg",
    longitude_latitude: [10.93163595, 50.98959505],
  },
  {
    file_name: "HMTpano_000015_000107.jpg",
    longitude_latitude: [10.93164648, 50.98964076],
  },
  {
    file_name: "HMTpano_000015_000108.jpg",
    longitude_latitude: [10.93165643, 50.98968589],
  },
  {
    file_name: "HMTpano_000015_000109.jpg",
    longitude_latitude: [10.93166597, 50.98973162],
  },
  {
    file_name: "HMTpano_000015_000110.jpg",
    longitude_latitude: [10.93167504, 50.98977765],
  },
  {
    file_name: "HMTpano_000015_000111.jpg",
    longitude_latitude: [10.93168439, 50.98982382],
  },
  {
    file_name: "HMTpano_000015_000112.jpg",
    longitude_latitude: [10.93169399, 50.98986911],
  },
  {
    file_name: "HMTpano_000015_000113.jpg",
    longitude_latitude: [10.9317041, 50.98991578],
  },
  {
    file_name: "HMTpano_000015_000114.jpg",
    longitude_latitude: [10.93171418, 50.98996293],
  },
  {
    file_name: "HMTpano_000015_000115.jpg",
    longitude_latitude: [10.93172407, 50.99000934],
  },
  {
    file_name: "HMTpano_000015_000116.jpg",
    longitude_latitude: [10.93173375, 50.99005498],
  },
  {
    file_name: "HMTpano_000015_000117.jpg",
    longitude_latitude: [10.93174313, 50.99010035],
  },
  {
    file_name: "HMTpano_000015_000118.jpg",
    longitude_latitude: [10.93175256, 50.99014606],
  },
  {
    file_name: "HMTpano_000015_000119.jpg",
    longitude_latitude: [10.93176216, 50.99019238],
  },
  {
    file_name: "HMTpano_000015_000120.jpg",
    longitude_latitude: [10.93177204, 50.99023955],
  },
  {
    file_name: "HMTpano_000015_000121.jpg",
    longitude_latitude: [10.93178179, 50.99028547],
  },
  {
    file_name: "HMTpano_000015_000122.jpg",
    longitude_latitude: [10.93179149, 50.99033095],
  },
  {
    file_name: "HMTpano_000015_000123.jpg",
    longitude_latitude: [10.9318014, 50.99037708],
  },
  {
    file_name: "HMTpano_000015_000124.jpg",
    longitude_latitude: [10.93181147, 50.99042391],
  },
  {
    file_name: "HMTpano_000015_000125.jpg",
    longitude_latitude: [10.93182167, 50.99047128],
  },
  {
    file_name: "HMTpano_000015_000126.jpg",
    longitude_latitude: [10.93183156, 50.99051671],
  },
  {
    file_name: "HMTpano_000015_000127.jpg",
    longitude_latitude: [10.93184149, 50.99056197],
  },
  {
    file_name: "HMTpano_000015_000128.jpg",
    longitude_latitude: [10.93185148, 50.99060763],
  },
  {
    file_name: "HMTpano_000015_000129.jpg",
    longitude_latitude: [10.93186145, 50.9906538],
  },
  {
    file_name: "HMTpano_000015_000130.jpg",
    longitude_latitude: [10.93187147, 50.99070028],
  },
  {
    file_name: "HMTpano_000015_000131.jpg",
    longitude_latitude: [10.93188166, 50.99074712],
  },
  {
    file_name: "HMTpano_000015_000132.jpg",
    longitude_latitude: [10.93189186, 50.99079417],
  },
  {
    file_name: "HMTpano_000015_000133.jpg",
    longitude_latitude: [10.93190202, 50.99084108],
  },
  {
    file_name: "HMTpano_000015_000134.jpg",
    longitude_latitude: [10.9319122, 50.99088775],
  },
  {
    file_name: "HMTpano_000015_000135.jpg",
    longitude_latitude: [10.93192228, 50.99093397],
  },
  {
    file_name: "HMTpano_000015_000136.jpg",
    longitude_latitude: [10.93193205, 50.99097966],
  },
  {
    file_name: "HMTpano_000015_000137.jpg",
    longitude_latitude: [10.93194172, 50.99102461],
  },
  {
    file_name: "HMTpano_000015_000138.jpg",
    longitude_latitude: [10.93195173, 50.99107175],
  },
  {
    file_name: "HMTpano_000015_000139.jpg",
    longitude_latitude: [10.93196152, 50.9911188],
  },
  {
    file_name: "HMTpano_000015_000140.jpg",
    longitude_latitude: [10.93197074, 50.99116473],
  },
  {
    file_name: "HMTpano_000015_000141.jpg",
    longitude_latitude: [10.93197979, 50.99121083],
  },
  {
    file_name: "HMTpano_000015_000142.jpg",
    longitude_latitude: [10.93198873, 50.99125749],
  },
  {
    file_name: "HMTpano_000015_000143.jpg",
    longitude_latitude: [10.93199743, 50.99130312],
  },
  {
    file_name: "HMTpano_000015_000144.jpg",
    longitude_latitude: [10.93200612, 50.99134934],
  },
  {
    file_name: "HMTpano_000016_000000.jpg",
    longitude_latitude: [10.93161122, 50.98962561],
  },
  {
    file_name: "HMTpano_000016_000001.jpg",
    longitude_latitude: [10.93160663, 50.98960311],
  },
  {
    file_name: "HMTpano_000016_000002.jpg",
    longitude_latitude: [10.93159754, 50.98955697],
  },
  {
    file_name: "HMTpano_000016_000003.jpg",
    longitude_latitude: [10.93158834, 50.9895104],
  },
  {
    file_name: "HMTpano_000016_000004.jpg",
    longitude_latitude: [10.93157978, 50.98946419],
  },
  {
    file_name: "HMTpano_000016_000005.jpg",
    longitude_latitude: [10.93157343, 50.98941806],
  },
  {
    file_name: "HMTpano_000016_000006.jpg",
    longitude_latitude: [10.93157062, 50.98937191],
  },
  {
    file_name: "HMTpano_000016_000007.jpg",
    longitude_latitude: [10.93157223, 50.98932408],
  },
  {
    file_name: "HMTpano_000016_000008.jpg",
    longitude_latitude: [10.93157828, 50.98927697],
  },
  {
    file_name: "HMTpano_000016_000009.jpg",
    longitude_latitude: [10.9315874, 50.98923021],
  },
  {
    file_name: "HMTpano_000016_000010.jpg",
    longitude_latitude: [10.93159789, 50.98918446],
  },
  {
    file_name: "HMTpano_000016_000011.jpg",
    longitude_latitude: [10.93160987, 50.98913889],
  },
  {
    file_name: "HMTpano_000016_000012.jpg",
    longitude_latitude: [10.93162183, 50.98909378],
  },
  {
    file_name: "HMTpano_000016_000013.jpg",
    longitude_latitude: [10.931634, 50.98904818],
  },
  {
    file_name: "HMTpano_000016_000014.jpg",
    longitude_latitude: [10.93164654, 50.98900208],
  },
  {
    file_name: "HMTpano_000016_000015.jpg",
    longitude_latitude: [10.93165903, 50.98895601],
  },
  {
    file_name: "HMTpano_000016_000016.jpg",
    longitude_latitude: [10.93167142, 50.98891028],
  },
  {
    file_name: "HMTpano_000016_000017.jpg",
    longitude_latitude: [10.93168385, 50.98886502],
  },
  {
    file_name: "HMTpano_000016_000018.jpg",
    longitude_latitude: [10.93169448, 50.98881961],
  },
  {
    file_name: "HMTpano_000016_000019.jpg",
    longitude_latitude: [10.93170241, 50.98877361],
  },
  {
    file_name: "HMTpano_000016_000020.jpg",
    longitude_latitude: [10.93170797, 50.98872794],
  },
  {
    file_name: "HMTpano_000016_000021.jpg",
    longitude_latitude: [10.93171149, 50.98868213],
  },
  {
    file_name: "HMTpano_000016_000022.jpg",
    longitude_latitude: [10.93171396, 50.98863522],
  },
  {
    file_name: "HMTpano_000016_000023.jpg",
    longitude_latitude: [10.93171622, 50.98859009],
  },
  {
    file_name: "HMTpano_000016_000024.jpg",
    longitude_latitude: [10.93171829, 50.98854427],
  },
  {
    file_name: "HMTpano_000016_000025.jpg",
    longitude_latitude: [10.93172019, 50.98849813],
  },
  {
    file_name: "HMTpano_000017_000000.jpg",
    longitude_latitude: [10.93110239, 50.988015],
  },
  {
    file_name: "HMTpano_000017_000001.jpg",
    longitude_latitude: [10.93107731, 50.98801274],
  },
  {
    file_name: "HMTpano_000017_000002.jpg",
    longitude_latitude: [10.93100628, 50.98800776],
  },
  {
    file_name: "HMTpano_000017_000003.jpg",
    longitude_latitude: [10.93093319, 50.98800408],
  },
  {
    file_name: "HMTpano_000017_000004.jpg",
    longitude_latitude: [10.93085979, 50.98798914],
  },
  {
    file_name: "HMTpano_000017_000005.jpg",
    longitude_latitude: [10.93081828, 50.98794619],
  },
  {
    file_name: "HMTpano_000017_000006.jpg",
    longitude_latitude: [10.93083509, 50.98789876],
  },
  {
    file_name: "HMTpano_000017_000007.jpg",
    longitude_latitude: [10.93087316, 50.98785922],
  },
  {
    file_name: "HMTpano_000017_000008.jpg",
    longitude_latitude: [10.93091247, 50.98782109],
  },
  {
    file_name: "HMTpano_000017_000009.jpg",
    longitude_latitude: [10.93095136, 50.98778263],
  },
  {
    file_name: "HMTpano_000017_000010.jpg",
    longitude_latitude: [10.93098938, 50.98774382],
  },
  {
    file_name: "HMTpano_000017_000011.jpg",
    longitude_latitude: [10.93102656, 50.98770492],
  },
  {
    file_name: "HMTpano_000017_000012.jpg",
    longitude_latitude: [10.93106353, 50.98766489],
  },
  {
    file_name: "HMTpano_000017_000013.jpg",
    longitude_latitude: [10.93109861, 50.98762594],
  },
  {
    file_name: "HMTpano_000017_000014.jpg",
    longitude_latitude: [10.93113424, 50.98758599],
  },
  {
    file_name: "HMTpano_000017_000015.jpg",
    longitude_latitude: [10.93117032, 50.98754603],
  },
  {
    file_name: "HMTpano_000017_000016.jpg",
    longitude_latitude: [10.93120708, 50.98750638],
  },
  {
    file_name: "HMTpano_000017_000017.jpg",
    longitude_latitude: [10.93124337, 50.98746754],
  },
  {
    file_name: "HMTpano_000017_000018.jpg",
    longitude_latitude: [10.93127405, 50.98742743],
  },
  {
    file_name: "HMTpano_000017_000019.jpg",
    longitude_latitude: [10.93128953, 50.98738507],
  },
  {
    file_name: "HMTpano_000017_000020.jpg",
    longitude_latitude: [10.93128328, 50.98734315],
  },
  {
    file_name: "HMTpano_000017_000021.jpg",
    longitude_latitude: [10.93124898, 50.98730658],
  },
  {
    file_name: "HMTpano_000017_000022.jpg",
    longitude_latitude: [10.93119443, 50.98727917],
  },
  {
    file_name: "HMTpano_000017_000023.jpg",
    longitude_latitude: [10.93113337, 50.98725463],
  },
  {
    file_name: "HMTpano_000017_000024.jpg",
    longitude_latitude: [10.93107256, 50.98722989],
  },
  {
    file_name: "HMTpano_000017_000025.jpg",
    longitude_latitude: [10.93101147, 50.98720525],
  },
  {
    file_name: "HMTpano_000017_000026.jpg",
    longitude_latitude: [10.93095003, 50.98718142],
  },
  {
    file_name: "HMTpano_000017_000027.jpg",
    longitude_latitude: [10.93088784, 50.98715896],
  },
  {
    file_name: "HMTpano_000017_000028.jpg",
    longitude_latitude: [10.93082445, 50.98713734],
  },
  {
    file_name: "HMTpano_000017_000029.jpg",
    longitude_latitude: [10.93075963, 50.98711716],
  },
  {
    file_name: "HMTpano_000017_000030.jpg",
    longitude_latitude: [10.93069431, 50.98709754],
  },
  {
    file_name: "HMTpano_000017_000031.jpg",
    longitude_latitude: [10.93062956, 50.98707832],
  },
  {
    file_name: "HMTpano_000017_000032.jpg",
    longitude_latitude: [10.93056534, 50.98705892],
  },
  {
    file_name: "HMTpano_000017_000033.jpg",
    longitude_latitude: [10.93050159, 50.98703905],
  },
  {
    file_name: "HMTpano_000017_000034.jpg",
    longitude_latitude: [10.93043735, 50.98701872],
  },
  {
    file_name: "HMTpano_000017_000035.jpg",
    longitude_latitude: [10.93037302, 50.98699857],
  },
  {
    file_name: "HMTpano_000017_000036.jpg",
    longitude_latitude: [10.93030903, 50.98697873],
  },
  {
    file_name: "HMTpano_000017_000037.jpg",
    longitude_latitude: [10.93024462, 50.98695907],
  },
  {
    file_name: "HMTpano_000017_000038.jpg",
    longitude_latitude: [10.93017981, 50.98693996],
  },
  {
    file_name: "HMTpano_000017_000039.jpg",
    longitude_latitude: [10.93011505, 50.98692219],
  },
  {
    file_name: "HMTpano_000017_000040.jpg",
    longitude_latitude: [10.93004895, 50.98690588],
  },
  {
    file_name: "HMTpano_000017_000041.jpg",
    longitude_latitude: [10.92998317, 50.98689005],
  },
  {
    file_name: "HMTpano_000017_000042.jpg",
    longitude_latitude: [10.92991934, 50.98687349],
  },
  {
    file_name: "HMTpano_000017_000043.jpg",
    longitude_latitude: [10.92985275, 50.98685931],
  },
  {
    file_name: "HMTpano_000017_000044.jpg",
    longitude_latitude: [10.92978381, 50.98684677],
  },
  {
    file_name: "HMTpano_000017_000045.jpg",
    longitude_latitude: [10.92971446, 50.98683451],
  },
  {
    file_name: "HMTpano_000017_000046.jpg",
    longitude_latitude: [10.92964518, 50.98682268],
  },
  {
    file_name: "HMTpano_000017_000047.jpg",
    longitude_latitude: [10.92957575, 50.98681104],
  },
  {
    file_name: "HMTpano_000017_000048.jpg",
    longitude_latitude: [10.92950744, 50.98679883],
  },
  {
    file_name: "HMTpano_000017_000049.jpg",
    longitude_latitude: [10.92943902, 50.98678406],
  },
  {
    file_name: "HMTpano_000017_000050.jpg",
    longitude_latitude: [10.92937219, 50.98676724],
  },
  {
    file_name: "HMTpano_000017_000051.jpg",
    longitude_latitude: [10.92930611, 50.98674805],
  },
  {
    file_name: "HMTpano_000017_000052.jpg",
    longitude_latitude: [10.92924204, 50.98672796],
  },
  {
    file_name: "HMTpano_000017_000053.jpg",
    longitude_latitude: [10.92917771, 50.98670742],
  },
  {
    file_name: "HMTpano_000017_000054.jpg",
    longitude_latitude: [10.92911368, 50.98668688],
  },
  {
    file_name: "HMTpano_000017_000055.jpg",
    longitude_latitude: [10.92904961, 50.98666594],
  },
  {
    file_name: "HMTpano_000017_000056.jpg",
    longitude_latitude: [10.92898644, 50.98664498],
  },
  {
    file_name: "HMTpano_000017_000057.jpg",
    longitude_latitude: [10.92892199, 50.98662346],
  },
  {
    file_name: "HMTpano_000017_000058.jpg",
    longitude_latitude: [10.92885843, 50.98660163],
  },
  {
    file_name: "HMTpano_000017_000059.jpg",
    longitude_latitude: [10.92879566, 50.98657931],
  },
  {
    file_name: "HMTpano_000017_000060.jpg",
    longitude_latitude: [10.92873366, 50.98655632],
  },
  {
    file_name: "HMTpano_000017_000061.jpg",
    longitude_latitude: [10.92867193, 50.98653251],
  },
  {
    file_name: "HMTpano_000017_000062.jpg",
    longitude_latitude: [10.92861151, 50.98650818],
  },
  {
    file_name: "HMTpano_000017_000063.jpg",
    longitude_latitude: [10.92855082, 50.98648299],
  },
  {
    file_name: "HMTpano_000017_000064.jpg",
    longitude_latitude: [10.92848934, 50.98645952],
  },
  {
    file_name: "HMTpano_000017_000065.jpg",
    longitude_latitude: [10.92842634, 50.98643795],
  },
  {
    file_name: "HMTpano_000017_000066.jpg",
    longitude_latitude: [10.92836353, 50.98641927],
  },
  {
    file_name: "HMTpano_000017_000067.jpg",
    longitude_latitude: [10.92829799, 50.98641271],
  },
  {
    file_name: "HMTpano_000017_000068.jpg",
    longitude_latitude: [10.92823638, 50.98642576],
  },
  {
    file_name: "HMTpano_000018_000000.jpg",
    longitude_latitude: [10.92780696, 50.98694408],
  },
  {
    file_name: "HMTpano_000018_000001.jpg",
    longitude_latitude: [10.9278036, 50.98695998],
  },
  {
    file_name: "HMTpano_000018_000002.jpg",
    longitude_latitude: [10.92779457, 50.98700556],
  },
  {
    file_name: "HMTpano_000018_000003.jpg",
    longitude_latitude: [10.92778316, 50.98705072],
  },
  {
    file_name: "HMTpano_000018_000004.jpg",
    longitude_latitude: [10.92777154, 50.98709601],
  },
  {
    file_name: "HMTpano_000018_000005.jpg",
    longitude_latitude: [10.92775303, 50.98714197],
  },
  {
    file_name: "HMTpano_000018_000006.jpg",
    longitude_latitude: [10.92770249, 50.98717907],
  },
  {
    file_name: "HMTpano_000018_000007.jpg",
    longitude_latitude: [10.92762505, 50.98718816],
  },
  {
    file_name: "HMTpano_000018_000008.jpg",
    longitude_latitude: [10.92755187, 50.98718057],
  },
  {
    file_name: "HMTpano_000018_000009.jpg",
    longitude_latitude: [10.92748134, 50.98716803],
  },
  {
    file_name: "HMTpano_000018_000010.jpg",
    longitude_latitude: [10.92741179, 50.98715403],
  },
  {
    file_name: "HMTpano_000018_000011.jpg",
    longitude_latitude: [10.92734205, 50.98713944],
  },
  {
    file_name: "HMTpano_000018_000012.jpg",
    longitude_latitude: [10.92727227, 50.98712492],
  },
  {
    file_name: "HMTpano_000018_000013.jpg",
    longitude_latitude: [10.92720249, 50.98711047],
  },
  {
    file_name: "HMTpano_000018_000014.jpg",
    longitude_latitude: [10.92713341, 50.98709627],
  },
  {
    file_name: "HMTpano_000018_000015.jpg",
    longitude_latitude: [10.92706403, 50.98708228],
  },
  {
    file_name: "HMTpano_000018_000016.jpg",
    longitude_latitude: [10.92699383, 50.98706806],
  },
  {
    file_name: "HMTpano_000018_000017.jpg",
    longitude_latitude: [10.92692384, 50.9870538],
  },
  {
    file_name: "HMTpano_000018_000018.jpg",
    longitude_latitude: [10.9268539, 50.98703921],
  },
  {
    file_name: "HMTpano_000018_000019.jpg",
    longitude_latitude: [10.92678402, 50.98702392],
  },
  {
    file_name: "HMTpano_000018_000020.jpg",
    longitude_latitude: [10.9267148, 50.98700866],
  },
  {
    file_name: "HMTpano_000018_000021.jpg",
    longitude_latitude: [10.92664615, 50.98699343],
  },
  {
    file_name: "HMTpano_000018_000022.jpg",
    longitude_latitude: [10.92657821, 50.98697832],
  },
  {
    file_name: "HMTpano_000018_000023.jpg",
    longitude_latitude: [10.92650869, 50.98696291],
  },
  {
    file_name: "HMTpano_000018_000024.jpg",
    longitude_latitude: [10.92643897, 50.98694742],
  },
  {
    file_name: "HMTpano_000018_000025.jpg",
    longitude_latitude: [10.92637002, 50.98693161],
  },
  {
    file_name: "HMTpano_000018_000026.jpg",
    longitude_latitude: [10.9263028, 50.9869157],
  },
  {
    file_name: "HMTpano_000018_000027.jpg",
    longitude_latitude: [10.92623527, 50.98689869],
  },
  {
    file_name: "HMTpano_000018_000028.jpg",
    longitude_latitude: [10.92616717, 50.98688201],
  },
  {
    file_name: "HMTpano_000018_000029.jpg",
    longitude_latitude: [10.92609886, 50.9868668],
  },
  {
    file_name: "HMTpano_000018_000030.jpg",
    longitude_latitude: [10.92602912, 50.98685339],
  },
  {
    file_name: "HMTpano_000018_000031.jpg",
    longitude_latitude: [10.92595979, 50.98684064],
  },
  {
    file_name: "HMTpano_000018_000032.jpg",
    longitude_latitude: [10.92589061, 50.98682563],
  },
  {
    file_name: "HMTpano_000019_000000.jpg",
    longitude_latitude: [10.92599041, 50.98500921],
  },
  {
    file_name: "HMTpano_000019_000001.jpg",
    longitude_latitude: [10.92597659, 50.98500926],
  },
  {
    file_name: "HMTpano_000019_000002.jpg",
    longitude_latitude: [10.92591757, 50.98502093],
  },
  {
    file_name: "HMTpano_000019_000003.jpg",
    longitude_latitude: [10.92590314, 50.98505845],
  },
  {
    file_name: "HMTpano_000019_000004.jpg",
    longitude_latitude: [10.92594567, 50.98508367],
  },
  {
    file_name: "HMTpano_000019_000005.jpg",
    longitude_latitude: [10.92601563, 50.98508778],
  },
  {
    file_name: "HMTpano_000019_000006.jpg",
    longitude_latitude: [10.9260878, 50.98509305],
  },
  {
    file_name: "HMTpano_000019_000007.jpg",
    longitude_latitude: [10.92615903, 50.98510243],
  },
  {
    file_name: "HMTpano_000019_000008.jpg",
    longitude_latitude: [10.92622873, 50.98511509],
  },
  {
    file_name: "HMTpano_000019_000009.jpg",
    longitude_latitude: [10.92629719, 50.98512902],
  },
  {
    file_name: "HMTpano_000019_000010.jpg",
    longitude_latitude: [10.92636548, 50.98514316],
  },
  {
    file_name: "HMTpano_000019_000011.jpg",
    longitude_latitude: [10.9264343, 50.98515761],
  },
  {
    file_name: "HMTpano_000019_000012.jpg",
    longitude_latitude: [10.92650238, 50.98517232],
  },
  {
    file_name: "HMTpano_000019_000013.jpg",
    longitude_latitude: [10.9265712, 50.9851871],
  },
  {
    file_name: "HMTpano_000019_000014.jpg",
    longitude_latitude: [10.92663907, 50.98520245],
  },
  {
    file_name: "HMTpano_000019_000015.jpg",
    longitude_latitude: [10.92670679, 50.98521867],
  },
  {
    file_name: "HMTpano_000019_000016.jpg",
    longitude_latitude: [10.92677358, 50.98523599],
  },
  {
    file_name: "HMTpano_000019_000017.jpg",
    longitude_latitude: [10.92683989, 50.98525431],
  },
  {
    file_name: "HMTpano_000019_000018.jpg",
    longitude_latitude: [10.9269053, 50.98527356],
  },
  {
    file_name: "HMTpano_000019_000019.jpg",
    longitude_latitude: [10.92697028, 50.98529279],
  },
  {
    file_name: "HMTpano_000019_000020.jpg",
    longitude_latitude: [10.92703564, 50.98531226],
  },
  {
    file_name: "HMTpano_000019_000021.jpg",
    longitude_latitude: [10.92710037, 50.98533155],
  },
  {
    file_name: "HMTpano_000019_000022.jpg",
    longitude_latitude: [10.92716636, 50.98535145],
  },
  {
    file_name: "HMTpano_000019_000023.jpg",
    longitude_latitude: [10.92723141, 50.98537138],
  },
  {
    file_name: "HMTpano_000019_000024.jpg",
    longitude_latitude: [10.92729564, 50.98539113],
  },
  {
    file_name: "HMTpano_000019_000025.jpg",
    longitude_latitude: [10.9273609, 50.98541141],
  },
  {
    file_name: "HMTpano_000019_000026.jpg",
    longitude_latitude: [10.92742514, 50.98543154],
  },
  {
    file_name: "HMTpano_000019_000027.jpg",
    longitude_latitude: [10.92748772, 50.98545028],
  },
  {
    file_name: "HMTpano_000019_000028.jpg",
    longitude_latitude: [10.92754875, 50.98544882],
  },
  {
    file_name: "HMTpano_000019_000029.jpg",
    longitude_latitude: [10.9275934, 50.98541864],
  },
  {
    file_name: "HMTpano_000019_000030.jpg",
    longitude_latitude: [10.92762467, 50.98537713],
  },
  {
    file_name: "HMTpano_000020_000000.jpg",
    longitude_latitude: [10.92734321, 50.98540211],
  },
  {
    file_name: "HMTpano_000020_000001.jpg",
    longitude_latitude: [10.92735462, 50.98540554],
  },
  {
    file_name: "HMTpano_000020_000002.jpg",
    longitude_latitude: [10.92741849, 50.98542685],
  },
  {
    file_name: "HMTpano_000020_000003.jpg",
    longitude_latitude: [10.92748137, 50.98544784],
  },
  {
    file_name: "HMTpano_000020_000004.jpg",
    longitude_latitude: [10.9275473, 50.98546607],
  },
  {
    file_name: "HMTpano_000020_000005.jpg",
    longitude_latitude: [10.92761399, 50.98548294],
  },
  {
    file_name: "HMTpano_000020_000006.jpg",
    longitude_latitude: [10.92768103, 50.98550045],
  },
  {
    file_name: "HMTpano_000020_000007.jpg",
    longitude_latitude: [10.9277471, 50.98552044],
  },
  {
    file_name: "HMTpano_000020_000008.jpg",
    longitude_latitude: [10.92781084, 50.98554231],
  },
  {
    file_name: "HMTpano_000020_000009.jpg",
    longitude_latitude: [10.92787462, 50.98556431],
  },
  {
    file_name: "HMTpano_000020_000010.jpg",
    longitude_latitude: [10.92793801, 50.98558568],
  },
  {
    file_name: "HMTpano_000020_000011.jpg",
    longitude_latitude: [10.92800239, 50.98560654],
  },
  {
    file_name: "HMTpano_000020_000012.jpg",
    longitude_latitude: [10.92806846, 50.98562671],
  },
  {
    file_name: "HMTpano_000020_000013.jpg",
    longitude_latitude: [10.92813328, 50.98564531],
  },
  {
    file_name: "HMTpano_000020_000014.jpg",
    longitude_latitude: [10.92819937, 50.98566306],
  },
  {
    file_name: "HMTpano_000020_000015.jpg",
    longitude_latitude: [10.92826612, 50.98567969],
  },
  {
    file_name: "HMTpano_000020_000016.jpg",
    longitude_latitude: [10.92833301, 50.98569524],
  },
  {
    file_name: "HMTpano_000020_000017.jpg",
    longitude_latitude: [10.92840224, 50.98571088],
  },
  {
    file_name: "HMTpano_000020_000018.jpg",
    longitude_latitude: [10.92847098, 50.98572677],
  },
  {
    file_name: "HMTpano_000020_000019.jpg",
    longitude_latitude: [10.92853838, 50.98574375],
  },
  {
    file_name: "HMTpano_000020_000020.jpg",
    longitude_latitude: [10.92860464, 50.98576203],
  },
  {
    file_name: "HMTpano_000020_000021.jpg",
    longitude_latitude: [10.92866936, 50.98578149],
  },
  {
    file_name: "HMTpano_000020_000022.jpg",
    longitude_latitude: [10.92873415, 50.98580271],
  },
  {
    file_name: "HMTpano_000020_000023.jpg",
    longitude_latitude: [10.9287982, 50.98582546],
  },
  {
    file_name: "HMTpano_000020_000024.jpg",
    longitude_latitude: [10.92886013, 50.9858497],
  },
  {
    file_name: "HMTpano_000020_000025.jpg",
    longitude_latitude: [10.92892036, 50.98587549],
  },
  {
    file_name: "HMTpano_000020_000026.jpg",
    longitude_latitude: [10.92897865, 50.98590256],
  },
  {
    file_name: "HMTpano_000020_000027.jpg",
    longitude_latitude: [10.92903475, 50.98593079],
  },
  {
    file_name: "HMTpano_000020_000028.jpg",
    longitude_latitude: [10.92908928, 50.9859597],
  },
  {
    file_name: "HMTpano_000020_000029.jpg",
    longitude_latitude: [10.92914934, 50.98598213],
  },
  {
    file_name: "HMTpano_000020_000030.jpg",
    longitude_latitude: [10.92921631, 50.98599845],
  },
  {
    file_name: "HMTpano_000020_000031.jpg",
    longitude_latitude: [10.92927997, 50.98603003],
  },
  {
    file_name: "HMTpano_000021_000000.jpg",
    longitude_latitude: [10.93001253, 50.98621646],
  },
  {
    file_name: "HMTpano_000021_000001.jpg",
    longitude_latitude: [10.93006802, 50.98621893],
  },
  {
    file_name: "HMTpano_000021_000002.jpg",
    longitude_latitude: [10.93014035, 50.98621993],
  },
  {
    file_name: "HMTpano_000021_000003.jpg",
    longitude_latitude: [10.93021189, 50.98621831],
  },
  {
    file_name: "HMTpano_000021_000004.jpg",
    longitude_latitude: [10.93028065, 50.98621257],
  },
  {
    file_name: "HMTpano_000021_000005.jpg",
    longitude_latitude: [10.93033914, 50.98619376],
  },
  {
    file_name: "HMTpano_000021_000006.jpg",
    longitude_latitude: [10.93037178, 50.98615756],
  },
  {
    file_name: "HMTpano_000021_000007.jpg",
    longitude_latitude: [10.93037824, 50.98611411],
  },
  {
    file_name: "HMTpano_000021_000008.jpg",
    longitude_latitude: [10.93037252, 50.98606925],
  },
  {
    file_name: "HMTpano_000021_000009.jpg",
    longitude_latitude: [10.93036261, 50.98602379],
  },
  {
    file_name: "HMTpano_000021_000010.jpg",
    longitude_latitude: [10.93035243, 50.98597842],
  },
  {
    file_name: "HMTpano_000021_000011.jpg",
    longitude_latitude: [10.93034129, 50.98593304],
  },
  {
    file_name: "HMTpano_000021_000012.jpg",
    longitude_latitude: [10.93032984, 50.98588743],
  },
  {
    file_name: "HMTpano_000021_000013.jpg",
    longitude_latitude: [10.9303188, 50.98584252],
  },
  {
    file_name: "HMTpano_000021_000014.jpg",
    longitude_latitude: [10.93030797, 50.98579733],
  },
  {
    file_name: "HMTpano_000021_000015.jpg",
    longitude_latitude: [10.93029937, 50.98575182],
  },
  {
    file_name: "HMTpano_000021_000016.jpg",
    longitude_latitude: [10.93029862, 50.98570585],
  },
  {
    file_name: "HMTpano_000021_000017.jpg",
    longitude_latitude: [10.93030637, 50.98566096],
  },
  {
    file_name: "HMTpano_000021_000018.jpg",
    longitude_latitude: [10.93031869, 50.98561519],
  },
  {
    file_name: "HMTpano_000021_000019.jpg",
    longitude_latitude: [10.93036913, 50.985578],
  },
  {
    file_name: "HMTpano_000022_000000.jpg",
    longitude_latitude: [10.92859761, 50.98650249],
  },
  {
    file_name: "HMTpano_000022_000001.jpg",
    longitude_latitude: [10.9286462, 50.98652284],
  },
  {
    file_name: "HMTpano_000022_000002.jpg",
    longitude_latitude: [10.92868123, 50.98656766],
  },
  {
    file_name: "HMTpano_000022_000003.jpg",
    longitude_latitude: [10.92866209, 50.98661437],
  },
  {
    file_name: "HMTpano_000022_000004.jpg",
    longitude_latitude: [10.92862601, 50.98665435],
  },
  {
    file_name: "HMTpano_000022_000005.jpg",
    longitude_latitude: [10.92858894, 50.98669216],
  },
  {
    file_name: "HMTpano_000022_000006.jpg",
    longitude_latitude: [10.92856971, 50.98673268],
  },
  {
    file_name: "HMTpano_000022_000007.jpg",
    longitude_latitude: [10.92859104, 50.98677056],
  },
  {
    file_name: "HMTpano_000022_000008.jpg",
    longitude_latitude: [10.92864586, 50.98679468],
  },
  {
    file_name: "HMTpano_000022_000009.jpg",
    longitude_latitude: [10.92871322, 50.98680877],
  },
  {
    file_name: "HMTpano_000022_000010.jpg",
    longitude_latitude: [10.92878281, 50.98682039],
  },
  {
    file_name: "HMTpano_000022_000011.jpg",
    longitude_latitude: [10.92885251, 50.98683249],
  },
  {
    file_name: "HMTpano_000022_000012.jpg",
    longitude_latitude: [10.92892127, 50.9868464],
  },
  {
    file_name: "HMTpano_000022_000013.jpg",
    longitude_latitude: [10.92898856, 50.98686225],
  },
  {
    file_name: "HMTpano_000022_000014.jpg",
    longitude_latitude: [10.92905624, 50.98687458],
  },
  {
    file_name: "HMTpano_000022_000015.jpg",
    longitude_latitude: [10.92912654, 50.98687851],
  },
  {
    file_name: "HMTpano_000022_000016.jpg",
    longitude_latitude: [10.92919891, 50.98687851],
  },
  {
    file_name: "HMTpano_000022_000017.jpg",
    longitude_latitude: [10.92926826, 50.986876],
  },
  {
    file_name: "HMTpano_000022_000018.jpg",
    longitude_latitude: [10.92933669, 50.98686661],
  },
  {
    file_name: "HMTpano_000022_000019.jpg",
    longitude_latitude: [10.92939715, 50.98684465],
  },
  {
    file_name: "HMTpano_000022_000020.jpg",
    longitude_latitude: [10.92946141, 50.98681957],
  },
  {
    file_name: "HMTpano_000022_000021.jpg",
    longitude_latitude: [10.92953612, 50.98681047],
  },
  {
    file_name: "HMTpano_000022_000022.jpg",
    longitude_latitude: [10.92960926, 50.98681608],
  },
  {
    file_name: "HMTpano_000022_000023.jpg",
    longitude_latitude: [10.92967998, 50.98682664],
  },
  {
    file_name: "HMTpano_000022_000024.jpg",
    longitude_latitude: [10.92975016, 50.98683794],
  },
  {
    file_name: "HMTpano_000023_000000.jpg",
    longitude_latitude: [10.92977162, 50.98758162],
  },
  {
    file_name: "HMTpano_000023_000001.jpg",
    longitude_latitude: [10.92978663, 50.98755495],
  },
  {
    file_name: "HMTpano_000023_000002.jpg",
    longitude_latitude: [10.92980419, 50.98751084],
  },
  {
    file_name: "HMTpano_000023_000003.jpg",
    longitude_latitude: [10.92981782, 50.98746596],
  },
  {
    file_name: "HMTpano_000023_000004.jpg",
    longitude_latitude: [10.92983274, 50.98742208],
  },
  {
    file_name: "HMTpano_000023_000005.jpg",
    longitude_latitude: [10.92984864, 50.98737931],
  },
  {
    file_name: "HMTpano_000023_000006.jpg",
    longitude_latitude: [10.92986666, 50.98733548],
  },
  {
    file_name: "HMTpano_000023_000007.jpg",
    longitude_latitude: [10.92988017, 50.98729242],
  },
  {
    file_name: "HMTpano_000023_000008.jpg",
    longitude_latitude: [10.92989137, 50.98724822],
  },
  {
    file_name: "HMTpano_000023_000009.jpg",
    longitude_latitude: [10.92990116, 50.9872035],
  },
  {
    file_name: "HMTpano_000023_000010.jpg",
    longitude_latitude: [10.92991243, 50.98715896],
  },
  {
    file_name: "HMTpano_000023_000011.jpg",
    longitude_latitude: [10.92992371, 50.98711471],
  },
  {
    file_name: "HMTpano_000023_000012.jpg",
    longitude_latitude: [10.92993308, 50.98707013],
  },
  {
    file_name: "HMTpano_000023_000013.jpg",
    longitude_latitude: [10.92993698, 50.98702536],
  },
  {
    file_name: "HMTpano_000023_000014.jpg",
    longitude_latitude: [10.92994499, 50.98698115],
  },
  {
    file_name: "HMTpano_000023_000015.jpg",
    longitude_latitude: [10.92996032, 50.98693936],
  },
  {
    file_name: "HMTpano_000023_000016.jpg",
    longitude_latitude: [10.92995462, 50.98689952],
  },
  {
    file_name: "HMTpano_000023_000017.jpg",
    longitude_latitude: [10.9299116, 50.98686903],
  },
  {
    file_name: "HMTpano_000023_000018.jpg",
    longitude_latitude: [10.92984629, 50.98685303],
  },
  {
    file_name: "HMTpano_000024_000000.jpg",
    longitude_latitude: [10.92749683, 50.98837765],
  },
  {
    file_name: "HMTpano_000024_000001.jpg",
    longitude_latitude: [10.92747668, 50.98838478],
  },
  {
    file_name: "HMTpano_000024_000002.jpg",
    longitude_latitude: [10.92741437, 50.98840725],
  },
  {
    file_name: "HMTpano_000024_000003.jpg",
    longitude_latitude: [10.92735223, 50.98843022],
  },
  {
    file_name: "HMTpano_000024_000004.jpg",
    longitude_latitude: [10.92728292, 50.98844893],
  },
  {
    file_name: "HMTpano_000024_000005.jpg",
    longitude_latitude: [10.9272058, 50.9884398],
  },
  {
    file_name: "HMTpano_000024_000006.jpg",
    longitude_latitude: [10.92716578, 50.9883983],
  },
  {
    file_name: "HMTpano_000024_000007.jpg",
    longitude_latitude: [10.92715077, 50.98835284],
  },
  {
    file_name: "HMTpano_000024_000008.jpg",
    longitude_latitude: [10.92714605, 50.98830717],
  },
  {
    file_name: "HMTpano_000024_000009.jpg",
    longitude_latitude: [10.92714321, 50.98826202],
  },
  {
    file_name: "HMTpano_000024_000010.jpg",
    longitude_latitude: [10.92714133, 50.9882163],
  },
  {
    file_name: "HMTpano_000024_000011.jpg",
    longitude_latitude: [10.92714014, 50.98817105],
  },
  {
    file_name: "HMTpano_000024_000012.jpg",
    longitude_latitude: [10.92713916, 50.98812557],
  },
  {
    file_name: "HMTpano_000024_000013.jpg",
    longitude_latitude: [10.92713832, 50.98808004],
  },
  {
    file_name: "HMTpano_000024_000014.jpg",
    longitude_latitude: [10.92713707, 50.98803482],
  },
  {
    file_name: "HMTpano_000024_000015.jpg",
    longitude_latitude: [10.92713592, 50.98798978],
  },
  {
    file_name: "HMTpano_000024_000016.jpg",
    longitude_latitude: [10.92712966, 50.98794641],
  },
  {
    file_name: "HMTpano_000024_000017.jpg",
    longitude_latitude: [10.9271008, 50.98790966],
  },
  {
    file_name: "HMTpano_000024_000018.jpg",
    longitude_latitude: [10.92704292, 50.98789001],
  },
  {
    file_name: "HMTpano_000024_000019.jpg",
    longitude_latitude: [10.92697284, 50.98788578],
  },
  {
    file_name: "HMTpano_000024_000020.jpg",
    longitude_latitude: [10.92690165, 50.98788617],
  },
  {
    file_name: "HMTpano_000024_000021.jpg",
    longitude_latitude: [10.92682995, 50.98788735],
  },
  {
    file_name: "HMTpano_000024_000022.jpg",
    longitude_latitude: [10.92675848, 50.98788825],
  },
  {
    file_name: "HMTpano_000025_000000.jpg",
    longitude_latitude: [10.92654814, 50.98878429],
  },
  {
    file_name: "HMTpano_000025_000001.jpg",
    longitude_latitude: [10.92650664, 50.98880762],
  },
  {
    file_name: "HMTpano_000025_000002.jpg",
    longitude_latitude: [10.92644889, 50.98883703],
  },
  {
    file_name: "HMTpano_000025_000003.jpg",
    longitude_latitude: [10.92637685, 50.98885369],
  },
  {
    file_name: "HMTpano_000025_000004.jpg",
    longitude_latitude: [10.92630038, 50.98884866],
  },
  {
    file_name: "HMTpano_000025_000005.jpg",
    longitude_latitude: [10.92624079, 50.98881892],
  },
  {
    file_name: "HMTpano_000025_000006.jpg",
    longitude_latitude: [10.92621463, 50.98877403],
  },
  {
    file_name: "HMTpano_000025_000007.jpg",
    longitude_latitude: [10.92620791, 50.98872856],
  },
  {
    file_name: "HMTpano_000025_000008.jpg",
    longitude_latitude: [10.92620314, 50.98868302],
  },
  {
    file_name: "HMTpano_000025_000009.jpg",
    longitude_latitude: [10.92620063, 50.988637],
  },
  {
    file_name: "HMTpano_000025_000010.jpg",
    longitude_latitude: [10.92619834, 50.9885914],
  },
  {
    file_name: "HMTpano_000025_000011.jpg",
    longitude_latitude: [10.9261956, 50.98854556],
  },
  {
    file_name: "HMTpano_000025_000012.jpg",
    longitude_latitude: [10.92619288, 50.98849969],
  },
  {
    file_name: "HMTpano_000025_000013.jpg",
    longitude_latitude: [10.92618995, 50.98845424],
  },
  {
    file_name: "HMTpano_000025_000014.jpg",
    longitude_latitude: [10.92618819, 50.98840864],
  },
  {
    file_name: "HMTpano_000025_000015.jpg",
    longitude_latitude: [10.92618633, 50.98836311],
  },
  {
    file_name: "HMTpano_000025_000016.jpg",
    longitude_latitude: [10.92618425, 50.98831766],
  },
  {
    file_name: "HMTpano_000025_000017.jpg",
    longitude_latitude: [10.92618345, 50.98827187],
  },
  {
    file_name: "HMTpano_000025_000018.jpg",
    longitude_latitude: [10.92618327, 50.98822634],
  },
  {
    file_name: "HMTpano_000025_000019.jpg",
    longitude_latitude: [10.92618333, 50.9881807],
  },
  {
    file_name: "HMTpano_000025_000020.jpg",
    longitude_latitude: [10.92618367, 50.98813507],
  },
  {
    file_name: "HMTpano_000025_000021.jpg",
    longitude_latitude: [10.92618204, 50.98809068],
  },
  {
    file_name: "HMTpano_000025_000022.jpg",
    longitude_latitude: [10.92616257, 50.98804978],
  },
  {
    file_name: "HMTpano_000025_000023.jpg",
    longitude_latitude: [10.92611684, 50.9880199],
  },
  {
    file_name: "HMTpano_000025_000024.jpg",
    longitude_latitude: [10.92605261, 50.98800369],
  },
  {
    file_name: "HMTpano_000025_000025.jpg",
    longitude_latitude: [10.9259815, 50.98799621],
  },
  {
    file_name: "HMTpano_000025_000026.jpg",
    longitude_latitude: [10.92590989, 50.98799493],
  },
  {
    file_name: "HMTpano_000025_000027.jpg",
    longitude_latitude: [10.92583741, 50.98799705],
  },
  {
    file_name: "HMTpano_000025_000028.jpg",
    longitude_latitude: [10.92576505, 50.98799941],
  },
  {
    file_name: "HMTpano_000025_000029.jpg",
    longitude_latitude: [10.92569175, 50.98800078],
  },
  {
    file_name: "HMTpano_000025_000030.jpg",
    longitude_latitude: [10.92561984, 50.98799955],
  },
  {
    file_name: "HMTpano_000025_000031.jpg",
    longitude_latitude: [10.92554727, 50.9879972],
  },
  {
    file_name: "HMTpano_000025_000032.jpg",
    longitude_latitude: [10.92547579, 50.98799474],
  },
  {
    file_name: "HMTpano_000026_000000.jpg",
    longitude_latitude: [10.92545428, 50.98938482],
  },
  {
    file_name: "HMTpano_000026_000001.jpg",
    longitude_latitude: [10.92544569, 50.98938939],
  },
  {
    file_name: "HMTpano_000026_000002.jpg",
    longitude_latitude: [10.92539036, 50.98941888],
  },
  {
    file_name: "HMTpano_000026_000003.jpg",
    longitude_latitude: [10.92533422, 50.98944829],
  },
  {
    file_name: "HMTpano_000026_000004.jpg",
    longitude_latitude: [10.92526771, 50.98947098],
  },
  {
    file_name: "HMTpano_000026_000005.jpg",
    longitude_latitude: [10.9251917, 50.98947597],
  },
  {
    file_name: "HMTpano_000026_000006.jpg",
    longitude_latitude: [10.92512059, 50.9894602],
  },
  {
    file_name: "HMTpano_000026_000007.jpg",
    longitude_latitude: [10.92505925, 50.98943515],
  },
  {
    file_name: "HMTpano_000026_000008.jpg",
    longitude_latitude: [10.92500055, 50.98940862],
  },
  {
    file_name: "HMTpano_000026_000009.jpg",
    longitude_latitude: [10.92494277, 50.98938104],
  },
  {
    file_name: "HMTpano_000026_000010.jpg",
    longitude_latitude: [10.92488565, 50.98935347],
  },
  {
    file_name: "HMTpano_000026_000011.jpg",
    longitude_latitude: [10.92482951, 50.98932483],
  },
  {
    file_name: "HMTpano_000026_000012.jpg",
    longitude_latitude: [10.92477946, 50.98929265],
  },
  {
    file_name: "HMTpano_000026_000013.jpg",
    longitude_latitude: [10.92472794, 50.98926401],
  },
  {
    file_name: "HMTpano_000026_000014.jpg",
    longitude_latitude: [10.92466702, 50.98924789],
  },
  {
    file_name: "HMTpano_000026_000015.jpg",
    longitude_latitude: [10.92460459, 50.98925464],
  },
  {
    file_name: "HMTpano_000026_000016.jpg",
    longitude_latitude: [10.92456085, 50.98928726],
  },
  {
    file_name: "HMTpano_000026_000017.jpg",
    longitude_latitude: [10.92453289, 50.98932894],
  },
  {
    file_name: "HMTpano_000026_000018.jpg",
    longitude_latitude: [10.92450846, 50.98937209],
  },
  {
    file_name: "HMTpano_000026_000019.jpg",
    longitude_latitude: [10.9244841, 50.98941523],
  },
  {
    file_name: "HMTpano_000026_000020.jpg",
    longitude_latitude: [10.92445919, 50.98945902],
  },
  {
    file_name: "HMTpano_000026_000021.jpg",
    longitude_latitude: [10.9244337, 50.98950284],
  },
  {
    file_name: "HMTpano_000026_000022.jpg",
    longitude_latitude: [10.92440794, 50.98954568],
  },
  {
    file_name: "HMTpano_000026_000023.jpg",
    longitude_latitude: [10.92438194, 50.98958842],
  },
  {
    file_name: "HMTpano_000026_000024.jpg",
    longitude_latitude: [10.92435611, 50.98963147],
  },
  {
    file_name: "HMTpano_000026_000025.jpg",
    longitude_latitude: [10.9243279, 50.98967397],
  },
  {
    file_name: "HMTpano_000026_000026.jpg",
    longitude_latitude: [10.92429208, 50.98971438],
  },
  {
    file_name: "HMTpano_000027_000000.jpg",
    longitude_latitude: [10.9245255, 50.98936974],
  },
  {
    file_name: "HMTpano_000027_000001.jpg",
    longitude_latitude: [10.92453013, 50.98936274],
  },
  {
    file_name: "HMTpano_000027_000002.jpg",
    longitude_latitude: [10.92455582, 50.98932112],
  },
  {
    file_name: "HMTpano_000027_000003.jpg",
    longitude_latitude: [10.92456975, 50.98927899],
  },
  {
    file_name: "HMTpano_000027_000004.jpg",
    longitude_latitude: [10.92455189, 50.9892398],
  },
  {
    file_name: "HMTpano_000027_000005.jpg",
    longitude_latitude: [10.9245042, 50.98921007],
  },
  {
    file_name: "HMTpano_000027_000006.jpg",
    longitude_latitude: [10.92444185, 50.98919113],
  },
  {
    file_name: "HMTpano_000027_000007.jpg",
    longitude_latitude: [10.92437294, 50.98917864],
  },
  {
    file_name: "HMTpano_000027_000008.jpg",
    longitude_latitude: [10.92430342, 50.9891618],
  },
  {
    file_name: "HMTpano_000027_000009.jpg",
    longitude_latitude: [10.92424629, 50.98913002],
  },
  {
    file_name: "HMTpano_000027_000010.jpg",
    longitude_latitude: [10.92421952, 50.98908506],
  },
  {
    file_name: "HMTpano_000027_000011.jpg",
    longitude_latitude: [10.92421297, 50.98903863],
  },
  {
    file_name: "HMTpano_000027_000012.jpg",
    longitude_latitude: [10.92421118, 50.98899264],
  },
  {
    file_name: "HMTpano_000027_000013.jpg",
    longitude_latitude: [10.92421076, 50.98894663],
  },
  {
    file_name: "HMTpano_000027_000014.jpg",
    longitude_latitude: [10.92421028, 50.9889008],
  },
  {
    file_name: "HMTpano_000027_000015.jpg",
    longitude_latitude: [10.92420953, 50.9888547],
  },
  {
    file_name: "HMTpano_000027_000016.jpg",
    longitude_latitude: [10.92420842, 50.9888093],
  },
  {
    file_name: "HMTpano_000027_000017.jpg",
    longitude_latitude: [10.92420701, 50.98876311],
  },
  {
    file_name: "HMTpano_000027_000018.jpg",
    longitude_latitude: [10.92420505, 50.98871722],
  },
  {
    file_name: "HMTpano_000027_000019.jpg",
    longitude_latitude: [10.92420298, 50.98867023],
  },
  {
    file_name: "HMTpano_000027_000020.jpg",
    longitude_latitude: [10.92420088, 50.98862526],
  },
  {
    file_name: "HMTpano_000027_000021.jpg",
    longitude_latitude: [10.92419884, 50.98857977],
  },
  {
    file_name: "HMTpano_000027_000022.jpg",
    longitude_latitude: [10.92419666, 50.98853418],
  },
  {
    file_name: "HMTpano_000027_000023.jpg",
    longitude_latitude: [10.9241944, 50.98848886],
  },
  {
    file_name: "HMTpano_000027_000024.jpg",
    longitude_latitude: [10.92419205, 50.98844245],
  },
  {
    file_name: "HMTpano_000027_000025.jpg",
    longitude_latitude: [10.92418961, 50.9883963],
  },
  {
    file_name: "HMTpano_000027_000026.jpg",
    longitude_latitude: [10.92418703, 50.98835072],
  },
  {
    file_name: "HMTpano_000027_000027.jpg",
    longitude_latitude: [10.92418469, 50.98830501],
  },
  {
    file_name: "HMTpano_000027_000028.jpg",
    longitude_latitude: [10.92418297, 50.98825884],
  },
  {
    file_name: "HMTpano_000027_000029.jpg",
    longitude_latitude: [10.92418085, 50.98821298],
  },
  {
    file_name: "HMTpano_000027_000030.jpg",
    longitude_latitude: [10.92417867, 50.98816756],
  },
  {
    file_name: "HMTpano_000027_000031.jpg",
    longitude_latitude: [10.92417829, 50.98812209],
  },
  {
    file_name: "HMTpano_000027_000032.jpg",
    longitude_latitude: [10.92417971, 50.98807707],
  },
  {
    file_name: "HMTpano_000027_000033.jpg",
    longitude_latitude: [10.92417698, 50.98803351],
  },
  {
    file_name: "HMTpano_000027_000034.jpg",
    longitude_latitude: [10.9241653, 50.98798895],
  },
  {
    file_name: "HMTpano_000028_000000.jpg",
    longitude_latitude: [10.92418041, 50.9880858],
  },
  {
    file_name: "HMTpano_000028_000001.jpg",
    longitude_latitude: [10.92418272, 50.98812042],
  },
  {
    file_name: "HMTpano_000028_000002.jpg",
    longitude_latitude: [10.92418414, 50.98816756],
  },
  {
    file_name: "HMTpano_000028_000003.jpg",
    longitude_latitude: [10.92415608, 50.98821368],
  },
  {
    file_name: "HMTpano_000028_000004.jpg",
    longitude_latitude: [10.92408974, 50.98823974],
  },
  {
    file_name: "HMTpano_000028_000005.jpg",
    longitude_latitude: [10.92401666, 50.98824697],
  },
  {
    file_name: "HMTpano_000028_000006.jpg",
    longitude_latitude: [10.92394397, 50.98824843],
  },
  {
    file_name: "HMTpano_000028_000007.jpg",
    longitude_latitude: [10.9238719, 50.98824937],
  },
  {
    file_name: "HMTpano_000028_000008.jpg",
    longitude_latitude: [10.92380006, 50.98825014],
  },
  {
    file_name: "HMTpano_000028_000009.jpg",
    longitude_latitude: [10.92372793, 50.98825097],
  },
  {
    file_name: "HMTpano_000028_000010.jpg",
    longitude_latitude: [10.92365628, 50.98825252],
  },
  {
    file_name: "HMTpano_000028_000011.jpg",
    longitude_latitude: [10.92358471, 50.98825129],
  },
  {
    file_name: "HMTpano_000028_000012.jpg",
    longitude_latitude: [10.92351833, 50.98825387],
  },
  {
    file_name: "HMTpano_000029_000000.jpg",
    longitude_latitude: [10.92347281, 50.98819844],
  },
  {
    file_name: "HMTpano_000029_000001.jpg",
    longitude_latitude: [10.92347266, 50.98820805],
  },
  {
    file_name: "HMTpano_000029_000002.jpg",
    longitude_latitude: [10.9234712, 50.98825387],
  },
  {
    file_name: "HMTpano_000029_000003.jpg",
    longitude_latitude: [10.92346943, 50.98829954],
  },
  {
    file_name: "HMTpano_000029_000004.jpg",
    longitude_latitude: [10.92346809, 50.98834496],
  },
  {
    file_name: "HMTpano_000029_000005.jpg",
    longitude_latitude: [10.92346762, 50.98839033],
  },
  {
    file_name: "HMTpano_000029_000006.jpg",
    longitude_latitude: [10.92346779, 50.98843621],
  },
  {
    file_name: "HMTpano_000029_000007.jpg",
    longitude_latitude: [10.92346866, 50.98848181],
  },
  {
    file_name: "HMTpano_000029_000008.jpg",
    longitude_latitude: [10.92347022, 50.98852741],
  },
  {
    file_name: "HMTpano_000029_000009.jpg",
    longitude_latitude: [10.92347256, 50.98857347],
  },
  {
    file_name: "HMTpano_000029_000010.jpg",
    longitude_latitude: [10.9234753, 50.98861902],
  },
  {
    file_name: "HMTpano_000029_000011.jpg",
    longitude_latitude: [10.92347826, 50.98866483],
  },
  {
    file_name: "HMTpano_000029_000012.jpg",
    longitude_latitude: [10.92348085, 50.98871035],
  },
  {
    file_name: "HMTpano_000029_000013.jpg",
    longitude_latitude: [10.92348331, 50.98875615],
  },
  {
    file_name: "HMTpano_000029_000014.jpg",
    longitude_latitude: [10.92348576, 50.98880194],
  },
  {
    file_name: "HMTpano_000029_000015.jpg",
    longitude_latitude: [10.92348842, 50.98884774],
  },
  {
    file_name: "HMTpano_000029_000016.jpg",
    longitude_latitude: [10.92347828, 50.98889584],
  },
  {
    file_name: "HMTpano_000029_000017.jpg",
    longitude_latitude: [10.92341812, 50.98892952],
  },
  {
    file_name: "HMTpano_000029_000018.jpg",
    longitude_latitude: [10.92334283, 50.98893093],
  },
  {
    file_name: "HMTpano_000029_000019.jpg",
    longitude_latitude: [10.92327101, 50.98892104],
  },
  {
    file_name: "HMTpano_000029_000020.jpg",
    longitude_latitude: [10.92320123, 50.98890568],
  },
  {
    file_name: "HMTpano_000029_000021.jpg",
    longitude_latitude: [10.9231356, 50.98888364],
  },
  {
    file_name: "HMTpano_000029_000022.jpg",
    longitude_latitude: [10.92308421, 50.98884812],
  },
  {
    file_name: "HMTpano_000029_000023.jpg",
    longitude_latitude: [10.9230594, 50.98880357],
  },
  {
    file_name: "HMTpano_000029_000024.jpg",
    longitude_latitude: [10.92305393, 50.98875761],
  },
  {
    file_name: "HMTpano_000029_000025.jpg",
    longitude_latitude: [10.92305489, 50.98871204],
  },
  {
    file_name: "HMTpano_000029_000026.jpg",
    longitude_latitude: [10.92305655, 50.9886665],
  },
  {
    file_name: "HMTpano_000029_000027.jpg",
    longitude_latitude: [10.92305739, 50.98862118],
  },
  {
    file_name: "HMTpano_000029_000028.jpg",
    longitude_latitude: [10.92305823, 50.98857578],
  },
  {
    file_name: "HMTpano_000029_000029.jpg",
    longitude_latitude: [10.92305777, 50.98853164],
  },
  {
    file_name: "HMTpano_000029_000030.jpg",
    longitude_latitude: [10.923035, 50.98849641],
  },
  {
    file_name: "HMTpano_000030_000000.jpg",
    longitude_latitude: [10.92305002, 50.98862062],
  },
  {
    file_name: "HMTpano_000030_000001.jpg",
    longitude_latitude: [10.9230543, 50.98866567],
  },
  {
    file_name: "HMTpano_000030_000002.jpg",
    longitude_latitude: [10.9230576, 50.98871167],
  },
  {
    file_name: "HMTpano_000030_000003.jpg",
    longitude_latitude: [10.92305954, 50.9887578],
  },
  {
    file_name: "HMTpano_000030_000004.jpg",
    longitude_latitude: [10.9230556, 50.9888037],
  },
  {
    file_name: "HMTpano_000030_000005.jpg",
    longitude_latitude: [10.92304304, 50.98884938],
  },
  {
    file_name: "HMTpano_000030_000006.jpg",
    longitude_latitude: [10.9230218, 50.98889373],
  },
  {
    file_name: "HMTpano_000030_000007.jpg",
    longitude_latitude: [10.9229957, 50.98893653],
  },
  {
    file_name: "HMTpano_000030_000008.jpg",
    longitude_latitude: [10.92296862, 50.98897904],
  },
  {
    file_name: "HMTpano_000030_000009.jpg",
    longitude_latitude: [10.92294142, 50.98902137],
  },
  {
    file_name: "HMTpano_000030_000010.jpg",
    longitude_latitude: [10.92291416, 50.98906399],
  },
  {
    file_name: "HMTpano_000030_000011.jpg",
    longitude_latitude: [10.92288761, 50.98910664],
  },
  {
    file_name: "HMTpano_000030_000012.jpg",
    longitude_latitude: [10.92286107, 50.98914951],
  },
  {
    file_name: "HMTpano_000030_000013.jpg",
    longitude_latitude: [10.92283468, 50.98919206],
  },
  {
    file_name: "HMTpano_000030_000014.jpg",
    longitude_latitude: [10.92280833, 50.98923422],
  },
  {
    file_name: "HMTpano_000030_000015.jpg",
    longitude_latitude: [10.92278129, 50.98927729],
  },
  {
    file_name: "HMTpano_000030_000016.jpg",
    longitude_latitude: [10.92275456, 50.9893199],
  },
  {
    file_name: "HMTpano_000030_000017.jpg",
    longitude_latitude: [10.92272781, 50.98936263],
  },
  {
    file_name: "HMTpano_000030_000018.jpg",
    longitude_latitude: [10.92270145, 50.98940507],
  },
  {
    file_name: "HMTpano_000030_000019.jpg",
    longitude_latitude: [10.92267551, 50.98944736],
  },
  {
    file_name: "HMTpano_000030_000020.jpg",
    longitude_latitude: [10.92264445, 50.98949044],
  },
  {
    file_name: "HMTpano_000031_000000.jpg",
    longitude_latitude: [10.92339388, 50.98894071],
  },
  {
    file_name: "HMTpano_000031_000001.jpg",
    longitude_latitude: [10.92344962, 50.98895497],
  },
  {
    file_name: "HMTpano_000031_000002.jpg",
    longitude_latitude: [10.92351754, 50.98897125],
  },
  {
    file_name: "HMTpano_000031_000003.jpg",
    longitude_latitude: [10.92358616, 50.98898735],
  },
  {
    file_name: "HMTpano_000031_000004.jpg",
    longitude_latitude: [10.92365446, 50.98900327],
  },
  {
    file_name: "HMTpano_000031_000005.jpg",
    longitude_latitude: [10.92372311, 50.98901935],
  },
  {
    file_name: "HMTpano_000031_000006.jpg",
    longitude_latitude: [10.92379208, 50.98903548],
  },
  {
    file_name: "HMTpano_000031_000007.jpg",
    longitude_latitude: [10.92386076, 50.98905188],
  },
  {
    file_name: "HMTpano_000031_000008.jpg",
    longitude_latitude: [10.92392894, 50.98906821],
  },
  {
    file_name: "HMTpano_000031_000009.jpg",
    longitude_latitude: [10.92399702, 50.98908471],
  },
  {
    file_name: "HMTpano_000031_000010.jpg",
    longitude_latitude: [10.92406473, 50.98910081],
  },
  {
    file_name: "HMTpano_000031_000011.jpg",
    longitude_latitude: [10.92413248, 50.98911669],
  },
  {
    file_name: "HMTpano_000031_000012.jpg",
    longitude_latitude: [10.92419993, 50.98913246],
  },
  {
    file_name: "HMTpano_000031_000013.jpg",
    longitude_latitude: [10.92426725, 50.98914798],
  },
  {
    file_name: "HMTpano_000031_000014.jpg",
    longitude_latitude: [10.92433494, 50.98916381],
  },
  {
    file_name: "HMTpano_000031_000015.jpg",
    longitude_latitude: [10.924403, 50.9891797],
  },
  {
    file_name: "HMTpano_000031_000016.jpg",
    longitude_latitude: [10.9244729, 50.98919605],
  },
  {
    file_name: "HMTpano_000031_000017.jpg",
    longitude_latitude: [10.92454213, 50.98921259],
  },
  {
    file_name: "HMTpano_000031_000018.jpg",
    longitude_latitude: [10.92460901, 50.98923065],
  },
  {
    file_name: "HMTpano_000032_000000.jpg",
    longitude_latitude: [10.92351349, 50.98968304],
  },
  {
    file_name: "HMTpano_000032_000001.jpg",
    longitude_latitude: [10.92353034, 50.98965482],
  },
  {
    file_name: "HMTpano_000032_000002.jpg",
    longitude_latitude: [10.92355612, 50.98961185],
  },
  {
    file_name: "HMTpano_000032_000003.jpg",
    longitude_latitude: [10.92358221, 50.98956864],
  },
  {
    file_name: "HMTpano_000032_000004.jpg",
    longitude_latitude: [10.92360877, 50.98952554],
  },
  {
    file_name: "HMTpano_000032_000005.jpg",
    longitude_latitude: [10.92363558, 50.98948302],
  },
  {
    file_name: "HMTpano_000032_000006.jpg",
    longitude_latitude: [10.92366271, 50.98943986],
  },
  {
    file_name: "HMTpano_000032_000007.jpg",
    longitude_latitude: [10.92368941, 50.98939682],
  },
  {
    file_name: "HMTpano_000032_000008.jpg",
    longitude_latitude: [10.92371609, 50.98935413],
  },
  {
    file_name: "HMTpano_000032_000009.jpg",
    longitude_latitude: [10.92374239, 50.98931131],
  },
  {
    file_name: "HMTpano_000032_000010.jpg",
    longitude_latitude: [10.92376799, 50.98926833],
  },
  {
    file_name: "HMTpano_000032_000011.jpg",
    longitude_latitude: [10.92379305, 50.98922516],
  },
  {
    file_name: "HMTpano_000032_000012.jpg",
    longitude_latitude: [10.92381733, 50.98918204],
  },
  {
    file_name: "HMTpano_000032_000013.jpg",
    longitude_latitude: [10.92384086, 50.98913851],
  },
  {
    file_name: "HMTpano_000032_000014.jpg",
    longitude_latitude: [10.9238779, 50.98909522],
  },
  {
    file_name: "HMTpano_000032_000015.jpg",
    longitude_latitude: [10.92395183, 50.98907904],
  },
  {
    file_name: "HMTpano_000032_000016.jpg",
    longitude_latitude: [10.92402483, 50.98908911],
  },
  {
    file_name: "HMTpano_000032_000017.jpg",
    longitude_latitude: [10.92409419, 50.98910412],
  },
  {
    file_name: "HMTpano_000032_000018.jpg",
    longitude_latitude: [10.92416292, 50.98911967],
  },
  {
    file_name: "HMTpano_000032_000019.jpg",
    longitude_latitude: [10.92423146, 50.98913618],
  },
  {
    file_name: "HMTpano_000032_000020.jpg",
    longitude_latitude: [10.92429902, 50.98915352],
  },
  {
    file_name: "HMTpano_000033_000000.jpg",
    longitude_latitude: [10.93351651, 50.98931376],
  },
  {
    file_name: "HMTpano_000033_000001.jpg",
    longitude_latitude: [10.93352356, 50.98931588],
  },
  {
    file_name: "HMTpano_000033_000002.jpg",
    longitude_latitude: [10.93358715, 50.98932991],
  },
  {
    file_name: "HMTpano_000033_000003.jpg",
    longitude_latitude: [10.93364876, 50.98932358],
  },
  {
    file_name: "HMTpano_000033_000004.jpg",
    longitude_latitude: [10.93369143, 50.98929273],
  },
  {
    file_name: "HMTpano_000033_000005.jpg",
    longitude_latitude: [10.93373836, 50.9892542],
  },
  {
    file_name: "HMTpano_000033_000006.jpg",
    longitude_latitude: [10.93381657, 50.98924956],
  },
  {
    file_name: "HMTpano_000033_000007.jpg",
    longitude_latitude: [10.93388554, 50.98926595],
  },
  {
    file_name: "HMTpano_000033_000008.jpg",
    longitude_latitude: [10.93395182, 50.98928398],
  },
  {
    file_name: "HMTpano_000033_000009.jpg",
    longitude_latitude: [10.93401815, 50.98930196],
  },
  {
    file_name: "HMTpano_000033_000010.jpg",
    longitude_latitude: [10.93408459, 50.98931973],
  },
  {
    file_name: "HMTpano_000033_000011.jpg",
    longitude_latitude: [10.93415082, 50.98933719],
  },
  {
    file_name: "HMTpano_000033_000012.jpg",
    longitude_latitude: [10.9342173, 50.98935485],
  },
  {
    file_name: "HMTpano_000033_000013.jpg",
    longitude_latitude: [10.93428448, 50.98937262],
  },
  {
    file_name: "HMTpano_000033_000014.jpg",
    longitude_latitude: [10.93435137, 50.9893898],
  },
  {
    file_name: "HMTpano_000033_000015.jpg",
    longitude_latitude: [10.93441891, 50.98940658],
  },
  {
    file_name: "HMTpano_000033_000016.jpg",
    longitude_latitude: [10.93448662, 50.98942284],
  },
  {
    file_name: "HMTpano_000033_000017.jpg",
    longitude_latitude: [10.93455412, 50.98943886],
  },
  {
    file_name: "HMTpano_000033_000018.jpg",
    longitude_latitude: [10.93462146, 50.98945468],
  },
  {
    file_name: "HMTpano_000033_000019.jpg",
    longitude_latitude: [10.93468861, 50.98947064],
  },
  {
    file_name: "HMTpano_000033_000020.jpg",
    longitude_latitude: [10.93475695, 50.98948669],
  },
  {
    file_name: "HMTpano_000033_000021.jpg",
    longitude_latitude: [10.93482413, 50.98950317],
  },
  {
    file_name: "HMTpano_000033_000022.jpg",
    longitude_latitude: [10.93489074, 50.98952004],
  },
  {
    file_name: "HMTpano_000033_000023.jpg",
    longitude_latitude: [10.93495885, 50.98953765],
  },
  {
    file_name: "HMTpano_000033_000024.jpg",
    longitude_latitude: [10.93502289, 50.98955499],
  },
  {
    file_name: "HMTpano_000033_000025.jpg",
    longitude_latitude: [10.93508905, 50.98957327],
  },
  {
    file_name: "HMTpano_000033_000026.jpg",
    longitude_latitude: [10.93515276, 50.98959083],
  },
  {
    file_name: "HMTpano_000033_000027.jpg",
    longitude_latitude: [10.93521852, 50.9896095],
  },
  {
    file_name: "HMTpano_000033_000028.jpg",
    longitude_latitude: [10.93528431, 50.98962802],
  },
  {
    file_name: "HMTpano_000033_000029.jpg",
    longitude_latitude: [10.93535208, 50.98964754],
  },
  {
    file_name: "HMTpano_000033_000030.jpg",
    longitude_latitude: [10.93541914, 50.98966612],
  },
  {
    file_name: "HMTpano_000033_000031.jpg",
    longitude_latitude: [10.93548549, 50.98968506],
  },
  {
    file_name: "HMTpano_000033_000032.jpg",
    longitude_latitude: [10.93554767, 50.98970839],
  },
  {
    file_name: "HMTpano_000033_000033.jpg",
    longitude_latitude: [10.93560628, 50.98973497],
  },
  {
    file_name: "HMTpano_000033_000034.jpg",
    longitude_latitude: [10.93566618, 50.98975922],
  },
  {
    file_name: "HMTpano_000033_000035.jpg",
    longitude_latitude: [10.93572938, 50.98977712],
  },
  {
    file_name: "HMTpano_000033_000036.jpg",
    longitude_latitude: [10.93579355, 50.98977783],
  },
  {
    file_name: "HMTpano_000033_000037.jpg",
    longitude_latitude: [10.93584384, 50.9897518],
  },
  {
    file_name: "HMTpano_000033_000038.jpg",
    longitude_latitude: [10.93587813, 50.98971339],
  },
  {
    file_name: "HMTpano_000033_000039.jpg",
    longitude_latitude: [10.93590088, 50.98967353],
  },
  {
    file_name: "HMTpano_000033_000040.jpg",
    longitude_latitude: [10.93589086, 50.98963306],
  },
  {
    file_name: "HMTpano_000033_000041.jpg",
    longitude_latitude: [10.93585441, 50.98959666],
  },
  {
    file_name: "HMTpano_000033_000042.jpg",
    longitude_latitude: [10.93581046, 50.98955896],
  },
  {
    file_name: "HMTpano_000033_000043.jpg",
    longitude_latitude: [10.93579634, 50.98951308],
  },
  {
    file_name: "HMTpano_000033_000044.jpg",
    longitude_latitude: [10.93581727, 50.9894687],
  },
  {
    file_name: "HMTpano_000033_000045.jpg",
    longitude_latitude: [10.93584365, 50.98942672],
  },
  {
    file_name: "HMTpano_000033_000046.jpg",
    longitude_latitude: [10.9358701, 50.98938432],
  },
  {
    file_name: "HMTpano_000033_000047.jpg",
    longitude_latitude: [10.93589646, 50.9893418],
  },
  {
    file_name: "HMTpano_000033_000048.jpg",
    longitude_latitude: [10.93592255, 50.98929919],
  },
  {
    file_name: "HMTpano_000033_000049.jpg",
    longitude_latitude: [10.93594797, 50.98925671],
  },
  {
    file_name: "HMTpano_000033_000050.jpg",
    longitude_latitude: [10.93597329, 50.98921397],
  },
  {
    file_name: "HMTpano_000033_000051.jpg",
    longitude_latitude: [10.93599589, 50.98917177],
  },
  {
    file_name: "HMTpano_000033_000052.jpg",
    longitude_latitude: [10.9360111, 50.98912868],
  },
  {
    file_name: "HMTpano_000034_000000.jpg",
    longitude_latitude: [10.93592815, 50.98927801],
  },
  {
    file_name: "HMTpano_000034_000001.jpg",
    longitude_latitude: [10.93592061, 50.98927704],
  },
  {
    file_name: "HMTpano_000034_000002.jpg",
    longitude_latitude: [10.93586522, 50.98929222],
  },
  {
    file_name: "HMTpano_000034_000003.jpg",
    longitude_latitude: [10.93581757, 50.98932865],
  },
  {
    file_name: "HMTpano_000034_000004.jpg",
    longitude_latitude: [10.93574069, 50.9893403],
  },
  {
    file_name: "HMTpano_000034_000005.jpg",
    longitude_latitude: [10.93567097, 50.98932496],
  },
  {
    file_name: "HMTpano_000034_000006.jpg",
    longitude_latitude: [10.93560475, 50.9893062],
  },
  {
    file_name: "HMTpano_000034_000007.jpg",
    longitude_latitude: [10.93553689, 50.98928689],
  },
  {
    file_name: "HMTpano_000034_000008.jpg",
    longitude_latitude: [10.93547151, 50.98926808],
  },
  {
    file_name: "HMTpano_000034_000009.jpg",
    longitude_latitude: [10.9354061, 50.98925014],
  },
  {
    file_name: "HMTpano_000034_000010.jpg",
    longitude_latitude: [10.93534292, 50.989227],
  },
  {
    file_name: "HMTpano_000034_000011.jpg",
    longitude_latitude: [10.93530186, 50.98918599],
  },
  {
    file_name: "HMTpano_000034_000012.jpg",
    longitude_latitude: [10.93530343, 50.98913753],
  },
  {
    file_name: "HMTpano_000034_000013.jpg",
    longitude_latitude: [10.93533457, 50.98909586],
  },
  {
    file_name: "HMTpano_000034_000014.jpg",
    longitude_latitude: [10.93537256, 50.98905765],
  },
  {
    file_name: "HMTpano_000034_000015.jpg",
    longitude_latitude: [10.93541109, 50.98901921],
  },
  {
    file_name: "HMTpano_000034_000016.jpg",
    longitude_latitude: [10.93544601, 50.98898121],
  },
  {
    file_name: "HMTpano_000034_000017.jpg",
    longitude_latitude: [10.93545822, 50.98894172],
  },
  {
    file_name: "HMTpano_000034_000018.jpg",
    longitude_latitude: [10.93542099, 50.98890981],
  },
  {
    file_name: "HMTpano_000034_000019.jpg",
    longitude_latitude: [10.93535885, 50.98890961],
  },
  {
    file_name: "HMTpano_000034_000020.jpg",
    longitude_latitude: [10.93531016, 50.98893829],
  },
  {
    file_name: "HMTpano_000034_000021.jpg",
    longitude_latitude: [10.93529491, 50.98897947],
  },
  {
    file_name: "HMTpano_000034_000022.jpg",
    longitude_latitude: [10.93530352, 50.98902391],
  },
  {
    file_name: "HMTpano_000034_000023.jpg",
    longitude_latitude: [10.93531626, 50.98906938],
  },
  {
    file_name: "HMTpano_000034_000024.jpg",
    longitude_latitude: [10.93532427, 50.98911631],
  },
  {
    file_name: "HMTpano_000034_000025.jpg",
    longitude_latitude: [10.93531962, 50.98916295],
  },
  {
    file_name: "HMTpano_000034_000026.jpg",
    longitude_latitude: [10.93530283, 50.98920764],
  },
  {
    file_name: "HMTpano_000034_000027.jpg",
    longitude_latitude: [10.93528021, 50.98925077],
  },
  {
    file_name: "HMTpano_000034_000028.jpg",
    longitude_latitude: [10.93525567, 50.9892939],
  },
  {
    file_name: "HMTpano_000034_000029.jpg",
    longitude_latitude: [10.93523108, 50.98933675],
  },
  {
    file_name: "HMTpano_000034_000030.jpg",
    longitude_latitude: [10.93520665, 50.98937919],
  },
  {
    file_name: "HMTpano_000034_000031.jpg",
    longitude_latitude: [10.9351827, 50.98942205],
  },
  {
    file_name: "HMTpano_000034_000032.jpg",
    longitude_latitude: [10.93515957, 50.9894646],
  },
  {
    file_name: "HMTpano_000034_000033.jpg",
    longitude_latitude: [10.93513775, 50.98950794],
  },
  {
    file_name: "HMTpano_000034_000034.jpg",
    longitude_latitude: [10.93511792, 50.9895508],
  },
  {
    file_name: "HMTpano_000034_000035.jpg",
    longitude_latitude: [10.93509996, 50.98959374],
  },
  {
    file_name: "HMTpano_000034_000036.jpg",
    longitude_latitude: [10.93509154, 50.98963632],
  },
  {
    file_name: "HMTpano_000034_000037.jpg",
    longitude_latitude: [10.93509834, 50.9896798],
  },
  {
    file_name: "HMTpano_000034_000038.jpg",
    longitude_latitude: [10.9351293, 50.98971939],
  },
  {
    file_name: "HMTpano_000034_000039.jpg",
    longitude_latitude: [10.9351814, 50.9897478],
  },
  {
    file_name: "HMTpano_000034_000040.jpg",
    longitude_latitude: [10.93524461, 50.98976802],
  },
  {
    file_name: "HMTpano_000035_000000.jpg",
    longitude_latitude: [10.94670837, 50.99621442],
  },
  {
    file_name: "HMTpano_000035_000001.jpg",
    longitude_latitude: [10.94672626, 50.99623245],
  },
  {
    file_name: "HMTpano_000035_000002.jpg",
    longitude_latitude: [10.94676566, 50.99627177],
  },
  {
    file_name: "HMTpano_000035_000003.jpg",
    longitude_latitude: [10.94680568, 50.99631129],
  },
  {
    file_name: "HMTpano_000035_000004.jpg",
    longitude_latitude: [10.9468456, 50.99635032],
  },
  {
    file_name: "HMTpano_000035_000005.jpg",
    longitude_latitude: [10.94688616, 50.99638959],
  },
  {
    file_name: "HMTpano_000035_000006.jpg",
    longitude_latitude: [10.94692671, 50.99642864],
  },
  {
    file_name: "HMTpano_000035_000007.jpg",
    longitude_latitude: [10.94696688, 50.99646724],
  },
  {
    file_name: "HMTpano_000035_000008.jpg",
    longitude_latitude: [10.94700662, 50.9965069],
  },
  {
    file_name: "HMTpano_000035_000009.jpg",
    longitude_latitude: [10.94703977, 50.99654978],
  },
  {
    file_name: "HMTpano_000035_000010.jpg",
    longitude_latitude: [10.94705411, 50.99659715],
  },
  {
    file_name: "HMTpano_000035_000011.jpg",
    longitude_latitude: [10.94704073, 50.99664509],
  },
  {
    file_name: "HMTpano_000035_000012.jpg",
    longitude_latitude: [10.94700369, 50.99668713],
  },
  {
    file_name: "HMTpano_000035_000013.jpg",
    longitude_latitude: [10.94695955, 50.99672472],
  },
  {
    file_name: "HMTpano_000035_000014.jpg",
    longitude_latitude: [10.94691169, 50.99676021],
  },
  {
    file_name: "HMTpano_000035_000015.jpg",
    longitude_latitude: [10.94685168, 50.9967907],
  },
  {
    file_name: "HMTpano_000035_000016.jpg",
    longitude_latitude: [10.94677365, 50.99679456],
  },
  {
    file_name: "HMTpano_000035_000017.jpg",
    longitude_latitude: [10.94670535, 50.99677537],
  },
  {
    file_name: "HMTpano_000035_000018.jpg",
    longitude_latitude: [10.94664622, 50.99674885],
  },
  {
    file_name: "HMTpano_000035_000019.jpg",
    longitude_latitude: [10.94659087, 50.99672055],
  },
  {
    file_name: "HMTpano_000035_000020.jpg",
    longitude_latitude: [10.94653558, 50.9966937],
  },
  {
    file_name: "HMTpano_000035_000021.jpg",
    longitude_latitude: [10.94647361, 50.99667713],
  },
  {
    file_name: "HMTpano_000035_000022.jpg",
    longitude_latitude: [10.94640714, 50.99667779],
  },
  {
    file_name: "HMTpano_000035_000023.jpg",
    longitude_latitude: [10.94634626, 50.99669628],
  },
  {
    file_name: "HMTpano_000035_000024.jpg",
    longitude_latitude: [10.94629505, 50.99672686],
  },
  {
    file_name: "HMTpano_000035_000025.jpg",
    longitude_latitude: [10.94624914, 50.99676187],
  },
  {
    file_name: "HMTpano_000035_000026.jpg",
    longitude_latitude: [10.94620452, 50.99679775],
  },
  {
    file_name: "HMTpano_000035_000027.jpg",
    longitude_latitude: [10.94616021, 50.99683372],
  },
  {
    file_name: "HMTpano_000035_000028.jpg",
    longitude_latitude: [10.94611592, 50.99687012],
  },
  {
    file_name: "HMTpano_000035_000029.jpg",
    longitude_latitude: [10.94607254, 50.99690632],
  },
  {
    file_name: "HMTpano_000035_000030.jpg",
    longitude_latitude: [10.94602936, 50.9969423],
  },
  {
    file_name: "HMTpano_000035_000031.jpg",
    longitude_latitude: [10.94598633, 50.99697857],
  },
  {
    file_name: "HMTpano_000035_000032.jpg",
    longitude_latitude: [10.9459433, 50.99701472],
  },
  {
    file_name: "HMTpano_000035_000033.jpg",
    longitude_latitude: [10.94589973, 50.99705107],
  },
  {
    file_name: "HMTpano_000035_000034.jpg",
    longitude_latitude: [10.94585609, 50.99708723],
  },
  {
    file_name: "HMTpano_000035_000035.jpg",
    longitude_latitude: [10.94581526, 50.99712365],
  },
  {
    file_name: "HMTpano_000035_000036.jpg",
    longitude_latitude: [10.94578572, 50.99716281],
  },
  {
    file_name: "HMTpano_000035_000037.jpg",
    longitude_latitude: [10.94577535, 50.99720482],
  },
  {
    file_name: "HMTpano_000035_000038.jpg",
    longitude_latitude: [10.945791, 50.99724586],
  },
  {
    file_name: "HMTpano_000035_000039.jpg",
    longitude_latitude: [10.94583033, 50.99728129],
  },
  {
    file_name: "HMTpano_000035_000040.jpg",
    longitude_latitude: [10.94588266, 50.99731066],
  },
  {
    file_name: "HMTpano_000035_000041.jpg",
    longitude_latitude: [10.94594057, 50.99733659],
  },
  {
    file_name: "HMTpano_000035_000042.jpg",
    longitude_latitude: [10.94600079, 50.99735934],
  },
  {
    file_name: "HMTpano_000035_000043.jpg",
    longitude_latitude: [10.94606491, 50.99737684],
  },
  {
    file_name: "HMTpano_000035_000044.jpg",
    longitude_latitude: [10.94613012, 50.99739132],
  },
  {
    file_name: "HMTpano_000035_000045.jpg",
    longitude_latitude: [10.94619655, 50.9974075],
  },
  {
    file_name: "HMTpano_000035_000046.jpg",
    longitude_latitude: [10.94626078, 50.99742933],
  },
  {
    file_name: "HMTpano_000035_000047.jpg",
    longitude_latitude: [10.94631902, 50.99745628],
  },
  {
    file_name: "HMTpano_000035_000048.jpg",
    longitude_latitude: [10.94637501, 50.99748428],
  },
  {
    file_name: "HMTpano_000035_000049.jpg",
    longitude_latitude: [10.94643075, 50.99751271],
  },
  {
    file_name: "HMTpano_000035_000050.jpg",
    longitude_latitude: [10.94648712, 50.99754028],
  },
  {
    file_name: "HMTpano_000035_000051.jpg",
    longitude_latitude: [10.94654472, 50.99756747],
  },
  {
    file_name: "HMTpano_000035_000052.jpg",
    longitude_latitude: [10.94660147, 50.99759394],
  },
  {
    file_name: "HMTpano_000035_000053.jpg",
    longitude_latitude: [10.94665895, 50.9976208],
  },
  {
    file_name: "HMTpano_000035_000054.jpg",
    longitude_latitude: [10.94671599, 50.99764825],
  },
  {
    file_name: "HMTpano_000035_000055.jpg",
    longitude_latitude: [10.9467724, 50.99767532],
  },
  {
    file_name: "HMTpano_000035_000056.jpg",
    longitude_latitude: [10.94683198, 50.99769674],
  },
  {
    file_name: "HMTpano_000035_000057.jpg",
    longitude_latitude: [10.94689746, 50.99770717],
  },
  {
    file_name: "HMTpano_000035_000058.jpg",
    longitude_latitude: [10.94696304, 50.99770114],
  },
  {
    file_name: "HMTpano_000035_000059.jpg",
    longitude_latitude: [10.94702073, 50.99767883],
  },
  {
    file_name: "HMTpano_000035_000060.jpg",
    longitude_latitude: [10.94706662, 50.9976457],
  },
  {
    file_name: "HMTpano_000035_000061.jpg",
    longitude_latitude: [10.94710808, 50.99760851],
  },
  {
    file_name: "HMTpano_000035_000062.jpg",
    longitude_latitude: [10.94714958, 50.99757109],
  },
  {
    file_name: "HMTpano_000035_000063.jpg",
    longitude_latitude: [10.94719209, 50.99753394],
  },
  {
    file_name: "HMTpano_000035_000064.jpg",
    longitude_latitude: [10.9472349, 50.99749768],
  },
  {
    file_name: "HMTpano_000035_000065.jpg",
    longitude_latitude: [10.94727876, 50.99746104],
  },
  {
    file_name: "HMTpano_000035_000066.jpg",
    longitude_latitude: [10.94731554, 50.99742425],
  },
  {
    file_name: "HMTpano_000035_000067.jpg",
    longitude_latitude: [10.94733477, 50.99738314],
  },
  {
    file_name: "HMTpano_000035_000068.jpg",
    longitude_latitude: [10.94732716, 50.99734079],
  },
  {
    file_name: "HMTpano_000035_000069.jpg",
    longitude_latitude: [10.94729709, 50.99730107],
  },
  {
    file_name: "HMTpano_000035_000070.jpg",
    longitude_latitude: [10.94725453, 50.99726492],
  },
  {
    file_name: "HMTpano_000035_000071.jpg",
    longitude_latitude: [10.94720889, 50.99722959],
  },
  {
    file_name: "HMTpano_000035_000072.jpg",
    longitude_latitude: [10.94716286, 50.99719441],
  },
  {
    file_name: "HMTpano_000035_000073.jpg",
    longitude_latitude: [10.94711663, 50.99715912],
  },
  {
    file_name: "HMTpano_000035_000074.jpg",
    longitude_latitude: [10.94707111, 50.99712432],
  },
  {
    file_name: "HMTpano_000035_000075.jpg",
    longitude_latitude: [10.94702523, 50.99708974],
  },
  {
    file_name: "HMTpano_000035_000076.jpg",
    longitude_latitude: [10.94697655, 50.9970568],
  },
  {
    file_name: "HMTpano_000035_000077.jpg",
    longitude_latitude: [10.94692446, 50.99702643],
  },
  {
    file_name: "HMTpano_000035_000078.jpg",
    longitude_latitude: [10.9468689, 50.9969985],
  },
  {
    file_name: "HMTpano_000035_000079.jpg",
    longitude_latitude: [10.94681055, 50.9969735],
  },
  {
    file_name: "HMTpano_000035_000080.jpg",
    longitude_latitude: [10.94674981, 50.99695545],
  },
  {
    file_name: "HMTpano_000035_000081.jpg",
    longitude_latitude: [10.94668472, 50.99695718],
  },
  {
    file_name: "HMTpano_000035_000082.jpg",
    longitude_latitude: [10.94662873, 50.99698046],
  },
  {
    file_name: "HMTpano_000035_000083.jpg",
    longitude_latitude: [10.94658466, 50.99701586],
  },
  {
    file_name: "HMTpano_000035_000084.jpg",
    longitude_latitude: [10.94654331, 50.99705349],
  },
  {
    file_name: "HMTpano_000035_000085.jpg",
    longitude_latitude: [10.94650062, 50.99709089],
  },
  {
    file_name: "HMTpano_000035_000086.jpg",
    longitude_latitude: [10.94645681, 50.99712774],
  },
  {
    file_name: "HMTpano_000035_000087.jpg",
    longitude_latitude: [10.94641274, 50.99716428],
  },
  {
    file_name: "HMTpano_000035_000088.jpg",
    longitude_latitude: [10.94636796, 50.99720104],
  },
  {
    file_name: "HMTpano_000035_000089.jpg",
    longitude_latitude: [10.94632334, 50.9972373],
  },
  {
    file_name: "HMTpano_000035_000090.jpg",
    longitude_latitude: [10.94627842, 50.99727365],
  },
  {
    file_name: "HMTpano_000035_000091.jpg",
    longitude_latitude: [10.94623355, 50.99730936],
  },
  {
    file_name: "HMTpano_000035_000092.jpg",
    longitude_latitude: [10.94618752, 50.99734496],
  },
  {
    file_name: "HMTpano_000035_000093.jpg",
    longitude_latitude: [10.94614113, 50.9973806],
  },
  {
    file_name: "HMTpano_000035_000094.jpg",
    longitude_latitude: [10.94609517, 50.99741575],
  },
  {
    file_name: "HMTpano_000035_000095.jpg",
    longitude_latitude: [10.94605045, 50.99745155],
  },
  {
    file_name: "HMTpano_000035_000096.jpg",
    longitude_latitude: [10.94600639, 50.99748757],
  },
  {
    file_name: "HMTpano_000035_000097.jpg",
    longitude_latitude: [10.94596487, 50.99752507],
  },
  {
    file_name: "HMTpano_000035_000098.jpg",
    longitude_latitude: [10.94592788, 50.9975639],
  },
  {
    file_name: "HMTpano_000035_000099.jpg",
    longitude_latitude: [10.94589371, 50.99760439],
  },
  {
    file_name: "HMTpano_000035_000100.jpg",
    longitude_latitude: [10.94586073, 50.99764505],
  },
  {
    file_name: "HMTpano_000035_000101.jpg",
    longitude_latitude: [10.94582833, 50.99768539],
  },
  {
    file_name: "HMTpano_000035_000102.jpg",
    longitude_latitude: [10.94579537, 50.99772664],
  },
  {
    file_name: "HMTpano_000035_000103.jpg",
    longitude_latitude: [10.94576246, 50.99776787],
  },
  {
    file_name: "HMTpano_000035_000104.jpg",
    longitude_latitude: [10.9457303, 50.99780861],
  },
  {
    file_name: "HMTpano_000035_000105.jpg",
    longitude_latitude: [10.94569735, 50.99785032],
  },
  {
    file_name: "HMTpano_000035_000106.jpg",
    longitude_latitude: [10.94566417, 50.99789191],
  },
  {
    file_name: "HMTpano_000035_000107.jpg",
    longitude_latitude: [10.94563066, 50.99793353],
  },
  {
    file_name: "HMTpano_000035_000108.jpg",
    longitude_latitude: [10.94559815, 50.99797367],
  },
  {
    file_name: "HMTpano_000035_000109.jpg",
    longitude_latitude: [10.94556552, 50.99801389],
  },
  {
    file_name: "HMTpano_000035_000110.jpg",
    longitude_latitude: [10.94553226, 50.99805435],
  },
  {
    file_name: "HMTpano_000035_000111.jpg",
    longitude_latitude: [10.94549847, 50.99809527],
  },
  {
    file_name: "HMTpano_000035_000112.jpg",
    longitude_latitude: [10.94546468, 50.99813584],
  },
  {
    file_name: "HMTpano_000035_000113.jpg",
    longitude_latitude: [10.94543035, 50.99817708],
  },
  {
    file_name: "HMTpano_000035_000114.jpg",
    longitude_latitude: [10.94539609, 50.99821787],
  },
  {
    file_name: "HMTpano_000035_000115.jpg",
    longitude_latitude: [10.94536196, 50.99825833],
  },
  {
    file_name: "HMTpano_000035_000116.jpg",
    longitude_latitude: [10.94532776, 50.99829887],
  },
  {
    file_name: "HMTpano_000035_000117.jpg",
    longitude_latitude: [10.94529337, 50.99833942],
  },
  {
    file_name: "HMTpano_000035_000118.jpg",
    longitude_latitude: [10.94525934, 50.99837983],
  },
  {
    file_name: "HMTpano_000035_000119.jpg",
    longitude_latitude: [10.9452256, 50.99842016],
  },
  {
    file_name: "HMTpano_000035_000120.jpg",
    longitude_latitude: [10.94519201, 50.99846033],
  },
  {
    file_name: "HMTpano_000035_000121.jpg",
    longitude_latitude: [10.94515824, 50.99850071],
  },
  {
    file_name: "HMTpano_000035_000122.jpg",
    longitude_latitude: [10.94512427, 50.99854139],
  },
  {
    file_name: "HMTpano_000035_000123.jpg",
    longitude_latitude: [10.94509041, 50.99858225],
  },
  {
    file_name: "HMTpano_000035_000124.jpg",
    longitude_latitude: [10.9450568, 50.99862347],
  },
  {
    file_name: "HMTpano_000035_000125.jpg",
    longitude_latitude: [10.94502294, 50.99866496],
  },
  {
    file_name: "HMTpano_000035_000126.jpg",
    longitude_latitude: [10.94498927, 50.99870615],
  },
  {
    file_name: "HMTpano_000035_000127.jpg",
    longitude_latitude: [10.94495555, 50.99874713],
  },
  {
    file_name: "HMTpano_000035_000128.jpg",
    longitude_latitude: [10.94492236, 50.99878774],
  },
  {
    file_name: "HMTpano_000035_000129.jpg",
    longitude_latitude: [10.94488885, 50.99882816],
  },
  {
    file_name: "HMTpano_000035_000130.jpg",
    longitude_latitude: [10.9448543, 50.99886954],
  },
  {
    file_name: "HMTpano_000035_000131.jpg",
    longitude_latitude: [10.94482006, 50.99891043],
  },
  {
    file_name: "HMTpano_000035_000132.jpg",
    longitude_latitude: [10.94478568, 50.99895073],
  },
  {
    file_name: "HMTpano_000035_000133.jpg",
    longitude_latitude: [10.94475093, 50.99899131],
  },
  {
    file_name: "HMTpano_000035_000134.jpg",
    longitude_latitude: [10.94471627, 50.99903194],
  },
  {
    file_name: "HMTpano_000035_000135.jpg",
    longitude_latitude: [10.94468147, 50.9990723],
  },
  {
    file_name: "HMTpano_000035_000136.jpg",
    longitude_latitude: [10.94464653, 50.99911294],
  },
  {
    file_name: "HMTpano_000035_000137.jpg",
    longitude_latitude: [10.94461198, 50.99915318],
  },
  {
    file_name: "HMTpano_000035_000138.jpg",
    longitude_latitude: [10.9445773, 50.99919393],
  },
  {
    file_name: "HMTpano_000035_000139.jpg",
    longitude_latitude: [10.94454322, 50.99923464],
  },
  {
    file_name: "HMTpano_000035_000140.jpg",
    longitude_latitude: [10.94450919, 50.99927522],
  },
  {
    file_name: "HMTpano_000035_000141.jpg",
    longitude_latitude: [10.94447566, 50.99931591],
  },
  {
    file_name: "HMTpano_000035_000142.jpg",
    longitude_latitude: [10.94444215, 50.99935683],
  },
  {
    file_name: "HMTpano_000035_000143.jpg",
    longitude_latitude: [10.94440871, 50.99939786],
  },
  {
    file_name: "HMTpano_000035_000144.jpg",
    longitude_latitude: [10.9443753, 50.99943855],
  },
  {
    file_name: "HMTpano_000035_000145.jpg",
    longitude_latitude: [10.94435092, 50.99948029],
  },
  {
    file_name: "HMTpano_000035_000146.jpg",
    longitude_latitude: [10.94434265, 50.9995239],
  },
  {
    file_name: "HMTpano_000035_000147.jpg",
    longitude_latitude: [10.94435702, 50.99956706],
  },
  {
    file_name: "HMTpano_000035_000148.jpg",
    longitude_latitude: [10.9443914, 50.99960526],
  },
  {
    file_name: "HMTpano_000035_000149.jpg",
    longitude_latitude: [10.94444276, 50.99963515],
  },
  {
    file_name: "HMTpano_000035_000150.jpg",
    longitude_latitude: [10.94450457, 50.99965698],
  },
  {
    file_name: "HMTpano_000035_000151.jpg",
    longitude_latitude: [10.94457025, 50.99967615],
  },
  {
    file_name: "HMTpano_000035_000152.jpg",
    longitude_latitude: [10.94463572, 50.99969571],
  },
  {
    file_name: "HMTpano_000035_000153.jpg",
    longitude_latitude: [10.94470017, 50.99971591],
  },
  {
    file_name: "HMTpano_000035_000154.jpg",
    longitude_latitude: [10.9447648, 50.99973741],
  },
  {
    file_name: "HMTpano_000035_000155.jpg",
    longitude_latitude: [10.94482762, 50.99975914],
  },
  {
    file_name: "HMTpano_000035_000156.jpg",
    longitude_latitude: [10.94488993, 50.99978115],
  },
  {
    file_name: "HMTpano_000035_000157.jpg",
    longitude_latitude: [10.94495267, 50.99980341],
  },
  {
    file_name: "HMTpano_000035_000158.jpg",
    longitude_latitude: [10.9450148, 50.99982572],
  },
  {
    file_name: "HMTpano_000035_000159.jpg",
    longitude_latitude: [10.94507523, 50.99984841],
  },
  {
    file_name: "HMTpano_000035_000160.jpg",
    longitude_latitude: [10.94513408, 50.99987705],
  },
  {
    file_name: "HMTpano_000035_000161.jpg",
    longitude_latitude: [10.94515213, 50.99992389],
  },
  {
    file_name: "HMTpano_000036_000000.jpg",
    longitude_latitude: [10.94546621, 50.99965935],
  },
  {
    file_name: "HMTpano_000036_000001.jpg",
    longitude_latitude: [10.94542649, 50.99970102],
  },
  {
    file_name: "HMTpano_000036_000002.jpg",
    longitude_latitude: [10.94538719, 50.99973999],
  },
  {
    file_name: "HMTpano_000036_000003.jpg",
    longitude_latitude: [10.94534698, 50.99977848],
  },
  {
    file_name: "HMTpano_000036_000004.jpg",
    longitude_latitude: [10.94530674, 50.99981645],
  },
  {
    file_name: "HMTpano_000036_000005.jpg",
    longitude_latitude: [10.94526846, 50.99985625],
  },
  {
    file_name: "HMTpano_000036_000006.jpg",
    longitude_latitude: [10.94520885, 50.99988895],
  },
  {
    file_name: "HMTpano_000036_000007.jpg",
    longitude_latitude: [10.94512962, 50.99989112],
  },
  {
    file_name: "HMTpano_000036_000008.jpg",
    longitude_latitude: [10.94506375, 50.99986958],
  },
  {
    file_name: "HMTpano_000036_000009.jpg",
    longitude_latitude: [10.94500397, 50.9998437],
  },
  {
    file_name: "HMTpano_000036_000010.jpg",
    longitude_latitude: [10.94494412, 50.99981776],
  },
  {
    file_name: "HMTpano_000036_000011.jpg",
    longitude_latitude: [10.94488448, 50.99979242],
  },
  {
    file_name: "HMTpano_000036_000012.jpg",
    longitude_latitude: [10.94482421, 50.99976732],
  },
  {
    file_name: "HMTpano_000036_000013.jpg",
    longitude_latitude: [10.94476425, 50.99974347],
  },
  {
    file_name: "HMTpano_000036_000014.jpg",
    longitude_latitude: [10.94470139, 50.99972842],
  },
  {
    file_name: "HMTpano_000036_000015.jpg",
    longitude_latitude: [10.94463731, 50.99973359],
  },
  {
    file_name: "HMTpano_000036_000016.jpg",
    longitude_latitude: [10.94458704, 50.99976168],
  },
  {
    file_name: "HMTpano_000036_000017.jpg",
    longitude_latitude: [10.9445499, 50.99979908],
  },
  {
    file_name: "HMTpano_000036_000018.jpg",
    longitude_latitude: [10.94452316, 50.99983877],
  },
  {
    file_name: "HMTpano_000036_000019.jpg",
    longitude_latitude: [10.94452693, 50.99987849],
  },
  {
    file_name: "HMTpano_000037_000000.jpg",
    longitude_latitude: [10.94456094, 50.99878325],
  },
  {
    file_name: "HMTpano_000037_000001.jpg",
    longitude_latitude: [10.94457353, 50.99878734],
  },
  {
    file_name: "HMTpano_000037_000002.jpg",
    longitude_latitude: [10.94463711, 50.99880831],
  },
  {
    file_name: "HMTpano_000037_000003.jpg",
    longitude_latitude: [10.94470007, 50.99882982],
  },
  {
    file_name: "HMTpano_000037_000004.jpg",
    longitude_latitude: [10.94476371, 50.9988495],
  },
  {
    file_name: "HMTpano_000037_000005.jpg",
    longitude_latitude: [10.94482677, 50.99887259],
  },
  {
    file_name: "HMTpano_000037_000006.jpg",
    longitude_latitude: [10.94488782, 50.99889662],
  },
  {
    file_name: "HMTpano_000037_000007.jpg",
    longitude_latitude: [10.9449503, 50.99891888],
  },
  {
    file_name: "HMTpano_000037_000008.jpg",
    longitude_latitude: [10.94501483, 50.99893955],
  },
  {
    file_name: "HMTpano_000037_000009.jpg",
    longitude_latitude: [10.94507867, 50.9989612],
  },
  {
    file_name: "HMTpano_000037_000010.jpg",
    longitude_latitude: [10.94514191, 50.99898245],
  },
  {
    file_name: "HMTpano_000038_000000.jpg",
    longitude_latitude: [10.94542453, 50.99875479],
  },
  {
    file_name: "HMTpano_000038_000001.jpg",
    longitude_latitude: [10.94541044, 50.9987502],
  },
  {
    file_name: "HMTpano_000038_000002.jpg",
    longitude_latitude: [10.94534403, 50.99873143],
  },
  {
    file_name: "HMTpano_000038_000003.jpg",
    longitude_latitude: [10.94527953, 50.99871044],
  },
  {
    file_name: "HMTpano_000038_000004.jpg",
    longitude_latitude: [10.94521567, 50.99868792],
  },
  {
    file_name: "HMTpano_000038_000005.jpg",
    longitude_latitude: [10.94515257, 50.99866537],
  },
  {
    file_name: "HMTpano_000038_000006.jpg",
    longitude_latitude: [10.94508845, 50.9986434],
  },
  {
    file_name: "HMTpano_000038_000007.jpg",
    longitude_latitude: [10.94502515, 50.99862167],
  },
  {
    file_name: "HMTpano_000038_000008.jpg",
    longitude_latitude: [10.94496175, 50.9985999],
  },
  {
    file_name: "HMTpano_000038_000009.jpg",
    longitude_latitude: [10.94489853, 50.99857793],
  },
  {
    file_name: "HMTpano_000038_000010.jpg",
    longitude_latitude: [10.94483481, 50.99855602],
  },
  {
    file_name: "HMTpano_000038_000011.jpg",
    longitude_latitude: [10.94477173, 50.99853382],
  },
  {
    file_name: "HMTpano_000038_000012.jpg",
    longitude_latitude: [10.94470884, 50.99851188],
  },
  {
    file_name: "HMTpano_000038_000013.jpg",
    longitude_latitude: [10.94464636, 50.99848951],
  },
  {
    file_name: "HMTpano_000039_000000.jpg",
    longitude_latitude: [10.94566077, 50.99786885],
  },
  {
    file_name: "HMTpano_000039_000001.jpg",
    longitude_latitude: [10.94568875, 50.99783481],
  },
  {
    file_name: "HMTpano_000039_000002.jpg",
    longitude_latitude: [10.94572291, 50.9977941],
  },
  {
    file_name: "HMTpano_000039_000003.jpg",
    longitude_latitude: [10.94575789, 50.99775375],
  },
  {
    file_name: "HMTpano_000039_000004.jpg",
    longitude_latitude: [10.94579374, 50.99771365],
  },
  {
    file_name: "HMTpano_000039_000005.jpg",
    longitude_latitude: [10.94583596, 50.99767402],
  },
  {
    file_name: "HMTpano_000039_000006.jpg",
    longitude_latitude: [10.94589944, 50.99764689],
  },
  {
    file_name: "HMTpano_000039_000007.jpg",
    longitude_latitude: [10.94597852, 50.99764855],
  },
  {
    file_name: "HMTpano_000039_000008.jpg",
    longitude_latitude: [10.94604468, 50.99767019],
  },
  {
    file_name: "HMTpano_000039_000009.jpg",
    longitude_latitude: [10.94610504, 50.99769536],
  },
  {
    file_name: "HMTpano_000039_000010.jpg",
    longitude_latitude: [10.94616588, 50.99772009],
  },
  {
    file_name: "HMTpano_000039_000011.jpg",
    longitude_latitude: [10.9462266, 50.99774449],
  },
  {
    file_name: "HMTpano_000039_000012.jpg",
    longitude_latitude: [10.94628704, 50.99777017],
  },
  {
    file_name: "HMTpano_000039_000013.jpg",
    longitude_latitude: [10.94634412, 50.99779866],
  },
  {
    file_name: "HMTpano_000039_000014.jpg",
    longitude_latitude: [10.94639787, 50.9978293],
  },
  {
    file_name: "HMTpano_000039_000015.jpg",
    longitude_latitude: [10.94644853, 50.99786264],
  },
  {
    file_name: "HMTpano_000039_000016.jpg",
    longitude_latitude: [10.94649529, 50.99789627],
  },
  {
    file_name: "HMTpano_000039_000017.jpg",
    longitude_latitude: [10.94654826, 50.99792655],
  },
  {
    file_name: "HMTpano_000039_000018.jpg",
    longitude_latitude: [10.94660561, 50.99795422],
  },
  {
    file_name: "HMTpano_000039_000019.jpg",
    longitude_latitude: [10.94666531, 50.99797959],
  },
  {
    file_name: "HMTpano_000039_000020.jpg",
    longitude_latitude: [10.94672514, 50.99800414],
  },
  {
    file_name: "HMTpano_000039_000021.jpg",
    longitude_latitude: [10.94678677, 50.99802831],
  },
  {
    file_name: "HMTpano_000039_000022.jpg",
    longitude_latitude: [10.94684867, 50.99805282],
  },
  {
    file_name: "HMTpano_000039_000023.jpg",
    longitude_latitude: [10.94690945, 50.99807774],
  },
  {
    file_name: "HMTpano_000039_000024.jpg",
    longitude_latitude: [10.94697052, 50.99810416],
  },
  {
    file_name: "HMTpano_000039_000025.jpg",
    longitude_latitude: [10.94702847, 50.99813043],
  },
  {
    file_name: "HMTpano_000039_000026.jpg",
    longitude_latitude: [10.94708646, 50.99815773],
  },
  {
    file_name: "HMTpano_000039_000027.jpg",
    longitude_latitude: [10.94714511, 50.99818541],
  },
  {
    file_name: "HMTpano_000039_000028.jpg",
    longitude_latitude: [10.94720191, 50.99821268],
  },
  {
    file_name: "HMTpano_000039_000029.jpg",
    longitude_latitude: [10.94726179, 50.99823825],
  },
  {
    file_name: "HMTpano_000039_000030.jpg",
    longitude_latitude: [10.94732348, 50.9982624],
  },
  {
    file_name: "HMTpano_000039_000031.jpg",
    longitude_latitude: [10.9473845, 50.99828673],
  },
  {
    file_name: "HMTpano_000039_000032.jpg",
    longitude_latitude: [10.94744497, 50.99831103],
  },
  {
    file_name: "HMTpano_000039_000033.jpg",
    longitude_latitude: [10.94750559, 50.99833552],
  },
  {
    file_name: "HMTpano_000039_000034.jpg",
    longitude_latitude: [10.94756399, 50.99836263],
  },
  {
    file_name: "HMTpano_000039_000035.jpg",
    longitude_latitude: [10.94761796, 50.99839554],
  },
  {
    file_name: "HMTpano_000039_000036.jpg",
    longitude_latitude: [10.94766956, 50.99842685],
  },
  {
    file_name: "HMTpano_000039_000037.jpg",
    longitude_latitude: [10.94772366, 50.99845652],
  },
  {
    file_name: "HMTpano_000039_000038.jpg",
    longitude_latitude: [10.94778252, 50.99848534],
  },
  {
    file_name: "HMTpano_000039_000039.jpg",
    longitude_latitude: [10.94782347, 50.99852811],
  },
  {
    file_name: "HMTpano_000039_000040.jpg",
    longitude_latitude: [10.94781058, 50.99857625],
  },
  {
    file_name: "HMTpano_000039_000041.jpg",
    longitude_latitude: [10.94778447, 50.99861731],
  },
  {
    file_name: "HMTpano_000039_000042.jpg",
    longitude_latitude: [10.94777523, 50.99865906],
  },
  {
    file_name: "HMTpano_000039_000043.jpg",
    longitude_latitude: [10.94778854, 50.99869986],
  },
  {
    file_name: "HMTpano_000039_000044.jpg",
    longitude_latitude: [10.94782797, 50.99873379],
  },
  {
    file_name: "HMTpano_000039_000045.jpg",
    longitude_latitude: [10.94788757, 50.99875174],
  },
  {
    file_name: "HMTpano_000039_000046.jpg",
    longitude_latitude: [10.94795755, 50.99875607],
  },
  {
    file_name: "HMTpano_000039_000047.jpg",
    longitude_latitude: [10.94802959, 50.9987572],
  },
  {
    file_name: "HMTpano_000039_000048.jpg",
    longitude_latitude: [10.94809969, 50.99875705],
  },
  {
    file_name: "HMTpano_000039_000049.jpg",
    longitude_latitude: [10.94816742, 50.99874913],
  },
  {
    file_name: "HMTpano_000039_000050.jpg",
    longitude_latitude: [10.94823185, 50.99873072],
  },
  {
    file_name: "HMTpano_000039_000051.jpg",
    longitude_latitude: [10.94830758, 50.99872552],
  },
  {
    file_name: "HMTpano_000039_000052.jpg",
    longitude_latitude: [10.94837708, 50.99874446],
  },
  {
    file_name: "HMTpano_000039_000053.jpg",
    longitude_latitude: [10.94843421, 50.9987731],
  },
  {
    file_name: "HMTpano_000039_000054.jpg",
    longitude_latitude: [10.94848897, 50.99880244],
  },
  {
    file_name: "HMTpano_000039_000055.jpg",
    longitude_latitude: [10.94854387, 50.99883226],
  },
  {
    file_name: "HMTpano_000039_000056.jpg",
    longitude_latitude: [10.94859841, 50.99886204],
  },
  {
    file_name: "HMTpano_000039_000057.jpg",
    longitude_latitude: [10.94865371, 50.99889233],
  },
  {
    file_name: "HMTpano_000039_000058.jpg",
    longitude_latitude: [10.94870757, 50.99892204],
  },
  {
    file_name: "HMTpano_000039_000059.jpg",
    longitude_latitude: [10.9487619, 50.99895195],
  },
  {
    file_name: "HMTpano_000039_000060.jpg",
    longitude_latitude: [10.94881665, 50.998982],
  },
  {
    file_name: "HMTpano_000039_000061.jpg",
    longitude_latitude: [10.94887194, 50.99901236],
  },
  {
    file_name: "HMTpano_000039_000062.jpg",
    longitude_latitude: [10.94892691, 50.99904274],
  },
  {
    file_name: "HMTpano_000039_000063.jpg",
    longitude_latitude: [10.94898123, 50.9990729],
  },
  {
    file_name: "HMTpano_000039_000064.jpg",
    longitude_latitude: [10.94903536, 50.99910342],
  },
  {
    file_name: "HMTpano_000039_000065.jpg",
    longitude_latitude: [10.94908856, 50.99913384],
  },
  {
    file_name: "HMTpano_000039_000066.jpg",
    longitude_latitude: [10.94914254, 50.99916152],
  },
  {
    file_name: "HMTpano_000039_000067.jpg",
    longitude_latitude: [10.94920292, 50.99917991],
  },
  {
    file_name: "HMTpano_000039_000068.jpg",
    longitude_latitude: [10.94927306, 50.99918798],
  },
  {
    file_name: "HMTpano_000039_000069.jpg",
    longitude_latitude: [10.9493453, 50.99920272],
  },
  {
    file_name: "HMTpano_000039_000070.jpg",
    longitude_latitude: [10.94940607, 50.99922969],
  },
  {
    file_name: "HMTpano_000039_000071.jpg",
    longitude_latitude: [10.94946096, 50.99925924],
  },
  {
    file_name: "HMTpano_000039_000072.jpg",
    longitude_latitude: [10.94951569, 50.99928848],
  },
  {
    file_name: "HMTpano_000039_000073.jpg",
    longitude_latitude: [10.94957432, 50.99931519],
  },
  {
    file_name: "HMTpano_000039_000074.jpg",
    longitude_latitude: [10.94963246, 50.99934181],
  },
  {
    file_name: "HMTpano_000039_000075.jpg",
    longitude_latitude: [10.94969152, 50.99936823],
  },
  {
    file_name: "HMTpano_000039_000076.jpg",
    longitude_latitude: [10.94975094, 50.99939495],
  },
  {
    file_name: "HMTpano_000039_000077.jpg",
    longitude_latitude: [10.94981039, 50.99942119],
  },
  {
    file_name: "HMTpano_000039_000078.jpg",
    longitude_latitude: [10.94986934, 50.99944722],
  },
  {
    file_name: "HMTpano_000039_000079.jpg",
    longitude_latitude: [10.94992835, 50.99947412],
  },
  {
    file_name: "HMTpano_000039_000080.jpg",
    longitude_latitude: [10.94998924, 50.99950178],
  },
  {
    file_name: "HMTpano_000039_000081.jpg",
    longitude_latitude: [10.95004531, 50.99953132],
  },
  {
    file_name: "HMTpano_000039_000082.jpg",
    longitude_latitude: [10.95009861, 50.99956278],
  },
  {
    file_name: "HMTpano_000039_000083.jpg",
    longitude_latitude: [10.9501521, 50.99959348],
  },
  {
    file_name: "HMTpano_000039_000084.jpg",
    longitude_latitude: [10.950207, 50.9996229],
  },
  {
    file_name: "HMTpano_000039_000085.jpg",
    longitude_latitude: [10.9502643, 50.99965089],
  },
  {
    file_name: "HMTpano_000039_000086.jpg",
    longitude_latitude: [10.95032198, 50.99967893],
  },
  {
    file_name: "HMTpano_000039_000087.jpg",
    longitude_latitude: [10.95037878, 50.99970629],
  },
  {
    file_name: "HMTpano_000039_000088.jpg",
    longitude_latitude: [10.95043539, 50.99973392],
  },
  {
    file_name: "HMTpano_000039_000089.jpg",
    longitude_latitude: [10.9504947, 50.99976219],
  },
  {
    file_name: "HMTpano_000039_000090.jpg",
    longitude_latitude: [10.95055717, 50.99979246],
  },
  {
    file_name: "HMTpano_000039_000091.jpg",
    longitude_latitude: [10.95057717, 50.99983748],
  },
  {
    file_name: "HMTpano_000039_000092.jpg",
    longitude_latitude: [10.9505807, 50.99988078],
  },
  {
    file_name: "HMTpano_000039_000093.jpg",
    longitude_latitude: [10.95061282, 50.99991876],
  },
  {
    file_name: "HMTpano_000039_000094.jpg",
    longitude_latitude: [10.95065759, 50.99995364],
  },
  {
    file_name: "HMTpano_000039_000095.jpg",
    longitude_latitude: [10.95070427, 50.99998877],
  },
  {
    file_name: "HMTpano_000039_000096.jpg",
    longitude_latitude: [10.95075055, 51.00002347],
  },
  {
    file_name: "HMTpano_000039_000097.jpg",
    longitude_latitude: [10.9507979, 51.00005724],
  },
  {
    file_name: "HMTpano_000039_000098.jpg",
    longitude_latitude: [10.95084591, 51.00009072],
  },
  {
    file_name: "HMTpano_000039_000099.jpg",
    longitude_latitude: [10.95089679, 51.00012256],
  },
  {
    file_name: "HMTpano_000039_000100.jpg",
    longitude_latitude: [10.95095024, 51.00015247],
  },
  {
    file_name: "HMTpano_000039_000101.jpg",
    longitude_latitude: [10.9510064, 51.00017888],
  },
  {
    file_name: "HMTpano_000039_000102.jpg",
    longitude_latitude: [10.95106662, 51.00020245],
  },
  {
    file_name: "HMTpano_000039_000103.jpg",
    longitude_latitude: [10.95112912, 51.00022434],
  },
  {
    file_name: "HMTpano_000039_000104.jpg",
    longitude_latitude: [10.95119201, 51.00024491],
  },
  {
    file_name: "HMTpano_000039_000105.jpg",
    longitude_latitude: [10.95125613, 51.00026521],
  },
  {
    file_name: "HMTpano_000039_000106.jpg",
    longitude_latitude: [10.95131572, 51.00028935],
  },
  {
    file_name: "HMTpano_000040_000000.jpg",
    longitude_latitude: [10.95150671, 51.00038249],
  },
  {
    file_name: "HMTpano_000040_000001.jpg",
    longitude_latitude: [10.95148054, 51.00036974],
  },
  {
    file_name: "HMTpano_000040_000002.jpg",
    longitude_latitude: [10.95142235, 51.00034563],
  },
  {
    file_name: "HMTpano_000040_000003.jpg",
    longitude_latitude: [10.95135602, 51.00034153],
  },
  {
    file_name: "HMTpano_000040_000004.jpg",
    longitude_latitude: [10.95129638, 51.00036113],
  },
  {
    file_name: "HMTpano_000040_000005.jpg",
    longitude_latitude: [10.95125269, 51.0003956],
  },
  {
    file_name: "HMTpano_000040_000006.jpg",
    longitude_latitude: [10.95121392, 51.00043389],
  },
  {
    file_name: "HMTpano_000040_000007.jpg",
    longitude_latitude: [10.95117565, 51.00047169],
  },
  {
    file_name: "HMTpano_000040_000008.jpg",
    longitude_latitude: [10.95113593, 51.00050987],
  },
  {
    file_name: "HMTpano_000040_000009.jpg",
    longitude_latitude: [10.95107406, 51.0005386],
  },
  {
    file_name: "HMTpano_000041_000000.jpg",
    longitude_latitude: [10.95128284, 51.00066742],
  },
  {
    file_name: "HMTpano_000041_000001.jpg",
    longitude_latitude: [10.95127212, 51.00066268],
  },
  {
    file_name: "HMTpano_000041_000002.jpg",
    longitude_latitude: [10.95121371, 51.00063712],
  },
  {
    file_name: "HMTpano_000041_000003.jpg",
    longitude_latitude: [10.95115505, 51.00061132],
  },
  {
    file_name: "HMTpano_000041_000004.jpg",
    longitude_latitude: [10.95109662, 51.00058394],
  },
  {
    file_name: "HMTpano_000041_000005.jpg",
    longitude_latitude: [10.9510392, 51.00055627],
  },
  {
    file_name: "HMTpano_000041_000006.jpg",
    longitude_latitude: [10.95098329, 51.00052888],
  },
  {
    file_name: "HMTpano_000041_000007.jpg",
    longitude_latitude: [10.95092526, 51.0005025],
  },
  {
    file_name: "HMTpano_000041_000008.jpg",
    longitude_latitude: [10.95086404, 51.00048044],
  },
  {
    file_name: "HMTpano_000041_000009.jpg",
    longitude_latitude: [10.95079877, 51.00046239],
  },
  {
    file_name: "HMTpano_000041_000010.jpg",
    longitude_latitude: [10.95073136, 51.00044856],
  },
  {
    file_name: "HMTpano_000041_000011.jpg",
    longitude_latitude: [10.95066216, 51.00043866],
  },
  {
    file_name: "HMTpano_000041_000012.jpg",
    longitude_latitude: [10.95059074, 51.00043223],
  },
  {
    file_name: "HMTpano_000041_000013.jpg",
    longitude_latitude: [10.9505204, 51.00042925],
  },
  {
    file_name: "HMTpano_000041_000014.jpg",
    longitude_latitude: [10.95044851, 51.0004292],
  },
  {
    file_name: "HMTpano_000041_000015.jpg",
    longitude_latitude: [10.95037744, 51.00043039],
  },
  {
    file_name: "HMTpano_000041_000016.jpg",
    longitude_latitude: [10.95030617, 51.00043166],
  },
  {
    file_name: "HMTpano_000041_000017.jpg",
    longitude_latitude: [10.95023434, 51.00043144],
  },
  {
    file_name: "HMTpano_000041_000018.jpg",
    longitude_latitude: [10.95016262, 51.00042945],
  },
  {
    file_name: "HMTpano_000041_000019.jpg",
    longitude_latitude: [10.95009077, 51.00042398],
  },
  {
    file_name: "HMTpano_000041_000020.jpg",
    longitude_latitude: [10.95001985, 51.00041565],
  },
  {
    file_name: "HMTpano_000041_000021.jpg",
    longitude_latitude: [10.94994923, 51.00040794],
  },
  {
    file_name: "HMTpano_000041_000022.jpg",
    longitude_latitude: [10.9498777, 51.00040233],
  },
  {
    file_name: "HMTpano_000041_000023.jpg",
    longitude_latitude: [10.94980809, 51.00039202],
  },
  {
    file_name: "HMTpano_000041_000024.jpg",
    longitude_latitude: [10.9497407, 51.0003752],
  },
  {
    file_name: "HMTpano_000041_000025.jpg",
    longitude_latitude: [10.94967758, 51.00035275],
  },
  {
    file_name: "HMTpano_000041_000026.jpg",
    longitude_latitude: [10.94961843, 51.00032591],
  },
  {
    file_name: "HMTpano_000041_000027.jpg",
    longitude_latitude: [10.94956228, 51.00029821],
  },
  {
    file_name: "HMTpano_000041_000028.jpg",
    longitude_latitude: [10.9495061, 51.00027058],
  },
  {
    file_name: "HMTpano_000041_000029.jpg",
    longitude_latitude: [10.94944952, 51.00024352],
  },
  {
    file_name: "HMTpano_000041_000030.jpg",
    longitude_latitude: [10.94939295, 51.00021768],
  },
  {
    file_name: "HMTpano_000042_000000.jpg",
    longitude_latitude: [10.94996464, 51.00043477],
  },
  {
    file_name: "HMTpano_000042_000001.jpg",
    longitude_latitude: [10.94996481, 51.00038153],
  },
  {
    file_name: "HMTpano_000042_000002.jpg",
    longitude_latitude: [10.95000715, 51.00034483],
  },
  {
    file_name: "HMTpano_000042_000003.jpg",
    longitude_latitude: [10.95004954, 51.00030826],
  },
  {
    file_name: "HMTpano_000042_000004.jpg",
    longitude_latitude: [10.95009169, 51.00027145],
  },
  {
    file_name: "HMTpano_000042_000005.jpg",
    longitude_latitude: [10.95013437, 51.0002342],
  },
  {
    file_name: "HMTpano_000042_000006.jpg",
    longitude_latitude: [10.95017686, 51.00019719],
  },
  {
    file_name: "HMTpano_000042_000007.jpg",
    longitude_latitude: [10.95021932, 51.00015994],
  },
  {
    file_name: "HMTpano_000042_000008.jpg",
    longitude_latitude: [10.95026095, 51.00012335],
  },
  {
    file_name: "HMTpano_000042_000009.jpg",
    longitude_latitude: [10.95030284, 51.00008592],
  },
  {
    file_name: "HMTpano_000042_000010.jpg",
    longitude_latitude: [10.95034518, 51.0000483],
  },
  {
    file_name: "HMTpano_000042_000011.jpg",
    longitude_latitude: [10.95038726, 51.00001088],
  },
  {
    file_name: "HMTpano_000042_000012.jpg",
    longitude_latitude: [10.95042944, 50.99997369],
  },
  {
    file_name: "HMTpano_000042_000013.jpg",
    longitude_latitude: [10.95047174, 50.99993667],
  },
  {
    file_name: "HMTpano_000042_000014.jpg",
    longitude_latitude: [10.9505154, 50.99989851],
  },
  {
    file_name: "HMTpano_000042_000015.jpg",
    longitude_latitude: [10.95055872, 50.99986099],
  },
  {
    file_name: "HMTpano_000042_000016.jpg",
    longitude_latitude: [10.95060206, 50.99982374],
  },
  {
    file_name: "HMTpano_000042_000017.jpg",
    longitude_latitude: [10.95064589, 50.99978679],
  },
  {
    file_name: "HMTpano_000042_000018.jpg",
    longitude_latitude: [10.95069, 50.99974986],
  },
  {
    file_name: "HMTpano_000042_000019.jpg",
    longitude_latitude: [10.95073372, 50.99971295],
  },
  {
    file_name: "HMTpano_000042_000020.jpg",
    longitude_latitude: [10.95077758, 50.99967617],
  },
  {
    file_name: "HMTpano_000042_000021.jpg",
    longitude_latitude: [10.95082082, 50.99963849],
  },
  {
    file_name: "HMTpano_000042_000022.jpg",
    longitude_latitude: [10.9508634, 50.99960081],
  },
  {
    file_name: "HMTpano_000042_000023.jpg",
    longitude_latitude: [10.95090477, 50.99956297],
  },
  {
    file_name: "HMTpano_000042_000024.jpg",
    longitude_latitude: [10.95094436, 50.99952444],
  },
  {
    file_name: "HMTpano_000042_000025.jpg",
    longitude_latitude: [10.95098088, 50.99948429],
  },
  {
    file_name: "HMTpano_000042_000026.jpg",
    longitude_latitude: [10.95101937, 50.99944469],
  },
  {
    file_name: "HMTpano_000042_000027.jpg",
    longitude_latitude: [10.95105659, 50.99940509],
  },
  {
    file_name: "HMTpano_000042_000028.jpg",
    longitude_latitude: [10.95109172, 50.99936434],
  },
  {
    file_name: "HMTpano_000042_000029.jpg",
    longitude_latitude: [10.95113098, 50.99932459],
  },
  {
    file_name: "HMTpano_000042_000030.jpg",
    longitude_latitude: [10.95117556, 50.99928759],
  },
  {
    file_name: "HMTpano_000042_000031.jpg",
    longitude_latitude: [10.95122547, 50.99925115],
  },
  {
    file_name: "HMTpano_000042_000032.jpg",
    longitude_latitude: [10.95130083, 50.99923276],
  },
  {
    file_name: "HMTpano_000042_000033.jpg",
    longitude_latitude: [10.95137371, 50.9992454],
  },
  {
    file_name: "HMTpano_000042_000034.jpg",
    longitude_latitude: [10.95143889, 50.99926778],
  },
  {
    file_name: "HMTpano_000043_000000.jpg",
    longitude_latitude: [10.95198957, 50.99951603],
  },
  {
    file_name: "HMTpano_000043_000001.jpg",
    longitude_latitude: [10.9520269, 50.99953215],
  },
  {
    file_name: "HMTpano_000043_000002.jpg",
    longitude_latitude: [10.95208651, 50.99955801],
  },
  {
    file_name: "HMTpano_000043_000003.jpg",
    longitude_latitude: [10.95214592, 50.9995838],
  },
  {
    file_name: "HMTpano_000043_000004.jpg",
    longitude_latitude: [10.95220434, 50.99961226],
  },
  {
    file_name: "HMTpano_000043_000005.jpg",
    longitude_latitude: [10.95225001, 50.9996509],
  },
  {
    file_name: "HMTpano_000043_000006.jpg",
    longitude_latitude: [10.95225769, 50.99969957],
  },
  {
    file_name: "HMTpano_000043_000007.jpg",
    longitude_latitude: [10.95222793, 50.9997431],
  },
  {
    file_name: "HMTpano_000043_000008.jpg",
    longitude_latitude: [10.95218481, 50.99978076],
  },
  {
    file_name: "HMTpano_000043_000009.jpg",
    longitude_latitude: [10.95213669, 50.99981499],
  },
  {
    file_name: "HMTpano_000043_000010.jpg",
    longitude_latitude: [10.95208882, 50.99984844],
  },
  {
    file_name: "HMTpano_000043_000011.jpg",
    longitude_latitude: [10.95204227, 50.99988325],
  },
  {
    file_name: "HMTpano_000043_000012.jpg",
    longitude_latitude: [10.95199772, 50.99991837],
  },
  {
    file_name: "HMTpano_000043_000013.jpg",
    longitude_latitude: [10.95196695, 50.99995466],
  },
  {
    file_name: "HMTpano_000043_000014.jpg",
    longitude_latitude: [10.9519828, 50.99999374],
  },
  {
    file_name: "HMTpano_000043_000015.jpg",
    longitude_latitude: [10.95203339, 51.0000243],
  },
  {
    file_name: "HMTpano_000043_000016.jpg",
    longitude_latitude: [10.95209215, 51.00005091],
  },
  {
    file_name: "HMTpano_000043_000017.jpg",
    longitude_latitude: [10.9521515, 51.00007695],
  },
  {
    file_name: "HMTpano_000043_000018.jpg",
    longitude_latitude: [10.95221088, 51.0001031],
  },
  {
    file_name: "HMTpano_000044_000000.jpg",
    longitude_latitude: [10.95227878, 50.99741611],
  },
  {
    file_name: "HMTpano_000044_000001.jpg",
    longitude_latitude: [10.95227452, 50.99742102],
  },
  {
    file_name: "HMTpano_000044_000002.jpg",
    longitude_latitude: [10.95223981, 50.99746174],
  },
  {
    file_name: "HMTpano_000044_000003.jpg",
    longitude_latitude: [10.9522049, 50.997502],
  },
  {
    file_name: "HMTpano_000044_000004.jpg",
    longitude_latitude: [10.95216636, 50.9975417],
  },
  {
    file_name: "HMTpano_000044_000005.jpg",
    longitude_latitude: [10.95212533, 50.99757913],
  },
  {
    file_name: "HMTpano_000044_000006.jpg",
    longitude_latitude: [10.95208179, 50.99761611],
  },
  {
    file_name: "HMTpano_000044_000007.jpg",
    longitude_latitude: [10.95203963, 50.99765346],
  },
  {
    file_name: "HMTpano_000044_000008.jpg",
    longitude_latitude: [10.95199922, 50.99769149],
  },
  {
    file_name: "HMTpano_000044_000009.jpg",
    longitude_latitude: [10.95196076, 50.99773087],
  },
  {
    file_name: "HMTpano_000044_000010.jpg",
    longitude_latitude: [10.95192421, 50.9977713],
  },
  {
    file_name: "HMTpano_000044_000011.jpg",
    longitude_latitude: [10.95188635, 50.99781078],
  },
  {
    file_name: "HMTpano_000044_000012.jpg",
    longitude_latitude: [10.95184725, 50.99785049],
  },
  {
    file_name: "HMTpano_000044_000013.jpg",
    longitude_latitude: [10.95180697, 50.99788913],
  },
  {
    file_name: "HMTpano_000044_000014.jpg",
    longitude_latitude: [10.95176555, 50.99792775],
  },
  {
    file_name: "HMTpano_000044_000015.jpg",
    longitude_latitude: [10.95172396, 50.99796689],
  },
  {
    file_name: "HMTpano_000044_000016.jpg",
    longitude_latitude: [10.95167996, 50.99800492],
  },
  {
    file_name: "HMTpano_000044_000017.jpg",
    longitude_latitude: [10.95163591, 50.99804218],
  },
  {
    file_name: "HMTpano_000044_000018.jpg",
    longitude_latitude: [10.95159386, 50.99808044],
  },
  {
    file_name: "HMTpano_000044_000019.jpg",
    longitude_latitude: [10.95155191, 50.99811913],
  },
  {
    file_name: "HMTpano_000044_000020.jpg",
    longitude_latitude: [10.95151096, 50.99815742],
  },
  {
    file_name: "HMTpano_000044_000021.jpg",
    longitude_latitude: [10.95146809, 50.9981964],
  },
  {
    file_name: "HMTpano_000044_000022.jpg",
    longitude_latitude: [10.95142237, 50.99823358],
  },
  {
    file_name: "HMTpano_000044_000023.jpg",
    longitude_latitude: [10.95137442, 50.99826906],
  },
  {
    file_name: "HMTpano_000044_000024.jpg",
    longitude_latitude: [10.95133116, 50.99830626],
  },
  {
    file_name: "HMTpano_000044_000025.jpg",
    longitude_latitude: [10.95128892, 50.99834406],
  },
  {
    file_name: "HMTpano_000044_000026.jpg",
    longitude_latitude: [10.95124714, 50.99838289],
  },
  {
    file_name: "HMTpano_000044_000027.jpg",
    longitude_latitude: [10.95120516, 50.99842182],
  },
  {
    file_name: "HMTpano_000044_000028.jpg",
    longitude_latitude: [10.95116237, 50.99846002],
  },
  {
    file_name: "HMTpano_000044_000029.jpg",
    longitude_latitude: [10.95112281, 50.99850003],
  },
  {
    file_name: "HMTpano_000044_000030.jpg",
    longitude_latitude: [10.95108073, 50.99853861],
  },
  {
    file_name: "HMTpano_000044_000031.jpg",
    longitude_latitude: [10.95103801, 50.99857698],
  },
  {
    file_name: "HMTpano_000044_000032.jpg",
    longitude_latitude: [10.95099559, 50.99861548],
  },
  {
    file_name: "HMTpano_000044_000033.jpg",
    longitude_latitude: [10.95095222, 50.99865448],
  },
  {
    file_name: "HMTpano_000044_000034.jpg",
    longitude_latitude: [10.95090967, 50.99869325],
  },
  {
    file_name: "HMTpano_000044_000035.jpg",
    longitude_latitude: [10.95086711, 50.99873205],
  },
  {
    file_name: "HMTpano_000044_000036.jpg",
    longitude_latitude: [10.9508243, 50.99877092],
  },
  {
    file_name: "HMTpano_000044_000037.jpg",
    longitude_latitude: [10.95077921, 50.9988093],
  },
  {
    file_name: "HMTpano_000044_000038.jpg",
    longitude_latitude: [10.95073358, 50.99884808],
  },
  {
    file_name: "HMTpano_000044_000039.jpg",
    longitude_latitude: [10.95068205, 50.99889046],
  },
  {
    file_name: "HMTpano_000044_000040.jpg",
    longitude_latitude: [10.95063426, 50.99893],
  },
  {
    file_name: "HMTpano_000044_000041.jpg",
    longitude_latitude: [10.95058993, 50.99897066],
  },
  {
    file_name: "HMTpano_000044_000042.jpg",
    longitude_latitude: [10.95054776, 50.9990119],
  },
  {
    file_name: "HMTpano_000044_000043.jpg",
    longitude_latitude: [10.95050576, 50.9990537],
  },
  {
    file_name: "HMTpano_000044_000044.jpg",
    longitude_latitude: [10.95046384, 50.99909486],
  },
  {
    file_name: "HMTpano_000044_000045.jpg",
    longitude_latitude: [10.95042103, 50.99913484],
  },
  {
    file_name: "HMTpano_000044_000046.jpg",
    longitude_latitude: [10.95037809, 50.99917516],
  },
  {
    file_name: "HMTpano_000044_000047.jpg",
    longitude_latitude: [10.95033466, 50.99921499],
  },
  {
    file_name: "HMTpano_000044_000048.jpg",
    longitude_latitude: [10.95029349, 50.99925568],
  },
  {
    file_name: "HMTpano_000044_000049.jpg",
    longitude_latitude: [10.95025144, 50.99929645],
  },
  {
    file_name: "HMTpano_000044_000050.jpg",
    longitude_latitude: [10.9502089, 50.9993365],
  },
  {
    file_name: "HMTpano_000044_000051.jpg",
    longitude_latitude: [10.95016988, 50.99937785],
  },
  {
    file_name: "HMTpano_000044_000052.jpg",
    longitude_latitude: [10.9501281, 50.99941886],
  },
  {
    file_name: "HMTpano_000044_000053.jpg",
    longitude_latitude: [10.95007904, 50.99945699],
  },
  {
    file_name: "HMTpano_000044_000054.jpg",
    longitude_latitude: [10.95000391, 50.99948015],
  },
  {
    file_name: "HMTpano_000044_000055.jpg",
    longitude_latitude: [10.94992938, 50.99946799],
  },
  {
    file_name: "HMTpano_000044_000056.jpg",
    longitude_latitude: [10.94986717, 50.99944477],
  },
  {
    file_name: "HMTpano_000045_000000.jpg",
    longitude_latitude: [10.94948974, 50.99927231],
  },
  {
    file_name: "HMTpano_000045_000001.jpg",
    longitude_latitude: [10.94944266, 50.9992484],
  },
  {
    file_name: "HMTpano_000045_000002.jpg",
    longitude_latitude: [10.94938712, 50.99921867],
  },
  {
    file_name: "HMTpano_000045_000003.jpg",
    longitude_latitude: [10.94936853, 50.99916874],
  },
  {
    file_name: "HMTpano_000045_000004.jpg",
    longitude_latitude: [10.94942949, 50.99913762],
  },
  {
    file_name: "HMTpano_000045_000005.jpg",
    longitude_latitude: [10.94949983, 50.99912609],
  },
  {
    file_name: "HMTpano_000045_000006.jpg",
    longitude_latitude: [10.94957018, 50.99911455],
  },
  {
    file_name: "HMTpano_000045_000007.jpg",
    longitude_latitude: [10.94963882, 50.99910095],
  },
  {
    file_name: "HMTpano_000045_000008.jpg",
    longitude_latitude: [10.94970788, 50.99908612],
  },
  {
    file_name: "HMTpano_000045_000009.jpg",
    longitude_latitude: [10.9497766, 50.99907141],
  },
  {
    file_name: "HMTpano_000045_000010.jpg",
    longitude_latitude: [10.94984606, 50.99905744],
  },
  {
    file_name: "HMTpano_000045_000011.jpg",
    longitude_latitude: [10.94991585, 50.9990433],
  },
  {
    file_name: "HMTpano_000045_000012.jpg",
    longitude_latitude: [10.94998599, 50.9990293],
  },
  {
    file_name: "HMTpano_000045_000013.jpg",
    longitude_latitude: [10.95005606, 50.99901615],
  },
  {
    file_name: "HMTpano_000045_000014.jpg",
    longitude_latitude: [10.95012597, 50.99900372],
  },
  {
    file_name: "HMTpano_000045_000015.jpg",
    longitude_latitude: [10.95019695, 50.99899147],
  },
  {
    file_name: "HMTpano_000045_000016.jpg",
    longitude_latitude: [10.95026802, 50.9989811],
  },
  {
    file_name: "HMTpano_000045_000017.jpg",
    longitude_latitude: [10.95033878, 50.9989715],
  },
  {
    file_name: "HMTpano_000045_000018.jpg",
    longitude_latitude: [10.95041088, 50.9989631],
  },
  {
    file_name: "HMTpano_000045_000019.jpg",
    longitude_latitude: [10.95048273, 50.99895731],
  },
  {
    file_name: "HMTpano_000045_000020.jpg",
    longitude_latitude: [10.95054996, 50.99894894],
  },
  {
    file_name: "HMTpano_000045_000021.jpg",
    longitude_latitude: [10.95058818, 50.9989192],
  },
  {
    file_name: "HMTpano_000045_000022.jpg",
    longitude_latitude: [10.95057129, 50.99887976],
  },
  {
    file_name: "HMTpano_000045_000023.jpg",
    longitude_latitude: [10.95052176, 50.99884993],
  },
  {
    file_name: "HMTpano_000045_000024.jpg",
    longitude_latitude: [10.95046201, 50.99882538],
  },
  {
    file_name: "HMTpano_000045_000025.jpg",
    longitude_latitude: [10.95040217, 50.99879831],
  },
  {
    file_name: "HMTpano_000045_000026.jpg",
    longitude_latitude: [10.95035184, 50.99876231],
  },
  {
    file_name: "HMTpano_000045_000027.jpg",
    longitude_latitude: [10.95032798, 50.9987161],
  },
  {
    file_name: "HMTpano_000045_000028.jpg",
    longitude_latitude: [10.95034868, 50.99866864],
  },
  {
    file_name: "HMTpano_000045_000029.jpg",
    longitude_latitude: [10.95039113, 50.99863112],
  },
  {
    file_name: "HMTpano_000045_000030.jpg",
    longitude_latitude: [10.95043857, 50.99859599],
  },
  {
    file_name: "HMTpano_000045_000031.jpg",
    longitude_latitude: [10.95048579, 50.99856119],
  },
  {
    file_name: "HMTpano_000045_000032.jpg",
    longitude_latitude: [10.95053226, 50.99852616],
  },
  {
    file_name: "HMTpano_000045_000033.jpg",
    longitude_latitude: [10.95057765, 50.99849073],
  },
  {
    file_name: "HMTpano_000045_000034.jpg",
    longitude_latitude: [10.95062192, 50.99845433],
  },
  {
    file_name: "HMTpano_000045_000035.jpg",
    longitude_latitude: [10.95066531, 50.99841729],
  },
  {
    file_name: "HMTpano_000045_000036.jpg",
    longitude_latitude: [10.95070734, 50.99837988],
  },
  {
    file_name: "HMTpano_000045_000037.jpg",
    longitude_latitude: [10.95074853, 50.99834323],
  },
  {
    file_name: "HMTpano_000045_000038.jpg",
    longitude_latitude: [10.95078998, 50.99830586],
  },
  {
    file_name: "HMTpano_000045_000039.jpg",
    longitude_latitude: [10.95083083, 50.9982687],
  },
  {
    file_name: "HMTpano_000045_000040.jpg",
    longitude_latitude: [10.95087241, 50.99823133],
  },
  {
    file_name: "HMTpano_000045_000041.jpg",
    longitude_latitude: [10.95091434, 50.99819361],
  },
  {
    file_name: "HMTpano_000045_000042.jpg",
    longitude_latitude: [10.95095569, 50.99815652],
  },
  {
    file_name: "HMTpano_000045_000043.jpg",
    longitude_latitude: [10.95099833, 50.99811881],
  },
  {
    file_name: "HMTpano_000045_000044.jpg",
    longitude_latitude: [10.95104079, 50.99808151],
  },
  {
    file_name: "HMTpano_000045_000045.jpg",
    longitude_latitude: [10.95108345, 50.99804466],
  },
  {
    file_name: "HMTpano_000045_000046.jpg",
    longitude_latitude: [10.9511265, 50.99800716],
  },
  {
    file_name: "HMTpano_000045_000047.jpg",
    longitude_latitude: [10.95116912, 50.99797016],
  },
  {
    file_name: "HMTpano_000045_000048.jpg",
    longitude_latitude: [10.95121197, 50.99793348],
  },
  {
    file_name: "HMTpano_000045_000049.jpg",
    longitude_latitude: [10.95125441, 50.99789731],
  },
  {
    file_name: "HMTpano_000045_000050.jpg",
    longitude_latitude: [10.95129656, 50.99786151],
  },
  {
    file_name: "HMTpano_000045_000051.jpg",
    longitude_latitude: [10.95134056, 50.99782475],
  },
  {
    file_name: "HMTpano_000045_000052.jpg",
    longitude_latitude: [10.95138229, 50.99778854],
  },
  {
    file_name: "HMTpano_000045_000053.jpg",
    longitude_latitude: [10.95142337, 50.99775166],
  },
  {
    file_name: "HMTpano_000045_000054.jpg",
    longitude_latitude: [10.9514643, 50.99771475],
  },
  {
    file_name: "HMTpano_000045_000055.jpg",
    longitude_latitude: [10.9515051, 50.99767809],
  },
  {
    file_name: "HMTpano_000046_000000.jpg",
    longitude_latitude: [10.95128307, 50.99787347],
  },
  {
    file_name: "HMTpano_000046_000001.jpg",
    longitude_latitude: [10.95129384, 50.99786271],
  },
  {
    file_name: "HMTpano_000046_000002.jpg",
    longitude_latitude: [10.95129579, 50.99782163],
  },
  {
    file_name: "HMTpano_000046_000003.jpg",
    longitude_latitude: [10.95126397, 50.99778418],
  },
  {
    file_name: "HMTpano_000046_000004.jpg",
    longitude_latitude: [10.95121137, 50.99775527],
  },
  {
    file_name: "HMTpano_000046_000005.jpg",
    longitude_latitude: [10.95115112, 50.9977315],
  },
  {
    file_name: "HMTpano_000046_000006.jpg",
    longitude_latitude: [10.95108755, 50.99771112],
  },
  {
    file_name: "HMTpano_000046_000007.jpg",
    longitude_latitude: [10.95102151, 50.99769476],
  },
  {
    file_name: "HMTpano_000046_000008.jpg",
    longitude_latitude: [10.95095304, 50.99768336],
  },
  {
    file_name: "HMTpano_000046_000009.jpg",
    longitude_latitude: [10.95088205, 50.99767601],
  },
  {
    file_name: "HMTpano_000046_000010.jpg",
    longitude_latitude: [10.9508103, 50.9976693],
  },
  {
    file_name: "HMTpano_000046_000011.jpg",
    longitude_latitude: [10.95073835, 50.99766227],
  },
  {
    file_name: "HMTpano_000046_000012.jpg",
    longitude_latitude: [10.95066728, 50.99765487],
  },
  {
    file_name: "HMTpano_000046_000013.jpg",
    longitude_latitude: [10.95059621, 50.9976472],
  },
  {
    file_name: "HMTpano_000046_000014.jpg",
    longitude_latitude: [10.95052484, 50.99763945],
  },
  {
    file_name: "HMTpano_000046_000015.jpg",
    longitude_latitude: [10.95045508, 50.99763792],
  },
  {
    file_name: "HMTpano_000046_000016.jpg",
    longitude_latitude: [10.9503893, 50.99764954],
  },
  {
    file_name: "HMTpano_000046_000017.jpg",
    longitude_latitude: [10.95033682, 50.99767649],
  },
  {
    file_name: "HMTpano_000046_000018.jpg",
    longitude_latitude: [10.9503063, 50.99771551],
  },
  {
    file_name: "HMTpano_000046_000019.jpg",
    longitude_latitude: [10.95028914, 50.9977591],
  },
  {
    file_name: "HMTpano_000046_000020.jpg",
    longitude_latitude: [10.95027592, 50.99780459],
  },
  {
    file_name: "HMTpano_000046_000021.jpg",
    longitude_latitude: [10.95026004, 50.99785005],
  },
  {
    file_name: "HMTpano_000046_000022.jpg",
    longitude_latitude: [10.95023866, 50.99789471],
  },
  {
    file_name: "HMTpano_000046_000023.jpg",
    longitude_latitude: [10.95021106, 50.99793791],
  },
  {
    file_name: "HMTpano_000046_000024.jpg",
    longitude_latitude: [10.95017697, 50.99797948],
  },
  {
    file_name: "HMTpano_000046_000025.jpg",
    longitude_latitude: [10.95013716, 50.99801931],
  },
  {
    file_name: "HMTpano_000046_000026.jpg",
    longitude_latitude: [10.95009385, 50.99805648],
  },
  {
    file_name: "HMTpano_000046_000027.jpg",
    longitude_latitude: [10.95005026, 50.99809356],
  },
  {
    file_name: "HMTpano_000046_000028.jpg",
    longitude_latitude: [10.95000722, 50.99813001],
  },
  {
    file_name: "HMTpano_000046_000029.jpg",
    longitude_latitude: [10.94996374, 50.99816694],
  },
  {
    file_name: "HMTpano_000046_000030.jpg",
    longitude_latitude: [10.94992044, 50.99820389],
  },
  {
    file_name: "HMTpano_000046_000031.jpg",
    longitude_latitude: [10.9498774, 50.9982408],
  },
  {
    file_name: "HMTpano_000046_000032.jpg",
    longitude_latitude: [10.94983488, 50.99827751],
  },
  {
    file_name: "HMTpano_000046_000033.jpg",
    longitude_latitude: [10.94979562, 50.99831511],
  },
  {
    file_name: "HMTpano_000046_000034.jpg",
    longitude_latitude: [10.94976545, 50.99835475],
  },
  {
    file_name: "HMTpano_000046_000035.jpg",
    longitude_latitude: [10.9497554, 50.99839667],
  },
  {
    file_name: "HMTpano_000046_000036.jpg",
    longitude_latitude: [10.94978091, 50.99843487],
  },
  {
    file_name: "HMTpano_000047_000000.jpg",
    longitude_latitude: [10.95027687, 50.99782466],
  },
  {
    file_name: "HMTpano_000047_000001.jpg",
    longitude_latitude: [10.95029157, 50.99778329],
  },
  {
    file_name: "HMTpano_000047_000002.jpg",
    longitude_latitude: [10.95030168, 50.99773905],
  },
  {
    file_name: "HMTpano_000047_000003.jpg",
    longitude_latitude: [10.95029926, 50.99769537],
  },
  {
    file_name: "HMTpano_000047_000004.jpg",
    longitude_latitude: [10.95027627, 50.99765505],
  },
  {
    file_name: "HMTpano_000047_000005.jpg",
    longitude_latitude: [10.95022839, 50.99762499],
  },
  {
    file_name: "HMTpano_000047_000006.jpg",
    longitude_latitude: [10.95016394, 50.99760819],
  },
  {
    file_name: "HMTpano_000047_000007.jpg",
    longitude_latitude: [10.95009439, 50.99759924],
  },
  {
    file_name: "HMTpano_000047_000008.jpg",
    longitude_latitude: [10.95002279, 50.99759233],
  },
  {
    file_name: "HMTpano_000047_000009.jpg",
    longitude_latitude: [10.94995141, 50.99758614],
  },
  {
    file_name: "HMTpano_000047_000010.jpg",
    longitude_latitude: [10.94987986, 50.9975803],
  },
  {
    file_name: "HMTpano_000047_000011.jpg",
    longitude_latitude: [10.94980914, 50.9975753],
  },
  {
    file_name: "HMTpano_000047_000012.jpg",
    longitude_latitude: [10.94973702, 50.99757142],
  },
  {
    file_name: "HMTpano_000047_000013.jpg",
    longitude_latitude: [10.94966558, 50.99756971],
  },
  {
    file_name: "HMTpano_000047_000014.jpg",
    longitude_latitude: [10.94959431, 50.99757086],
  },
  {
    file_name: "HMTpano_000047_000015.jpg",
    longitude_latitude: [10.94952331, 50.99757419],
  },
  {
    file_name: "HMTpano_000047_000016.jpg",
    longitude_latitude: [10.94945404, 50.99758035],
  },
  {
    file_name: "HMTpano_000047_000017.jpg",
    longitude_latitude: [10.94938476, 50.99758867],
  },
  {
    file_name: "HMTpano_000047_000018.jpg",
    longitude_latitude: [10.94932574, 50.9976004],
  },
  {
    file_name: "HMTpano_000048_000000.jpg",
    longitude_latitude: [10.94891135, 50.99788937],
  },
  {
    file_name: "HMTpano_000048_000001.jpg",
    longitude_latitude: [10.94888554, 50.9978752],
  },
  {
    file_name: "HMTpano_000048_000002.jpg",
    longitude_latitude: [10.94882684, 50.99785142],
  },
  {
    file_name: "HMTpano_000048_000003.jpg",
    longitude_latitude: [10.94876063, 50.99783984],
  },
  {
    file_name: "HMTpano_000048_000004.jpg",
    longitude_latitude: [10.94869316, 50.99784316],
  },
  {
    file_name: "HMTpano_000048_000005.jpg",
    longitude_latitude: [10.9486315, 50.99786177],
  },
  {
    file_name: "HMTpano_000048_000006.jpg",
    longitude_latitude: [10.94858292, 50.99789282],
  },
  {
    file_name: "HMTpano_000048_000007.jpg",
    longitude_latitude: [10.94854355, 50.99793059],
  },
  {
    file_name: "HMTpano_000048_000008.jpg",
    longitude_latitude: [10.9485065, 50.99796949],
  },
  {
    file_name: "HMTpano_000048_000009.jpg",
    longitude_latitude: [10.9484688, 50.99800893],
  },
  {
    file_name: "HMTpano_000048_000010.jpg",
    longitude_latitude: [10.94843113, 50.9980479],
  },
  {
    file_name: "HMTpano_000048_000011.jpg",
    longitude_latitude: [10.94839302, 50.99808732],
  },
  {
    file_name: "HMTpano_000048_000012.jpg",
    longitude_latitude: [10.94835535, 50.99812602],
  },
  {
    file_name: "HMTpano_000048_000013.jpg",
    longitude_latitude: [10.94831694, 50.99816502],
  },
  {
    file_name: "HMTpano_000048_000014.jpg",
    longitude_latitude: [10.9482775, 50.99820411],
  },
  {
    file_name: "HMTpano_000048_000015.jpg",
    longitude_latitude: [10.94823727, 50.99824201],
  },
  {
    file_name: "HMTpano_000048_000016.jpg",
    longitude_latitude: [10.94819536, 50.99827955],
  },
  {
    file_name: "HMTpano_000048_000017.jpg",
    longitude_latitude: [10.94815144, 50.99831661],
  },
  {
    file_name: "HMTpano_000048_000018.jpg",
    longitude_latitude: [10.94810645, 50.99835352],
  },
  {
    file_name: "HMTpano_000048_000019.jpg",
    longitude_latitude: [10.94806142, 50.99838968],
  },
  {
    file_name: "HMTpano_000048_000020.jpg",
    longitude_latitude: [10.94801597, 50.99842604],
  },
  {
    file_name: "HMTpano_000048_000021.jpg",
    longitude_latitude: [10.94797115, 50.99846159],
  },
  {
    file_name: "HMTpano_000048_000022.jpg",
    longitude_latitude: [10.94792581, 50.99849751],
  },
  {
    file_name: "HMTpano_000048_000023.jpg",
    longitude_latitude: [10.94788024, 50.99853323],
  },
  {
    file_name: "HMTpano_000048_000024.jpg",
    longitude_latitude: [10.94783303, 50.99856834],
  },
  {
    file_name: "HMTpano_000048_000025.jpg",
    longitude_latitude: [10.94778483, 50.99860235],
  },
  {
    file_name: "HMTpano_000048_000026.jpg",
    longitude_latitude: [10.94773503, 50.99863521],
  },
  {
    file_name: "HMTpano_000048_000027.jpg",
    longitude_latitude: [10.94768311, 50.9986676],
  },
  {
    file_name: "HMTpano_000048_000028.jpg",
    longitude_latitude: [10.94763099, 50.99869899],
  },
  {
    file_name: "HMTpano_000048_000029.jpg",
    longitude_latitude: [10.94757682, 50.99872951],
  },
  {
    file_name: "HMTpano_000048_000030.jpg",
    longitude_latitude: [10.94751981, 50.99875821],
  },
  {
    file_name: "HMTpano_000048_000031.jpg",
    longitude_latitude: [10.94745954, 50.9987846],
  },
  {
    file_name: "HMTpano_000048_000032.jpg",
    longitude_latitude: [10.9473982, 50.99880841],
  },
  {
    file_name: "HMTpano_000048_000033.jpg",
    longitude_latitude: [10.94733685, 50.99883187],
  },
  {
    file_name: "HMTpano_000048_000034.jpg",
    longitude_latitude: [10.94727419, 50.99885476],
  },
  {
    file_name: "HMTpano_000048_000035.jpg",
    longitude_latitude: [10.94721154, 50.99887665],
  },
  {
    file_name: "HMTpano_000048_000036.jpg",
    longitude_latitude: [10.94715154, 50.99889964],
  },
  {
    file_name: "HMTpano_000048_000037.jpg",
    longitude_latitude: [10.94709752, 50.99892726],
  },
  {
    file_name: "HMTpano_000048_000038.jpg",
    longitude_latitude: [10.94705064, 50.99896058],
  },
  {
    file_name: "HMTpano_000048_000039.jpg",
    longitude_latitude: [10.94701152, 50.99899764],
  },
  {
    file_name: "HMTpano_000048_000040.jpg",
    longitude_latitude: [10.9469781, 50.99903669],
  },
  {
    file_name: "HMTpano_000048_000041.jpg",
    longitude_latitude: [10.94695337, 50.99907775],
  },
  {
    file_name: "HMTpano_000048_000042.jpg",
    longitude_latitude: [10.94694636, 50.99912021],
  },
  {
    file_name: "HMTpano_000048_000043.jpg",
    longitude_latitude: [10.94694826, 50.99916491],
  },
  {
    file_name: "HMTpano_000048_000044.jpg",
    longitude_latitude: [10.94695812, 50.99920902],
  },
  {
    file_name: "HMTpano_000048_000045.jpg",
    longitude_latitude: [10.94697469, 50.99925165],
  },
  {
    file_name: "HMTpano_000048_000046.jpg",
    longitude_latitude: [10.94699865, 50.9992939],
  },
  {
    file_name: "HMTpano_000048_000047.jpg",
    longitude_latitude: [10.94702872, 50.99933411],
  },
  {
    file_name: "HMTpano_000048_000048.jpg",
    longitude_latitude: [10.94706538, 50.99937239],
  },
  {
    file_name: "HMTpano_000048_000049.jpg",
    longitude_latitude: [10.9471078, 50.99940857],
  },
  {
    file_name: "HMTpano_000048_000050.jpg",
    longitude_latitude: [10.94715413, 50.99944248],
  },
  {
    file_name: "HMTpano_000048_000051.jpg",
    longitude_latitude: [10.94720638, 50.99947421],
  },
  {
    file_name: "HMTpano_000048_000052.jpg",
    longitude_latitude: [10.94725772, 50.99950497],
  },
  {
    file_name: "HMTpano_000048_000053.jpg",
    longitude_latitude: [10.94731183, 50.99953435],
  },
  {
    file_name: "HMTpano_000048_000054.jpg",
    longitude_latitude: [10.94736844, 50.9995614],
  },
  {
    file_name: "HMTpano_000048_000055.jpg",
    longitude_latitude: [10.94742874, 50.99958578],
  },
  {
    file_name: "HMTpano_000048_000056.jpg",
    longitude_latitude: [10.94749141, 50.99960913],
  },
  {
    file_name: "HMTpano_000048_000057.jpg",
    longitude_latitude: [10.94755291, 50.99963135],
  },
  {
    file_name: "HMTpano_000049_000000.jpg",
    longitude_latitude: [10.94707065, 50.99937615],
  },
  {
    file_name: "HMTpano_000049_000001.jpg",
    longitude_latitude: [10.94704312, 50.99934647],
  },
  {
    file_name: "HMTpano_000049_000002.jpg",
    longitude_latitude: [10.94700998, 50.99930617],
  },
  {
    file_name: "HMTpano_000049_000003.jpg",
    longitude_latitude: [10.94697646, 50.99926718],
  },
  {
    file_name: "HMTpano_000049_000004.jpg",
    longitude_latitude: [10.94693333, 50.99923348],
  },
  {
    file_name: "HMTpano_000049_000005.jpg",
    longitude_latitude: [10.94687823, 50.99920868],
  },
  {
    file_name: "HMTpano_000049_000006.jpg",
    longitude_latitude: [10.94681277, 50.99919677],
  },
  {
    file_name: "HMTpano_000049_000007.jpg",
    longitude_latitude: [10.94674449, 50.99920003],
  },
  {
    file_name: "HMTpano_000049_000008.jpg",
    longitude_latitude: [10.94667806, 50.99921191],
  },
  {
    file_name: "HMTpano_000049_000009.jpg",
    longitude_latitude: [10.94661511, 50.99922942],
  },
  {
    file_name: "HMTpano_000049_000010.jpg",
    longitude_latitude: [10.94655549, 50.99925218],
  },
  {
    file_name: "HMTpano_000049_000011.jpg",
    longitude_latitude: [10.9465041, 50.99928029],
  },
  {
    file_name: "HMTpano_000049_000012.jpg",
    longitude_latitude: [10.94646179, 50.99931441],
  },
  {
    file_name: "HMTpano_000049_000013.jpg",
    longitude_latitude: [10.94643183, 50.99935371],
  },
  {
    file_name: "HMTpano_000049_000014.jpg",
    longitude_latitude: [10.94641694, 50.9993949],
  },
  {
    file_name: "HMTpano_000049_000015.jpg",
    longitude_latitude: [10.94642251, 50.99943899],
  },
  {
    file_name: "HMTpano_000049_000016.jpg",
    longitude_latitude: [10.94642357, 50.99948453],
  },
  {
    file_name: "HMTpano_000049_000017.jpg",
    longitude_latitude: [10.94642816, 50.99952794],
  },
  {
    file_name: "HMTpano_000050_000000.jpg",
    longitude_latitude: [10.94664473, 50.99922053],
  },
  {
    file_name: "HMTpano_000050_000001.jpg",
    longitude_latitude: [10.94657357, 50.99923404],
  },
  {
    file_name: "HMTpano_000050_000002.jpg",
    longitude_latitude: [10.94650475, 50.99924846],
  },
  {
    file_name: "HMTpano_000050_000003.jpg",
    longitude_latitude: [10.94643488, 50.99926266],
  },
  {
    file_name: "HMTpano_000050_000004.jpg",
    longitude_latitude: [10.94636378, 50.99927341],
  },
  {
    file_name: "HMTpano_000050_000005.jpg",
    longitude_latitude: [10.94629158, 50.9992801],
  },
  {
    file_name: "HMTpano_000050_000006.jpg",
    longitude_latitude: [10.94621955, 50.99928467],
  },
  {
    file_name: "HMTpano_000050_000007.jpg",
    longitude_latitude: [10.9461474, 50.9992891],
  },
  {
    file_name: "HMTpano_000050_000008.jpg",
    longitude_latitude: [10.94606999, 50.99929044],
  },
  {
    file_name: "HMTpano_000051_000000.jpg",
    longitude_latitude: [10.946362, 50.99926635],
  },
  {
    file_name: "HMTpano_000051_000001.jpg",
    longitude_latitude: [10.94631699, 50.99927023],
  },
  {
    file_name: "HMTpano_000051_000002.jpg",
    longitude_latitude: [10.94624064, 50.99926382],
  },
  {
    file_name: "HMTpano_000051_000003.jpg",
    longitude_latitude: [10.94617617, 50.99923762],
  },
  {
    file_name: "HMTpano_000051_000004.jpg",
    longitude_latitude: [10.9461378, 50.99919562],
  },
  {
    file_name: "HMTpano_000051_000005.jpg",
    longitude_latitude: [10.9461439, 50.99914754],
  },
  {
    file_name: "HMTpano_000051_000006.jpg",
    longitude_latitude: [10.94617678, 50.99910545],
  },
  {
    file_name: "HMTpano_000051_000007.jpg",
    longitude_latitude: [10.9462308, 50.99907],
  },
  {
    file_name: "HMTpano_000051_000008.jpg",
    longitude_latitude: [10.94630579, 50.99907555],
  },
  {
    file_name: "HMTpano_000051_000009.jpg",
    longitude_latitude: [10.94636569, 50.99910228],
  },
  {
    file_name: "HMTpano_000051_000010.jpg",
    longitude_latitude: [10.9464197, 50.99913253],
  },
  {
    file_name: "HMTpano_000051_000011.jpg",
    longitude_latitude: [10.9464722, 50.99916388],
  },
  {
    file_name: "HMTpano_000051_000012.jpg",
    longitude_latitude: [10.94651338, 50.99920456],
  },
  {
    file_name: "HMTpano_000051_000013.jpg",
    longitude_latitude: [10.9465016, 50.99925373],
  },
  {
    file_name: "HMTpano_000051_000014.jpg",
    longitude_latitude: [10.94643295, 50.99927424],
  },
];

for (let i = 0; i < coordinates.length; i++) {
  coordinates[i].longitude_latitude = olProj.fromLonLat(coordinates[i].longitude_latitude);
}

// console.log(coordinates)

export default coordinates;