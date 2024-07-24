import Icon from "@client/components/Icon";
import Scene from "@client/components/Scene";

export default function HomePage() {
  return (
    <>
      <Scene />
      <main>
        <section id="home">
          <header>
            <Icon />
            <h1>Three.js</h1>
            <p>A JavaScript 3D library</p>
          </header>
          <article>
            <h2>About</h2>
            <p>Three.js is a JavaScript library that simplifies the process of creating and displaying 3D graphics in a web browser. It is based on WebGL, a JavaScript API for utilizing the GPU to render 3D graphics.</p>
            <p>Three.js provides a higher-level abstraction over WebGL, making it easier for developers to create complex 3D scenes with lighting, materials, animations, and user interaction.</p>
          </article>
          <article>
            <h2>Key features of Three.js include:</h2>
            <ul>
              <li>Ease of use: Three.js provides a simplified API that is easier to learn and use than WebGL.</li>
              <li>Versatility: Three.js can be used to create a wide variety of 3D graphics, from simple objects to complex scenes.</li>
              <li>Performance: Three.js is optimized for performance, making it suitable for creating real-time 3D applications.</li>
              <li>Cross-browser compatibility: Three.js works with all major web browsers.</li>
            </ul>
          </article>
          <article>
            <p>If you are interested in learning Three.js, there are many resources available to help you get started:</p>
            <ul>
              <li>The Three.js website: The official Three.js website provides comprehensive documentation, tutorials, and examples.</li>
              <li>Online courses: There are many online courses available that teach you how to use Three.js.</li>
              <li>Books: There are a few books available that cover Three.js in depth.</li>
              <li>Community forums: There are active online communities where you can ask questions and get help from other Three.js developers.</li>
            </ul>

          </article>
          <article id="useful-links">
            <p>With its ease of use, versatility, and performance, Three.js is a powerful tool for creating 3D graphics for the web. If you are interested in learning 3D web development, Three.js is a great place to start.
              Here are some helpful links to get you started:
            </p>
            <ul>
              <li><a href="https://threejs.org/" target="_blank">Three.js website</a> </li>
              <li><a href=" https://threejs.org/docs/" target="_blank">Three.js documentation</a> </li>
              <li><a href="https://threejs.org/examples/" target="_blank">Three.js examples</a> </li>
              <li><a href="https://discourse.threejs.org/" target="_blank">Three.js community forums</a> </li>
              <li><a href="https://threejs-journey.com/" target="_blank">Three.js journey</a> </li>
              <li><a href="https://sbcode.net/threejs/" target="_blank">Sbcode: Three.js</a> </li>
              <li><a href="https://sbcode.net/react-three-fiber/" target="_blank">Sbcode: React Three Fiber Tutorials</a> </li>
            </ul>
          </article>
          <footer>
            <p className="text-amber-200">click on geometric shapes</p>
          </footer>
        </section>
      </main>
    </>

  )
}


