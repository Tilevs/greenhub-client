const ProductCard = ({ product }) => {
    return (
        <div className="flex items-start bg-[#f9f9f9] border border-[#ddd] rounded-lg p-4 mb-4">
            <img src={product.img} className="w-[120px] mr-4 rounded-lg" alt={product.name} />
            <div className="flex-1">
                <h3 className="text-xl mb-2">{product.name}</h3>
                <p className="mb-2 text-base text-[#555]">{product.description}</p>
                <p className="font-bold text-[#48a17d]">{product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
