
function initCanvas(){
    var ctx = document.getElementById('my_canvas').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    
        
        
    var contacts = [
                
                {"id":"G-BOAC","colour":"#19eb21","x":0,"y":300,"dirx":+5,"diry":+2},
                {'id':'N2149W','colour':'#fa0b0b','x':1200,'y':0,'dirx':-3,'diry':+1},
                {'id':'G-DEFW','colour':'#19eb21','x':400,'y':200,'dirx':+6,'diry':-3},
                {'id':'D-FERT','colour':'#fa0b0b','x':400,'y':400,'dirx':-2,'diry':+3}
                     ];
    
    function renderContact(){
        for(var i = 0;i < contacts.length;i++){
        ctx.beginPath()
        if(contacts[i].y>600){
        contacts.splice(i,1)
        }
        ctx.fillStyle = contacts[i].colour;
        ctx.fillRect(contacts[i].x,contacts[i].y, 5, 5);
        ctx.fillStyle = contacts[i].colour;
        ctx.font = '15px Arial, sans-serif';
        ctx.fillText(contacts[i].id, contacts[i].x+10, contacts[i].y-70, 50);
        ctx.fillText(contacts[i].x, contacts[i].x+10, contacts[i].y-50, 50);
        ctx.fillText(contacts[i].y, contacts[i].x+10, contacts[i].y-30, 50);
        ctx.strokeStyle=contacts[i].colour
        ctx.lineWidth = 1;
        ctx.moveTo(contacts[i].x+10,contacts[i].y-25);
        ctx.lineTo(contacts[i].x+5,contacts[i].y-5);
        ctx.stroke();
        
        contacts[i].x=contacts[i].x+contacts[i].dirx;
        contacts[i].y=contacts[i].y+contacts[i].diry;
        
        }
    }

        function animate(){
        ctx.save();
        ctx.clearRect(0, 0, cW, cH);
        renderContact()
        ctx.restore();
            
    }

    var animateInterval = setInterval(animate, 1000);
}



window.addEventListener('load', function(event) {
    initCanvas();
});
