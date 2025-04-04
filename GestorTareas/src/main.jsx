import { App } from './App';
import { createRoot } from 'react-dom/client'
import './index.css';
import { Context } from './components/Context/Context'; 

createRoot(document.getElementById('root')).render(
    <Context>
    <App />
    </Context>
)
