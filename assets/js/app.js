let activeIndex = 0;
let arr = [
  {
    head: "Student Affairs Office",
  },
  {
    head: "studentsule",
  },
  {
    head: "Student Resources",
  },
  {
    head: "Student Organizations",
  },
  {
    head: "Academic journals and Moor court",
  },
  {
    head: "Life in Los Angeles",
  },
  {
    head: "Life on Camous",
  },
  {
    head: "Discriminaton and narassmen",
  },
  {
    head: "Prevention and Reporting",
  },
  {
    head: "peer support",
  },
  {
    head: "First Generation Professionals",
  },
  {
    head: "Jurist-in-Residence",
  },
];



let tabs = document.getElementsByClassName("tab");

function changeContent(index) {
  $(".head").html(arr[index].head);
  tabs[index].classList.add("active");
  tabs[activeIndex].classList.remove("active");
  activeIndex = index;
  $('.mob-drp').slideToggle(500);

}

$('.list-drp-btn').click(function(){
  $('.mob-drp').slideToggle(500);
})


  if ($(window).width() < 800){
      $('.footer').removeClass("container");
      $('.footer').addClass("container-fluid");
  }
