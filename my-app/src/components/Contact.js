const Contact = () => {
  return (
    <div>
      <h1 className="font-bold m-2 p-4 text-3xl">Contact</h1>
      <form>
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="msg"
        />
        <button className="bg-green-300">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
