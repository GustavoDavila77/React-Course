

var coffee = new Coffee();

while (true){
    while(!coffee.empty()){
        coffee.drink();
    }
    coffee.refill();
} 