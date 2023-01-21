
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailBiografi from './pages/biografi/DetailBlogBiografi';
import HomeBlogBiografi from './pages/biografi/HomeBlogBiografi';
import BlogDetail from './pages/DetailBlog';
import Home from './pages/Home';
import PengenalanTeknologi from './pages/PengenalanTeknologi';
import PerkembanganKomputer from './pages/PerkembanganKomputer';
function App() {
  
  return (
   <div className='App'>
    <Routes>
      <Route path='/' element={< Home/>}/>
      <Route path='/blog/sejarah-perkembangan-komputer' element={< PerkembanganKomputer/>}/>
      <Route path='/blog/pengenalan-teknologi-informasi' element={< PengenalanTeknologi/>}/>
      <Route path='/blog/biografi' element={< HomeBlogBiografi/>}/>
      <Route path='/blog/:key' element={< BlogDetail/>}/>
      <Route path='/blog/biografi/:key' element={< DetailBiografi/>}/>
    </Routes>
   </div>
  );
}

export default App;
