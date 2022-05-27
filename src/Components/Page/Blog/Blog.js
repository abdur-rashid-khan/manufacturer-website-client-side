import React from 'react';

const Blog = () => {
  return (
    <div className='container mx-auto px-4 pt-20'>
      <div className="">
        <h1 className="text-2xl py-4">Question answer</h1>
      </div>
      <div className="py-2">
        <strong className='text-slate-700'>1 . How will you improve the performance of a React Application?</strong>
        <p className='text-slate-500'>ans : Before optimizing a React application, we must understand how React updates its UI and how to measure an app’s performance. This makes it easy to solve any React performance problems.

          Let’s start by reviewing how the React UI updates.</p>
      </div>
      <div className="py-2">
        <strong className='text-slate-700'>What are the different ways to manage a state in a React application?</strong>
        <p className='text-slate-700'>ans :  There are four main types of state you need to properly manage in your React apps:
          <ol>
            <li>1. Local state</li>
            <li>2. Global state</li>
            <li>3. Server state</li>
            <li>4. URL state</li>
          </ol>
        </p>
      </div>
      <div className="py-2">
        <strong className='text-slate-700'>How does prototypical inheritance work?</strong>
        <p className='text-slate-700'>ans : JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding. </p>
      </div>
      <div className="py-2">
        <strong className='text-slate-700'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</strong>
        <p className='text-slate-700'> If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.  for useing other many components  use by hook</p>
      </div>
      <div className='px-2'>
        <strong  className='text-slate-700'>What is a unit test? Why should write unit tests?</strong>
        <p>The purpose is to validate that each unit of the application code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness</p>
      </div>
    </div>
  );
};

export default Blog;