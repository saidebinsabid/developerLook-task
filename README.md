# 🚀 Get Hyped - Professional Portfolio Website

A high-fidelity, interactive portfolio website built with modern web technologies, focusing on immersive animations, dynamic content, and high-performance user experience.

🔗 **Live Demo:** [View Live Site](https://get-hyped.netlify.app/)

---

## 📝 Overview
This project is a premium portfolio experience designed to showcase high-end creative work. It features complex layout geometries, advanced mouse-trail interactions, and optimized video backgrounds to create a truly "hyped" and energetic digital presence.

## 🛠️ Tech Stack
- **Framework:** React 19 (Vite)
- **Styling:** CSS3 & Tailwind CSS
- **Animations:** Framer Motion & GSAP
- **Icons:** React Icons
- **Performance:** Optimized Assets & Skeleton Loading

---

## 🏗️ Folder Structure
```text
src/
├── assets/             # Optimized images, SVGs, and 4K background videos
├── components/         # Reusable UI components
│   ├── Skeletons/      # Skeleton loader components for better UX
│   ├── AboutSection.jsx
│   ├── BrandsSection.jsx
│   ├── ExpertiseSection.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   └── WorkSection.jsx
├── layouts/            # Page layouts and wrappers
│   └── Layout.jsx
├── App.jsx             # Main application logic & loading state
├── index.css           # Global styles and custom animations
└── main.jsx            # Entry point
```

---

## 📦 Project Dependencies
| Package | Version | Description |
| :--- | :--- | :--- |
| **framer-motion** | `^12.38.0` | Production-ready motion library for React |
| **gsap** | `^3.15.0` | Professional-grade JavaScript animations |
| **react** | `^19.2.4` | Core UI library |
| **react-icons** | `^5.6.0` | Comprehensive icon set for React |
| **swiper** | `^12.1.3` | Modern touch slider for logo carousels |
| **tailwindcss** | `^4.2.2` | Utility-first CSS framework |
| **vite** | `^8.0.4` | Next-generation frontend tooling |

---

## 🚀 Local Setup Guide
Follow these steps to get the project running on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/saidebinsabid/developerLook-task.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd developerLook-task
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open in browser:**
   Visit `http://localhost:5173` to view the site.

---

## 🧠 Challenges Faced
Developing this project came with several technical hurdles that required creative problem-solving:

- **✨ Complex Animation Orchestration:** Implementing the high-frequency mouse-trail animations and the staggered expertise card entries required deep performance tuning to ensure smooth 60fps movement without causing CPU spikes.
- **📐 Unique Footer Geometry:** The footer features a slanted, multi-layered background with precise container alignment. Matching the design's exact geometry across all screen sizes while maintaining responsiveness was a significant layout challenge.
- **🖱️ Scroll-Aware Interactivity:** Implementing the "Scroll Hijacking" inspired parallax effects and GSAP-driven scroll progress bars required careful calculation of viewport coordinates to ensure consistent behavior across different browser engines.
- **🎞️ Video Background Performance:** Balancing high-quality 4K background videos in every section with fast initial load times led to the implementation of an advanced Skeleton Loading system to maintain a professional first impression.

---

## 📬 Contact & Support
If you have any questions or would like to collaborate, feel free to reach out:

📧 **Email:** [your-email@example.com](mailto:ssaidein1@example.com)  
🐙 **GitHub:** [@saidebinsabid](https://github.com/saidebinsabid)

---

## 🙏 Thank You!
Thank you for checking out my project! This was a journey of exploring the limits of web animations and premium UI design. If you find this project interesting, don't forget to give it a ⭐ on GitHub!

*Happy Coding!* 🚀
