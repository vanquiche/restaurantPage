// VARIABLES
const content = document.getElementById('content');
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');
const catsBtn = document.getElementById('catsBtn');
let userlocation = null;

// EVENT LISTENERS
homeBtn.addEventListener('click', () => {
  if (userlocation === 'home') return;
  transitionSlide();
  setTimeout(clearContent, 495);
  setTimeout(createHome, 495);
});
menuBtn.addEventListener('click', () => {
  if (userlocation === 'menu') return;
  transitionSlide();
  setTimeout(clearContent, 495);
  setTimeout(createMenu, 495);
});
aboutBtn.addEventListener('click', () => {
  if (userlocation === 'about') return;
  transitionSlide();
  setTimeout(clearContent, 495);
  setTimeout(createAbout, 495);
});
catsBtn.addEventListener('click', () => {
  if (userlocation === 'staff') return;
  transitionSlide();
  setTimeout(clearContent, 495);
  setTimeout(createCats, 495);
});
// onload to landing page
window.addEventListener('load', createHome());

function createHome() {
  const div = document.createElement('div');
  const textContainer = document.createElement('div');
  const title = document.createElement('h1');
  const text = document.createElement('p');
  const comment1 = document.createElement('p');
  const comment2 = document.createElement('p');
  const comment3 = document.createElement('p');
  const img = document.createElement('img');
  // container
  div.id = 'home';
  div.classList = 'page';
  div.classList.add('homePage');
  textContainer.classList = 'textContainer';
  // image
  img.classList = 'img';
  img.setAttribute('src', '/catPhotos/homepage3.jpg');
  // texts
  title.classList = 'pageTitle';
  title.innerHTML = "Coffee, Croissants & Cats";
  text.classList = 'pageText';
  text.innerText =
    'The world’s first cafe run by cats for cats! Experience a relaxing atmosphere and delicious food with your feline friends. Our creamy coffees and delicate pastries will entice you to keep coming back! Check out what the kitties are saying...';

  comment1.innerHTML = '"<i>The house catnip is a great pick-me-up after a long nap.</i>"<br> - Caramel';
  comment2.innerHTML = '"<i>Most places serve powdered milk. The milk here is the real deal.</i>"\n -Butterscotch';
  comment3.innerHTML = '"<i>I love this cafe. It\'s cozy and dogs are not allowed.</i>"<br> - Clover';
  content.appendChild(div);
  div.appendChild(img);
  div.appendChild(textContainer);
  textContainer.appendChild(title);
  textContainer.appendChild(text);
  textContainer.appendChild(comment1);
  textContainer.appendChild(comment2);
  textContainer.appendChild(comment3);
  userlocation = 'home';
};
function createMenu() {
  const container = document.createElement('div');
  const grid = document.createElement('div');
  const title = document.createElement('h1');
  const item1 = document.createElement('p');
  const item2 = document.createElement('p');
  const item3 = document.createElement('p');
  const item4 = document.createElement('p');
  const item5 = document.createElement('p');
  const item6 = document.createElement('p');
  const item7 = document.createElement('p');
  const item8 = document.createElement('p');
  const img = document.createElement('img');
  // img properties
  img.setAttribute('src', '/catPhotos/aboutCover.jpg');
  img.classList = 'img';
  img.classList.add('shift');

  container.id = 'menu';
  container.classList = 'page';
  grid.classList = 'menuPage';
  title.classList = 'menuTitle';
  title.classList.add('menuSpan');
  title.innerText = 'Menu';
  item1.innerHTML =
    '<b>Classy Cat Coffee</b><br>The classic cup of coffee customized to your particular taste. The purr-fect way to start your day, or a pick-me-up after your afternoon nap!';
  item2.innerHTML =
    '<b>Bottle of Milk</b><br>Creamy and delicious, we source our milk from a small, local farm so you can be sure you’re drinking the freshest we have to offer!';
  item3.innerHTML =
    '<b>Fresh Cream</b><br>When you’re looking for something a little thicker than milk, try our fresh cream! Whipped to order, you’ll get the perfect amount to whet your appetite!';
  item4.innerHTML =
    '<b>Cat Croissant</b><br>Baked in an adorable cat shape, this croissant is flakey and glazed with gravy. This is our signature dish';
  item5.innerHTML =
    '<b>Shrimp Cupcake</b><br>Tiny, succulent shrimps baked together in a cute cupcake shape. Easy to eat, and very filling!';
  item6.innerHTML =
    '<b>Grilled Chicken Tart</b><br>Pieces of grilled chicken with a crispy crust. A little sweet and a little savory for when you can’t make up your mind!';
  item7.innerHTML =
    '<b>Beef & Veggie Sandwich</b><br>Thin slices of beef with roasted veggies on a fluffy loaf. This is a healthy option if you’re looking to lose some weight.';
  item8.innerHTML =
    '<b>Salmon Pate Acai Bowl</b><br>Sliced salmon slices mixed with gravy on top of acai berries transport you to a tropical island.';

  content.appendChild(container);
  container.appendChild(img);
  container.appendChild(grid);
  grid.appendChild(title);
  grid.appendChild(item1);
  grid.appendChild(item2);
  grid.appendChild(item3);
  grid.appendChild(item4);
  grid.appendChild(item5);
  grid.appendChild(item6);
  grid.appendChild(item7);
  grid.appendChild(item8);

  userlocation = 'menu';
};

