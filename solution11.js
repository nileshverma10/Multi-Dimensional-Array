function ediblePlants(N,edible,M,plants){
    // write code here
       let count=0;
    for(i=0; i<=edible.length-1; i++){
    for(j=0; j<=plants.length-1; j++){
         if(edible[i]==plants[j]){
          count++;
         }
    }
    }
    console.log(count);
}
