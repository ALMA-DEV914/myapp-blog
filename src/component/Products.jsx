import React, { useState, useEffect } from "react";
import {DynamicStar} from "react-dynamic-star";
import image1 from "../assets/keto-50.png";
import image2 from "../assets/maxresdefault.jpg";
import image3 from "../assets/28ketoplan.png";
import image4 from "../assets/bob-firestone-the-ultimate-guide-to-job-interview-answers.jpg";
import image5 from "../assets/cpa-program.png";
import image6 from "../assets/Tube-Mastery-and-Monetization-Coruse-Box.png";
import image7 from "../assets/healthy.png"
import image8 from "../assets/plant-based-eating-2-1.png";
import image9 from "../assets/full-product.png";
import image10 from "../assets/image5.png";
import image11 from "../assets/side-img1.png";
import image12 from "../assets/exipure.png";
import image13 from "../assets/employeeChildMonitoring.png";
import image14 from "../assets/before-and-after.png";

function Products() {
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false)
  const [letterclassName, setLetterclassName] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterclassName('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  const products = [
    {
        id: "1",
        category: "healthy-diet",
        title: "Keto After 50 Desserts",
        image: image1,
        description: "Now it’s finally possible to be on the keto diet without having to sacrifice our favorite desserts! And do so conveniently over the age of 50 and beyond. This first-of-its-kind program has already been taste-tested by thousands of beta users and the feedback has been extraordinary! People are finally able to enjoy the pleasure of desserts while getting into the best shape of their lives and eliminating processed sugar from their diets. As I'm sure you know, processed sugars have been linked to severe health risks.",
        rating: 4,
        link: "https://bit.ly/3qwjEWZ"
    },
    {
        id: "2",
        category: "healthy-diet",
        title: "GET YOUR CUSTOM KETO DIET PLAN",
        image: image2,
        description: "When you purchase the Custom Keto Diet, you will get an 8-week customized meal plan designed specially by experts. There is a panel of fitness trainers, chefs, and nutritionists making sure that the plan is designed only after taking into account your overall health, and your choice of foods",
        rating: 3.6,
        link: "https://bit.ly/3RXlEnz"
    },
    {
        id: "3",
        category: "healthy-diet",
        title: "28-Day Keto Challenge",
        image: image3 ,
        description: "What's the Difference Between Success and Failure on the Keto Diet? Well, most people on a new diet have no plan. They learn what to eat and not to eat. They try new recipes.But, they DO NOT have a daily plan to carry them through the critical first month. Without a plan, it’s very easy to fall for peer pressure... to be unprepared... and to make bad decisions.",
        rating: 4.5,
        link: "https://bit.ly/3QTZlh7"
    },
    {
        id: "4",
        category: "education",
        title: "Behavioral Interview Questions and Answers",
        image: image4,
        description: "In 2022, most modern employers are using carefully-worded behavioral interview questions. Are you ready?If you go in there unprepared, their behavioral-style questions can throw you off balance — and in the pressure-cooker of an interview that embarassed energy really comes across. ",
        rating: 5,
        link: "https://bit.ly/3RAmxlD"
    },
    {
        id: "5",
        category: "education",
        title: "CPC Practice Exam",
        image: image5,
        description: "Are you about to take the AAPC exam for Certified Professional Coder for the first time? Or are you one of the many people who FAILED the exam the first time, and are now looking to retake the test, perhaps for the third or fourth time? It's Time To STOP Doing What's Not Working, And Get The CPC Practice Exam - Updated For 2022! ",
        rating: 3.5,
        link: "https://bit.ly/3U5Fj67"
    },
    {
        id: "6",
        category: "education",
        title: "Tube Mastery and Monetization 2.0",
        image: image6,
        description: "How I Run 9 Different Profitable YouTube Channels and Make 7 Figures From Them? Introducing Tube Mastery and Monetization 2.0. Tube Mastery and Monetization teaches how to start, grow, and monetize a hyper-profitable YouTube channel from complete scratch. It doesn't matter if you don't have any tech skills or any previous business experience. Everything you need to know is provided step-by-step in this training program.",
        rating: 3,
        link: "https://bit.ly/3RTNQXH"
    },
    {
        id: "7",
        category: "healthy-diet",
        title: "Docs Remedies | BOOK",
        image: image7,
        description: "You'll discover simple step-by-step instructions to prepare healthy and tasty steaks, soups, salads, smoothies, pastas, risottos and more. you'll discover 100 delicious recipes to support those with conditions like: Arthritis, Back pain, Blood pressure, Hashimoto's thyroiditis, Infections, Osteoporosis and many more.",
        rating: 3.8,
        link: "https://bit.ly/3S6HODc"
    },
    {
      id: "8",
      category: "vegan recipes",
      title: "Plant Based Recipe Cookbook - Over 100 Mouth-Watering Vegan Recipes",
      image: image8,
      description: "Want To Cook Ridiculously Tasty Vegan Recipes From Scratch But Have No Idea Where To Start? There’s JUST ONE REASON you might be struggling as a Vegan and it has everything to do with your ability to make delicious high protein food, FAST. With this stunningly simple cookbook I’ll show you how to cook savory, mouth-watering meals in minutes for some of the busiest Vegan eaters in the world.",
      rating: 3.5,
      link: "https://bit.ly/3qOxwfq"
  },
  {
    id: "9",
    category: "fitness&exercises",
    title: "Ikaria Lean Belly Juice – Ancient “Juice” Melts Fat Fast",
    image: image9,
    description: "Ikaria Lean Belly Juice is a weight loss formula developed to help eradicate stubborn fat efficiently and enhance weight loss outcomes. All natural the powerful antioxidants in Lean belly juice help to support weight loss goals, maintaining the body’s natural ability to stay healthy.",
    rating: 2.5,
    link: "https://bit.ly/3S9uvCd"
},
{
  id: "10",
  category: "fitness&exercises",
  title: "Underground Fat Loss Manual Info Page",
  image: image10,
  description: "The Research Study That Proves Exactly Why Eat Less & Move More Doesn't Work. Take a full 60 days to put my plan into action and see the results with your own two eyes.",
  rating: 4.5,
  link: "https://bit.ly/3QWqi3T"
},
{
  id: "11",
  category: "fitness&exercises",
  title: "The Flat Belly Code - The Easiest Way To Get A Flat Belly At Any Age",
  image: image11,
  description: "NO counting calories, NO cutting carbs, NO hours of boring exercise and NO sacrificing delicious foods. Enjoyable, FAST, Lasting Weight Loss. The Flat Belly Code Program Is A Proven Weight Loss Program That Uses Your Body’s “H” Factor To Ignite Your Natural Fat Burning Power",
  rating: 3.5,
  link: "https://bit.ly/3eNJlQv"
},
{
  id: "12",
  category: "fitness&exercises",
  title: "The Tropical Secret For healthy Weight Loss",
  image: image12,
  description: "The Official Scientifically researched Exipure Diet Pills with a new advanced ketogenic 2022 formula for men and women. Maximum Strength. 180 Capsules total, 3 Bottles for a 3 month supply. This ketogenic supplement may help with weight management, energy, metabolism and more. ",
  rating: 3.5,
  link: "https://bit.ly/3Bd5cYT"
},
{
  id: "13",
  category: "electronics&devices",
  title: "1 Employee & Child Monitoring Software",
  image: image13,
  description: "Protect Your Business And Family. Monitor Social Media, Text Messages, Email, Web Browsing, Video Games...and more. Catch Dishonest Employee Theft and Leaking of Information. Cell Phone GPS Tracking. Monitor Your Employees and 100% Undetectable",
  rating: 5,
  link:"https://bit.ly/3eOBLF9"
},
{
  id: "14",
  category: "hygienes",
  title: "Whiten Your Teeth Professionally Save 60% Real White Teeth Whitener",
  description: "We’ve Stumbled On A Natural Fix That Will Transform The Way People Whiten Their Teeth. Did you know the color of your teeth has a direct effect on your personal (and professional) relationships more than any other part of your appearance?",
  image: image14,
  rating: 3.7,
  link: "https://bit.ly/3RYN4sr"

}

]
const Loading =()=> {
    return <div>Loadign...</div>
  }

  const filterProducts = (cat) =>{
    const updatedList = products.filter((x) => x.category === cat);
    setFilter(updatedList)
  }
  
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(products)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("healthy-diet")}
          >
            Healthy Diet
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("hygienes")}
          >
            Hygienes Routines
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("education")}
          >
           Education
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("fitness&exercises")}
          >
           Fitness&Exercises
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("electronics&devices")}
          >
            {" "}
            Software&Technologies
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("vegan recipes")}
          >
            {" "}
            Go Vegan
          </button>
        </div>

        {filter.map((product) => {
          return (
            <>
              <div className="col-md-4 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-2">
                      {product.title}
                    </h5>
                    <a className="link-url" href={product.link}>{product.title}</a>
                    <p>{product.description}</p>
                    <br></br>
                    <DynamicStar
                    rating={product.rating}
                    width="30"
                    height="50"
                    outlined="black"
                    id="stars"
                  />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5" id="container">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              {" "}
              Popular Products
            </h1>
            <hr />
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
