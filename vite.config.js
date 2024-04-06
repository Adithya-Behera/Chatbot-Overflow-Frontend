// vite.config.js
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
 
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()], 
  define:{
    'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
    'process.env.VITE_QUESTION_URL': JSON.stringify(process.env.VITE_QUESTION_URL),
  }
});
