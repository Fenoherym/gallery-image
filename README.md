# Documentation du Composant ImageGallery

## Description
Le composant `ImageGallery` est conçu pour afficher une galerie d'images. Il permet à l'utilisateur de naviguer entre différentes images en cliquant sur des miniatures. Le composant prend en charge des styles personnalisés pour s'adapter à l'apparence de l'application.

## Propriétés

### `images`
- **Type**: `Array<{ url: string }>`
- **Description**: Un tableau d'objets contenant les URLs des images à afficher dans la galerie.

### `currentImageIndex`
- **Type**: `number`
- **Description**: L'index de l'image actuellement affichée dans la galerie. Cela permet de savoir quelle image est visible à l'utilisateur.

### `setCurrentImageIndex`
- **Type**: `Function`
- **Description**: Une fonction qui met à jour l'index de l'image actuellement affichée. Elle est appelée avec l'index de l'image sélectionnée lorsque l'utilisateur clique sur une miniature.

### `style`
- **Type**: `React.CSSProperties`
- **Description**: Styles supplémentaires pour le composant. Cela permet de personnaliser l'apparence de la galerie en fonction des besoins de l'application.

## Utilisation
Pour utiliser le composant `ImageGallery`, importez-le dans votre fichier et passez-lui les propriétés nécessaires. Voici un exemple d'utilisation :

```javascript
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
```

## Remarques
- Assurez-vous que le tableau `images` contient au moins une image pour éviter les erreurs d'index.
- Le composant utilise des classes CSS pour le style, donc assurez-vous que les styles correspondants sont définis dans votre feuille de style.
