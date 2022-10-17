/**
 * Array için includesCi isimli yeni bir method(prototype) yazmanız isteniyor.
 * Method’a verilen parametrenin, array’in içerisindeki elemanların küçük/büyük
 * harf duyarlılığına bakmaksızın var olup olmadığının kontrolünü yapabilmesi gerekiyor.
 */

//İpucu 1: Array.prototype.includesCi =  dedikten sonra metodunuzu yazabilirsiniz
//İpucu 2: "HaKaN".toUppercase() size "HAKAN" sonucunu üretir

const array2 = ["Patika","219","Akbank","React","Bootcamp"]
Array.prototype.includesCi= function(checkvalue)
{
   
       return this.some((item) => item.toUpperCase() === checkvalue.toUpperCase())
    
};

console.log(array2.includesCi("patika")===true ? "Beklendiği gibi" : "Beklendiği gibi değil")
console.log(array2.includesCi("melisa")===true ? "Beklendiği gibi" : "Beklendiği gibi değil")
console.log(array2.includesCi("reACt")===true ? "Beklendiği gibi" : "Beklendiği gibi değil")