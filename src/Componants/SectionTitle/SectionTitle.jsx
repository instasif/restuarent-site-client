export default function SectionTitle({ heading, subHeading }) {
  return (
    <div className="md:w-4/12 text-center mx-auto my-8">
      <p className=" text-yellow-600">--- {subHeading} ---</p>
      <h3 className=" text-3xl uppercase border-y-4 py-4">{heading}</h3>
    </div>
  );
}
