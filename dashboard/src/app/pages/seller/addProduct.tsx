import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: crypto.randomUUID() as string,
    name: "Sports",
  },
  {
    id: crypto.randomUUID() as string,
    name: "T-Shirt",
  },
  {
    id: crypto.randomUUID() as string,
    name: "Jersey",
  },
  {
    id: crypto.randomUUID() as string,
    name: "Pant",
  },
  {
    id: crypto.randomUUID() as string,
    name: "Watch",
  },
];

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    discount: "",
    price: "",
    brand: "",
    stock: "",
  });

  const [cateShow, setCateShow] = useState(false);
  const [allCategory, setAllCategory] = useState(categories);
  const [category, setCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const categorySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    if (value) {
      const searchedCate = allCategory.filter(
        (cate) => cate.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
      setAllCategory(searchedCate);
    } else {
      setAllCategory(categories);
    }
  };

  return (
    <div className="px-2 lg:px-7 pt-5 ">
      <div className="w-full p-4 bg-[#283046] rounded-md">
        <div className="flex justify-between items-center pb-4 ">
          <h1 className="text-[#d0d2d6] text-xl font-semibold">Add Product</h1>
          <Link
            className="bg-blue-500  hover:shadow-blue-500/50 hover:shadow-lg rounded-md px-7 py-2 my-2 text-white "
            to="/seller/dashboard/products"
          >
            Products
          </Link>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
              <div className="flex flex-col w-full gap-1 ">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Product name"
                  id="name"
                  onChange={handleInputChange}
                  value={formData.name}
                  className="px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                />
              </div>
              <div className="flex flex-col w-full gap-1 ">
                <label htmlFor="brand">Brand Name</label>
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand name"
                  id="brand"
                  onChange={handleInputChange}
                  value={formData.brand}
                  className="px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="category">Category</label>
                <input
                  readOnly
                  onClick={() => setCateShow(!cateShow)}
                  type="text"
                  name="category"
                  placeholder="Select category"
                  id="category"
                  value={category}
                  className="px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                />
                <div
                  className={`absolute top-[101%] bg-slate-800 w-full transition-all ${
                    cateShow ? "scale-100" : "scale-0"
                  }`}
                >
                  <div className="w-full px-4 py-2 fixed">
                    <input
                      className="px-3 w-full py-2 outline-none border bg-transparent border-slate-700 rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                      type="text"
                      placeholder="search"
                      value={searchValue}
                      onChange={categorySearch}
                    />
                  </div>
                  <div className="pt-14 "></div>
                  <div className="flex justify-start items-start flex-col h-[200px] overflow-x-scroll ">
                    {allCategory.map((c, i) => (
                      <span
                        className={`px-4 py-2 hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/50 w-full cursor-pointer ${
                          category === c.name && "bg-indigo-500"
                        }`}
                        onClick={() => {
                          setCateShow(false);
                          setCategory(c?.name);
                          setAllCategory(categories);
                          setSearchValue("");
                        }}
                        key={i}
                      >
                        {c?.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-1 ">
                <label htmlFor="stock">Stock</label>
                <input
                  type="number"
                  name="stock"
                  placeholder="Stock"
                  id="stock"
                  min={0}
                  onChange={handleInputChange}
                  value={formData.stock}
                  className="px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
              <div className="flex flex-col w-full gap-1 ">
                <label htmlFor="price">Product Price</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Product Price"
                  id="price"
                  onChange={handleInputChange}
                  value={formData.price}
                  className="px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                />
              </div>
              <div className="flex flex-col w-full gap-1 ">
                <label htmlFor="discount">Discount</label>
                <input
                  type="number"
                  name="discount"
                  placeholder="Discount rate in %"
                  id="discount"
                  onChange={handleInputChange}
                  value={formData.discount}
                  className="px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-1 text-[#d0d2d6]">
              <label htmlFor="description">Product Description</label>
              <textarea
                onChange={handleInputChange}
                className="px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                name="description"
                id="description"
                value={formData.description}
                rows={4}
                placeholder="Write a attractive product description..."
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
