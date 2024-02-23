/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState } from "react";
import { BsImage } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [images, setImages] = useState<any>([]);
  const [imageShow, setImageShow] = useState<any>([]);

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

  const imageHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: any = e.target.files;
    if (files!.length > 0) {
      setImages((prev: any) => [...prev, ...files]);

      const imagesUrl: any = [];

      for (let i = 0; i < files.length; i++) {
        imagesUrl.push({ url: URL.createObjectURL(files[i]) });
      }

      setImageShow((prev: any) => [...prev, ...imagesUrl]);
    }
  };

  const handleChangeImage = (image: any, idx: number) => {
    setImages((prev: any) => {
      const temp = prev;
      temp[idx] = image;
      return [...temp];
    });
    setImageShow((prev: any) => {
      const temp = prev;
      temp[idx] = { url: URL.createObjectURL(image) };
      return [...temp];
    });
  };
  const handleRemoveImage = (idx: number) => {
    setImages((prev: any) => {
      return prev.filter((img: any) => img != prev[idx]);
    });
    setImageShow((prev: any) => {
      return prev.filter((img: any) => img != prev[idx]);
    });
  };

  console.log(imageShow);

  return (
    <div className="px-2 lg:px-7 pt-5 pb-4">
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

            <div className="mt-5 grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 xs:gap-4 gap-3 w-full text-[#d0d2d6] mb-4">
              {imageShow.map((img: any, i: any) => (
                <div className="h-[180px] relative " key={i}>
                  <label htmlFor={i}>
                    <img
                      className="h-full w-full rounded-xl object-contain"
                      src={img.url}
                      alt=""
                    />
                  </label>
                  <input
                    type="file"
                    id={i}
                    className="hidden"
                    onChange={(e: any) =>
                      handleChangeImage(e.target.files[0], i)
                    }
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(i)}
                    className="p-2 z-10 cursor-pointer bg-red-500 hover:shadow-lg hover:shadow-slate-400/50 text-white absolute  top-1 right-1 rounded-full"
                  >
                    <IoCloseSharp className="font-bold text-lg" />
                  </button>
                </div>
              ))}
              <label
                className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-indigo-500 w-full text-[#d0d2d6]"
                htmlFor="image"
              >
                <span>
                  <BsImage />
                </span>
              </label>
              <input
                multiple
                onChange={imageHandle}
                type="file"
                className="hidden"
                id="image"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500  hover:shadow-blue-500/50 hover:shadow-lg rounded-md px-7 py-2 my-2 text-white "
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
