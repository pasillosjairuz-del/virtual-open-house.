# Virtual Campus Open House (VR & AI-Powered)

An interactive, web-based Virtual Reality (VR) campus tour featuring real-time analytics and an AI Tour Guide assistant.

---

## 📅 Project Plan (Milestone Plan)

* **Phase 1: Environment & Dependency Setup**
  * Initialized a Node.js and Express backend environment.
  * Installed core packages including `express`, `dotenv`, and `@google/genai` for server handling and AI integration.
  * Established version control using Git and created the GitHub repository.
* **Phase 2: 3D Virtual Environment Design**
  * Built the 3D campus layout using A-Frame primitives (`<a-scene>`, `<a-box>`, `<a-sky>`, `<a-plane>`).
  * Positioned campus landmarks: Main Admin, Library, Computer Lab, and Chapel & Gym.
  * Configured scene lighting and camera controls.
* **Phase 3: Backend & AI Integration**
  * Developed API endpoints in `server.js` for handling building data, tracking visitor analytics, and interfacing with the Google Gemini API.
  * Created the AI Tour Guide assistant overlay to answer user inquiries dynamically.
* **Phase 4: Testing & Deployment**
  * Resolved runtime issues, configured the A-Frame mouse raycaster for browser compatibility, and successfully pushed the project code to GitHub.

---

## 🖱️ Interactivity Features

* **Mouse-Enabled Click Hotspots**: Configured A-Frame with `cursor="rayOrigin: mouse"` so users can easily click directly on any campus building using their mouse cursor.
* **Dynamic Information Panels**: Clicking a building triggers an in-scene popup displaying detailed descriptions of that specific campus facility.
* **Real-Time Analytics Logging**: Every interaction and building click sends an asynchronous POST request to the server, instantly logging visitor engagement metrics.
* **AI Tour Guide Assistant**: An embedded chat overlay allows users to type open-ended questions about admissions, campus life, or programs and receive immediate, context-aware responses powered by the Google Gemini API.
* **Admin Dashboard**: A separate analytics interface tracks visitor statistics and usage trends in real time.

---

## 💡 Project Reflection

* **Overcoming Challenges**: Building an immersive 3D environment in the browser presented initial hurdles with raycasting and click detection. Adjusting the cursor configuration solved interaction issues, ensuring smooth desktop and browser usability.
* **Key Learnings**: This project successfully bridged the gap between frontend web-based virtual reality (A-Frame) and backend server intelligence (Node.js and Generative AI). It demonstrated how modern web technologies can transform traditional static school open houses into interactive, data-driven experiences.
* **Future Improvements**: Future iterations could incorporate full VR headset support and multiplayer avatars to allow prospective students to tour the campus together in real time.

---

## 🚀 How to Run Locally

1. Install dependencies:
   ```bash
   npm install