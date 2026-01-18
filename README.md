# 🖥️ Interactive Terminal Portfolio

> A retro-futuristic, fully interactive developer portfolio built with React, mimicking a Linux terminal environment.

![Terminal Portfolio](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtY2J4bDN5NmJ4bDN5NmJ4bDN5NmJ4bDN5NmJ4bDN5NmJ4/xT9IgzoKnwFNmISR8I/giphy.gif)

## 🚀 Overview

This project transforms the traditional static portfolio into an engaging command-line experience. Users explore your skills, projects, and background by typing commands, offering a unique and memorable interaction.

**Live Demo:** [https://bhargav.dev](https://bhargav.dev) (Replace with your actual URL)

## ✨ Features

-   **Authentic Terminal Feel:**
    -   Typing animations & blinking cursor.
    -   Command history (Arrow Up/Down).
    -   Tab auto-completion.
    -   Power On/Off sequences with **sound effects** 🔊.
    -   CRT/Scanline visual effects.
-   **Rich Project Showcase:**
    -   Detailed `projects` command with links to GitHub repositories and live demos.
    -   Supports interactive links and formatted text.
-   **Fun & Interactive:**
    -   `ascii` art generator (custom font engine).
    -   `coin` flip and `dice` roll with 3D animations (Framer Motion).
    -   `matrix` effect and hidden easter eggs.
-   **Utility Tools:**
    -   `hash` (SHA-256 generator).
    -   `curl` (Live HTTP requests via CORS proxy).
    -   `sysinfo`, `uptime`, `weather`.
-   **Customization:**
    -   Light/Dark mode toggle (Sun/Moon icon).
    -   Responsive design for mobile and desktop.

## 🛠️ Tech Stack

-   **Frontend Framework:** React 18
-   **Build Tool:** Vite
-   **Styling:** Tailwind CSS (for layout and typography)
-   **Animations:** Framer Motion (for smooth UI transitions)
-   **Icons:** Lucide React
-   **Audio:** Web Audio API (for synthetic sound effects)
-   **Language:** TypeScript

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/terminal-portfolio.git
    cd terminal-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    pnpm install
    ```

3.  **Run logicallly:**
    ```bash
    npm run dev
    ```
    Access the terminal at `http://localhost:5173`.

4.  **Build for production:**
    ```bash
    npm run build
    ```

## ⌨️ Command Reference

Type `help` to see a list of commands, or `help <command>` for specific usage.

### 👤 Personal
-   `about`: Display professional summary.
-   `projects`: List flagship projects (LegalAI, SecureX, etc.).
-   `skills`: Show technical stack.
-   `experience`: Work history.
-   `contact`: Email and LinkedIn.
-   `social`: Social media handles.
-   `education`: Academic background.
-   `achievements`: Awards and recognitions.

### ⚙️ System & Network
-   `whoami`: Current user identity.
-   `sysinfo`: System hardware spoof.
-   `uptime`: Professional timeline.
-   `ping <target>`: Check connectivity to concepts (e.g., `ping ai`).
-   `curl <url>`: Fetch raw HTML from websites.
-   `geo`: Mock geolocation data.

### 🎮 Fun & Dev
-   `coin`: Flip a virtual coin.
-   `dice`: Roll a D6 dice.
-   `ascii <text>`: Generate text in ASCII art style.
-   `hash <text>`: Generate SHA-256 hash.
-   `matrix`: Wake up, Neo...

## 🎨 Customization

### Adding a New Command
1.  Create a command definition in `client/lib/commands/`.
    ```typescript
    export const myCommand: Command = {
        description: 'My new command',
        category: 'utility',
        usage: 'mycmd <arg>',
        execute: (args) => `You said: ${args[0]}`
    };
    ```
2.  Register it in `client/lib/commands/index.ts`.

### Modifying Sound Effects
Sounds are synthesized in real-time in `client/lib/sound-effects.ts` using the Web Audio API. You can adjust frequencies and oscillator types there.

## 📄 License

MIT License © 2026 C Bhargav
