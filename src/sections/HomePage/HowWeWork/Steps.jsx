const Steps = ({ steps, activeStep }) => {
  return (
    <div className="space-y-8 max-w-md">

      {/* TITLE */}
      <h2 className="text-6xl font-semibold tracking-tight text-slate-800">
        How We Work
      </h2>

      {/* STEPS */}
      <div className="flex flex-col gap-3">
        {steps.map((step, index) => {
          const isActive = activeStep === index

          return (
            <div
              key={index}
              className={`work-step px-5 py-4 rounded-xl transition-all duration-300 mt-3
                ${isActive
                  ? "bg-purple-600/20 shadow-sm"
                  : "bg-transparent"
                }`}
            >
              {/* TITLE */}
              <h3
                className={`text-xl font-semibold transition-colors
                  ${isActive
                    ? "text-purple-800"
                    : "text-gray-600"
                  }`}
              >
                {step.title}
              </h3>

              {/* DESC */}
              <p
                className={`mt-1 text-sm leading-relaxed transition-colors
                  ${isActive
                    ? "text-purple-600/80"
                    : "text-gray-400"
                  }`}
              >
                {step.desc}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Steps
