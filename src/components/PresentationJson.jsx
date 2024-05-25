import { useRef, useEffect } from "preact/compat";

export function PresentationJson() {
  let codeContainerRef = useRef(null);
  const constrain = 20;

  const rotateElement = (event) => {
    const { clientX: x, clientY: y } = event;
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    const offsetX = ((x - middleX) / middleX) * constrain;
    const offsetY = ((y - middleY) / middleY) * constrain;
    codeContainerRef.current.style.transform = `perspective(1000px) rotateX(${-1 * offsetY}deg) rotateY(${offsetX}deg)`
  };

  useEffect(() => {
    document.addEventListener('mousemove', rotateElement);
    codeContainerRef.current.style.transformStyle = 'preserve-3d';
  }, []);

  return(
  <div ref={codeContainerRef} id="mockup-code" class="mockup-code bg-gray-800 max-w-2xl shadow-2xl shadow-slate-700 max-md:text-sm max-sm:w-11/12 animate__animated animate__fadeIn animate__slow">
    <pre data-prefix="1"><code class="ml-0"><span>&#123;</span></code></pre>
      <pre data-prefix="2"><code class="ml-4"><span class="text-red-600">"name"</span>: <span class="text-green-600">"Gianluca Vespe"</span>,</code></pre>
      <pre data-prefix="3"><code class="ml-4"><span class="text-red-600">"birthday"</span>: <span class="text-green-600">"2004-09-04"</span>, </code></pre>
      <pre data-prefix="4"><code class="ml-4"><span class="text-red-600">"rol"</span>: <span class="text-green-600">"Software Developer"</span>,</code></pre>
      <pre data-prefix="5"><code class="ml-4"><span class="text-red-600">"other_information"</span>: &#123;</code></pre>
        <pre data-prefix="6"><code class="ml-8"><span class="text-red-600">"skills"</span>: [<span class="text-green-600">"C#"</span>,<span class="text-green-600"> "Angular"</span>, <span class="text-green-600">"TypeScript"</span>, <span class="text-green-600">"SQL"</span>],</code></pre>
        <pre data-prefix="7"><code class="ml-8"><span class="text-red-600">"hobbies"</span>: [<span class="text-green-600">"Music"</span>, <span class="text-green-600">"Reading"</span>, <span class="text-green-600">"Series"</span>, <span class="text-green-600">"Games"</span>],</code></pre>
        <pre data-prefix="8"><code class="ml-8"><span class="text-red-600">"education"</span>: [</code></pre>
          <pre data-prefix="9"><code class="ml-12">&#123;</code></pre>
            <pre data-prefix="10"><code class="ml-12"><span class="text-red-600">"degree"</span>: <span class="text-green-600">"Informatic Engineer Degree"</span>,</code></pre>
            <pre data-prefix="11"><code class="ml-12"><span class="text-red-600">"institution"</span>: <span class="text-green-600">"Universidad Nacional Arturo Jauretche"</span>,</code></pre>
            <pre data-prefix="12"><code class="ml-12"><span class="text-red-600">"date"</span>: <span class="text-green-600">"2024-present"</span></code></pre>
          <pre data-prefix="13"><code class="ml-12">&#125;,</code></pre>
          <pre data-prefix="14"><code class="ml-12">&#123;</code></pre>
              <pre data-prefix="15"><code class="ml-12"><span class="text-red-600">"degree"</span>: <span class="text-green-600">"Technical Degree in Programming"</span>,</code></pre>
              <pre data-prefix="16"><code class="ml-12"><span class="text-red-600">"institution"</span>: <span class="text-green-600">"EEST N°7 "Jose hernandez"</span>,</code></pre>
              <pre data-prefix="17"><code class="ml-12"><span class="text-red-600">"date"</span>: <span class="text-green-600">"2020-2023"</span></code></pre>
          <pre data-prefix="18"><code class="ml-12">&#125;</code></pre>
        <pre data-prefix="19"><code class="ml-8">]</code></pre>
      <pre data-prefix="20"><code class="ml-4">&#125;</code></pre>
    <pre data-prefix="21"><code class="ml-0">&#125;</code></pre>
  </div>
    )
};
