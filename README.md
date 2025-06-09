# 🛻 Trailer Load Planner

**A mobile-friendly utility for truck drivers to quickly calculate trailer fit based on cart types and bin counts.**

<!-- screenshot -->
![screenshot](https://www.ryan-w.dev/projects/loaderDark.png)

---

## 🚚 About This Project

As a working truck driver, I built this tool to solve a real problem I face on the job: estimating how many carts and bins will fit into different trailer types.

Manual calculation on the fly is time-consuming and error-prone — especially when you're dealing with multiple types of laundry carts, bins, and changing trailer specs. This app simplifies that process by letting you enter your load items and instantly get recommendations on what trailers can handle it.

Whether you're loading a pup, a 50ft trailer, or a straight truck — this planner does the math so you can focus on the road.

---

## ✨ Features

- 🧮 **Real-time Load Summary**
  - Total carts, bins, and cart-equivalent calculation.
- 🚛 **Trailer Fit Calculator**
  - Determines if your load fits in:
    - Pup trailer (max 25 CE)
    - 50ft trailer (max 38 CE)
    - Straight truck (max 20 CE)
- ⚠️ **Sideways Loading Alert**
  - Automatically flags if a sideways load is required for uneven loads.
- ♻️ **Reset Button**
  - Quickly clear the form and recalculate for a new load.
- 🌗 **Dark Mode Support**
  - Fully responsive and theme-aware for day/night shifts.

---

## 📱 Designed for Real Workflows

- Fast input form with icons and large touch targets.
- Optimized for mobile use while on the job.
- Clean layout using Tailwind CSS and DaisyUI.
- Subtle animations and UI polish using Framer Motion.

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [FontAwesome](https://fontawesome.com/)
- [Lucide React](https://lucide.dev/)

---

## 📦 Installation

```bash
git clone https://github.com/RW2023/loader/trailer-load-planner.git
cd trailer-load-planner
npm install
npm run dev
```


