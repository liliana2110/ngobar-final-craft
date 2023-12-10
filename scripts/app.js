const sidebar = document.querySelector("#sidebar");
const buttonToggler = document.querySelector(".navigation__toggler");
const buttonCloser = document.querySelector(".navigation__closer");

const elementNavigationMenus= document.querySelector('.navigation__menus')

const valueProjectComplete= document.querySelector('#value-project-complete');
const valueYearExperience= document.querySelector('#Year-Experience');

const containerValue={
  projectComplete: 420,
  YearExperience:"100+",
};
// console.log(containerValue);

const navigationMenus =[
  {
    title: "Work",
    link:"/#",
  },
  {
    title: "About",
    link:"/#",
  },
  {
    title: "Service",
    link:"/#",
  },
  {
    title: "Contact",
    link:"/#",
  },
];

const a = navigationMenus.map((navigation)=> {
  return navigation;
});

console.log("HAsil Looping map: ",a);

containerValue.projectComplete;
navigationMenus[1].projectComplete;

console.log(navigationMenus[0].YearExperience);

/**
 * Untuk menampilkan sidebar ketika diklik
 * 
 * Cara baca: 
 * Button toggler ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * tambahkan class tambahan yaitu "show" dan buang class "hide"
 *  */
buttonToggler.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  sidebar.classList.remove("hide");
});

/**
 * Untuk menutup sidebar ketika diklik
 * 
 * Cara baca: 
 * Button closer ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * hapus class tambahan yaitu "hide" dan tambah class "show"
 *  */
buttonCloser.addEventListener("click", () => {
  sidebar.classList.remove("show");
  sidebar.classList.toggle("hide");
});

valueProjectComplete.append(containerValue.projectComplete);
valueYearExperience.append(containerValue.YearExperience);
