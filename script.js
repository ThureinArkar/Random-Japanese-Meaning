const display=document.querySelector("p"),
display1 = document.getElementById("text1"),
display2 = document.getElementById("text2"),
display3 = document.getElementById("text3"),
display4 = document.getElementById("text4"),
 button=document.querySelector("button"),
 copyBtn=document.querySelector("span.far"),
 copyActive=document.querySelector("span.fas");
//let chars ='あいうえお';
let chars = [
  {
  text1:`I`,
  },
  {
    text1:`You`,
  },
  {
    text1:`That Person`,
  },
  {
    text1:`That Person(More Polite)`,
  },
  {
    text1:`Name Suffix(Adult)`,
  },
  {
    text1:`Name Suffix(Underage)`,
  },
  {
    text1:`Race`,
  },
  {
    text1:`Teacher(Not for work)`,
  },
  {
    text1:`Teacher(For work)`,
  },
  {
    text1:`Student(male & female)`,
  },
  {
    text1:`Company Employee(Not allowed company name)`,
  },
  {
    text1:`Company Employee(allowed company name)`,
  },
  {
    text1:`Bank Employee`,
  },
  {
    text1:`Doctor`,
  },
  {
    text1:`Researcher`,
  },
  {
    text1:`University`,
  },
  {
    text1:`Hospital & Clinic`,
  },
  {
    text1:`Who/Which Person?`,
  },
  {
    text1:`Who/Which Person?(More Polite)`,
  },
  {
    text1:`Year/It means age`,
  },
  {
    text1:`How many years?/How old?`,
  },
  {
    text1:`How many years?/How old?(More Polite)`,
  },
  {
    text1:`Yes`,
  },
  {
    text1:`No`,
  },
  {
    text1:`Amarica`,
  },
  {
    text1:`England`,
  },
  {
    text1:`India`,
  },
  {
    text1:`Indonesia`,
  },
  {
    text1:`Korea`,
  },
  {
    text1:`Thailand`,
  },
  {
    text1:`China`,
  },
  {
    text1:`Germany`,
  },
  {
    text1:`Japan`,
  },
  {
    text1:`Brazil`,
  },
  {
    text1:`Spring`,
  },
  {
    text1:`Summer`,
  },
  {
    text1:`Autumn`,
  },
  {
    text1:`Winter`,
  },
  {
    text1:``,
  },
  {
    text1:``,
  },
  {
    text1:``,
  },
  {
    text1:``,
  },
  {
    text1:``,
  },
  {
    text1:``,
  },
  {
    text1:`book`,
  },
  {
    text1:`dictionary`,
  },
  {
    text1:`magazine`,
  },
  {
    text1:`newspaper`,
  },
  {
    text1:`exercise book,notebook`,
  },
  {
    text1:`pocketbook`,
  },
  {
    text1:`address card/business card`,
  },
  {
    text1:`credit card`,
  },
  {
    text1:`pencil`,
  },
  {
    text1:`ball pen`,
  },
  {
    text1:`lead pencil`,
  },
  {
    text1:`key`,
  },
  {
    text1:`umbrella`,
  },
  {
    text1:`bag`,
  },
  {
    text1:`CD`,
  },
  {
    text1:`television,TV`,
  },
  {
    text1:`radio`,
  },
  {
    text1:`camera`,
  },
  {
    text1:`computer`,
  },
  {
    text1:`car,automobile,motor car`,
  },
  {
    text1:`writing table`,
  },
  {
    text1:`seat,chair`,
  },
  {
    text1:`chocolate`,
  },
  {
    text1:`coffee`,
  },
  {
    text1:`memory present`,
  },
  {
    text1:`English langauge`,
  },
  {
    text1:`Japan Language`,
  },
  {
    text1:`Is it?`,
  },
  {
    text1:`Isn't it?`,
  },
  {
    text1:`classroom`,
  },
  {
    text1:`dining-room,restaurant,canteen`,
  },
  {
    text1:`office`,
  },
  {
    text1:`meeting room`,
  },
  {
    text1:`reception counter`,
  },
  {
    text1:`restroom`,
  },
  {
    text1:`room`,
  },
  {
    text1:`toilet`,
  },
  {
    text1:`ladder`,
  },
  {
    text1:`lift`,
  },
  {
    text1:`moving staircase`,
  },
  {
    text1:`automatic seller machine`,
  },
  {
    text1:`telephone`,
  },
  {
    text1:`country`,
  },
  {
    text1:`company`,
  },
  {
    text1:`home,house`,
  },
  {
    text1:`footwear`,
  },
  {
    text1:`wine`,
  },
  {
    text1:`underground`,
  },
  {
    text1:`yen`,
  },
  {
    text1:`welcome`,
  },
  {
    text1:`Italy`,
  },
  {
    text1:`Switzerland`,
  },
  {
    text1:`France`,
  },
  {
    text1:`Jakarta`,
  },
  {
    text1:`Bangkok`,
  },
  {
    text1:`Berlin`,
  },

];


button.addEventListener('click', () => {
let randomPhrase=Math.floor(Math.random() * chars.length);
display.innerHTML = chars[randomPhrase].text1;
});

snowFall.snow(document.querySelector('.snow'), {
	minSize: 6,
	maxSize: 10,
	round: true,
	flakeCount: 30,
	flakeColor: 'white'
});





//  button.onclick=()=>{

// let randomPhrase=Math.floor(Math.random() * chars.length);
// display.value = chars[randomPhrase].text;
// display1.value = chars[randomPhrase].author;
// display2.value = chars[randomPhrase].text1;
// display3.value = chars[randomPhrase].text2;
// let randomPhrase1 =Math.floor(Math.random() * chars1.length);
// display1.value = chars1[randomPhrase].author;
   //
   // let i,
   // randomPassword="";
   // copyBtn.style.display = "block";
   // copyActive.style.display = "none";
   // for ( i = 0; i < 1; i++) {
   //   randomPassword = randomPassword + chars.charAt(
   //     Math.floor(Math.random() * chars.length)
   //   );
   // }

//  }
