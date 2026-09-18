import Header from "../components/home/Header";
import Form from "../components/home/Form";
import List from "../components/home/List";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <>
      <main className="max-w-2xl mx-auto px-6 py-16">

        <Header />

        <div className="flex gap-4">
          <Form />

          <List />
        </div>

      </main>

      <Footer />
    </>
  )
}
