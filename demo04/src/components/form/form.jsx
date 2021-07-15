const Form = (x) => {
  return (
    <>
      <h2>Form</h2>
      <form>
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Firstname</label>
          <input type="text" />
        </div>
        <div>
          <label>Sex</label>
          <label>
            <input type="radio" name="" id="" />
            Female
          </label>
          <label>
            <input type="radio" name="" id="" />
            Male
          </label>
          <label>
            <input type="radio" name="" id="" />
            Neutral
          </label>
        </div>
        <div>
          <label>Number of people</label>
          <input type="text" />
        </div>
        <div>
          <label>Comments</label>
          <textarea />
        </div>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Newsletter opt-in</label>
          <input type="checkbox" />
        </div>
      </form>

      <h2>Values</h2>
      <p>The values are: </p>
    </>
  );
};

export default Form;
