import './App.css';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Quiz from './Components/quiz';
import Homepage from './Components/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // here i add routes so the Quiz can open in a new page
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
