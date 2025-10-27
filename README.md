# 🎓 **Grace University — Responsive University Introduction Website**

A modern, elegant, and fully responsive university introduction website designed and developed using **Bootstrap 5** and **SASS (SCSS)**.
This project showcases the fictional **Grace University**, highlighting its departments, academic offerings, and contact information through a clean, accessible, and professional interface.

---

## 🧭 **Project Overview**

This project was developed as part of the **University Introduction Website Assignment**.
The goal was to design a **responsive**, **maintainable**, and **aesthetically appealing** website that effectively introduces a university’s brand and structure.

### 🗂️ Pages

* **Home (index.html)** – Overview of Grace University, mission, and hero banner.
* **Departments (departments.html)** – Faculties and programs shown via Bootstrap cards & badges.
* **Contact (contact.html)** – Contact form with mailto-based submission (default email client trigger).

All styles are customized using **SASS variables**, ensuring a **consistent color palette** and **typography** across all pages.

---

## 🎯 **Objectives**

✅ Develop a responsive layout using **Bootstrap Grid System**
✅ Create modular styles using **SASS partials and variables**
✅ Ensure full **cross-device compatibility**
✅ Utilize **Git & GitHub** for version control
✅ **Deploy** the website publicly using **GitHub Pages**

---

## 🛠️ **Technologies & Tools**

| Category                 | Tools / Technologies                             |
| ------------------------ | ------------------------------------------------ |
| **Frontend Development** | HTML5, CSS3, Bootstrap 5.3 |
| **Styling Framework**    | SASS (SCSS)                                      |
| **Version Control**      | Git & GitHub                                     |
| **Deployment**           | GitHub Pages                                     |
| **Editor**               | Visual Studio Code + Live Sass Compiler          |

---

## 🎨 **SASS Structure & Theming**

```
scss/
│
├── _variables.scss   # Color palette, typography, spacing
└── main.scss         # Imports + global styles

css/
└── main.css          # Compiled output
```

### Example Variables

```scss
$primary-color: #4b0082;
$secondary-color: #f8f9fa;
$hero-gradient: linear-gradient(to right, rgba(75, 0, 130, 0.8), rgba(123, 45, 191, 0.8));
$body-font: 'Poppins', sans-serif;
```

🎨 *Change one variable — refresh the whole theme!*

---

## 🧩 **Page Details**

### 🏠 Home (`index.html`)

* Hero section with a welcoming slogan
* University history and values
* Responsive Bootstrap layout

### 🏛️ Departments (`departments.html`)

* Key faculties: Engineering, Humanities, Business
* Academic programs via badges
* Adaptive grid system

### 📞 Contact (`contact.html`)

* Form fields: Name, Email, Message
* JavaScript mailto handler (auto opens mail client)
* Optional Formspree or backend integration

---

## 📱 **Responsive Design Highlights**

* Bootstrap 5 grid system for fluid responsiveness
* Custom media queries for extra control
* Optimized images and spacing
* Tested on Chrome, Edge, and Safari

---

## 💾 **Git & Version Control**

Git workflow followed during development:

```bash
git clone
git add .
git commit -m "Add homepage layout and SASS styling"
git push
git pull
```

After development:

```bash
git log > project_log.txt
```

📄 The `project_log.txt` file is included in the project folder for verification.

---

## 🌐 **Deployment (GitHub Pages)**

The live version of the website is hosted on GitHub Pages.

| Resource        | Link                        |
| --------------- | --------------------------- |
| 🧩 Repository   | [(https://github.com/aleynaakoz/sbtu-webProgramming.git)](#)  |
| 🌍 Live Website | [GitHub Pages Link Here](#) |

**Deployment Steps**

1. Push all files to GitHub
2. Go to **Settings → Pages → Branch: main → /root**
3. Wait a few minutes for activation ✨

---

## 📁 **Folder Structure**

```
project/
│
├── assets/              # Images & media
├── css/
│   └── main.css
├── scss/
│   ├── _variables.scss
│   └── main.scss
├── js/
│   └── script.js
│
├── index.html
├── departments.html
├── contact.html
├── project_log.txt
└── README.md
```

---

## ♿ **Accessibility & Best Practices**

* ✅ Semantic HTML5 for SEO & screen readers
* ✅ WCAG-compliant color contrast
* ✅ Descriptive alt text for all images
* ✅ Labelled form inputs
* ✅ Code validated with **W3C Validator**

---

## 📚 **Key Learnings & Outcomes**

* Responsive layouts with **Bootstrap Grid**
* Consistent theming using **SASS Variables**
* Version control with **Git & GitHub**
* Website deployment using **GitHub Pages**
* Collaborative workflow and commit tracking

---

## 👩‍💻 **Team Members**

| Name             | Student ID     |
| ------------     | -------------- |
| Aleyna Aköz      | 220201002      |     
| Cansu Öznur Avcı | 230201170      |                |


---

## ⚖️ **License**

This project is for **educational purposes only** and does not represent a real university.
All images and resources are royalty-free or used for demonstration.

---

⭐ *Developed with dedication and creativity — Grace University, 2025.*
💜 *“Knowledge. Growth. Excellence.”*
