
document.getElementById("imie").innerHTML = localStorage.getItem("imie");
document.getElementById("nazwisko").innerHTML = localStorage.getItem("nazwisko");
document.getElementById("miasto").innerHTML = localStorage.getItem("miasto");
document.getElementById("kod_pocztowy").innerHTML = localStorage.getItem("kod_pocztowy");
document.getElementById("adres").innerHTML = localStorage.getItem("adres");
document.getElementById("nip").innerHTML = localStorage.getItem("nip");

const produkt =JSON.parse(localStorage.getItem("nazwa_produktu"));
  const jednostka =JSON.parse(localStorage.getItem("jednostka"));
  const cena =JSON.parse(localStorage.getItem("cena"));
  const ilosc_zam =JSON.parse(localStorage.getItem("zamowiona_ilosc"));
  const cena_netto =JSON.parse(localStorage.getItem("cena_netto"));
  const kwota_vat =JSON.parse(localStorage.getItem("kwota_vat"));
 
 
 
  const petla = document.querySelectorAll(".rekord");

 let liczba_porzadkowa =1;
 let kwota_vat_razem = 0;
 let kwota_razem = 0;
 
  petla.forEach((element, index) =>{

     if(produkt[index]==null)
      {
         
          element.style.display = "none";
          liczba_porzadkowa--;
          
      }
      element.querySelector(".produkt").innerHTML = produkt[index];
      element.querySelector(".ilosc_zam").innerHTML = ilosc_zam[index];
      element.querySelector(".jednostka_miary").innerHTML = jednostka[index];
      element.querySelector(".cena_brutto").innerHTML = cena[index];
      element.querySelector(".cena_netto").innerHTML = cena_netto[index];
      element.querySelector(".kwota_vat").innerHTML = kwota_vat[index];

      
      if(kwota_vat[index]!=null)
      {
         
         kwota_vat_razem = kwota_vat_razem + +kwota_vat[index];
          
     
     }
     if(cena[index]!=null)
     {
         kwota_razem = kwota_razem + +cena[index];
           
     }
  
    
      element.querySelector(".liczba_porzadkowa").innerHTML = liczba_porzadkowa;
      liczba_porzadkowa++;
     
        
  });
  kwota_vat_razem = kwota_vat_razem.toFixed(2);
document.getElementById("kwota_vat_razem").innerHTML = kwota_vat_razem;
document.getElementById("cena_razem").innerHTML = kwota_razem;
document.getElementById("numer_fakutry").innerHTML = localStorage.getItem("numer_faktury");
let warunek_do_nip = localStorage.getItem("warunek_do_nip");
if(warunek_do_nip == 0)
{
 
 document.getElementById("nip_p").style.display = "none";
}

print();
setTimeout(() => {
    window.open("podziekowania.html", '_self');
}, "1000");


