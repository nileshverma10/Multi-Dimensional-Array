function worldCupFinal(NzScore, NzSuperOver, NzFours, EngScore, EngSuperOver, EngFours) {
    //Write code here
    if(NzScore > EngScore){
        console.log("New Zealand");
    }else if(NzScore < EngScore){
        console.log("England");
    }else if(NzSuperOver > EngSuperOver){
        console.log("New Zealand");
    }else if(NzSuperOver < EngSuperOver){
        console.log("England");
    }else if(NzFours > EngFours){
        console.log("New Zealand");
    }else if(NzFours < EngFours){
        console.log("England");
    }
}
