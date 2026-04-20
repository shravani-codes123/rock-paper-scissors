 const score =JSON.parse(localStorage.getItem('score')) || {
                wins : 0,
                ties : 0 ,
                losses : 0
        };

        let autoplayMode = false;
        let intervalID;
            function autoplay(){
                if(!autoplayMode){
                     intervalID = setInterval(function(){
                        const playerMove = pickComputerMove();
                        playGame(playerMove);
                    },1000);
                    autoplayMode = true;
                }else{// add itervalid...
                    clearInterval(intervalID);
                    autoplayMode = false;
                }
            }

            /*default operator || will check the condition then excute the code*/
            /*when no score is calulated give them defualt score */
            function playGame(playerMove){
                const computerMove = pickComputerMove();
                let result ='';
                if(playerMove === 'scissors'){
                      if(computerMove === 'rock'){
                        result = 'loss';
                    }else if(computerMove === 'paper'){
                        result = 'win';
                    }else if( computerMove === 'scissors'){
                        result = 'tie';
                    }
                }
                 else if ( playerMove === 'paper'){
                    if(computerMove === 'rock'){
                      result = 'win';
                    }else if(computerMove === 'paper'){
                      result = 'tie';
                    }else if(computerMove === 'scissors'){
                      result = 'loss';
                    }
                 }
                 else if( playerMove === 'rock'){
                     if(computerMove === 'rock'){
                     result = 'tie';
                     }else if(computerMove === 'paper'){
                     result = 'loss';
                    }else if( computerMove === 'scissors'){
                     result = 'win';
                    }
                 }

                if(result === 'win'){
                    score.wins += 1;
                }else if( result === 'loss'){
                    score.losses += 1;
                }else if( result === 'tie'){
                    score.ties += 1;
                }
               

                localStorage.setItem('score',JSON.stringify(score));
                 
                document.querySelector('.js-result').innerHTML=`you ${result}`;
                document.querySelector('.js-move').innerHTML =` You 
         <img src="images/${playerMove}-emoji.png" class="move-icon" alt="">
         <img src="images/${computerMove}-emoji.png" class="move-icon" alt="">
         computer`;
                updateScoreElement();

              

            
            }

        function pickComputerMove(){
                const randomNumber = Math.random()
                let computerMove = '';
                if(randomNumber >= 0 && randomNumber < (1/3)){
                    computerMove = 'rock'
                }
                else if(randomNumber >= 1/3 && randomNumber < 2/3){
                    computerMove = 'paper'
                }else if( randomNumber >= 2/3 && randomNumber < 1){
                    computerMove = 'scissors'
                }
                 
                return computerMove;
            }

        function updateScoreElement (){
           
            document.querySelector('.js-score')
        .innerHTML = `wins : ${score.wins} , losses : ${score.losses} , ties : ${score.ties}`;
            }
        

       