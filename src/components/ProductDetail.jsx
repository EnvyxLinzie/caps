import React from 'react';

const ProductDetail = ({ products }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6 lg:px-8">
      {products.map((product, productIndex) => (
        <div key={productIndex} className="w-full max-w-4xl p-4 sm:p-6 lg:p-8 border border-gray-700 rounded-lg mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">{product.heading}</h1>
          <div className="overflow-x-auto">
            <table className="w-full text-center min-w-full">
              <thead>
                <tr>
                  {product.subHeadings.map((subheading, index) => (
                    <th key={index} className="px-2 sm:px-4 py-1 sm:py-2 text-base sm:text-xl font-semibold border-b border-gray-700">{subheading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.paragraphs[0].map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {product.subHeadings.map((_, colIndex) => (
                      <td key={colIndex} className="px-2 sm:px-4 py-1 sm:py-2 border-b border-gray-700">{product.paragraphs[colIndex][rowIndex]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <div className="w-full max-w-4xl p-4 sm:p-6 lg:p-8 border-t border-gray-700">
        <p className="text-base sm:text-lg font-italic text-center">
          Detail Selebihnya Silahkan Contact Kami Untuk Penjelasan Dan Pembelian.
        </p>
        <p className="text-base sm:text-lg font-bold text-center mt-8">
          Note: Semua Produk Memiliki Garansi Anti Drop 15-30 Hari, Kami Menyediakan Jasa Yang Pastinya Sudah Teruji Dan Tidak Akan Mengecewakan.
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
