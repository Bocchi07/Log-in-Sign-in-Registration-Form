	 <script type="text/javascript">
				var button = document.getElementById("log-in");
				var main = document.getElementsByClassName("main")[0];
				button.addEventListener("click", function() {
				main.classList.add("main-clicked");
				setTimeout(function() {
		    	window.location.href = "facebook.html";
		  		}, 1000);
		});


	document.querySelector("#show-login").addEventListener("click",function(){
                document.querySelector(".popup").classList.add("active");
            });

	document.querySelector(".popup .close-btn").addEventListener("click", function(){
		document.querySelector(".popup").classList.remove(
			"active");
	});