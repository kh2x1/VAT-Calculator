
document.getElementById("submit").onclick = function(){

    ProductPrice = document.getElementById("ProductPrice").value;
    ProductPrice= Number(ProductPrice); // to change the input to Number

    const VAT= 0.15;

    V= ProductPrice*VAT;
    
    FinalPrice=V+ProductPrice;
    document.getElementById("VAT").innerHTML= "VAT: " + V;
    
    document.getElementById("FinalPrice").innerHTML="TOTAL: " + FinalPrice;

}