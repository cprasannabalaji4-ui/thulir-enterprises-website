function HeroSection() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}

      <div
        className="h-[320px] md:h-[380px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588412079929-790b9f593d8e?q=80&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}

      <div className="absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto px-5 w-full">

          {/* Breadcrumb */}

          <div className="text-white/80 text-sm mb-6">

            Home

            <span className="mx-2">›</span>

            Services

            <span className="mx-2">›</span>

            T-Shirt Printing

            <span className="mx-2">›</span>

            Order

          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">

            Custom

            <span className="text-orange-500">
              {" "}
              T-Shirt
            </span>

            {" "}Order

          </h1>

          {/* Steps */}

          <div className="flex flex-wrap items-center gap-4 mt-10 text-white">

            <div className="flex items-center gap-3">

              <div
                className="
                w-10
                h-10
                rounded-full
                bg-green-600
                flex
                items-center
                justify-center
                font-bold
                "
              >
                1
              </div>

              <span>Upload Design</span>

            </div>

            <div className="hidden md:block">
              -------
            </div>

            <div className="flex items-center gap-3">

              <div
                className="
                w-10
                h-10
                rounded-full
                bg-green-600
                flex
                items-center
                justify-center
                font-bold
                "
              >
                2
              </div>

              <span>Customize</span>

            </div>

            <div className="hidden md:block">
              -------
            </div>

            <div className="flex items-center gap-3">

              <div
                className="
                w-10
                h-10
                rounded-full
                bg-green-600
                flex
                items-center
                justify-center
                font-bold
                "
              >
                3
              </div>

              <span>Review & Order</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;