var userPicks;
var commputerPicks = ['paper', 'rock', 'scissors'];
var randomNum = Math.floor(Math.random() * 3);
var computer = commputerPicks[randomNum];
var wins = 0;
var loses = 0;


const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 3000
})



$('#start').on('click',function(){

		randomNum = Math.floor(Math.random() * 3);
		computer = commputerPicks[randomNum];

	$('#reset').css('visibility','visible')

	$('.go').on('click',function(){

			$('#rock').on('click',function(){
				userPicks = 'rock'
			})

			$('#paper').on('click',function(){
				userPicks = 'paper'
			})

			$('#scissor').on('click',function(){
				userPicks = 'scissor'
			})


		if (userPicks === computer) {

		  Toast.fire({
			 icon: 'question',
			title: 'Do You Read My Mind'
			})

		} else if (userPicks === 'paper' && computer === 'rock') {
		  wins++
		   Toast.fire({
			 icon: 'success',
			title: 'You Are The Winner'
			})


		} else if (userPicks === 'rock' && computer === 'scissors') {
			wins++
		   Toast.fire({
			 icon: 'success',
			title: 'You Are The Winner'
			})


		} else if (userPicks === 'scissors' && computer === 'rock') {
			loses++
		  Toast.fire({
			 icon: 'error',
			title: 'ops Computer got you this time'
			})


		} else if (userPicks === 'rock' && computer === 'paper') {
			loses++
		   Toast.fire({
			 icon: 'error',
			title: 'ops Computer got you this time'
			})

		} else if (userPicks === 'paper' && computer === 'scissors') {
			loses++
		   Toast.fire({
			 icon: 'error',
			title: 'ops Computer got you this time'
			})

		} else if (userPicks === 'scissors' && computer === 'paper') {
			wins++
		   Toast.fire({
			 icon: 'success',
			title: 'You Are The Winner'
			})

		} 
		$('p').html("You Score is : "+ wins +"  Computer Score is : "+ loses)

		
		})

		
})


$('#reset').on('click',function(){
	 location.reload();
})







