function touching(tom,jerry){
    if(tom.x-jerry.x< jerry.width/2+tom.width/2  && jerry.x-tom.x<tom.width/2+jerry.width/2
      && tom.y-jerry.y< jerry.height/2+tom.height/2  && jerry.y-tom.y<tom.height/2+jerry.height/2){
    return true
    }
    else{
     return false 
    }
  
  }
  
  