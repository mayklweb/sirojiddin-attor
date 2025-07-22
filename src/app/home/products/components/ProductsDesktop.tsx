function ProductsDesktop() {

  const images = Array(8).fill("/parfume.png");

  return (
    <div className="hidden lg:grid grid-cols-4 gap-10">
      {images.map((src, index) => {
        const columnCount = 4; 
        const col = index % columnCount;
        let translateClass = "";

        if (columnCount === 4) {
          if (col === 0) translateClass = "-translate-y-1/6";
          else if (col === 1) translateClass = "translate-y-1/6";
          else if (col === 2) translateClass = "-translate-y-1/6";
          else translateClass = "translate-y-1/6";
        }

        return (
          <div
            key={index}
            className={`parfume bg-white rounded-full overflow-hidden flex items-center justify-center shadow-lg transform ${translateClass}`}
          >
            <img src={src} alt="perfume" className="w-full h-full object-cover" />
          </div>
        );
      })}
    </div>
  );
}

export default ProductsDesktop;