import { useForm } from "react-hook-form";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const IMAGE_HOSTING_KEY = import.meta.env.VITE_imgbb;
const image_hoasing_api = `https://api.imgbb.com/1/upload?key=${IMAGE_HOSTING_KEY}`;

export default function AddItems() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const axiosPurbic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const { name, details, price, category, image } = data;
    const imageFile = { image: image[0] };
    const res = await axiosPurbic.post(image_hoasing_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name,
        recipe: details,
        price: parseFloat(price),
        category,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.post("/menu", menuItem);
      if (menuRes.data._id) {
        reset();
        Swal.fire({
          title: "Good job!",
          text: `${menuRes.data.name} has posted`,
          icon: "success"
        });
      }
    }
  };
  return (
    <>
      <SectionTitle subHeading={"What's new?"} heading={"Add an Item"} />
      <>
        <div className="rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12 border-2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <div className="label">
                <span className="label-text">Recipe Name</span>
              </div>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Recipe Name"
                {...register("name", { required: true })}
                type="text"
                id="name"
              />
            </div>

            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <select
                className="select w-full max-w-xs"
                {...register("category", { required: true })}
              >
                <option disabled defaultValue>
                  Category
                </option>
                <option>dessert</option>
                <option>salad</option>
                <option>soup</option>
                <option>pizza</option>
                <option>drinks</option>
                <option>offered</option>
              </select>

              <div>
                <div className="label">
                  <span className="label-text">Price</span>
                </div>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Price"
                  type="text"
                  {...register("price", { required: true })}
                  id="phone"
                />
              </div>
            </div>

            <div>
              <div className="label">
                <span className="label-text">Recipe Details</span>
              </div>

              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Recipe Details"
                {...register("details", { required: true })}
                rows="8"
                id="message"
              ></textarea>
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full max-w-xs mt-4"
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full btn btn-outline border-0 border-b-4 rounded-lg bg-slate-100 border-orange-300 text-orange-300 px-5 py-3 font-medium sm:w-auto"
              >
                <div className="flex gap-2">
                  <FaUtensils />
                  <span>Add Item</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </>
    </>
  );
}