function createAbout() {
  const div = document.createElement('div');
  const grid = document.createElement('div');
  const map = document.createElement('div');
  const form = document.createElement('form');
  const title = document.createElement('h1');
  const text = document.createElement('p');
  const img = document.createElement('img');
  const img2 = document.createElement('img');
  // map properties
  map.id = 'map';
  map.className = 'mapContainer';
  // img properties
  img.setAttribute('src', '/catPhotos/homepage.jpg');
  img.classList = 'img';

  img2.setAttribute('src', '/catPhotos/cat1.jpg');
  img2.classList = 'mapContainer'
  // container
  div.id = 'about';
  div.classList = 'page';
  // grid container
  grid.className = 'aboutContainer';
  // text
  title.innerHTML = '<b>About us.</b>';
  title.classList = 'pageTitle';
  text.classList = 'aboutDescription';
  text.innerText = 'We are an independently run cat cafe that brings everything that cats love together! We believe that cat food doesn’t have to come from a can filled with preservatives. We’re passionate about serving food that even your human would love. \nCome and relax with us!';
  form.className = 'contactForm';
  form.innerHTML =
    `<label class='label' for='name'>Name</label>
<input id='userName' for='name' type="text" placeholder="Mr. Buttons"></input>
<label class='label' for='email'>Email</label>
<input id='userEmail' name='email' type="email" placeholder="buttons@cats.com"></input>
<label class='label' for='message'>Message</label>
<textarea id='userMessage' name='message' placeholder="Whatsup Kitty?" style='resize:none' rows='10'></textarea>
<input id='submitBtn' type='button' value='Send it!'></input>`;
  // appendages
  content.appendChild(div);
  div.appendChild(img);
  div.appendChild(grid);
  grid.appendChild(text);
  grid.appendChild(form);
  grid.appendChild(img2);
  userlocation = 'about';
};

function createCats() {
  const div = document.createElement('div');
  const title = document.createElement('h1');
  const info1 = document.createElement('div');
  const info2 = document.createElement('div');
  const info3 = document.createElement('div');
  const info4 = document.createElement('div');
  const infoText1 = document.createElement('p');
  const infoText2 = document.createElement('p');
  const infoText3 = document.createElement('p');
  const infoText4 = document.createElement('p');
  const img = document.createElement('img');
  const overlay = document.createElement('div');
  // img properties
  img.setAttribute('src', '/catPhotos/aboutCover2.jpg');
  img.classList = 'img';
  div.id = 'cats';
  div.classList = 'page';
  overlay.className = 'overlay';
  // INFO ICONS
  info1.className = 'infoCircle position1';
  info2.className = 'infoCircle position2';
  info3.className = 'infoCircle position3';
  info4.className = 'infoCircle position4';
  // INFO TEXTS
  infoText1.className = 'infoText infoPosition1';
  infoText1.innerText = `“I’m the brains behind the operation. That’s why I’m the boss. Don’t let the other kitties tell you otherwise.”
  - Jasper`;

  infoText2.className = 'infoText infoPosition2';
  infoText2.innerText = `“I have worked in a lot of kitty cafes. I have the most experience and I know what our clients are looking for. That’s why I'm most qualified to run this place.”
   - Pumpkin`;

  infoText3.className = 'infoText infoPosition3';
  infoText3.innerText = `“Other kitties always ask me ‘Pepper, you’re only 7 and you created a million dollar business. How do you do it?’ It’s simple. It all starts with honest ingredients and good food. That’s why kitties come here and keep coming back.”
  - Pepper, CEO and President`;

  infoText4.className = 'infoText infoPosition4';
  infoText4.innerText = `“A lot of our clients always need a good nap after their meals so it’s crucial that our furniture accommodate sleepability..(that’s a word right?) I’ve spent countless hours testing our cushions to meet the demands of our customers. My attention to details is why I excel as a leader”
  - Daisy`;
  // APPENDEGES
  content.appendChild(div);
  div.appendChild(img);
  div.appendChild(overlay);
  overlay.appendChild(info1);
  overlay.appendChild(info2);
  overlay.appendChild(info3);
  overlay.appendChild(info4);
  overlay.appendChild(infoText1);
  overlay.appendChild(infoText2);
  overlay.appendChild(infoText3);
  overlay.appendChild(infoText4);

  const infoIcon = [info1, info2, info3, info4];
  const texts = [infoText1, infoText2, infoText3, infoText4];
  for (let i = 0; i < infoIcon.length; i++) {
    infoIcon[i].addEventListener('mouseenter', () => {
      texts[i].classList.add('visible');
    });
    infoIcon[i].addEventListener('mouseleave', () => {
      texts[i].classList.remove('visible');
    });
  }

  userlocation = 'staff';
};

function clearContent() {
  const home = document.getElementById('home');
  const menu = document.getElementById('about');
  const cats = document.getElementById('cats');
  const about = document.getElementById('menu');
  home === null ? false : home.remove();
  menu === null ? false : menu.remove();
  cats === null ? false : cats.remove();
  about === null ? false : about.remove();
};

function transitionSlide() {
  const slide = document.createElement('div');
  slide.className = 'transSlide';
  content.appendChild(slide);
};
