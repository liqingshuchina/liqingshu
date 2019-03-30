
+(function(){
	    window.addEventListener('load', function() {
//  console.log(window.innerWidth);
    
    window.addEventListener('resize', function() {
//      console.log(window.innerWidth);
  var winWidth = window.innerWidth;
		console.log(winWidth);
		
        	if(winWidth<768){
        $("#inptext").css({
        	"width":"195px",
        	"height":"35px",
        	"line-height":"35px",
        	"font-size":"12px",
        	"background":"pink"
        });
        
        
        
     
        $("#inpsubmit").css({
        	"width":"92px",
        	"height":"35px",
        	"line-height":"35px",
        	"font-size":"12px"
        });
    }
    })

})
        
})




 