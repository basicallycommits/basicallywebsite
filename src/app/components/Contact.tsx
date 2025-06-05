const Contact = () => {
  return (
    <footer
      id="contact"
      className="mt-24 py-16 px-4 sm:px-6 lg:px-8 bg-[var(--colour-accent)] dark:bg-[var(--colour-accent-dark)]"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="heading h2">Contact</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Want to get in touch? Send me a message below and I'll get back to
          you.
        </p>

        <form
          action="https://formspree.io/f/mldjqrbg"
          method="POST"
          className="mt-8 space-y-4 text-left"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full text-field"
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
            className="w-full text-field"
            rows={5}
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-semibold transition"
          >
            Send
          </button>
        </form>
      </div>
    </footer>
  );
};

export { Contact };
