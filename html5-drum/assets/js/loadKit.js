function loadKit(){
    let x = document.getElementById('banksSwitcher').selectedIndex;
    let n = document.getElementById('banksSwitcher').options;
    let y = document.querySelectorAll('audio');

   for(let i=0; i<y.length; i++) {
       y[i].src = 'sounds/'+ n[x].text +'/sample'+ i +'.wav';
    }
    console.log(n[x], y[0] );
    
}
