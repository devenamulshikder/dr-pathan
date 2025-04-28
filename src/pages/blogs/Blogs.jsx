const Blogs = () => {
  return (
    <div className="max-w-6xl mx-auto my-8 flex flex-col gap-5">
      <h1 className="text-center font-bold text-3xl lg:text-4xl">
        Latest Blog Posts
      </h1>
      <div className="bg-[#fff] p-4 lg:p-10 rounded-2xl hover:scale-102 duration-600 hover:bg-blue-50">
        <p className="font-semibold text-lg">April 28, 2025</p>
        <h1 className="font-bold text-2xl lg:text-3xl my-2">
          What is useState and How Does it Work in React?
        </h1>
        <p className="text-lg">
          The useState hook is used to manage state in functional React
          components. It returns a state variable and a function to update it,
          enabling dynamic UI updates.
        </p>
        <div className="flex gap-2 mt-3">
          <p className="bg-blue-100 rounded-full px-2 text-blue-500">React</p>
          <p className="bg-blue-100 rounded-full px-2 text-blue-500">
            useState
          </p>
          <p className="bg-blue-100 rounded-full px-2 text-blue-500">Hooks</p>
        </div>
      </div>
      <div className="bg-[#fff] p-4 lg:p-10 rounded-2xl hover:scale-102 duration-600 hover:bg-blue-50">
        <p className="font-semibold text-lg">April 28, 2025</p>
        <h1 className="font-bold text-2xl lg:text-3xl my-2">
          What is the Purpose of useEffect in React?
        </h1>
        <p className="text-lg">
          useEffect is a hook for handling side effects in React, such as data
          fetching, subscriptions, or DOM manipulation. It runs after the
          component renders.
        </p>
        <div className="flex gap-2 mt-3">
          <p className="bg-blue-100 rounded-full px-2 text-blue-500">React</p>
          <p className="bg-blue-100 rounded-full px-2 text-blue-500">
            useState
          </p>
          <p className="bg-blue-100 rounded-full px-2 text-blue-500">
            useEffect
          </p>
        </div>
      </div>
      <div className="bg-[#fff] p-4 lg:p-10 rounded-2xl hover:scale-102 duration-600 hover:bg-blue-50">
        <p className="font-semibold text-lg">April 28, 2025</p>
        <h1 className="font-bold text-2xl lg:text-3xl my-2">
          What is a Custom Hook in React and When Should You Use One?
        </h1>
        <p className="text-lg">
          A custom hook is a reusable function that starts with 'use' and lets
          you extract and reuse stateful logic across components, improving code
          modularity and clarity.
        </p>
        <div className="flex gap-2 mt-3">
          <p className="bg-blue-100 rounded-full px-2 text-blue-500">React</p>
          <p className="bg-blue-100 rounded-full px-2 text-blue-500">
            Custom Hooks
          </p>
          <p className="bg-blue-100 rounded-full px-2 text-blue-500">
            Reusability
          </p>
        </div>
      </div>
      <div className="bg-[#fff] p-4 lg:p-10 rounded-2xl hover:scale-102 duration-600 hover:bg-blue-50">
        <p className="font-semibold text-lg">April 28, 2025</p>
        <h1 className="font-bold text-2xl lg:text-3xl my-2">
        Difference Between Controlled and Uncontrolled Components
        </h1>
        <p className="text-lg">
        Controlled components have their form data controlled by React state, while uncontrolled components store their data in the DOM. Controlled components offer better control and validation.
        </p>
        <div className="flex gap-2 mt-3">
          <p className="bg-blue-100 rounded-full px-2 text-blue-500">React</p>
          <p className="bg-blue-100 rounded-full px-2 text-blue-500">
            Forms
          </p>
          <p className="bg-blue-100 rounded-full px-2 text-blue-500">Controlled Components</p>
        </div>
      </div>
      <div className="bg-[#fff] p-4 lg:p-10 rounded-2xl hover:scale-102 duration-600 hover:bg-blue-50">
        <p className="font-semibold text-lg">April 28, 2025</p>
        <h1 className="font-bold text-2xl lg:text-3xl my-2">
        Tell Us Something About useFormStatus() in React
        </h1>
        <p className="text-lg">
        useFormStatus is a hook in React used with forms in server components. It gives insight into the form’s pending state, enabling better UX during form submission.
        </p>
        <div className="flex gap-2 mt-3">
          <p className="bg-blue-100 rounded-full px-2 text-blue-500">React</p>
          <p className="bg-blue-100 rounded-full px-2 text-blue-500">
            useFormStatus
          </p>
          <p className="bg-blue-100 rounded-full px-2 text-blue-500">Forms</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
