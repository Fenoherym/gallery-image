import { useState } from 'react';
import image1 from './assets/img/image1.jpg'
import image2 from './assets/img/image2.jpg'
import image3 from './assets/img/image3.jpg'
import image4 from './assets/img/image4.jpg'
import ImageGallery from './Components/ImageGallery';


function App() {
 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      url: image1
    },
    {
      url: image2
    },
    {
      url: image3
    },
    {
      url: image4
    },
    
  ]

  const style: React.CSSProperties = {
      width: "400px",
      maxHeight: "400px"
  };

  return (
    <>
    <div className='flex justify-center items-center mt-5' >
      <ImageGallery 
        style={style} 
        images={images} 
        currentImageIndex={currentImageIndex} 
        setCurrentImageIndex={setCurrentImageIndex}      
      />
     
    </div>
    
     
    </>
  )
}

export default App
