





if(location.hash){
    var rawUriDj=location.hash
    var uriDj=rawUriDj.replace('#',"")
var rawDj=decodeURI(uriDj).replace(/\\/g,"");
    const dj=JSON.parse(rawDj);
    
    var itemNo=0;
    
    for(let i in dj){

    window[i]=dj[i];window['item'+itemNo]=i
    itemNo++
    };
    var products="";
    for(let a=0;a<product.length;a++){
    
    products+="<center><hr class='blue-hr'/><h2 class='center'>Product "+(a+1)+"</h2></center><hr style='color:green !important;'/>"
    for(b of product){
        window['product'+(a+1)]=product[a]
    
    
    }
        for(let e in product[a]){
        products+="<p><b>"+e+": </b>"+product[a][e]+"</p>"
        
        }
        
    }
document.write('<center class="center"><h1 style="font-family:cursive;color:red;">'+company.name+'</h1></center><hr/><center class="center" style="color:tomato;"><p style="color:dodgerblue !important;font-weight:bold;">'+company.address+'</p></center><hr/><center class="center"><h1>Company Info</h1></center><hr/><span ><p><b>Prop: </b>'+company.prop+'</p><p><b>Phone: </b>'+company.contact.phone+'</p><p><b>Alt.Phone: </b>'+company.contact.alternative+'</p><p><b>Email: </b>'+company.contact.email+'</p></span><hr/><center class="center"><h1>Costomer Details</h1></center><hr/><p><b>Name: </b>'+customer.name+'</p><p><b>Address: </b>'+customer.address+'</p><p><b>Phone: </b>'+customer.phone+'</p><hr/><center><h1>Product Details</h1></center><hr/>'+products)    
    

    
}
else{
    document.write('<h1>Bad Request!</h1><h2>Error Code 400!  <br/> <br/> Try a Valid Request</h2>')
    document.body.style="color:red;"
}