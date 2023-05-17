const body = document.body;
const main = document.createElement("div");
const div1 = document.createElement("div");
const div2 =  document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div")
const div5 = document.createElement("div")
const div6 = document.createElement("div")


const img1 =  document.createElement("img");
const img2 =  document.createElement("img");
const img3 =  document.createElement("img");
const img4 =  document.createElement("img");
const img5 =  document.createElement("img");
const img6 =  document.createElement("img");



img1.setAttribute (
    "src", "https://img.freepik.com/free-vector/graphic-design-colorful-geometrical-lettering_52683-34588.jpg"
)

img2.setAttribute(
    "src", "https://img.freepik.com/free-vector/graphic-design-colorful-geometrical-lettering_52683-34588.jpg"
)
img3.setAttribute(
    "src", "https://img.freepik.com/free-vector/graphic-design-colorful-geometrical-lettering_52683-34588.jpg"
)
img4.setAttribute(
    "src", "https://img.freepik.com/free-vector/graphic-design-colorful-geometrical-lettering_52683-34588.jpg"
)
img5.setAttribute(
    "src",  "https://img.freepik.com/free-vector/graphic-design-colorful-geometrical-lettering_52683-34588.jpg"
)
img6.setAttribute(
    "src", "https://img.freepik.com/free-vector/graphic-design-colorful-geometrical-lettering_52683-34588.jpg"
)


main.classList.add("main");
div1.classList.add("img1");
div2.classList.add("img2")
div3.classList.add("img3")
div4.classList.add("img4")
div5.classList.add("img5")
div6.classList.add("img6")


body.append(main);
main.append(div1, div2, div3, div4 ,div5, div6);

div1.append(img1);
div2.append(img2)
div3.append(img3)
div4.append(img4)
div5.append(img5)
div6.append(img6)