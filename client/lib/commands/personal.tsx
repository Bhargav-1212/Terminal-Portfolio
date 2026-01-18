import React from 'react';
import { Command } from '../command-registry';

export const aboutCommand: Command = {
    description: 'Main story',
    category: 'personal',
    usage: 'about',
    execute: () => [
        "╔════════════════════════════════════════════╗",
        "║              ABOUT ME                      ║",
        "╚════════════════════════════════════════════╝",
        "",
        "CSE student passionate about AI-powered products",
        "Focus on real-world problem solving",
        "Experience with AI, Web, Blockchain",
        "Strong hackathon background",
        "Interested in legal tech, healthcare tech, civic tech",
    ]
};

export const projectsCommand: Command = {
    description: 'View flagship projects',
    category: 'personal',
    usage: 'projects',
    execute: () => (
        <div className="space-y-6">
            <div className="text-yellow-400 font-bold">╔════════════════════════════════════════════╗</div>
            <div className="text-yellow-400 font-bold">║            PROJECT PORTFOLIO               ║</div>
            <div className="text-yellow-400 font-bold">╚════════════════════════════════════════════╝</div>

            <div className="space-y-2">
                <div className="font-bold text-cyan-400 text-lg">1. LegalAI Pro</div>
                <div className="text-purple-400 text-sm">AI-Powered Legal Assistant & Document Intelligence Platform</div>
                <div className="text-gray-300 text-sm">
                    LegalAI Pro supports law firms with document intelligence, legal research, and writing assistance.
                    Performs OCR-based ingestion, contract analysis, and structured legal summaries using microservices and LLMs.
                </div>
                <div className="text-gray-400 text-xs">Stack: React, Tailwind, FastAPI, Node.js, PostgreSQL, MongoDB, LLMs, OCR</div>
                <div className="text-green-400 text-xs">★ Product-Grade Hackathon / Startup-Style Project</div>
                <div className="flex gap-4 text-xs">
                    <a href="https://github.com/Bhargav-1212/Legal-AI" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">View Code</a>
                </div>
            </div>

            <div className="space-y-2">
                <div className="font-bold text-cyan-400 text-lg">2. SecureX</div>
                <div className="text-purple-400 text-sm">AI + Blockchain-Based Legal Document Verification</div>
                <div className="text-gray-300 text-sm">
                    Web-based platform for analyzing and verifying legal documents using AI and Sepolia Testnet blockchain.
                    Features IPFS decentralized storage and ensuring document integrity.
                </div>
                <div className="text-gray-400 text-xs">Stack: React, JavaScript, Node.js, Solidity, IPFS, Sepolia</div>
                <div className="text-green-400 text-xs">★ National Finalist (Microsoft Office, Gurgaon)</div>
                <div className="flex gap-4 text-xs">
                    <a href="https://github.com/Bhargav-1212/SecureX" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">View Code</a>
                    <a href="https://final-secure-x-ix3r.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Live Demo</a>
                </div>
            </div>

            <div className="space-y-2">
                <div className="font-bold text-cyan-400 text-lg">3. Vaidya</div>
                <div className="text-purple-400 text-sm">AI-Powered Healthcare Guidance & Wellness Platform</div>
                <div className="text-gray-300 text-sm">
                    Healthcare web app providing symptom analysis, wellness insights, and Q&A via GPT models.
                    Focuses on accessibility with a mobile-first responsive design.
                </div>
                <div className="text-gray-400 text-xs">Stack: HTML, CSS, Tailwind, JavaScript, GPT-based AI</div>
                <div className="text-green-400 text-xs">★ National Hackathon Finalist</div>
                <div className="flex gap-4 text-xs">
                    <a href="https://github.com/Bhargav-1212/HACKORBIT-" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">View Code</a>
                    <a href="https://hack-orbit-git-main-dheerajs60s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Live Demo</a>
                </div>
            </div>

            <div className="space-y-2">
                <div className="font-bold text-cyan-400 text-lg">4. WitnessBot+</div>
                <div className="text-purple-400 text-sm">Privacy-Preserving AI Evidence Collection System</div>
                <div className="text-gray-300 text-sm">
                    WhatsApp-based platform for citizen evidence submission during emergencies.
                    Uses Gemini Vision AI and YOLO for redaction, ensuring privacy and tamper-resistant logging.
                </div>
                <div className="text-gray-400 text-xs">Stack: Gemini Vision AI, YOLO, JavaScript, AI Agent Pipelines</div>
                <div className="text-green-400 text-xs">★ Focus on ethical AI, privacy, and civic safety</div>
            </div>

            <div className="space-y-2">
                <div className="font-bold text-cyan-400 text-lg">5. FloatChat</div>
                <div className="text-purple-400 text-sm">AI-Powered Conversational Platform</div>
                <div className="text-gray-300 text-sm">
                    Intelligent, context-aware conversational platform for user support.
                    Leverages modern NLP for efficient query handling and scalable backend architecture.
                </div>
                <div className="text-gray-400 text-xs">Stack: JavaScript, AI/NLP Models, Web Technologies</div>
                <div className="text-green-400 text-xs">★ Built for Smart India Hackathon (SIH)</div>
            </div>

            <div className="space-y-2">
                <div className="font-bold text-cyan-400 text-lg">6. Fortune Teller Web App</div>
                <div className="text-purple-400 text-sm">Beginner Portfolio Project</div>
                <div className="text-gray-300 text-sm">
                    Interactive web app providing randomized fortune messages with a mystical theme.
                    Demonstrates DOM manipulation and event handling logic.
                </div>
                <div className="text-gray-400 text-xs">Stack: HTML, CSS, JavaScript</div>
                <div className="text-green-400 text-xs">★ Personal / Beginner Portfolio Project</div>
                <div className="flex gap-4 text-xs">
                    <a href="https://github.com/Bhargav-1212/Fortune" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">View Code</a>
                    <a href="https://bhargav-1212.github.io/Fortune/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Live Demo</a>
                </div>
            </div>

            <div className="space-y-2">
                <div className="font-bold text-cyan-400 text-lg">7. Additional Projects</div>
                <div className="text-purple-400 text-sm">Academic & Skill-Building</div>
                <div className="text-gray-300 text-sm">
                    Continuous experimentation with frontend development, AI workflows, backend systems, and data structures
                    to strengthen software engineering foundations.
                </div>
            </div>
        </div>
    )
};

