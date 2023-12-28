let money=0,pay=0,cost=[5,300,50,300],upp=1;
function frame(){
    money+=pay/10;
    let moneyDisplay=document.getElementById("research");
    moneyDisplay.textContent="You have "+Math.round(money*1000)/1000+" research";
    let payDisplay=document.getElementById("pay");
    payDisplay.textContent=Math.round(pay*1000)/1000+" research/sec";
    let payUp1=document.getElementById("payup1");
    payUp1.textContent="increase earning by 1 research/sec for "+Math.round(cost[0]*1000)/1000+" research";
    let payUp2=document.getElementById("payup2");
    payUp2.textContent="increase earning by 5 research/sec for "+Math.round(cost[1]*1000)/1000+" research";
    let payUp3=document.getElementById("payup3");
    payUp3.textContent="increase earning by 0.4 research/click for "+Math.round(cost[2]*1000)/1000+" research";
    let payUp4=document.getElementById("payup4");
    payUp4.textContent="increase earning by 2 research/click for "+Math.round(cost[3]*1000)/1000+" research";
    let pay1=document.getElementById("pay1");
    pay1.textContent="click for "+upp+" research";
}
function payIncrease(a,costt,i){
    if(money>=costt){
        money-=costt;
        pay+=a;
        if(i==0){
            cost[i]*=1.6;
        }
        if(i==1){
            cost[i]*=2.1;
        }
    }
}
function rem(id,mon){
    let a=document.getElementById(id);
    if(money>=mon){
        a.remove();
        money-=mon;
    }
}
function p(){
    money+=upp;
}
function up(a,costt,i){
    if(money>=costt){
        money-=costt;
        upp+=a;
        if(i==2){
            cost[i]*=2.5;
        }
        if(i==3){
            cost[i]*=4.5;
        }
    }
}
setTimeout(100);
setInterval(frame,100);