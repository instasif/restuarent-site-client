import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

export default function UpdateItem() {
  const { handleSubmit, register, reset } = useForm();
  const { name, recipe, price, category, image, _id } = useLoaderData();
  const image_hoasing_api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb}`;

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

      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      if (menuRes.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          title: "Good job!",
          text: `${menuRes.data.name} has updated`,
          icon: "success",
        });
      }
    }
  };

  return (
    <>
      <SectionTitle subHeading={"Refresh Info"} heading={"Update an Info"} />
      <>
        <div className="rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12 border-2">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="label">
                <span className="label-text">Recipe Name</span>
              </div>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Recipe Name"
                defaultValue={name}
                {...register("name")}
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
                defaultValue={category}
                {...register("category")}
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
                  defaultValue={price}
                  {...register("price")}
                  id="phone"
                />
              </div>
            </div>

            <div>
              <div className="label">
                <span className="label-text">Recipe Details</span>
              </div>

              <textarea
              defaultValue={recipe}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Recipe Details"
                {...register("details")}
                rows="8"
                id="message"
              ></textarea>
              <input
                {...register("image")}
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
                  <span>Update Item</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </>
    </>
  );
}
