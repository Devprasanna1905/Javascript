<html>
	<head>
	
	
	<title>Javascript</title>
	<style>
		.circle{
			height:100px;
			width:100px;
			border-radius:50%;
			float:left;
			margin:50px;
		}
		#red{
			background-color:red;
		
		
		}
		#green{
			background-color:green;
		
		
		}#yellow{
			background-color:yellow;
		
		
		}
	
	
	</style>
	
	</head>
	<body>
		<div class="circle" id="red"></div>
		<div class="circle" id="green"></div>
		<div class="circle" id="yellow"></div>

			<script>
				document.getElementById("red").onclick=function(){
				
					document.getElementById("red").style.display="none";
			
				}
				document.getElementById("green").onclick=function(){
				
					
					document.getElementById("green").style.display="none";
					
				}
				document.getElementById("yellow").onclick=function(){
				
					
					document.getElementById("yellow").style.display="none";
				}
			
		
		
			</script>
	
	</body>
</html>	
