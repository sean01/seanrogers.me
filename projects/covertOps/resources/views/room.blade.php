<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Connected to: {{ $roomID }}</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	<link href='https://fonts.googleapis.com/css?family=Lato:100,200,400,300,300italic,900italic,900,700italic,700,400italic' rel='stylesheet' type='text/css'>

	<link rel="stylesheet" href="../dist/style.css">

</head>
<body>
<script>
	var roomID = '{{ $roomID }}';
</script>
	
	<header>			
		
								
			
	</header>

	<div class="container">


		<div>
			<h3 class="flex-1"></h3>
		</div>
	
	
		<div class="video-c">	

			<video class="localVideo" autoplay></video>
	
		</div>

		<nav>

			<ul class="flex flex-center">
				<a href="/covert/"><i class="fa fa-phone fa-4x phoneButton"></i></a>

			</ul>
		</nav>
	

	</div>
		
	


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js"></script>
<script src="https://cdn.icecomm.io/icecomm.js"></script>  
<script src="../assets/js/script.js"></script>
</body>
</html>