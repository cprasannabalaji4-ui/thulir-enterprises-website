function CTA({ openModal }){
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5">

        <div
          className="
          bg-linear-to-r
          from-teal-900
          via-black
          to-teal-950
          rounded-3xl
          overflow-hidden
          "
        >

          <div className="grid lg:grid-cols-2 gap-10 items-center p-8 lg:p-14">

            {/* Left Content */}
            <div className="text-white">

              <p className="uppercase tracking-widest text-orange-400 font-semibold">
                Get Started Today
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                Looking For Custom
                <br />
                Printing Solutions?
              </h2>

              <p className="mt-5 text-gray-300 leading-8">
                From T-Shirts and Mugs to Corporate Gifts and Event Branding,
                we provide high-quality customized printing services tailored
                to your needs.
              </p>

              <button
  onClick={openModal}
  className="
  mt-8
  bg-orange-500
  hover:bg-orange-600
  transition
  px-8
  py-4
  rounded-xl
  font-semibold
  "
>
  Request a Quote →
</button>

            </div>

            {/* Right Image */}
            <div className="flex justify-center">

             <img
             src="/images/hero-printing-machine.jpg"
             alt="Printer"
             className="w-225 max-w-none"
             />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;