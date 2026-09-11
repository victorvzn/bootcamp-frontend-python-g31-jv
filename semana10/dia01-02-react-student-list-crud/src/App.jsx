const App = () => {
  return (
    <main>
      <h1>Student CRUD</h1>

      <form>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            placeholder="Ex. Victor Villazón"
            required
          />
        </label>

        <label>
          <span>City</span>
          <input
            type="text"
            name="city"
            placeholder="Ex. Chiclayo"
            required
          />
        </label>

        <div>
          <input
            type="submit"
            value="Save"
          />
          <input
            type="reset"
            value="Clear"
          />
        </div>
      </form>

      <h2>Student list</h2>

      <section>
        <div>
          <div>Name</div>
          <div>city</div>
          <div>Actions</div>
        </div>

        <div>
          <div>Student 1</div>
          <div>Chiclayo</div>
          <div>
             <button>✏</button>
             <button>❌</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App