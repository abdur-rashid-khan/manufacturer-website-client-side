import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../../../assets/blog_photos/1.webp'
import blog2 from '../../../assets/blog_photos/2.webp'
import blog3 from '../../../assets/blog_photos/3.webp'
import blog4 from '../../../assets/blog_photos/4.webp'
import blog5 from '../../../assets/blog_photos/5.webp'
import blog6 from '../../../assets/blog_photos/6.webp'
import blog7 from '../../../assets/blog_photos/7.webp'
import blog8 from '../../../assets/blog_photos/8.webp'

const Blog = () => {
  const blog = [
    {
      id: 1,
      img: blog1,
      description: 'Chris is a confessed gearhead, and this space is dedicated to what he loves. You can start with his car reviews, featuring automobiles hailing from the past to the next generation. Read up on cool muscle cars, obscure sedans, “bad cars” from the 1970s, art cars, Aussie cars, and more. He also shares his road tests with beauties, like “Layla.” Head over to the “Galleries” section for nice-looking car pictures, videos, and his dream garage.',
      author: "Chris on Cars"
    },
    {
      id: 2,
      img: blog2,
      description: 'Look forward to what’s newsworthy and relevant in the auto industry as it happens here. Motorward provides its readers with information and entertainment through articles, guides, videos, pictures, and more. “Auto Stuff,” for one, packs numerous topics, such as exotics, gadgets, classics, motoring, Formula 1, gossip, and offbeat. You can find practical advice in the guides or read biographies, car acronyms, interviews, and Motorward’s digital magazine issues.',
      author: "Motorward"
    },
    {
      id: 3,
      img: blog3,
      description: 'The terms hoon (an Australian slang term that’s been redefined) and universe combine to mean a space for lovers of driving, or something to that effect. Hooniverse shares the not-so-known side of automobiles. Its articles range from reviews on cars on quiet Sundays to relatable concerns and interests among car guys and gals. Interested to hear what two off-road enthusiasts and their guests talk about on a podcast? Check out Off the Road Again episodes on the website. ',
      author: "Hooniverse"
    },
    {
      id: 4,
      img: blog4,
      description: 'If you enjoy collecting information about cars, such as their logos (and emblems), histories, and makers, this website is for you. Clicking “Type” takes you to logos of automobile companies in alphabetical order. CarType also has a collection of supercars from A to Z. Use the site map to check out the list of makes, models, and types. To access full-length articles, stories, and videos, check out the official blog.',
      author: "CarType"
    },
    {
      id: 5,
      img: blog5,
      description: 'This is a destination for classic car aficionados who are treated to visually-stimulating content. Films are Petrolicious’s forte, and it has tastefully captured the beauty and genius of the industry. Be awed by its videos on the Italian restoration maestros and building your dream car, which has 2.7 million views on YouTube. The website’s articles also don’t disappoint, with features on Porsche, Ferrari, Jaguar, and more in high-quality photos.',
      author: "Petrolicious"
    },
    {
      id: 6,
      img: blog6,
      description: 'Charles is the Humble Mechanic, whose experience as a Volkswagen technician comes useful for a blog on fixing VWs and more. One unique feature of his site is “Shop Shots,” where he provides readers with an insider look at weird things found in the cars he fixes. You can learn more through his repair videos and tutorials. Charles also hosts a podcast, eponymously named, where he covers areas of the industry for mechanics, enthusiasts, and the like. ',
      author: "Humble Mechanic"
    },
    {
      id: 7,
      img: blog7,
      description: 'Car Talk is an authority, most known for its honest car advice. Car Talk Blogs carries on the legacy from top-notch contributors. First off is the award-winning, nationally syndicated Dear Car Talk, which answers questions from readers. The column’s archives are also available, going as far back as 1988. Car Talk Car Complaints is another interesting blog. New York Times columnist Jim Motavalli and GQ’s auto editor Jamie Lincoln Kitman, among others, also maintain blogs on Car Talk. ',
      author: "Corvette Blogger"
    },
    {
      id: 8,
      img: blog8,
      description: 'What cars are selling like hotcakes in local markets? Matt Gasnier of Best Selling Cars Blog provides sales data in Afghanistan to Zimbabwe. You can filter the reports by country or year. Interestingly, clicking the latter pages takes you to car sales reports in 1928 when Ford Model T was the rage. Matt also blogs about his test drives and travels and adventures throughout the world. ',
      author: "Best Selling Cars Blog"
    },
  ]
  console.log(blog);
  return (
    <div>
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold px-4 leading-10 uppercase  text-center title_line pb-8">
        Blog
      </h1>
      <div className="">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  sm:grid-cols-2 gap-4'>
          {
            blog.map(p =>
              <div className="bg-[#fff] border border-white border-b-0 shadow-2xl rounded-lg" key={p.id}>
                <div className='m-auto' style={{ width: '220px', height: 'auto' }}>
                  <img className='rounded' style={{ width: '100%', height: 'auto' }} src={p.img} alt='' />
                </div>
                <div className="px-2"><hr className='bg-[#00c7492a] w-full h-[2px] rounded' /></div>
                <div className='pt-4 '>
                  {
                    p.author.length < 30 ?
                      <strong className='inline-block text-slate-700 px-2'>{p.author}</strong>
                      :
                      <strong className='inline-block text-slate-700 px-2'>{p.author.slice(0, 30)}.....</strong>
                  }

                  {
                    p.description.length < 150 ?
                      <p className=' text-slate-700 p-2'>{p.description}</p>
                      :
                      <p className=' text-slate-700 p-2 '>{p.description.slice(0, 166)} <Link to={`/purchase/${p.id}`} className='underline font-serif font-semibold text-slate-600' >... See More</Link></p>
                  }

                </div>
                <Link to={`/purchase/${p.id}`} className='text-center bg-[#00c749] hover:bg-[#00c749d7] w-full py-2 rounded-b mt-4 text-white inline-block hover:tracking-[2px] ease-in-out duration-500'>Details</Link>
              </div>)
          }
        </div>
      </div>
      <div class="text-center my-12"><Link to='/blog' class="btnc btn-gradient gradient2 text-center">See More</Link></div>
    </div>
  );
};

export default Blog;