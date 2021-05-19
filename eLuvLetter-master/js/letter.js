
var aparted = false;

$("#open").click(function(){
	
	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: ["^1000Dear&nbsp;&nbsp;解宝贝", 
				"悄悄告诉你<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;虽然仪式感没那么重要，但是我还是想在20215201314的时候跟你悄悄说一句“我爱你” 很爱很爱 ，虽然现阶段我不是你的唯一，但是你是我的唯一 。我不会每天缠着你让你找我，但我会每天想你。只要你现在和她在一起开心就好，别天天叹气了宝贝，不开心的时候回头，我会一直在的。我不会像上个月那样天天去找你啦，不让你心累，我就乖乖的待着不闹啦，顺便改造改造，想办法攒攒小金库，慢慢变好，来日方长！<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本来5月22我过生日，我是想和你待在一起的，不用那些花里胡哨的，只要你在就好。但是我不想让你不开心。生日不止一个，所有节日都可以重来。所以我会等你，但是我希望你什么事都别骗我，你说的每句话我都信。无论别人咋看你，反正在我这你就是很好，我就爱关他们屁事。未来的事留给未来。我的所有计划都有你。如果现在开始不能到未来，那我更想要未来，我们都稳定的时候。等你～<br><br><p style='float:right; display:block; width:80px;'>^1000爱你的宝贝</p>"],
			typeSpeed: 100,
			backSpeed: 50
		});
		
		$('#open').find("span").eq(0).css('background-position', "0 -150px");
		
		aparted = true;
		
		var music = document.getElementById('music2');		
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1"); 
		}
	}
	
});

function playPause() 
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');
	
    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1"); 
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2"); 
    }	
}


window.onload = function () 
{	

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');
	
}
