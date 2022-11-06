function suwitJawa(){
  gameJalan = true;

  while (gameJalan){
      // buat daftar jawaban
      let daftarJawab = ["manusia", "gajah", "semut"];
      
      // pemain menjawab
      let jawab = prompt("pilih manusia (0), gajah (1), atau semut (2): ");
      jawab = daftarJawab[jawab];
    
      // komputer menjawab
      let randI = Math.floor(Math.random() * daftarJawab.length);
      let jawabKomp = daftarJawab[randI];
    
    
      // logika utama
      if(jawab == jawabKomp){
        hasil = "seri!";
      }
      else if(jawab !== jawabKomp){
        if(jawab === "gajah"){
          hasil = (jawabKomp == "semut") ? "kalah!" : "menang!";
        }
        
        else if (jawab === "manusia"){
          hasil = (jawabKomp == "semut") ? "menang!" : "kalah!";
        }
      
        else if(jawab === "semut"){
          hasil = (jawabKomp == "manusia") ? "kalah!": "menang!";
        }
        else{
          alert("yang bener napa sih.");
          break;
        };
      }
      
      alert(`jawaban kamu: ${jawab} \njawaban komputer: ${jawabKomp} \nKamu ${hasil}`);
    
      let ulang = prompt("kalau mau main lagi, ketik apa aja. Kalo ga, biarin kosong aja.");
      
      if (!(ulang)){
        gameJalan = false;
      };
    }
};