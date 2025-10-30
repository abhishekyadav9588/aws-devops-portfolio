# 🚀 Abhishek's DevOps Portfolio

Welcome to my personal **DevOps Portfolio Website** project!  
This repository contains the source code for my portfolio, built with **HTML, CSS, and JavaScript**, and deployed on **AWS S3 + CloudFront** with a CI/CD pipeline.

---

## 📌 About the Project
- **Goal:** Showcase my skills as an aspiring DevOps Engineer
- **Tech Stack:** Linux, AWS, Git/GitHub, CI/CD, Cloud Monitoring
- **Deployment:** AWS S3 (static hosting) + CloudFront (CDN) + GitHub Actions (automation)

---

## 🛠️ Features
- Responsive portfolio website
- Organized project structure (`src/` folder)
- CI/CD pipeline for automated deployments
- Secure AWS setup (IAM, MFA, CLI configuration)

---

## 📂 Project Structure
portfolio/
└── src/ 
     ├── index.html 
     ├── styles.css 
     └── app.js

Code 

---

## 🌐 Live Demo
🔗 [Coming Soon – Hosted on AWS CloudFront](#)

---

## 📖 Roadmap
- [x] Day 1: Local setup + GitHub repo
- [ ] Day 2: Deploy to AWS S3
- [ ] Day 3: Add CloudFront + HTTPS
- [ ] Day 4: CI/CD pipeline with GitHub Actions
- [ ] Day 5: Monitoring & logging
- [ ] Day 6: Serverless contact form
- [ ] Day 7: Custom domain + polish

## 🚀 Day 2: AWS S3 Deployment

- Created an S3 bucket in `ap-south-1` region
- Configured static website hosting
- Uploaded portfolio files using AWS CLI (`aws s3 sync`)
- Applied bucket policy for public access
- Portfolio is now live at:  
  👉 http://abhishek-devops-portfolio.s3-website.ap-south-1.amazonaws.com
## 🚀 Day 2: AWS S3 Deployment

Today I deployed my portfolio website to **Amazon S3** as a static site.

### ✅ What I did
- Created an S3 bucket in the `ap-south-1` (Mumbai) region
- Configured **static website hosting** with `index.html` as the root
- Uploaded my project files using the AWS CLI:
  ```bash
  aws s3 sync ./src s3://abhishek-devops-portfolio

---

## 📬 Contact
- GitHub: [abhishekyadav9588](https://github.com/abhishekyadav9588)
- LinkedIn: [Your LinkedIn Profile](#)
- Email: sunnyyadav1448@gmail.com
