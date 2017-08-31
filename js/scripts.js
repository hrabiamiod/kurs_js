function wypisz() {

var liczba1 = document.getElementById("pole1").value;
var liczba2 = document.getElementById("pole2").value;
var napis = "";
var i;

if (liczba1<liczba2) {
    
    for (i=liczba1; i<=liczba2; i++)
        {
            napis = napis + i + " ";
        }
        
    document.getElementById("wynik").innerHTML = napis;
    }
else if (liczba1>liczba2) {
        
        for (i=liczba2; i<=liczba1; i++)
        {
            napis = napis + i + " ";
        }
        
    document.getElementById("wynik").innerHTML = napis;
} else {
    document.getElementById("wynik").innerHTML = "Wpisz liczby ćmolu";
}
}
    