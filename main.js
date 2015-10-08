 var song=$(".audio1");
        function playSong() { 
            song.get(0).player.play(); 
} 

        function pauseSong() { 
            song.get(0).player.pause(); 
}
        
        
   	$(".audioButton").toggle(function (){playSong()},function () { pauseSong() });

    
