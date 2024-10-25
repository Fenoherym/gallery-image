/**
 * Composant ImageGallery qui affiche une galerie d'images pour le produit.
 * @param {Array<{ url: string }>} images - Les images du produit.
 * @param {number} currentImageIndex - L'index de l'image actuellement affichée.
 * @param {Function} setCurrentImageIndex - Fonction pour mettre à jour l'index de l'image.
 * @param {React.CSSProperties} [style] - Styles supplémentaires pour le composant.
 */
export default function ImageGallery({ images, currentImageIndex, setCurrentImageIndex, style }: { images: { url: string }[]; currentImageIndex: number; setCurrentImageIndex: (index: number) => void; style?: React.CSSProperties; }) {
    return (
        <div style={style} className="p-4 rounded-lg">
            <div className="relative aspect-w-1 aspect-h-1 mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
                <img
                    src={images[currentImageIndex].url}
                    alt={`Image principale`}
                    className="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg"
                />
            </div>
            <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`border-2 rounded-md overflow-hidden transition-transform duration-300 ease-in-out transform ${currentImageIndex === index ? 'border-red-500 scale-110' : 'border-gray-200 hover:scale-105'}`}
                    >
                        <img src={image.url} alt={`Miniature ${index + 1}`} className="w-full h-full max-h-24 object-cover" />
                    </button>
                ))}
            </div>
        </div>
        
    );
}
