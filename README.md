# 📝 Task Manager

A simple, accessible, and modern task management application built with vanilla JavaScript, HTML, and CSS. Organize your daily tasks with an intuitive interface and persistent local storage.

![Task Manager Preview](assets/img/preview.png)

## ✨ Features

- ✅ **Add Tasks**: Quickly create new tasks with a clean form interface
- ✏️ **Edit Tasks**: Modify existing tasks on the fly
- 🗑️ **Delete Tasks**: Remove completed or unnecessary tasks
- 💾 **Persistent Storage**: All tasks are saved in localStorage
- 🌓 **Dark/Light Theme**: Toggle between themes with preference saved
- 📱 **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- ♿ **Accessible**: Built with ARIA labels and semantic HTML
- 🎨 **Modern UI**: Apple-inspired design with smooth animations

## 🚀 Demo

[Live Demo](#) *(Add your deployment link here)*

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties (CSS Variables), Flexbox, animations
- **JavaScript (ES6+)**: Vanilla JS with modern features
- **LocalStorage API**: For data persistence

## 📂 Project Structure

```
taskmanager/
├── assets/
│   ├── icons/          # Favicons and app icons
│   └── img/            # Images
├── app.js              # Main JavaScript logic
├── index.html          # HTML structure
├── style.css           # Styles and theme
├── .gitignore
└── README.md
```

## 🎯 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No dependencies or build tools required!

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/taskmanager.git
```

2. Navigate to the project directory:
```bash
cd taskmanager
```

3. Open `index.html` in your browser:
```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Or simply drag and drop `index.html` into your browser.

## 💡 Usage

### Adding a Task
1. Type your task in the input field
2. Click "Add Task" or press Enter
3. Your task appears in the list below

### Editing a Task
1. Click the ✏️ edit button on any task
2. Modify the text in the prompt
3. Click OK to save changes

### Deleting a Task
1. Click the ❌ delete button on any task
2. Confirm the deletion in the dialog
3. Task is removed from the list and storage

### Switching Themes
- Click the "🌙 Dark Mode" / "☀️ Light Mode" button in the header
- Your preference is automatically saved

## 🎨 Color Palette

### Light Theme
- Background: `#ffffff`
- Primary: `#007aff`
- Text: `#1d1d1f`

### Dark Theme
- Background: `#1c1c1e`
- Primary: `#0a84ff`
- Text: `#f5f5f7`

## 🔧 Key Features Explained

### Local Storage
Tasks persist across browser sessions using the localStorage API:
```javascript
// Save tasks
localStorage.setItem('tasks', JSON.stringify(tasks));

// Load tasks
const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
```

### Theme Persistence
User theme preference is saved and restored:
```javascript
localStorage.setItem('theme', 'dark');
```

### Event Delegation
Efficient event handling for dynamic task buttons:
```javascript
taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('task-item__btn--delete')) {
        deleteTask(event.target.parentElement);
    }
});
```

## 📱 Browser Support

- ✅ Chrome (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Edge (90+)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Task priorities
- [ ] Search and filter functionality
- [ ] Task completion status
- [ ] Export tasks to JSON/CSV
- [ ] Drag and drop reordering
- [ ] Multiple task lists

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Juan David Santamaria**

- Email: [juandavidsantamariag@gmail.com](mailto:juandavidsantamariag@gmail.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Design inspired by Apple's Human Interface Guidelines
- Icons: Native emoji characters
- Font: SF Pro Display (system font fallback)

---

⭐ If you found this project helpful, please give it a star!

Made with ❤️ by Juan David Santamaria