export const skillsCommand: Command = {
    description: 'Tech credibility',
    category: 'personal',
    usage: 'skills',
    execute: () => [
        "╔════════════════════════════════════════════╗",
        "║          TECHNICAL SKILLS                  ║",
        "╚════════════════════════════════════════════╝",
        "",
        "Languages:   Python, Java, C, JavaScript",
        "Frameworks:  React, Tailwind CSS",
        "Databases:   MongoDB",
        "Core CS:     OOPs, DSA",
        "Tools:       Git, GitHub, Image Processing",
        "AI:          Gemini Vision, GPT-based systems",
    ]
};

export const experienceCommand: Command = {
    description: 'Professional exposure',
    category: 'personal',
    usage: 'experience',
    execute: () => [
        "╔════════════════════════════════════════════╗",
        "║           WORK EXPERIENCE                  ║",
        "╚════════════════════════════════════════════╝",
        "",
        "Learning Intern – Scaler School of Technology",
        "Apr–Sep 2024",
        "• AI tools & automation",
        "• LinkedIn branding & networking",
        "• Low-code / no-code exposure",
        "• Modern tech adoption mindset",
    ]
};

export const educationCommand: Command = {
    description: 'Academic background',
    category: 'personal',
    usage: 'education',
    execute: () => [
        "╔════════════════════════════════════════════╗",
        "║              EDUCATION                     ║",
        "╚════════════════════════════════════════════╝",
        "",
        "B.Tech CSE – VIT AP (CGPA 7.52)",
        "FIITJEE – Higher Secondary (77.5%)",
        "Takshasila Public School – Secondary",
    ]
};

export const achievementsCommand: Command = {
    description: 'Proof of excellence',
    category: 'personal',
    usage: 'achievements',
    execute: () => [
        "╔════════════════════════════════════════════╗",
        "║            ACHIEVEMENTS                    ║",
        "╚════════════════════════════════════════════╝",
        "",
        "🏆 National Finalist – SecureX Hackathon (Microsoft Office, Gurgaon)",
        "🏆 National Finalist – Vaidya Hackathon",
        "🚀 Team Lead in multiple hackathons",
    ]
};

export const contactCommand: Command = {
    description: 'Recruiter CTA',
    category: 'personal',
    usage: 'contact',
    execute: () => (
        <div className="space-y-2">
            <div className="text-yellow-400 font-bold">╔════════════════════════════════════════════╗</div>
            <div className="text-yellow-400 font-bold">║          CONTACT INFORMATION               ║</div>
            <div className="text-yellow-400 font-bold">╚════════════════════════════════════════════╝</div>

            <div className="grid grid-cols-[100px_1fr] gap-2 mt-4">
                <div className="text-gray-400">Email:</div>
                <a href="mailto:bhargavc1212@gmail.com" className="text-cyan-400 hover:underline">bhargavc1212@gmail.com</a>

                <div className="text-gray-400">LinkedIn:</div>
                <a href="https://linkedin.com/in/c-bhargav-20a828210" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">linkedin.com/in/c-bhargav-20a828210</a>
            </div>

            <div className="mt-4 text-green-400 font-bold italic">
                “Open to internships & hackathons”
            </div>
        </div>
    )
};

export const socialCommand: Command = {
    description: 'Easy contact',
    category: 'personal',
    usage: 'social',
    execute: () => (
        <div className="space-y-2">
            <div className="text-yellow-400 font-bold">╔════════════════════════════════════════════╗</div>
            <div className="text-yellow-400 font-bold">║          SOCIAL MEDIA LINKS                ║</div>
            <div className="text-yellow-400 font-bold">╚════════════════════════════════════════════╝</div>

            <div className="grid grid-cols-[100px_1fr] gap-2 mt-4">
                <div className="text-gray-400">GitHub:</div>
                <a href="https://github.com/Bhargav-1212" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">github.com/Bhargav-1212</a>

                <div className="text-gray-400">LinkedIn:</div>
                <a href="https://linkedin.com/in/c-bhargav-20a828210" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">linkedin.com/in/c-bhargav-20a828210</a>

                <div className="text-gray-400">Email:</div>
                <a href="mailto:bhargavc1212@gmail.com" className="text-cyan-400 hover:underline">bhargavc1212@gmail.com</a>

                <div className="text-gray-400">Instagram:</div>
                <a href="https://www.instagram.com/b.h.a.r.g.a.v_12/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">@b.h.a.r.g.a.v_12</a>
            </div>
        </div>
    )
};
