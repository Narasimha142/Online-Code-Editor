# Online Code Editor

## Description
A web-based code editor built with **Angular (Frontend)** and **Node.js (Backend)** that allows users to write and execute JavaScript and Python code in real-time.

## Features
✅ Supports JavaScript and Python execution
✅ Syntax highlighting and error handling
✅ Runs code in a secure Node.js environment
✅ Simple and responsive UI

## Tech Stack
- **Frontend:** Angular, TypeScript, HTML, CSS
- **Backend:** Node.js, Express
- **API Communication:** HTTP (Axios)

## Installation
### **1. Backend Setup**
```sh
# Clone the repository
git clone https://github.com/your-username/code-editor-backend.git
cd code-editor-backend

# Install dependencies
npm install

# Start the backend server
node server.js
```

### **2. Frontend Setup**
```sh
# Clone the repository
git clone https://github.com/your-username/code-editor-frontend.git
cd code-editor-frontend

# Install dependencies
npm install

# Start the Angular app
ng serve --open
```

## Usage
1. Open the application in your browser.
2. Select a programming language (JavaScript or Python).
3. Write your code in the editor.
4. Click **Run** to execute the code and view the output.

## API Endpoint
```
POST /execute
Body: { language: "javascript" | "python", code: "<code-to-execute>" }
Response: { output: "<execution-result>", error: "<error-if-any>" }
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

