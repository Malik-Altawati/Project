var userPicks;
var commputerPicks = ['paper', 'rock', 'scissors'];
var randomNum = Math.floor(Math.random() * 3);
var computer = commputerPicks[randomNum];
var wins = 0;
var loses = 0;

$('#start').on('click',function(){
	var username = $('input').value()
	$('#play').attr('display','unset')
})



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

		//

		if (userPicks === computer) {

		  alert("Tie!");

		} else if (userPicks === 'paper' && computer === 'rock') {
		  wins++
		  alert("You win!");

		} else if (userPicks === 'rock' && computer === 'scissors') {
			wins++
		  alert("You win!");


		} else if (userPicks === 'scissors' && computer === 'rock') {
			loses++
		  alert("You lose!");

		} else if (userPicks === 'rock' && computer === 'paper') {
			loses++
		  alert("You lose!");

		} else if (userPicks === 'paper' && computer === 'scissors') {
			loses++
		  alert("You lose!");

		} else if (userPicks === 'scissors' && computer === 'paper') {
			wins++
		  alert("You win!");

		} 

		randomNum = Math.floor(Math.random() * 3);
		computer = commputerPicks[randomNum];
		$('p').html("You Score is : "+ wins +"  Computer Score is : "+ loses)
})


//alert('Your choice is '+userPicks+', the computers choice is '+computer);