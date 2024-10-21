export function MyImage({ src, alt }: { src: string; alt: string }) {
    return (
      <div className="mt-8">
        <img src={src} alt={alt} className="w-64 h-64 object-cover" />
      </div>
    );
  }