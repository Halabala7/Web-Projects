const ilosc = document.querySelectorAll(".ilosc");
aktualizacja = document.querySelectorAll(".aktualizacja");
zamowiona_ilosc = document.querySelectorAll(".podana_ilosc");
pole = document.querySelectorAll(".pole");


odczytaj_ilosci();
max_element();


  if(!localStorage.getItem("numer_faktury"))
  {
    localStorage.setItem("numer_faktury", 1);
    
  }
 

 

function sprawdzenie_ilosci_i_kolorow(){

    ilosc.forEach(element => {
        if(element.innerHTML == 0)
        {
            element.style.backgroundColor = "#990000";
        }
        else if(element.innerHTML <= 10)
        {
            element.style.backgroundColor = "#cccc00";
        }
        else if(element.innerHTML > 10 && element.innerHTML < 60)
        {
            element.style.backgroundColor = "#248f24";
        }
        else if(element.innerHTML >= 60)
        {
            element.style.backgroundColor = "#00b3b3"; 
        }
    });


}



sprawdzenie_ilosci_i_kolorow();



function zapisz_ilosci() {
    const ilosci = [];
    ilosc.forEach(element => {
      ilosci.push(element.innerHTML);
    });
    localStorage.setItem("ilosci", JSON.stringify(ilosci));
  }

  function odczytaj_ilosci() {
    const ilosci = JSON.parse(localStorage.getItem("ilosci"));
 
      ilosc.forEach((element, index) => {
        element.innerHTML = ilosci[index];
      });
    
    sprawdzenie_ilosci_i_kolorow();
  }


  aktualizacja.forEach((elem, index) => {
    elem.addEventListener("click", () => {
      let nowa_ilosc = window.prompt("Podaj nową ilość");
      if (nowa_ilosc < "0") {
        window.alert("Nie możesz dodać takiej wartosci");
      } else {
        ilosc[index].innerHTML = nowa_ilosc;
        zapisz_ilosci(); 
      }
      sprawdzenie_ilosci_i_kolorow();
    });
  });






function max_element(){





  ilosc.forEach((element, index) => {
    const input = document.querySelectorAll(".podana_ilosc")
    input[index].setAttribute("max",ilosc[index].innerHTML);

  });

}














function zamow(){
   let suma_zamowionych_ilosci = 0;
    

    const zamowione_ilosci = [];
    const nazwy_produktow = [];
    const jednosta_miary_produktow = [];
    const ceny_produktow = [] ;
    const ceny_netto = [];
    const kwota_vat = []; 
    


  pole.forEach((elem,index) => {
   


   if(elem.querySelector(".podana_ilosc").value > 0) 
   {
         zamowione_ilosci[index] = elem.querySelector(".podana_ilosc").value;
         
         nazwy_produktow[index] = elem.querySelector(".nazwa_produktu").innerHTML;

        

        
   }    
  else
  {
        zamowione_ilosci[index] = 0;
  }
   
 suma_zamowionych_ilosci = suma_zamowionych_ilosci + zamowione_ilosci[index];

    


   
    

        if(+zamowione_ilosci[index]>+ilosc[index].innerHTML)
        {
            do{
                zamowione_ilosci[index] = window.prompt("zmien wartosc jest zla w indeksie "+(index+1));
            }while(+zamowione_ilosci[index] > +ilosc[index].innerHTML)
           
        }

  
        ilosc[index].innerHTML = ilosc[index].innerHTML - zamowione_ilosci[index];
 
       
        
         jednosta_miary_produktow[index] = elem.querySelector(".jednostka_miary").innerHTML;
         ceny_produktow[index] = elem.querySelector(".cena").innerHTML;
         ceny_produktow[index] = ceny_produktow[index] * zamowione_ilosci[index];


         ceny_netto[index] = ceny_produktow[index]/1.23;
         ceny_netto[index] = ceny_netto[index].toFixed(2);



         kwota_vat[index] = ceny_produktow[index] - ceny_netto[index];
         kwota_vat[index] = kwota_vat[index].toFixed(2);

    });

    
    if(suma_zamowionych_ilosci == 0)
    {
     window.alert("nie podano zadnej ilosci");
     return
    }
   
   
    
    
      

  sprawdzenie_ilosci_i_kolorow();
  zapisz_ilosci();
  max_element();

  const numerFaktury = +localStorage.getItem("numer_faktury");
  const nowyNumerFaktury = numerFaktury + 1;

  localStorage.setItem("numer_faktury", nowyNumerFaktury);

   

  
  localStorage.setItem("nazwa_produktu",  JSON.stringify(nazwy_produktow));
  localStorage.setItem("jednostka", JSON.stringify(jednosta_miary_produktow));
  localStorage.setItem("cena", JSON.stringify(ceny_produktow));
  localStorage.setItem("zamowiona_ilosc", JSON.stringify(zamowione_ilosci));
  localStorage.setItem("cena_netto", JSON.stringify(ceny_netto));
  localStorage.setItem("kwota_vat", JSON.stringify(kwota_vat));
 


  window.open("formularz.html", '_blank'); 

}






function potwierdzenie_zamowienia(){
  let imie = document.getElementById("imie").value;
  console.log(imie);
  let nazwisko = document.getElementById("nazwisko").value;
  let miasto = document.getElementById("miasto").value;
  let kod_pocztowy = document.getElementById("kod_pocztowy").value;
  let adres = document.getElementById("adres").value;

  if(imie==("")||nazwisko==("")||miasto==("")||kod_pocztowy==("")||adres==(""))
  {
    window.alert("musisz wypełnić wszystkie pola w formularzu: ");
    return
  }
  if(document.getElementById("firma").checked&&document.getElementById("nip").value==(""))
  {
    window.alert("musisz wypełnić wszystkie pola w formularzu: ");
    return
  }
    

      let nip = document.getElementById("nip").value;
  



  localStorage.setItem("imie",imie);
  localStorage.setItem("nazwisko",nazwisko);
  localStorage.setItem("miasto",miasto);
  localStorage.setItem("kod_pocztowy",kod_pocztowy);
  localStorage.setItem("adres",adres);
  localStorage.setItem("nip",nip);

  window.open("faktura.html", '_blank');
}









function zmiana_firma(){
 
  document.getElementById("nipdiv").style.animation = "opacityanimin 1s forwards";
  let warunek_do_nip = 1;
  localStorage.setItem("warunek_do_nip", warunek_do_nip);

}
function zmiana_prywatna(){
 
  document.getElementById("nipdiv").style.animation = "opacityanimout 1s forwards";
  let warunek_do_nip = 0;
  localStorage.setItem("warunek_do_nip", warunek_do_nip);
}

