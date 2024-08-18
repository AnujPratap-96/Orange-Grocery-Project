import Fruit1 from '../../assets/fruits/fruits1.webp'
import Fruit2 from '../../assets/fruits/fruits2.png'
import Fruit3 from '../../assets/fruits/fruits3.png'



const ServiceData = [
  {
    id :1,
    image: Fruit1,
    title : "Fresh Fruits",
    subtitle : "Vibrant, juicy, nutritious, sweet, ripe, refreshing, flavorful.",
    aosDelay : "300"
  },
  {
    id :2,
    image: Fruit2,
    title : "Healthy Fruits",
    subtitle : "Zesty, tangy, vitamin-rich, sweet, citrusy, refreshing, energizing.",
    aosDelay : "500"
  },
  {
    id :3,
    image: Fruit3,
    title : "Orange Juices",
    subtitle : "Citrusy, tangy, vitamin-rich, refreshing, pulpy, zesty, energizing.",
    aosDelay : "700"
  },
]

const Services = () => {
  return (
  <div className=" container my-16 space-y-4 ">
    {/* header section  */}
    <div className=" text-center max-w-lg mx-auto space-y-2">
      <h1 data-aos="fade-up" className=" text-3xl font-bold text-dark">Fresh and <span className=" text-primary">Tasty Fruits</span>{" "}</h1>
      <p data-aos="fade-up" data-aos-delay="300" className="text-sm opacity-50">Fruits are nature&apos;s sweet treats, rich in vitamins. Oranges, juicy and tangy, stand out as especially tasty and refreshing.</p>
    </div>
     {/* card section  */}
     <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {ServiceData.map(({id , image , title , subtitle , aosDelay}) => (

        <div key={id}  data-aos="fade-up" data-aos-delay ={aosDelay} className="p-4 text-center space-y-6">
          <img
           src={image} 
           alt=""
            className="max-w-[200px] mx-auto 
            hover:scale-110 duration-300 img-shadow2 "
          />
          <div className=" space-y-2">
            <h1 className=" text-2xl font-bold text-primary">{title}</h1>
            <p className="text-dark">{subtitle}</p>
          </div>

        </div>
      ))}
     </div>
  </div>);
};

export default Services;
