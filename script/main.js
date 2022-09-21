
		window.addEventListener("DOMContentLoaded", function() {

			setTimeout(showAfterLoad, 3000); // 3초(=3000ms) 뒤 showAfterLoad 함수 호출
			const POPUP = document.querySelector("#popup"); // $("#popup")					
			const BODY = document.querySelector("body"); // $("#body")
			const CLOSE = document.querySelector("#close"); // $("#close")

			function showAfterLoad() { // 자바 메소드처럼 선언!
				POPUP.style.display = "block";

				//console.dir(BODY);
				BODY.style.overflow = "hidden";
			}
			CLOSE.addEventListener("click", function() {
				POPUP.style.display = "none";
				BODY.style.overflow = "auto";
			})
			/* 	$("#close").click(function(){
				//#popup 을 감춰/사라지게해줘/보이지 않게 해줘!!
			$("#popup").css("display","none"); // .css() : css 조작메소드
				$("body").css("overflow", "auto");
			}) */
		})

