# 🎉 Welcome!

This source code powers **Tan Zi Fung's personal digital portfolio**, currently hosted [here](https://zfung14.github.io/DigitalPortfolio/).  
It showcases my projects, skills, and background, with a clean, scroll driven interface and interactive animations.

---

## 🔧 Techical Overview

This portfolio is built using:

- **HTML5**
- **CSS3**
- **JavaScript**
- **SIX Key External Libraries** (detailed below)

---

## 📦 Core External Libraries

### 1. [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)

AOS allow us to have smooth scroll-based animations to the website. Elements fade in, zoom, or slide as we scroll through the page, improving visual engagement and user experience. This is the main visual effects I used in this digital portfolio

🛠 **Usage:**

- Animating all sections like "About", "Projects", and "Contact" on scroll.
- Example usage:
  ```html
  <section id="about" data-aos="fade-right">...</section>
  ```

### 2. [Typed.js](https://mattboldt.com/demos/typed-js/)

Typed.js is a JavaScript library that creates a typewriter effect, where text types and deletes itself dynamically.

🛠 **Usage:**
Creating the animated typing effect in the hero section.
Example usage:

```html
<span id="typed"></span>
```

(with the actual script logic in script.js)

### 3. [Formspree](https://formspree.io)

Formspree enables contact forms without the need for a backend server handling. It lets visitors send me emails directly through the form on my site.

🛠 **Usage:**

Handling form submissions in the "Contact Me" section securely.
Example usage:

```html
<form action="https://formspree.io/f/yourformid" method="POST">...</form>
```

### 4. [TagCanvas](https://www.goat1000.com/tagcanvas.php)

TagCanvas is a lightweight JavaScript library that creates interactive, animated 3D tag clouds using the HTML5 <canvas> element.

🛠 **Usage:**
In my portfolio, I used this library to make the display of my core daily technologies more interactive and engaging.
Example usage:

```html
<canvas width="550" height="350" id="myCanvas">...</canvas>
```

### 5. [PhotoSwipe](https://photoswipe.com)

PhotoSwipe is a responsive JavaScript image gallery library that provides a full-screen lightbox experience with gestures and zoom support

🛠 **Usage:**
In my portfolio, PhotoSwipe is used to allow users to view project screenshots or event photos in a clean, interactive gallery. Besides, PhotoSwipe also supports mobile-friendly gestures such as swipe, pinch to zoom, which allow better accessibility when viewing photos.

```html
<a
  href="media/Film/operahouse.jpg"
  data-pswp-width="2319"
  data-pswp-height="1536"
>
  <img src="media/Film/operahouse.jpg" alt="Opera House" />
  <span class="pswp-caption-content"
    >View on the ferry to Manly Beach, Sydney</span
  >
</a>
```

### 6. [SlickJS](https://kenwheeler.github.io/slick/)

SlickJS is a feature-rich, fully responsive carousel/slider library that is good for showcasing images and other content in a dynamic, swipeable format.

🛠 **Usage:**
I use SlickJS to display event photos (e.g. club activities and cultural celebrations) in an elegant, swipeable carousel that support autoplay as well.

Example usage:

```html
<div class="center">.....</div>
<script>
  $(".center").slick({
      .....
  });
</script>
```

## 🤖 Acknowledgement of AI Usage

While building this website, I used generative AI tools like ChatGPT and Copilot to assist with tasks such as fixing bugs and refining styles. However, the core concept and overall design were entirely my own.

## 📫 Contact

If you have any feedback or suggestions, feel free to reach out at [tanzifung@gmail.com](mailto:tanzifung@gmail.com).

💡 Side note: Feel free to fork or clone this repository for your own use!
