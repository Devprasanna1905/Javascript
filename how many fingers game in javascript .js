<html>
	<head>
	
	
	<title>Javascript</title>
	<style>
		#decor{
			
			background-color: green;
			opacity: 0.9;
			border: 15px solid green;
			padding: 10px;
			position: relative;
			top: 25%;
			width: 50%;
			text-align: center;
			font-size: 18px;
			margin-left:25%;
			margin-right:25%;
			
		
		
		
		}
		body{
			background-color:black;
		}
	
	
	</style>
	
	</head>
	<body>
		<div id="decor">
		<p><h1>How many fingers am i holding up ?</h1></p>
		<p><input type="text" id="finger"></p>
		<p><button id="check">enter</button></p>
		</div>
			<script>
				document.getElementById("check").onclick=function(){
				
					var num=document.getElementById("finger").value;
					
					var random=Math.floor(Math.random() * 6);
					if(num==random){
						alert("you got it!!!!!!!");
					
					}
					else{
					
						alert("try again, it was");
						alert(random);					}
				
				}
		
		
			</script>
	
	</body>
</html>	
