// Online Code Editor - Angular + Node.js

// 1. Backend (Node.js + Express - code-editor-backend)
// --------------------------------------------------

// Install dependencies
// npm init -y
// npm install express cors body-parser child_process

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// API to execute code
app.post('/execute', (req, res) => {
    const { language, code } = req.body;
    let command = '';

    if (language === 'python') {
        command = `python3 -c "${code}"`;
    } else if (language === 'javascript') {
        command = `node -e "${code}"`;
    } else {
        return res.json({ error: 'Unsupported language' });
    }

    exec(command, (error, stdout, stderr) => {
        if (error) return res.json({ error: stderr });
        res.json({ output: stdout });
    });
});

app.listen(5000, () => console.log('Backend running on port 5000'));


// 2. Frontend (Angular - code-editor-frontend)
// -------------------------------------------

// Install Angular CLI and create project
// npm install -g @angular/cli
// ng new code-editor --routing=true --style=css

// Install dependencies
// cd code-editor
// npm install axios

// Generate components
// ng generate component components/editor

// Editor component (editor.component.ts)
import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  code = '';
  language = 'javascript';
  output = '';

  executeCode() {
    axios.post('http://localhost:5000/execute', { language: this.language, code: this.code })
      .then(response => this.output = response.data.output || response.data.error)
      .catch(error => console.error(error));
  }
}

// Editor component HTML (editor.component.html)
/*
<div class="container">
  <h2>Online Code Editor</h2>
  <select [(ngModel)]="language">
    <option value="javascript">JavaScript</option>
    <option value="python">Python</option>
  </select>
  <textarea [(ngModel)]="code" rows="10" cols="50"></textarea>
  <button (click)="executeCode()">Run</button>
  <pre>{{ output }}</pre>
</div>
*/

// Import FormsModule in app.module.ts
// import { FormsModule } from '@angular/forms';
// @NgModule({ imports: [FormsModule] })

// Run the frontend
// ng serve --open

// 3. Push the project to GitHub
// ------------------------------

// Initialize Git and push the project
// git init
// git add .
// git commit -m "Initial commit"
// git branch -M main
// git remote add origin https://github.com/your-username/code-editor.git
// git push -u origin main
