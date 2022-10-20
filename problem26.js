function cartTotal(N, price, quantity) {
    let count=0;
  for(i=0; i<N; i++){
      count+=quantity[i]*price[i];
  }
  console.log(count);
}
