var tabLinks = document.getElementsByClassName('tab-links');
        var tabContents = document.getElementsByClassName('tab-contents');

        function openTab(tabName) {
            for (tabLink of tabLinks) {
                tabLink.classList.remove('active-link');
            }
            for (tabContent of tabContents) {
                tabContent.classList.remove('active-tab');
            }
            event.currentTarget.classList.add('active-link');
            document.getElementById(tabName).classList.add('active-tab');
        

        }

        // JavaScript for handling the mobile navigation menu
        document.querySelector('.fas.fa-bars').addEventListener('click', function () {
            document.querySelector('nav ul').classList.toggle('show');
        });

        document.querySelector('.fas.fa-times').addEventListener('click', function () {
            document.querySelector('nav ul').classList.remove('show');
        });




       function fun(){
        const x = document.getElementsByClassName('projectimage2')[0]
        const y = document.getElementsByClassName('projectdetails2')[0]
        const z = document.getElementsByClassName('slidebutton')[0]
        const a = document.getElementsByClassName('detcir')[0]
        



         x.classList.toggle('projectimage2holderani')
         y.classList.toggle('projectdetails2ani')
         z.classList.toggle('slidebuttonani')
         a.classList.toggle('detcirani')
       }












       
const boxes = document.querySelectorAll('.call');
const boxes1 = document.querySelectorAll('.call1');



window.addEventListener('scroll', checkboxes);
window.addEventListener('scroll', checkboxes1);




checkboxes();
checkboxes1();


function checkboxes() {
 const triggerbottom =window.innerHeight/9*10;   //triggerbottom:862
 


boxes.forEach( box => {
const boxtop = box.getBoundingClientRect().top;
                         // boxtop:1093px
if(boxtop < triggerbottom) {
  box.classList.add('show');
  
}else{
box.classList.remove('show');


}
});

}



function checkboxes1() {
    const triggerbottom =window.innerHeight/9*10;   //triggerbottom:862
    console.log(Math.floor(triggerbottom));
   boxes1.forEach( box => {
   const boxtop = box.getBoundingClientRect().top;
   console.log(boxtop);   // boxtop:1093px
   if(boxtop < triggerbottom) {
     box.classList.add('show1');
   }else{
   box.classList.remove('show1');
   
   }
   });
   
   }



  