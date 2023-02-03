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
        <meta
          name="Simple Blog Mock up by Michal Kielbasa"
          content="Blog mock up"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <div className="mainGrid">
          <div className="card">
            <Image alt="books" src={Books} className="thumbnail" />

            <content>
              <h1>Best books of the 2022</h1>
              <p>
                Here&apos;s my take on the best books published in the past
                year!
              </p>
              <span>Michal K</span>
            </content>
          </div>
          <div className="card">
            <Image alt="girl" src={Girl} className="thumbnail" />

            <content>
              <h1>Story of the past</h1>
              <p>Short and funny story that happened to me in the year 2000.</p>
              <span>Michal K</span>
            </content>
          </div>
          <div className="card">
            <Image alt="dunes" src={Dunes} className="thumbnail" />

            <content>
              <h1>Summer in Denmark</h1>
              <p>The best way to spend a summer in Denmark?</p>
              <span>Michal K</span>
            </content>
          </div>
          <div className="card">
            <Image alt="elephants" src={Elephants} className="thumbnail" />

            <content>
              <h1>Elephants need your help!</h1>
              <p>The fundraiser for elephant&apos;s safe haven.</p>
              <span>Michal K</span>
            </content>
          </div>
          <div className="card">
            <Image alt="fern" src={Fern} className="thumbnail" />

            <content>
              <h1>How to find the motivation?</h1>
              <p>
                Few simple tips how to find motivation for studying, even on the
                bluest day of the year.
              </p>
              <span>Michal K</span>
            </content>
          </div>
          <div className="card">
            <Image alt="street" src={Street} className="thumbnail" />

            <content>
              <h1>Dream destination</h1>
              <p>Photography of Kyoto</p>
              <span>Michal K</span>
            </content>
          </div>
          <div className="card">
            <Image alt="flower" src={Flower} className="thumbnail" />

            <content>
              <h1>What are my plants for May of 2022?</h1>
              <p>Can you guess the next destination?</p>
              <span>Michal K</span>
            </content>
          </div>
          <div className="card">
            <Image alt="child" src={Child} className="thumbnail" />

            <content>
              <h1>Across the South East Asia</h1>
              <p>My first visit to SEA region and how it went.</p>
              <span>Michal K</span>
            </content>
          </div>
        </div>
        {/* Main grid */}
      </main>
      <Footer />
    </>
  );
}
