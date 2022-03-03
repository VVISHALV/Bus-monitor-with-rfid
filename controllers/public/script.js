let url1="http:localhost:3000/bus/";
url1="./test.json"
let col=['busno','vehicleno','status','date'];
    
function getdata(data){
    let d=[]
    for(let i=0;i<10;i++){
    let t=[]
    for (const key of col) {
        t.push(data[i][key]);
    }
    d.push(t)
    return d
}
}
var today = new Date();

//var d1 = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
var d1="";
let mydate=document.getElementById("mydate")
mydate.onchange=(e)=>{
    d1=e.target.value;
    
    var inputs = document.getElementsByTagName('input');

for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type.toLowerCase() == 'search') {
       let v=d1.split("-");
       d1=v[2]+"/"+v[1]+"/"+v[0]
       console.log(d1);
        inputs[i].value=d1;
    }
}
mygrid.updateConfig({
    search:{
        enabled:true,
        keyword:d1
    }
}).forceRender();

}
let mygrid=new gridjs.Grid({ 

    columns: ['busno','vehicleno','status','date','time'],
    
    server:{
        url:url1,
        then: data => data.map(bus => [bus.busno,bus.vehicleno,bus.status,bus.date,bus.time])
    },
        
    search:{
        enabled:true,
        keyword:d1
    },
    pagination: {
        enabled: true,
        limit: 50,
    
      },
      style: {
        td: {
          border: '1px solid #ccc',
          'background-color': 'rgba(0, 0, 0, 0.1)',
        },
        container: {
            'width':'80vw',
            'transform':'translate(20vw,0)',
            'padding':' 10px',
        },
        table:{
            'width':'60vw'
        }
      }
    })

    mygrid.render(document.getElementById('table'));

