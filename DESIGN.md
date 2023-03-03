# CalPo.

# Calculator for Polyhedron

## _Showing the solutions in the blink of eye_

# Beginning Ideas

CalPo. is inspired how we need to check our manual calculation about Polyhedron. It might be easy for cube and right-rectangle but it will need more concentration and skills to count for prism and pyramid. That's why I made the design decisions if we need a program that can full fill our needs about that.
The implementation of CalPo. is we can use it to teach our students about Polyhedron. Because it's not only showing the result, but also it can show the complete solutions.

# Design

## _HTML & CSS_

- Navigation Bar :
  - Home : Front page about Calpo. Contains tittle about the site
  - About : Explain more about CalPo.
  - Menu : Main page of CalPo. Contains the calculators of Polyhedron.
  - Contacts : Contact the creator for more information about CalPo. or etc.
- Buttons :
  - Search : To go to the menu page
  - Calculator : To go to the menu pag
  - Hamburger-menu : To show the navigation bar from the right side on your tablet or phone.
  - Calculate : To calculate your problem and get the solutions.
  - Hover of Contacts : to go to contacts and it shows on the right on the site.
- Contacts :
  - WhatsApp
  - Facebook
  - Twitter
  - Instagram
  - YouTube
- Copyright : Final Project for CS50x Teachers Indonesia 2022-2023

"index.html" works properly to show up all off the sections on the site. It looks more beautiful because "style.css" helps me for that too. Let's take a look what's inside "index.html" deeply

- I am using "Poppins" font for the texts.

```sh
<link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,700;1,700&display=swap"
      rel="stylesheet"
    />
```

- For icons, I get them all from feather icons.

```sh
<script src="https://unpkg.com/feather-icons"></script>
....
<script>
      feather.replace();
    </script>
```

- Inside the "index.html", I add some JavaScript too to help me adding more control and animation.

## _JavaScript_

- JavaScript that I use is so crucial because it's the main point of making the calculator. I use simple section for users to input the data on the label then I make script to show up the calculation of the problem. They just need to click "calculate" button to show the solutions. This is the example of the script.

```sh
<h1>Cube's Surface Area and Volume Calculator</h1>
        <section id="content" class="content">
          <label for="">edge (a)</label><br />
          <input type="number" id="edgecube" /><br />
          <button id="calculatecube" class="calculatecalpo">calculate</button>
          <div id="outputcube"></div>
          <script>
            const edgecube = document.getElementById("edgecube");
            const calculatecube = document.getElementById("calculatecube");
            const outputcube = document.getElementById("outputcube");
            calculatecube.addEventListener("click", function () {
              let a = edgecube.value;
              let b = 6 * a * a;
              let c = 4 * a * a;
              let d = a * a;
              let e = a * a * a;
              outputcube.innerHTML = `The solutions of cube's surface area and volume are <br>
            lateral surface area = 4 x a x a = 4 x ${a} x ${a} = ${c} <br>
            top OR bottom surface area = a x a = ${a} x ${a} = ${d} <br>
            total surface area = 6 x a x a = 6 x ${a} x ${a} = ${b} <br>
            volume = a x a x a = ${a} x ${a} x ${a} = ${e}`;
            });
          </script>
```

- I add toggle to add animation on the navigation bar to make it more responsive when we open the site on the smaller screen. I call it "hamburger menu".

```sh
// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// on click
document.querySelector("#h-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// click empty side
const hb = document.querySelector("#h-menu");
document.addEventListener("click", function (e) {
  if (!hb.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
```

## Using CalPo.

1. Users can access the Calpo. using this link -> https://rindangmaaris.github.io/. Then they will see the hero page of CalPo. On the hero page, they can see
![hero](https://i.ibb.co/WsXH2xr/Calpo.jpg)
    - CalPo. Logo
    - Navigation Bar (Home, About, Menu, Contacts)
    - Search Button (Go to Menu)
    - Hamburger Button (Showing up the navigation for the responsive of tablet and mobile phone)
    - Calculator Button (Go to Menu)
    - Hover Social Media Menu (WhatsApp, Facebook, Twitter, Instagram, YouTube)
2. When users click "About", they will go to the About section. It's explaining the users more about CalPo.
![about](https://i.ibb.co/BKcr1Xs/about.jpg)
3. Menu section is about the main of the CalPo. It contains some calculator to solve Polyhedron problem. Users just need to enter their data on the label then click "calculate" to show the solutions.
![menu](https://i.ibb.co/zxHMYjz/menu.jpg) 
4. Users can reach the creator of the Calpo. easily on the Contact section. They can click on any social media icons that they wanna choose.
![contact](https://i.ibb.co/dPQdpcd/contact.jpg)
