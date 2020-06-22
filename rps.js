var userScore=0;
var compScore=0;
var userScore_span=document.getElementById("user-score");
var compScore_span=document.getElementById("comp-score");
var result=document.querySelector(".result > p");
var rock=document.getElementById("r");
var paper=document.getElementById("p");
var scissor=document.getElementById("s");	
	function getComputerChoice(){
		var choices=['r','p','s'];
		var num=Math.floor(Math.random()*3);
		return choices[num];
		
	}

	function game(userchoice){
		var computerChoice=getComputerChoice();
		switch(userchoice +computerChoice){
			case "pr":
			case "sp":
			case "rs":
			win(userchoice, computerChoice);
			break;
			case "rp":
			case "ps":
			case "sr":
			lose(userchoice, computerChoice);
			break;
			case "rr":
			case "pp":
			case "ss":
			draw(userchoice, computerChoice);
			break;
	}
	}
	function wordConvert(letter){
		if (letter==="r") return "Rock"
		if (letter==="p") return "Paper"
		else return "Scissor"
	}
	function win(userchoice, computerChoice){
		var user="User";
		var comp="Computer"
		userScore++;
		userScore_span.innerHTML=userScore;
		result.innerHTML=wordConvert(userchoice)+ user.fontsize(3).sub() +" beats " + wordConvert(computerChoice)+comp.fontsize(3).sub()+ " You win!";
		
	}
	
	function lose(userchoice, computerChoice){
		var user="User";
		var comp="Computer"
		compScore++;
		compScore_span.innerHTML=compScore;
		result.innerHTML= wordConvert(userchoice)+ user.fontsize(3).sub() +" lose "+ wordConvert(computerChoice) +comp.fontsize(3).sub()+ " You lose!";
	}
	
	function draw(userchoice, computerChoice){
		var user="User";
		var comp="Computer"
		result.innerHTML= wordConvert(userchoice)+user.fontsize(3).sub() +" equals " + wordConvert(computerChoice) +comp.fontsize(3).sub()+ " Its a draw";
	}
	function main(){
	rock.addEventListener('click',function(){
		game("r");
	})
	paper.addEventListener('click',function(){
		game("p");
	})
	scissor.addEventListener("click",function(){
		game("s");
	})
	
}

main();