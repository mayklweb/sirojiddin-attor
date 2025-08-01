import Image from "next/image";

function ProductsDesktop() {

  const images = Array(9).fill("/parfume.png");

  return (
    <div className="hidden grid-cols-3 gap-10">
      {images.map((src, index) => {
        const columnCount = 3; 
        const col = index % columnCount;
        let translateClass = "";

        if (columnCount === 3) {
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
            <Image width={100} height={100} src={src} alt="perfume" className="w-full h-full object-cover" />
          </div>
        );
      })}
    </div>
  );
}

export default ProductsDesktop;