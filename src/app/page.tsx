import Image from "next/image";
import Nav from "./Navbar/page";

export default function Home() {
  return (
    <main className="">
      <div className="hidden md:block">
        <Nav/>
      </div>

      <div className="flex ml-1 justify-evenly flex-row">
        <div>
          <h1 className="text-6xl mb-16"><b>Enjoy Delicious<br/> Food in <b className="text-yellow-500">Healthy Life</b></b></h1>
          <p className="text-2xl">Tandoori masala s an Indian spice blend consisting<br/>
          of a variety of spices. Tandoori masala is an Indian spice blend<br/>
          consisting of a variety of spices
          </p>
          <button className="bg-[#FFC625] rounded-lg w-40 mt-16 h-12">Order now</button>
          
        </div>

        <div>
        <img src = "/images/roastedchicken.png" className="min-h-3.5 w-96 h-96"></img>
        </div>
      </div>
      <div className="mt-16 mb-16">
        <h4 className="text-center">Online store</h4>
        <h2 className="text-center text-4xl"><b>Popular Foods</b></h2>
        <h2 className="text-center text-4xl"><b></b></h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly gap-90">
        <div className="">
          <img src="/images/pic1.jpg" className="rounded-full w-64 h-60"></img>
          <div className="ml-7">
          <h1 className="text-4xl mt-4"><b>Fruit dish</b></h1>
            <p className="text-3xl">Dinko food</p>
            <img src="images/fiveStar.png" className="w-30"></img>
            <button className="bg-[#FFC625] w-48 h-10 rounded-3xl">Add to cart &nbsp; &nbsp; $696</button>
          </div>
        </div>

        <div>
          <img src="/images/chipss.png" className="rounded-full w-64 h-60"></img>
          <div className="ml-7">
          <h1 className="text-4xl mt-4"><b>Fruit dish</b></h1>
            <p className="text-3xl">Dinko food</p>
            <img src="images/fiveStar.png" className="w-30"></img>
            <button className="bg-[#FFC625] w-48 h-10 rounded-3xl">Add to cart &nbsp; &nbsp; $696</button>
          </div>
        </div>

        <div>
          <img src="/images/sushi.png" className="rounded-full w-64 h-60"></img>
          <div className="ml-7">
          <h1 className="text-4xl mt-4"><b>Sea fish dish</b></h1>
            <p className="text-3xl">Dinko food</p>
            <img src="images/fiveStar.png" className="w-24"></img>
            <button className="bg-[#FFC625] w-48 h-10 rounded-3xl">Add to cart &nbsp; &nbsp; $696</button>
          </div>
        </div>

        <div>
          <img src="/images/pizza.png" className="rounded-full w-64 h-60"></img>
          <div className="ml-7">
          <h1 className="text-4xl mt-4"><b>Plzza</b></h1>
            <p className="text-3xl">Dinko food</p>
            <img src="images/fiveStar.png" className="w-30"></img>
            <button className="bg-[#FFC625] w-48 h-10 rounded-3xl">Add to cart &nbsp; &nbsp; $696</button>
          </div>
        </div>
        </div>

        <div className="flex justify-evenly mt-48 md:grid-cols-3 flex-direction -row">
        <div>
          <h1 className="text-4xl mb-4"><b>Our Special Offer</b></h1>
          <p className="mb-4 text-3xl">Best cooks and delivery guys all at your<br/> service. Hot tasty food will reach you in 60 minutes</p>
          <button className="bg-[#FFC625] w-48 h-10 rounded-3xl">See more</button>
          
        </div>
        
        <div>
        <img src = "/images/rawmeat.png" className="w-38"></img>
        </div>
      </div>
      <div>
        <p className="text-center text-4xl text-lg mt-6">Quality Food</p>
        <h1 className="text-center text-4xl mt-6"><b>Get The Best Offers</b></h1>
        <p className="text-center text-2xl mt-6">The food at your doorstep.Why starve when you have us. Your hunger <br/> partner. Straight out of the oven to your doorstep.</p>
      </div>
      <div className="flex flex-row mt-36">
        <div className="ml-56">
          <h1><b className="text-3xl">Any day<br/> Offers</b></h1><br/>
          <p className="text-1x">New phenomenon Burger taste</p><br/>
          <h3 className="text-[#FFC625]">$12.90</h3>
        </div>
        <div>
          <img src="/images/burgers.jpg" className="w-30 h-32"></img>
        </div>

        <div className="ml-56">
          <h1><b className="text-3xl">Other<br/> Flavors</b></h1><br/>
          <p className="text-1xl">Save room. We made salats</p><br/>
          <h3 className="text-[#FFC625]">$12.90</h3>
        </div>
        <div>
          <img src="/images/saladplate.png" className="w-30 h-32"></img>
        </div>

        <div className="ml-56">
          <h1><b className="text-3xl">Find a poco<br/> store near<br/> you</b></h1><br/>
          <p className="text-1x">New phenomenon Burger taste</p><br/>
        </div>
        <div>
          <img src="/images/maps.png" className="w-30 h-32 bg-[#FFC625]"></img>
        </div>

      </div>
      <div>
      <h1 className="text-center text-4xl mt-6"><b>Our Services</b></h1>
        <div className="grid grid-cols-4 ml-4">
          <div>
            <img src="/images/restaurant.png" className="w-55 h-40 ml-56 mt-20"></img>
            <p className="ml-56 mt-10"><b>55+ Restaurants</b></p>
          </div>

          <div>
            <img src="/images/qual.png" className="w-55 h-40 ml-56 mt-20"></img>
            <p className="ml-60 mt-10"><b>Good Quality</b></p>
          </div>

          <div>
            <img src="/images/discount.png" className="w-55 h-40 ml-56 mt-20"></img>
            <p className="ml-60 mt-10"><b>Discount System</b></p>
          </div>

          <div>
            <img src="/images/freedelivery.png" className="w-55 h-40 ml-56 mt-20"></img>
            <p className="ml-60 mt-10"><b>Fast Delivery</b></p>
          </div>
        </div>

      </div>

      <div>
        <h4 className="text-center text-2xl mt-10">Testimonials</h4>
        <h1 className="text-center text-5xl mt-10"><b>What Our Client Say</b></h1>
        <p><b className=" text-[#FFC625] size-80">""</b></p>
        <p className="text-center mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta sed eros<br/> non eleifend. Morbi ultrices eu dolor laoreet blandit. Donec in neque <br/>enim. Phasellus vel tellus non velit sollicitudin tempor.</p>

      </div>

      <div className='flex gap-[16px] ml-[40%] p-[50px]'>
          <img src='images/img4.jpg' className='rounded-[24px] w-[50px] h-[50px]'/>
            <img src='images/img1.jpg' className='rounded-[32px] w-[60px] h-[66px]'/>
            <img src='images/img2.jpg' className='rounded-[40px] w-[70px] h-[80px] mt-[-10px]'/>
            <img src='images/img3.jpg' className='rounded-[40px] w-[60px] h-[66px]'/>
            <img src='images/img4.jpg' className='rounded-[24px] w-[50px] h-[50px]'/>
        </div>
        <div className="text-center">
          <p>Mitchell Marsh</p>
          <p>CEO, Bexon Agency</p>
        </div>
        <div>
          <img src="/images/arrowRight.png"></img>
          <img src="/images/arrowLeft.png"></img>
        </div>
        
      <div className=" flex flex-row ml-80">
        <div className="ml-50">
          <img src="/images/phone.png" className="ml-40 mr-36"></img>
        </div>
        <div>
          <h1 className="mt-20 text-2xl text-[#FFC625]">Download the app</h1>
          <h1 className="mt-10 text-4xl"><b>It's all here.<br/> All in one app.</b></h1>
          <p className="mt-10">Discover local on demand delivery or Pickup from<br/> restaurants, nearby grocieries nad convienient stores</p>
          <div className="flex flex-row gap-4">
          <button className="flex justify-evenly items-center bg-black text-white px-4 py-2 rounded-lg max-w-[250px] h-[70px] no-underline font-sans mt-[10%]">
             <img src="/images/apple2.png" className="w-[38px] h-[38px]"/>
             <div className="flex flex-col ml-2">
             <span className="text-xs">Download on the</span>
             <span className="text-lg font-semibold">App Store</span>
             </div>
             </button>
             <button className="flex justify-evenly items-center bg-black text-white px-4 py-2 rounded-lg max-w-[230px] h-[69px] no-underline font-sans mt-[10%]">
             <img src="/images/playstore.png" className="w-[38px] h-[38px]"/>
             <div className="flex flex-col ml-2">
             <span className="text-xs">GET IT ON</span>
             <span className="text-[20px] font-semibold">Google Play</span>
             </div>
             </button>

           
          </div>
          
        </div>
                 
      </div>

      <div>
        <h1 className="text-5xl ml-40 mt-20"><b>Subscribe Our Newsletter</b></h1>
        <h3 className="text-2xl ml-40 mb-20">Subscribe on our newsletter to get our news</h3>
      </div>

      <div className="bg-[#170505] grid grid-cols-4 h-180 w-full">
        <div className="mt-32  ml-48">
          <h1 className="text-3xl text-white mb-8"><b>FoodHouse.</b></h1>
          <p className="text-2xl text-white">Best cooks and delivery guys all at your service.<br/> Hot tasty food will reach you in 60 mins</p>
          <div className="grid grid-cols-3">
            <img src="/images/fbk.png"></img>
            <img src="/images/twi.png"></img>
            <img src="/images/li.png"></img>

          </div>
        </div>

        <div className="mt-32  ml-48">
          <h1 className="text-3xl text-white mb-8"><b>Company</b></h1>
          <ul>
            <li className="text-2xl text-white">Career</li>
            <li className="text-2xl text-white">About Us</li>
            <li className="text-2xl text-white">Blog</li>
            <li className="text-2xl text-white">Press info</li>
            <li className="text-2xl text-white">Features</li>

          </ul>
        </div>

        <div className="mt-32  ml-48">
          <h1 className="text-white text-3xl mb-8"><b>Fudo</b></h1>
          <ul>
            <li className="text-2xl text-white">Why Fudo</li>
            <li className="text-2xl text-white">How It Works</li>
            <li className="text-2xl text-white">Why Choose Us</li>
            <li className="text-2xl text-white">Client Stories</li>
            <li className="text-2xl text-white">Gallery</li>
          </ul>
        </div>

        <div className="mt-32  ml-48 mb-16">
          <h1 className="text-3xl text-white mb-8"><b>Menu</b></h1>
          <ul>
            <li className="text-2xl text-white">Breakfast</li>
            <li className="text-2xl text-white">Lunch</li>
            <li className="text-2xl text-white">Dinner</li>
            <li className="text-2xl text-white">Fast Fods</li>
            <li className="text-2xl text-white">Drinks</li>
          </ul>
        </div>

      </div>
      <div className="bg-[#FFC625] h-4/5">
        <h1 className="text-white">Copyright 2021 Break All Rights Reserved Terms Privacy Security</h1>
      </div>



      
    </main>
  );
}
