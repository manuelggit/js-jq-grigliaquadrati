// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi,
// gli altri diventano verdi (tutti i rimanennti)
// Opzionale: Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti

$( document ).ready(function() {

  $(".verde").click(function(){
    $(this).css("background-color", "green");
  });
  //
  $(".rosso").click(function(){
    $(this).css("background-color", "red");
  });

});
