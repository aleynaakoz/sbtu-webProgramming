Grace University — Responsive University Introduction Website

A modern, elegant, and fully responsive university introduction website designed and developed using Bootstrap 5 and SASS (SCSS).
This project showcases the fictional Grace University, highlighting its departments, academic offerings, and contact information through a clean, accessible, and professional interface.

Project Overview

This project was developed as part of the University Introduction Website assignment.
The goal was to design a responsive, maintainable, and aesthetically appealing website that effectively introduces a university’s brand and structure.

The website consists of three main pages, each designed for clarity, usability, and consistent visual identity:
Home (index.html) – Overview of Grace University, mission, and hero banner.
Departments (departments.html) – Faculties and academic programs represented using Bootstrap cards and badges.
Contact (contact.html) –Contact form that uses a mailto-based submission method, allowing users to send messages directly via their default email client. 
All styles are customized using SASS variables for easy theming, ensuring a consistent color palette and typography across all pages.

Objectives

Develop a responsive website layout using Bootstrap Grid System.
Create modular, reusable styles using SASS partials and variables.
Ensure cross-device compatibility (desktop, tablet, and mobile).
Utilize Git & GitHub for version control and collaboration.
Deploy the project publicly using GitHub Pages.

Technologies & Tools Used

Category                                                    Technologies / Tools
Frontend Development                                        HTML5, CSS3, Bootstrap 5.3, JavaScript (Vanilla)
Styling Framework                                           SASS (SCSS)
Version Control                                             Git & GitHub
Deployment                                                  GitHub Pages
IDE / Editor                                                Visual Studio Code
Extensions                                                  Live Sass Compiler

SASS Structure & Theming

The SASS (SCSS) structure ensures modularity and reusability of design components.
scss/
│
├── _variables.scss     # Color palette, typography, spacing variables
└── main.scss           # Imports variables and defines global + component styles
The compiled CSS is automatically generated under /css/main.css:
css/
└── main.css

Example SASS Variables

$primary-color: #4b0082;
$secondary-color: #f8f9fa;
$hero-gradient: linear-gradient(to right, rgba(75, 0, 130, 0.8), rgba(123, 45, 191, 0.8));
$body-font: 'Poppins', sans-serif;

This approach makes it easy to modify the entire site’s color scheme or typography by changing just a few variable values.

Page Details

Home (index.html):

Hero section featuring a university banner and welcoming slogan.
Short introduction about Grace University’s history and values.
Responsive layout designed using Bootstrap containers and flex utilities.

Departments (departments.html):

Displays key faculties: Engineering, Humanities, and Business.
Academic programs are shown using Bootstrap badges for quick readability.
Layout adjusts seamlessly across devices.

Contact (contact.html):

Contact form with input validation (name, email, message).
A JavaScript handler triggers the user’s mail client with pre-filled data.
Optional setup for real submissions via Formspree.io or backend integration.

Responsive Design Highlights

Bootstrap 5 grid system for fluid responsiveness.
Media queries in SASS for additional fine-tuning.
Optimized spacing, padding, and image scaling across all screen sizes.
Tested on Chrome, Edge, and Safari browsers.

Git & Version Control

Each team member was responsible for maintaining version history using Git commands.

Required Workflow:
git clone <repository-url>
git add .
git commit -m "Add homepage layout and SASS styling"
git push
git pull

After development, a commit history log was generated:

git log > project_log.txt
The project_log.txt file is included in the submission folder.

Deployment (GitHub Pages)

The live version of the website is hosted using GitHub Pages.
Resource                                                        Link
Repository                                                      [Your GitHub Repo Link Here]
Live Website                                                    [Your GitHub Pages Link Here]

To deploy:
1.Push all project files to GitHub.
2.Go to Settings → Pages → Branch: main → /root.
3.Wait for a few minutes and your site will be live.

Folder Structure

project/
│
├── assets/               # Images and media files
├── css/
│   └── main.css
├── scss/
│   ├── _variables.scss
│   └── main.scss
├── js/
│   └── script.js         
├── index.html
├── departments.html
├── contact.html
├── project_log.txt
└── README.md

Accessibility & Best Practices

Semantic HTML5 elements used for better SEO and accessibility.
Descriptive alt attributes for images.
Color contrast meets WCAG accessibility guidelines.
Form fields include labels for screen reader compatibility.
Code formatted and validated using W3C Validator.

Key Learnings & Outcomes

Building responsive layouts with Bootstrap grid.
Implementing consistent theming using SASS variables.
Managing source code using Git & GitHub.
Deploying static websites via GitHub Pages.
Understanding teamwork and version control best practices.

License

This project is for educational purposes only and does not represent a real university.
All images and resources used are either royalty-free or used for demonstration.







