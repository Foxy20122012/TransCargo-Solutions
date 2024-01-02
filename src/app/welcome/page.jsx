import presets from "../../utils/globalPresets"

const Welcome = () => {
  return (
    <section 
      className="pt-5 lg:pt-[120px] pb-10 lg:pb-20 lg:pl-2 bg-gray-100 w-screen h-screen bg-no-repeat bg-right-bottom bg-blend-overlay"
      style={{ backgroundImage: `url(${presets.images.welcomeFondo})`}}
    >
      <div className="container">
        <div className="flex flex-wrap -mx-4" />
      </div>
    </section>
  )
}

export default Welcome
