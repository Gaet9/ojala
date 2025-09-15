import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      src: gallery1,
      caption: "Inside Look: Clear diagrams and actionable insights throughout every chapter",
      alt: "Book interior pages"
    },
    {
      src: gallery2,
      caption: "Perfect for professionals: Designed to fit seamlessly into your daily routine",
      alt: "Book on professional desk"
    },
    {
      src: gallery3,
      caption: "Quality craftsmanship: Premium binding and professional design details",
      alt: "Book spine and back cover"
    },
    {
      src: gallery4,
      caption: "Join the community: Part of a growing collection of transformative reads",
      alt: "Book collection stack"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Inside the Book
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Get a preview of the beautiful design, clear illustrations, and practical content that awaits you
          </p>
        </div>

        <div className="gallery-grid max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="gallery-item fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="gallery-caption">
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={galleryItems[selectedImage].src} 
                alt={galleryItems[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-white/80 text-lg">
                  {galleryItems[selectedImage].caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;