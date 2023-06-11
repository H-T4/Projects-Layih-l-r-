var index = 0;//index deyiseni yaradib icerisine 0 daxil edirem

// Burda html faylinda yazidigim onclick yi changeColors vasitesile cagirilir
function changeColors(){
    // color deyiseni yaradilib icerisine massivler vasitesile ile rengle daxil edilir
    var colors = ["red","green","blue","yellow","orange","black","white","purple","gray"]
    
    // Burda ise document get element by Tag name vasitesile body tag name i cagirilir ve sonra sonuna 0 indexi yazilir cunki massiv 0 ci indexden baslayir
    document.getElementsByTagName("body")[0].
     style.background = colors[index++]; // Daha sonra style background vasitesile sehife arxa fonunun rengini colors deyiseni indexine beraber edirik

     if(index > colors.length - 1) // Ve son olaraq sert qoyuruq ki eger index sayi colors -1 sayidan boyukdurse index 0 beraberlesdirilir 
     // -1 yazmaginin sebebi yuxarida yazdigim colors deyisenin uzunlugunun sayi 9 dur amma index 0 dan basladigi ucun bu indexe gore 8 yazilir 
     // bu sebebe gore yazilir -1 
     index = 0; 
}