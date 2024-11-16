// pattern printing 
function patternPrintingII(N) {
    for(let i=0; i<N; i++){
      let bag = "";
      for(let j=0; j<N; j++){
        if(j==N-1 || i == N-1 || j == 0 ){
            bag = bag + "*"+" ";
        }else{
          bag = bag + " "+ " "
        }
      }
      console.log(bag)
    }
}