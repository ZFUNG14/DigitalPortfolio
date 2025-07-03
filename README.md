# 🎉 Welcome!

This source code powers **Tan Zi Fung's personal digital portfolio**, currently hosted at [DOMAIN NAME](https://).  
It showcases my projects, skills, and background, with a clean, scroll driven interface and interactive animations.

---

## 🔧 Techical Overview

This portfolio is built using:

- **HTML5**
- **CSS3**
- **JavaScript**
- **Three Key External Libraries** (detailed below)

---

## 📦 Core External Libraries

### 1. [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)

AOS allow us to have smooth scroll-based animations to the website. Elements fade in, zoom, or slide as we scroll through the page, improving visual engagement and user experience. Which is the main visual effects I used in this digital portfolio

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

Formspree enables contact forms without the need for a backend. It lets visitors send you emails directly through the form on your site.

🛠 **Usage:**

Handling form submissions in the "Contact Me" section securely.
Example usage:

```html
<form action="https://formspree.io/f/yourformid" method="POST">...</form>
```

## 📫 Contact

If you have any feedback or suggestions, feel free to reach out at [tanzifung@gmail.com](mailto:tanzifung@gmail.com).

💡 Side note: Feel free to fork or clone this repository for your own use!
