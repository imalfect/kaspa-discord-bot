import type { BlockRewardReductionRecord } from '@/kaspa/types.ts';
export const STANDARD_TRANSACTION_MASS = 2036;
export const CRESCENDO_ACTIVATION_DAA = 110165000;
export const DEFLATIONARY_TABLE: BlockRewardReductionRecord[] = [
	{
		daaStart: 0,
		rewardPerDaa: '500.00000000'
	},
	{
		daaStart: 15519600,
		rewardPerDaa: '440.00000000'
	},
	{
		daaStart: 18149400,
		rewardPerDaa: '415.30469757'
	},
	{
		daaStart: 20779200,
		rewardPerDaa: '391.99543598'
	},
	{
		daaStart: 23409000,
		rewardPerDaa: '369.99442271'
	},
	{
		daaStart: 26038800,
		rewardPerDaa: '349.22823143'
	},
	{
		daaStart: 28668600,
		rewardPerDaa: '329.62755691'
	},
	{
		daaStart: 31298400,
		rewardPerDaa: '311.12698372'
	},
	{
		daaStart: 33928200,
		rewardPerDaa: '293.66476791'
	},
	{
		daaStart: 36558000,
		rewardPerDaa: '277.18263097'
	},
	{
		daaStart: 39187800,
		rewardPerDaa: '261.62556530'
	},
	{
		daaStart: 41817600,
		rewardPerDaa: '246.94165062'
	},
	{
		daaStart: 44447400,
		rewardPerDaa: '233.08188075'
	},
	{
		daaStart: 47077200,
		rewardPerDaa: '220.00000000'
	},
	{
		daaStart: 49707000,
		rewardPerDaa: '207.65234878'
	},
	{
		daaStart: 52336800,
		rewardPerDaa: '195.99771799'
	},
	{
		daaStart: 54966600,
		rewardPerDaa: '184.99721135'
	},
	{
		daaStart: 57596400,
		rewardPerDaa: '174.61411571'
	},
	{
		daaStart: 60226200,
		rewardPerDaa: '164.81377845'
	},
	{
		daaStart: 62856000,
		rewardPerDaa: '155.56349186'
	},
	{
		daaStart: 65485800,
		rewardPerDaa: '146.83238395'
	},
	{
		daaStart: 68115600,
		rewardPerDaa: '138.59131548'
	},
	{
		daaStart: 70745400,
		rewardPerDaa: '130.81278265'
	},
	{
		daaStart: 73375200,
		rewardPerDaa: '123.47082531'
	},
	{
		daaStart: 76005000,
		rewardPerDaa: '116.54094037'
	},
	{
		daaStart: 78634800,
		rewardPerDaa: '110.00000000'
	},
	{
		daaStart: 81264600,
		rewardPerDaa: '103.82617439'
	},
	{
		daaStart: 83894400,
		rewardPerDaa: '97.99885899'
	},
	{
		daaStart: 86524200,
		rewardPerDaa: '92.49860567'
	},
	{
		daaStart: 89154000,
		rewardPerDaa: '87.30705785'
	},
	{
		daaStart: 91783800,
		rewardPerDaa: '82.40688922'
	},
	{
		daaStart: 94413600,
		rewardPerDaa: '77.78174593'
	},
	{
		daaStart: 97043400,
		rewardPerDaa: '73.41619197'
	},
	{
		daaStart: 99673200,
		rewardPerDaa: '69.29565774'
	},
	{
		daaStart: 102303000,
		rewardPerDaa: '65.40639132'
	},
	{
		daaStart: 104932800,
		rewardPerDaa: '61.73541265'
	},
	{
		daaStart: 107562600,
		rewardPerDaa: '58.27047018'
	},
	{
		daaStart: 110165000,
		rewardPerDaa: '5.82704702'
	},
	{
		daaStart: 110439000,
		rewardPerDaa: '5.50000000'
	},
	{
		daaStart: 136737000,
		rewardPerDaa: '5.19130872'
	},
	{
		daaStart: 163035000,
		rewardPerDaa: '4.89994295'
	},
	{
		daaStart: 189333000,
		rewardPerDaa: '4.62493029'
	},
	{
		daaStart: 215631000,
		rewardPerDaa: '4.36535290'
	},
	{
		daaStart: 241929000,
		rewardPerDaa: '4.12034447'
	},
	{
		daaStart: 268227000,
		rewardPerDaa: '3.88908730'
	},
	{
		daaStart: 294525000,
		rewardPerDaa: '3.67080960'
	},
	{
		daaStart: 320823000,
		rewardPerDaa: '3.46478289'
	},
	{
		daaStart: 347121000,
		rewardPerDaa: '3.27031957'
	},
	{
		daaStart: 373419000,
		rewardPerDaa: '3.08677064'
	},
	{
		daaStart: 399717000,
		rewardPerDaa: '2.91352351'
	},
	{
		daaStart: 426015000,
		rewardPerDaa: '2.75000000'
	},
	{
		daaStart: 452313000,
		rewardPerDaa: '2.59565436'
	},
	{
		daaStart: 478611000,
		rewardPerDaa: '2.44997148'
	},
	{
		daaStart: 504909000,
		rewardPerDaa: '2.31246515'
	},
	{
		daaStart: 531207000,
		rewardPerDaa: '2.18267645'
	},
	{
		daaStart: 557505000,
		rewardPerDaa: '2.06017223'
	},
	{
		daaStart: 583803000,
		rewardPerDaa: '1.94454365'
	},
	{
		daaStart: 610101000,
		rewardPerDaa: '1.83540480'
	},
	{
		daaStart: 636399000,
		rewardPerDaa: '1.73239145'
	},
	{
		daaStart: 662697000,
		rewardPerDaa: '1.63515979'
	},
	{
		daaStart: 688995000,
		rewardPerDaa: '1.54338532'
	},
	{
		daaStart: 715293000,
		rewardPerDaa: '1.45676176'
	},
	{
		daaStart: 741591000,
		rewardPerDaa: '1.37500000'
	},
	{
		daaStart: 767889000,
		rewardPerDaa: '1.29782718'
	},
	{
		daaStart: 794187000,
		rewardPerDaa: '1.22498574'
	},
	{
		daaStart: 820485000,
		rewardPerDaa: '1.15623257'
	},
	{
		daaStart: 846783000,
		rewardPerDaa: '1.09133823'
	},
	{
		daaStart: 873081000,
		rewardPerDaa: '1.03008612'
	},
	{
		daaStart: 899379000,
		rewardPerDaa: '0.97227183'
	},
	{
		daaStart: 925677000,
		rewardPerDaa: '0.91770240'
	},
	{
		daaStart: 951975000,
		rewardPerDaa: '0.86619573'
	},
	{
		daaStart: 978273000,
		rewardPerDaa: '0.81757990'
	},
	{
		daaStart: 1004571000,
		rewardPerDaa: '0.77169266'
	},
	{
		daaStart: 1030869000,
		rewardPerDaa: '0.72838088'
	},
	{
		daaStart: 1057167000,
		rewardPerDaa: '0.68750000'
	},
	{
		daaStart: 1083465000,
		rewardPerDaa: '0.64891359'
	},
	{
		daaStart: 1109763000,
		rewardPerDaa: '0.61249287'
	},
	{
		daaStart: 1136061000,
		rewardPerDaa: '0.57811629'
	},
	{
		daaStart: 1162359000,
		rewardPerDaa: '0.54566912'
	},
	{
		daaStart: 1188657000,
		rewardPerDaa: '0.51504306'
	},
	{
		daaStart: 1214955000,
		rewardPerDaa: '0.48613592'
	},
	{
		daaStart: 1241253000,
		rewardPerDaa: '0.45885120'
	},
	{
		daaStart: 1267551000,
		rewardPerDaa: '0.43309786'
	},
	{
		daaStart: 1293849000,
		rewardPerDaa: '0.40878995'
	},
	{
		daaStart: 1320147000,
		rewardPerDaa: '0.38584633'
	},
	{
		daaStart: 1346445000,
		rewardPerDaa: '0.36419044'
	},
	{
		daaStart: 1372743000,
		rewardPerDaa: '0.34375000'
	},
	{
		daaStart: 1399041000,
		rewardPerDaa: '0.32445680'
	},
	{
		daaStart: 1425339000,
		rewardPerDaa: '0.30624644'
	},
	{
		daaStart: 1451637000,
		rewardPerDaa: '0.28905815'
	},
	{
		daaStart: 1477935000,
		rewardPerDaa: '0.27283456'
	},
	{
		daaStart: 1504233000,
		rewardPerDaa: '0.25752153'
	},
	{
		daaStart: 1530531000,
		rewardPerDaa: '0.24306796'
	},
	{
		daaStart: 1556829000,
		rewardPerDaa: '0.22942560'
	},
	{
		daaStart: 1583127000,
		rewardPerDaa: '0.21654893'
	},
	{
		daaStart: 1609425000,
		rewardPerDaa: '0.20439498'
	},
	{
		daaStart: 1635723000,
		rewardPerDaa: '0.19292317'
	},
	{
		daaStart: 1662021000,
		rewardPerDaa: '0.18209522'
	},
	{
		daaStart: 1688319000,
		rewardPerDaa: '0.17187500'
	},
	{
		daaStart: 1714617000,
		rewardPerDaa: '0.16222840'
	},
	{
		daaStart: 1740915000,
		rewardPerDaa: '0.15312322'
	},
	{
		daaStart: 1767213000,
		rewardPerDaa: '0.14452908'
	},
	{
		daaStart: 1793511000,
		rewardPerDaa: '0.13641728'
	},
	{
		daaStart: 1819809000,
		rewardPerDaa: '0.12876077'
	},
	{
		daaStart: 1846107000,
		rewardPerDaa: '0.12153398'
	},
	{
		daaStart: 1872405000,
		rewardPerDaa: '0.11471280'
	},
	{
		daaStart: 1898703000,
		rewardPerDaa: '0.10827447'
	},
	{
		daaStart: 1925001000,
		rewardPerDaa: '0.10219749'
	},
	{
		daaStart: 1951299000,
		rewardPerDaa: '0.09646159'
	},
	{
		daaStart: 1977597000,
		rewardPerDaa: '0.09104761'
	},
	{
		daaStart: 2003895000,
		rewardPerDaa: '0.08593750'
	},
	{
		daaStart: 2030193000,
		rewardPerDaa: '0.08111420'
	},
	{
		daaStart: 2056491000,
		rewardPerDaa: '0.07656161'
	},
	{
		daaStart: 2082789000,
		rewardPerDaa: '0.07226454'
	},
	{
		daaStart: 2109087000,
		rewardPerDaa: '0.06820864'
	},
	{
		daaStart: 2135385000,
		rewardPerDaa: '0.06438039'
	},
	{
		daaStart: 2161683000,
		rewardPerDaa: '0.06076699'
	},
	{
		daaStart: 2187981000,
		rewardPerDaa: '0.05735640'
	},
	{
		daaStart: 2214279000,
		rewardPerDaa: '0.05413724'
	},
	{
		daaStart: 2240577000,
		rewardPerDaa: '0.05109875'
	},
	{
		daaStart: 2266875000,
		rewardPerDaa: '0.04823080'
	},
	{
		daaStart: 2293173000,
		rewardPerDaa: '0.04552381'
	},
	{
		daaStart: 2319471000,
		rewardPerDaa: '0.04296875'
	},
	{
		daaStart: 2345769000,
		rewardPerDaa: '0.04055710'
	},
	{
		daaStart: 2372067000,
		rewardPerDaa: '0.03828081'
	},
	{
		daaStart: 2398365000,
		rewardPerDaa: '0.03613227'
	},
	{
		daaStart: 2424663000,
		rewardPerDaa: '0.03410432'
	},
	{
		daaStart: 2450961000,
		rewardPerDaa: '0.03219020'
	},
	{
		daaStart: 2477259000,
		rewardPerDaa: '0.03038350'
	},
	{
		daaStart: 2503557000,
		rewardPerDaa: '0.02867820'
	},
	{
		daaStart: 2529855000,
		rewardPerDaa: '0.02706862'
	},
	{
		daaStart: 2556153000,
		rewardPerDaa: '0.02554938'
	},
	{
		daaStart: 2582451000,
		rewardPerDaa: '0.02411540'
	},
	{
		daaStart: 2608749000,
		rewardPerDaa: '0.02276191'
	},
	{
		daaStart: 2635047000,
		rewardPerDaa: '0.02148438'
	},
	{
		daaStart: 2661345000,
		rewardPerDaa: '0.02027855'
	},
	{
		daaStart: 2687643000,
		rewardPerDaa: '0.01914041'
	},
	{
		daaStart: 2713941000,
		rewardPerDaa: '0.01806614'
	},
	{
		daaStart: 2740239000,
		rewardPerDaa: '0.01705216'
	},
	{
		daaStart: 2766537000,
		rewardPerDaa: '0.01609510'
	},
	{
		daaStart: 2792835000,
		rewardPerDaa: '0.01519175'
	},
	{
		daaStart: 2819133000,
		rewardPerDaa: '0.01433910'
	},
	{
		daaStart: 2845431000,
		rewardPerDaa: '0.01353431'
	},
	{
		daaStart: 2871729000,
		rewardPerDaa: '0.01277469'
	},
	{
		daaStart: 2898027000,
		rewardPerDaa: '0.01205770'
	},
	{
		daaStart: 2924325000,
		rewardPerDaa: '0.01138096'
	},
	{
		daaStart: 2950623000,
		rewardPerDaa: '0.01074219'
	},
	{
		daaStart: 2976921000,
		rewardPerDaa: '0.01013928'
	},
	{
		daaStart: 3003219000,
		rewardPerDaa: '0.00957021'
	},
	{
		daaStart: 3029517000,
		rewardPerDaa: '0.00903307'
	},
	{
		daaStart: 3055815000,
		rewardPerDaa: '0.00852608'
	},
	{
		daaStart: 3082113000,
		rewardPerDaa: '0.00804755'
	},
	{
		daaStart: 3108411000,
		rewardPerDaa: '0.00759588'
	},
	{
		daaStart: 3134709000,
		rewardPerDaa: '0.00716955'
	},
	{
		daaStart: 3161007000,
		rewardPerDaa: '0.00676716'
	},
	{
		daaStart: 3187305000,
		rewardPerDaa: '0.00638735'
	},
	{
		daaStart: 3213603000,
		rewardPerDaa: '0.00602885'
	},
	{
		daaStart: 3239901000,
		rewardPerDaa: '0.00569048'
	},
	{
		daaStart: 3266199000,
		rewardPerDaa: '0.00537110'
	},
	{
		daaStart: 3292497000,
		rewardPerDaa: '0.00506964'
	},
	{
		daaStart: 3318795000,
		rewardPerDaa: '0.00478510'
	},
	{
		daaStart: 3345093000,
		rewardPerDaa: '0.00451654'
	},
	{
		daaStart: 3371391000,
		rewardPerDaa: '0.00426304'
	},
	{
		daaStart: 3397689000,
		rewardPerDaa: '0.00402378'
	},
	{
		daaStart: 3423987000,
		rewardPerDaa: '0.00379794'
	},
	{
		daaStart: 3450285000,
		rewardPerDaa: '0.00358478'
	},
	{
		daaStart: 3476583000,
		rewardPerDaa: '0.00338358'
	},
	{
		daaStart: 3502881000,
		rewardPerDaa: '0.00319368'
	},
	{
		daaStart: 3529179000,
		rewardPerDaa: '0.00301443'
	},
	{
		daaStart: 3555477000,
		rewardPerDaa: '0.00284524'
	},
	{
		daaStart: 3581775000,
		rewardPerDaa: '0.00268555'
	},
	{
		daaStart: 3608073000,
		rewardPerDaa: '0.00253482'
	},
	{
		daaStart: 3634371000,
		rewardPerDaa: '0.00239255'
	},
	{
		daaStart: 3660669000,
		rewardPerDaa: '0.00225827'
	},
	{
		daaStart: 3686967000,
		rewardPerDaa: '0.00213152'
	},
	{
		daaStart: 3713265000,
		rewardPerDaa: '0.00201189'
	},
	{
		daaStart: 3739563000,
		rewardPerDaa: '0.00189897'
	},
	{
		daaStart: 3765861000,
		rewardPerDaa: '0.00179239'
	},
	{
		daaStart: 3792159000,
		rewardPerDaa: '0.00169179'
	},
	{
		daaStart: 3818457000,
		rewardPerDaa: '0.00159684'
	},
	{
		daaStart: 3844755000,
		rewardPerDaa: '0.00150722'
	},
	{
		daaStart: 3871053000,
		rewardPerDaa: '0.00142262'
	},
	{
		daaStart: 3897351000,
		rewardPerDaa: '0.00134278'
	},
	{
		daaStart: 3923649000,
		rewardPerDaa: '0.00126741'
	},
	{
		daaStart: 3949947000,
		rewardPerDaa: '0.00119628'
	},
	{
		daaStart: 3976245000,
		rewardPerDaa: '0.00112914'
	},
	{
		daaStart: 4002543000,
		rewardPerDaa: '0.00106576'
	},
	{
		daaStart: 4028841000,
		rewardPerDaa: '0.00100595'
	},
	{
		daaStart: 4055139000,
		rewardPerDaa: '0.00094949'
	},
	{
		daaStart: 4081437000,
		rewardPerDaa: '0.00089620'
	},
	{
		daaStart: 4107735000,
		rewardPerDaa: '0.00084590'
	},
	{
		daaStart: 4134033000,
		rewardPerDaa: '0.00079842'
	},
	{
		daaStart: 4160331000,
		rewardPerDaa: '0.00075361'
	},
	{
		daaStart: 4186629000,
		rewardPerDaa: '0.00071131'
	},
	{
		daaStart: 4212927000,
		rewardPerDaa: '0.00067139'
	},
	{
		daaStart: 4239225000,
		rewardPerDaa: '0.00063371'
	},
	{
		daaStart: 4265523000,
		rewardPerDaa: '0.00059814'
	},
	{
		daaStart: 4291821000,
		rewardPerDaa: '0.00056457'
	},
	{
		daaStart: 4318119000,
		rewardPerDaa: '0.00053288'
	},
	{
		daaStart: 4344417000,
		rewardPerDaa: '0.00050298'
	},
	{
		daaStart: 4370715000,
		rewardPerDaa: '0.00047475'
	},
	{
		daaStart: 4397013000,
		rewardPerDaa: '0.00044810'
	},
	{
		daaStart: 4423311000,
		rewardPerDaa: '0.00042295'
	},
	{
		daaStart: 4449609000,
		rewardPerDaa: '0.00039921'
	},
	{
		daaStart: 4475907000,
		rewardPerDaa: '0.00037681'
	},
	{
		daaStart: 4502205000,
		rewardPerDaa: '0.00035566'
	},
	{
		daaStart: 4528503000,
		rewardPerDaa: '0.00033570'
	},
	{
		daaStart: 4554801000,
		rewardPerDaa: '0.00031686'
	},
	{
		daaStart: 4581099000,
		rewardPerDaa: '0.00029907'
	},
	{
		daaStart: 4607397000,
		rewardPerDaa: '0.00028229'
	},
	{
		daaStart: 4633695000,
		rewardPerDaa: '0.00026644'
	},
	{
		daaStart: 4659993000,
		rewardPerDaa: '0.00025149'
	},
	{
		daaStart: 4686291000,
		rewardPerDaa: '0.00023738'
	},
	{
		daaStart: 4712589000,
		rewardPerDaa: '0.00022405'
	},
	{
		daaStart: 4738887000,
		rewardPerDaa: '0.00021148'
	},
	{
		daaStart: 4765185000,
		rewardPerDaa: '0.00019961'
	},
	{
		daaStart: 4791483000,
		rewardPerDaa: '0.00018841'
	},
	{
		daaStart: 4817781000,
		rewardPerDaa: '0.00017783'
	},
	{
		daaStart: 4844079000,
		rewardPerDaa: '0.00016785'
	},
	{
		daaStart: 4870377000,
		rewardPerDaa: '0.00015843'
	},
	{
		daaStart: 4896675000,
		rewardPerDaa: '0.00014954'
	},
	{
		daaStart: 4922973000,
		rewardPerDaa: '0.00014115'
	},
	{
		daaStart: 4949271000,
		rewardPerDaa: '0.00013322'
	},
	{
		daaStart: 4975569000,
		rewardPerDaa: '0.00012575'
	},
	{
		daaStart: 5001867000,
		rewardPerDaa: '0.00011869'
	},
	{
		daaStart: 5028165000,
		rewardPerDaa: '0.00011203'
	},
	{
		daaStart: 5054463000,
		rewardPerDaa: '0.00010574'
	},
	{
		daaStart: 5080761000,
		rewardPerDaa: '0.00009981'
	},
	{
		daaStart: 5107059000,
		rewardPerDaa: '0.00009420'
	},
	{
		daaStart: 5133357000,
		rewardPerDaa: '0.00008892'
	},
	{
		daaStart: 5159655000,
		rewardPerDaa: '0.00008393'
	},
	{
		daaStart: 5185953000,
		rewardPerDaa: '0.00007922'
	},
	{
		daaStart: 5212251000,
		rewardPerDaa: '0.00007477'
	},
	{
		daaStart: 5238549000,
		rewardPerDaa: '0.00007057'
	},
	{
		daaStart: 5264847000,
		rewardPerDaa: '0.00006661'
	},
	{
		daaStart: 5291145000,
		rewardPerDaa: '0.00006288'
	},
	{
		daaStart: 5317443000,
		rewardPerDaa: '0.00005935'
	},
	{
		daaStart: 5343741000,
		rewardPerDaa: '0.00005602'
	},
	{
		daaStart: 5370039000,
		rewardPerDaa: '0.00005287'
	},
	{
		daaStart: 5396337000,
		rewardPerDaa: '0.00004991'
	},
	{
		daaStart: 5422635000,
		rewardPerDaa: '0.00004710'
	},
	{
		daaStart: 5448933000,
		rewardPerDaa: '0.00004446'
	},
	{
		daaStart: 5475231000,
		rewardPerDaa: '0.00004197'
	},
	{
		daaStart: 5501529000,
		rewardPerDaa: '0.00003961'
	},
	{
		daaStart: 5527827000,
		rewardPerDaa: '0.00003739'
	},
	{
		daaStart: 5554125000,
		rewardPerDaa: '0.00003529'
	},
	{
		daaStart: 5580423000,
		rewardPerDaa: '0.00003331'
	},
	{
		daaStart: 5606721000,
		rewardPerDaa: '0.00003144'
	},
	{
		daaStart: 5633019000,
		rewardPerDaa: '0.00002968'
	},
	{
		daaStart: 5659317000,
		rewardPerDaa: '0.00002801'
	},
	{
		daaStart: 5685615000,
		rewardPerDaa: '0.00002644'
	},
	{
		daaStart: 5711913000,
		rewardPerDaa: '0.00002495'
	},
	{
		daaStart: 5738211000,
		rewardPerDaa: '0.00002355'
	},
	{
		daaStart: 5764509000,
		rewardPerDaa: '0.00002223'
	},
	{
		daaStart: 5790807000,
		rewardPerDaa: '0.00002098'
	},
	{
		daaStart: 5817105000,
		rewardPerDaa: '0.00001981'
	},
	{
		daaStart: 5843403000,
		rewardPerDaa: '0.00001870'
	},
	{
		daaStart: 5869701000,
		rewardPerDaa: '0.00001765'
	},
	{
		daaStart: 5895999000,
		rewardPerDaa: '0.00001666'
	},
	{
		daaStart: 5922297000,
		rewardPerDaa: '0.00001572'
	},
	{
		daaStart: 5948595000,
		rewardPerDaa: '0.00001484'
	},
	{
		daaStart: 5974893000,
		rewardPerDaa: '0.00001401'
	},
	{
		daaStart: 6001191000,
		rewardPerDaa: '0.00001322'
	},
	{
		daaStart: 6027489000,
		rewardPerDaa: '0.00001248'
	},
	{
		daaStart: 6053787000,
		rewardPerDaa: '0.00001178'
	},
	{
		daaStart: 6080085000,
		rewardPerDaa: '0.00001112'
	},
	{
		daaStart: 6106383000,
		rewardPerDaa: '0.00001049'
	},
	{
		daaStart: 6132681000,
		rewardPerDaa: '0.00000991'
	},
	{
		daaStart: 6158979000,
		rewardPerDaa: '0.00000935'
	},
	{
		daaStart: 6185277000,
		rewardPerDaa: '0.00000883'
	},
	{
		daaStart: 6211575000,
		rewardPerDaa: '0.00000833'
	},
	{
		daaStart: 6237873000,
		rewardPerDaa: '0.00000786'
	},
	{
		daaStart: 6264171000,
		rewardPerDaa: '0.00000742'
	},
	{
		daaStart: 6290469000,
		rewardPerDaa: '0.00000701'
	},
	{
		daaStart: 6316767000,
		rewardPerDaa: '0.00000661'
	},
	{
		daaStart: 6343065000,
		rewardPerDaa: '0.00000624'
	},
	{
		daaStart: 6369363000,
		rewardPerDaa: '0.00000589'
	},
	{
		daaStart: 6395661000,
		rewardPerDaa: '0.00000556'
	},
	{
		daaStart: 6421959000,
		rewardPerDaa: '0.00000525'
	},
	{
		daaStart: 6448257000,
		rewardPerDaa: '0.00000495'
	},
	{
		daaStart: 6474555000,
		rewardPerDaa: '0.00000468'
	},
	{
		daaStart: 6500853000,
		rewardPerDaa: '0.00000441'
	},
	{
		daaStart: 6527151000,
		rewardPerDaa: '0.00000417'
	},
	{
		daaStart: 6553449000,
		rewardPerDaa: '0.00000393'
	},
	{
		daaStart: 6579747000,
		rewardPerDaa: '0.00000371'
	},
	{
		daaStart: 6606045000,
		rewardPerDaa: '0.00000350'
	},
	{
		daaStart: 6632343000,
		rewardPerDaa: '0.00000331'
	},
	{
		daaStart: 6658641000,
		rewardPerDaa: '0.00000312'
	},
	{
		daaStart: 6684939000,
		rewardPerDaa: '0.00000295'
	},
	{
		daaStart: 6711237000,
		rewardPerDaa: '0.00000278'
	},
	{
		daaStart: 6737535000,
		rewardPerDaa: '0.00000263'
	},
	{
		daaStart: 6763833000,
		rewardPerDaa: '0.00000248'
	},
	{
		daaStart: 6790131000,
		rewardPerDaa: '0.00000234'
	},
	{
		daaStart: 6816429000,
		rewardPerDaa: '0.00000221'
	},
	{
		daaStart: 6842727000,
		rewardPerDaa: '0.00000209'
	},
	{
		daaStart: 6869025000,
		rewardPerDaa: '0.00000197'
	},
	{
		daaStart: 6895323000,
		rewardPerDaa: '0.00000186'
	},
	{
		daaStart: 6921621000,
		rewardPerDaa: '0.00000175'
	},
	{
		daaStart: 6947919000,
		rewardPerDaa: '0.00000166'
	},
	{
		daaStart: 6974217000,
		rewardPerDaa: '0.00000156'
	},
	{
		daaStart: 7000515000,
		rewardPerDaa: '0.00000148'
	},
	{
		daaStart: 7026813000,
		rewardPerDaa: '0.00000139'
	},
	{
		daaStart: 7053111000,
		rewardPerDaa: '0.00000132'
	},
	{
		daaStart: 7079409000,
		rewardPerDaa: '0.00000124'
	},
	{
		daaStart: 7105707000,
		rewardPerDaa: '0.00000117'
	},
	{
		daaStart: 7132005000,
		rewardPerDaa: '0.00000111'
	},
	{
		daaStart: 7158303000,
		rewardPerDaa: '0.00000104'
	},
	{
		daaStart: 7184601000,
		rewardPerDaa: '0.00000099'
	},
	{
		daaStart: 7210899000,
		rewardPerDaa: '0.00000093'
	},
	{
		daaStart: 7237197000,
		rewardPerDaa: '0.00000088'
	},
	{
		daaStart: 7263495000,
		rewardPerDaa: '0.00000083'
	},
	{
		daaStart: 7289793000,
		rewardPerDaa: '0.00000078'
	},
	{
		daaStart: 7316091000,
		rewardPerDaa: '0.00000074'
	},
	{
		daaStart: 7342389000,
		rewardPerDaa: '0.00000070'
	},
	{
		daaStart: 7368687000,
		rewardPerDaa: '0.00000066'
	},
	{
		daaStart: 7394985000,
		rewardPerDaa: '0.00000062'
	},
	{
		daaStart: 7421283000,
		rewardPerDaa: '0.00000059'
	},
	{
		daaStart: 7447581000,
		rewardPerDaa: '0.00000056'
	},
	{
		daaStart: 7473879000,
		rewardPerDaa: '0.00000052'
	},
	{
		daaStart: 7500177000,
		rewardPerDaa: '0.00000050'
	},
	{
		daaStart: 7526475000,
		rewardPerDaa: '0.00000047'
	},
	{
		daaStart: 7552773000,
		rewardPerDaa: '0.00000044'
	},
	{
		daaStart: 7579071000,
		rewardPerDaa: '0.00000042'
	},
	{
		daaStart: 7605369000,
		rewardPerDaa: '0.00000039'
	},
	{
		daaStart: 7631667000,
		rewardPerDaa: '0.00000037'
	},
	{
		daaStart: 7657965000,
		rewardPerDaa: '0.00000035'
	},
	{
		daaStart: 7684263000,
		rewardPerDaa: '0.00000033'
	},
	{
		daaStart: 7710561000,
		rewardPerDaa: '0.00000031'
	},
	{
		daaStart: 7736859000,
		rewardPerDaa: '0.00000030'
	},
	{
		daaStart: 7763157000,
		rewardPerDaa: '0.00000028'
	},
	{
		daaStart: 7789455000,
		rewardPerDaa: '0.00000026'
	},
	{
		daaStart: 7815753000,
		rewardPerDaa: '0.00000025'
	},
	{
		daaStart: 7842051000,
		rewardPerDaa: '0.00000024'
	},
	{
		daaStart: 7868349000,
		rewardPerDaa: '0.00000022'
	},
	{
		daaStart: 7894647000,
		rewardPerDaa: '0.00000021'
	},
	{
		daaStart: 7920945000,
		rewardPerDaa: '0.00000020'
	},
	{
		daaStart: 7947243000,
		rewardPerDaa: '0.00000019'
	},
	{
		daaStart: 7973541000,
		rewardPerDaa: '0.00000018'
	},
	{
		daaStart: 7999839000,
		rewardPerDaa: '0.00000017'
	},
	{
		daaStart: 8026137000,
		rewardPerDaa: '0.00000016'
	},
	{
		daaStart: 8052435000,
		rewardPerDaa: '0.00000015'
	},
	{
		daaStart: 8078733000,
		rewardPerDaa: '0.00000014'
	},
	{
		daaStart: 8105031000,
		rewardPerDaa: '0.00000013'
	},
	{
		daaStart: 8131329000,
		rewardPerDaa: '0.00000013'
	},
	{
		daaStart: 8157627000,
		rewardPerDaa: '0.00000012'
	},
	{
		daaStart: 8183925000,
		rewardPerDaa: '0.00000011'
	},
	{
		daaStart: 8210223000,
		rewardPerDaa: '0.00000011'
	},
	{
		daaStart: 8236521000,
		rewardPerDaa: '0.00000010'
	},
	{
		daaStart: 8262819000,
		rewardPerDaa: '0.00000010'
	},
	{
		daaStart: 8289117000,
		rewardPerDaa: '0.00000009'
	},
	{
		daaStart: 8315415000,
		rewardPerDaa: '0.00000009'
	},
	{
		daaStart: 8341713000,
		rewardPerDaa: '0.00000008'
	},
	{
		daaStart: 8368011000,
		rewardPerDaa: '0.00000008'
	},
	{
		daaStart: 8394309000,
		rewardPerDaa: '0.00000007'
	},
	{
		daaStart: 8420607000,
		rewardPerDaa: '0.00000007'
	},
	{
		daaStart: 8446905000,
		rewardPerDaa: '0.00000007'
	},
	{
		daaStart: 8473203000,
		rewardPerDaa: '0.00000006'
	},
	{
		daaStart: 8499501000,
		rewardPerDaa: '0.00000006'
	},
	{
		daaStart: 8525799000,
		rewardPerDaa: '0.00000006'
	},
	{
		daaStart: 8552097000,
		rewardPerDaa: '0.00000005'
	},
	{
		daaStart: 8578395000,
		rewardPerDaa: '0.00000005'
	},
	{
		daaStart: 8604693000,
		rewardPerDaa: '0.00000005'
	},
	{
		daaStart: 8630991000,
		rewardPerDaa: '0.00000004'
	},
	{
		daaStart: 8657289000,
		rewardPerDaa: '0.00000004'
	},
	{
		daaStart: 8683587000,
		rewardPerDaa: '0.00000004'
	},
	{
		daaStart: 8709885000,
		rewardPerDaa: '0.00000004'
	},
	{
		daaStart: 8736183000,
		rewardPerDaa: '0.00000004'
	},
	{
		daaStart: 8762481000,
		rewardPerDaa: '0.00000003'
	},
	{
		daaStart: 8788779000,
		rewardPerDaa: '0.00000003'
	},
	{
		daaStart: 8815077000,
		rewardPerDaa: '0.00000003'
	},
	{
		daaStart: 8841375000,
		rewardPerDaa: '0.00000003'
	},
	{
		daaStart: 8867673000,
		rewardPerDaa: '0.00000003'
	},
	{
		daaStart: 8893971000,
		rewardPerDaa: '0.00000003'
	},
	{
		daaStart: 8920269000,
		rewardPerDaa: '0.00000003'
	},
	{
		daaStart: 8946567000,
		rewardPerDaa: '0.00000002'
	},
	{
		daaStart: 8972865000,
		rewardPerDaa: '0.00000002'
	},
	{
		daaStart: 8999163000,
		rewardPerDaa: '0.00000002'
	},
	{
		daaStart: 9025461000,
		rewardPerDaa: '0.00000002'
	},
	{
		daaStart: 9051759000,
		rewardPerDaa: '0.00000002'
	},
	{
		daaStart: 9078057000,
		rewardPerDaa: '0.00000002'
	},
	{
		daaStart: 9104355000,
		rewardPerDaa: '0.00000002'
	},
	{
		daaStart: 9130653000,
		rewardPerDaa: '0.00000002'
	},
	{
		daaStart: 9156951000,
		rewardPerDaa: '0.00000002'
	},
	{
		daaStart: 9183249000,
		rewardPerDaa: '0.00000002'
	},
	{
		daaStart: 9209547000,
		rewardPerDaa: '0.00000002'
	},
	{
		daaStart: 9235845000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9262143000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9288441000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9314739000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9341037000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9367335000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9393633000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9419931000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9446229000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9472527000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9498825000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9525123000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9551421000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9577719000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9604017000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9630315000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9656613000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9682911000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9709209000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9735507000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9761805000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9788103000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9814401000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9840699000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9866997000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9893295000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9919593000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9945891000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9972189000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 9998487000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 10024785000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 10051083000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 10077381000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 10103679000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 10129977000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 10156275000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 10182573000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 10208871000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 10235169000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 10261467000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 10287765000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 10314063000,
		rewardPerDaa: '0.00000001'
	},
	{
		daaStart: 10340361000,
		rewardPerDaa: '0.00000000'
	}
] as const;
