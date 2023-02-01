import Head from "next/head";
import Image from "next/image";
import Books from "../assets/books.jpg";
import Child from "../assets/child.jpg"
import Dunes from "../assets/dunes.jpg"
import Elephants from "../assets/elephants.jpg"
import Fern from "../assets/fern.jpg"
import Flower from "../assets/flower.jpg"
import Girl from "../assets/girl.jpg"
import Street from "../assets/street.jpg"
import Footer from "@/components/footer";
import Header from "@/components/header";



export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Mock Up</title>
        <meta name="Simple Blog Mock up by Michal Kielbasa" content="Blog mock up" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
          
          <div className="mainGrid">
            <div className="card">
              <Image alt="books" src={Books} className="thumbnail" />

              <content>
                <h1>Some title</h1>
                <p>
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit...
                </p>
                <span>Author</span>
              </content>
            </div>
            <div className="card">
              <Image alt="child" src={Child} className="thumbnail" />

              <content>
                <h1>Some title</h1>
                <p>sdfsdafcasdfcasdcvbnnnnnn sdfg da dsfg sdf gsdf </p>
                <span>Author</span>
              </content>
            </div>
            <div className="card">
              <Image alt="dunes" src={Dunes} className="thumbnail" />

              <content>
                <h1>Some title</h1>
                <p>Description</p>
                <span>Author</span>
              </content>
            </div>
            <div className="card">
              <Image  alt="elephants" src={Elephants} className="thumbnail" />

              <content>
                <h1>Some title</h1>
                <p>Description</p>
                <span>Author</span>
              </content>
            </div>
            <div className="card">
              <Image alt="fern" src={Fern} className="thumbnail" />

              <content>
                <h1>Some title</h1>
                <p>
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit...
                </p>
                <span>Author</span>
              </content>
            </div>
            <div className="card">
              <Image alt="street" src={Street} className="thumbnail" />

              <content>
                <h1>Some title</h1>
                <p>sdfsdafcasdfcasdcvbnnnnnn sdfg da dsfg sdf gsdf </p>
                <span>Author</span>
              </content>
            </div>
            <div className="card">
              <Image alt="flower" src={Flower} className="thumbnail" />

              <content>
                <h1>Some title</h1>
                <p>Description</p>
                <span>Author</span>
              </content>
            </div>
            <div className="card">
              <Image alt="girl" src={Girl} className="thumbnail" />

              <content>
                <h1>Some title</h1>
                <p>Description</p>
                <span>Author</span>
              </content>
            </div>
          </div>
          {/* Main grid */}

        
      </main>
      <Footer />

    </>
  );
}
