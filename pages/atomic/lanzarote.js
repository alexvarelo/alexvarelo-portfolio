import AtomicSection from "../presetAtomic.js";
import { LanzaroteContent } from "../../components/content/atomico.js";
import { supabase } from "../../lib/supabaseClient.js";

function Lanzarote({ images }) {
  /* const imageContext = "/atomico/lanzarote/";
  let images = importAll(
    require.context(
      "../../public/atomico/lanzarote/",
      false,
      /\.(png|jpe?g|svg|JPG|JPEG)$/
    )
  );
  images = images.map((x) => imageContext + x); */
  const refImages = images.map((x) => {
    if (!x.isLanding && !x.isThumbnail) {
      return x.href;
    }
  }).filter(x => x !== undefined);
  return (
    <AtomicSection
      id={"lanzarote"}
      title={LanzaroteContent.title}
      subtitle={LanzaroteContent.subtitle}
      description={LanzaroteContent.description1}
      srcImages={refImages}
      landing={images.find((x) => x.isLanding).href}
      tag={LanzaroteContent.tag}
    />
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from("AtomicImages").select();
  return {
    props: {
      images: data,
    },
  };
}

export default Lanzarote;
