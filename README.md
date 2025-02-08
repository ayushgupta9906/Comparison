# Result Comparison

A web application for comparing academic results between two students, featuring interactive visualizations and data analysis.

## Features

- Student result comparison with multiple visualization options
- Interactive graphs (Line, Bar, and Radar charts)
- Real-time data fetching and processing
- Responsive design for all screen sizes
- Form validation and error handling
- Auto-capitalization of input fields

## Tech Stack

### Frontend
- **React** (v18.2.0) - UI library
- **Vite** (v5.4.14) - Build tool and development server
- **React Router DOM** (v6.21.1) - Client-side routing
- **Recharts** (v2.10.3) - Responsive charting library
- **Axios** (v1.6.4) - HTTP client for API requests

### Backend
- **Node.js** & **Express** (v4.18.2) - Server framework
- **MongoDB** & **Mongoose** (v8.0.3) - Database and ODM
- **CORS** (v2.8.5) - Cross-Origin Resource Sharing
- **JSDOM** (v23.0.1) - DOM manipulation for server-side scraping
- **dotenv** (v16.3.1) - Environment variable management
- **node-fetch** (v3.3.2) - Fetch API for Node.js
- **async-mutex** (v0.4.1) - Mutual exclusion for concurrent operations
- **nodemon** (v3.0.2) - Development server with auto-reload

## Project Structure

```
project/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Graphs/
│   │   │   │   ├── lineGraph.component.jsx
│   │   │   │   ├── barChart.jsx
│   │   │   │   └── pieChart.jsx
│   │   │   └── forms/
│   │   │       ├── form.jsx
│   │   │       └── OptionForm.component.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── backend/
    ├── src/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── utils/
    │   └── index.js
    └── package.json
```

## Setup Instructions

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with required environment variables:
```env
PORT=8080
MONGODB_URI=your_mongodb_connection_string
```

4. Start development server:
```bash
npm run dev
```

## Key Components

### Frontend Components

1. **Form Component**
   - Handles user input for student details
   - Input validation and auto-capitalization
   - Error handling and loading states

2. **Graph Components**
   - Line Chart: Shows trend analysis
   - Bar Chart: Comparative analysis
   - Radar Chart: Overall performance visualization

3. **Option Forms**
   - Graph type selection
   - Data type selection (Sessional/Exam/Total marks)

### Backend Components

1. **Controllers**
   - Result Controller: Handles result processing
   - Student Controller: Manages student data
   - URL Controller: Handles external data fetching

2. **Models**
   - Student Schema: Defines data structure
   - Marks Schema: Structures academic performance data

3. **Utils**
   - API Error Handling
   - HTML Parsing
   - Date Calculations

## API Endpoints

- `POST /` - Submit student details
- `GET /compareResult` - Fetch comparison data
- `GET /resultFetched` - Get processed results

## Error Handling

- Frontend form validation
- Backend API error responses
- Database connection error handling
- Data fetching error management

## Security Features

- CORS implementation
- Input sanitization
- Error message sanitization
- Rate limiting (implicit through render.com)

## Deployment

- Frontend: GitHub Pages
- Backend: Render.com
- Database: MongoDB Atlas

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
