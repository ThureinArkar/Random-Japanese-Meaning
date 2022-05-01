const display=document.querySelector("ul li p"),
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
