<html>
	<head>
	
	
	<title>Javascript</title>
	<style>
		
	
	
	</style>
	
	</head>
	<body>
	
		<p>what is the magic word?</p>
		<p><input type="text" id="magic"></p>
		<p><button id="check">enter</button></p>
			<script>
				document.getElementById("check").onclick=function(){
				
					var magicword=document.getElementById("magic").value;
					
					var word="abradacabra";
					if(magicword==word){
						alert("you got it!!!!!!!");
					
					}
					else{
					
						alert("try again");					}
				
				}
		
		
			</script>
	
	</body>
</html>	
