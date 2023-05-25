'use client'

import Link from "next/link";

const Form = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.name.value)
          

        try {
            const response = await fetch("/api/database", {
                method: "POST",
                body: JSON.stringify({
                    name: e.target.name.value,
                    logo: e.target.logo.value,
                    address: e.target.address.value,
                }),
            });

        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <section className="flex-start w-full max-w-full flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient"> Shop</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="glassmorphism mt-10 flex w-full max-w-2xl flex-col gap-7"
      >
        <label>
          <span className="font-satoshi text-base font-semibold text-gray-700">
            Your AI Prompt
          </span>
        </label>

        <label>
          <input
                      type="text"
                      name='name'
            placeholder="name"
            required
            className="form_input"
          />
        </label>
        <label>
          <input
                      type="text"
                      name='logo'
            placeholder="logo"
            required
            className="form_input"
          />
        </label>
        <label>
          <input
                      type="text"
                      name='address'
            placeholder="address"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-sm text-gray-500">
            Cancel
          </Link>

          <button
            type="submit"
            className="rounded-full bg-primary-orange px-5 py-1.5 text-sm text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
