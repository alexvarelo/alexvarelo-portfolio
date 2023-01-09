import AtomicSection from "../presetAtomic.js";
import { LanzaroteContent } from "../../components/content/atomico.js";

import Landing from "../../public/atomico/lanzarote/landingLanzarote.JPG";

function importAll(r) {
  let files = [];
  r.keys().map((x) => {
    if (!(x.match(/landing.*/) || x.match(/thumbnail.*/))) {
      files.push(x.replace("./", ""));
    }
  });
  return files;
}

const Lanzarote = () => {
  const imageContext = "/atomico/lanzarote/";
  let images = importAll(
    require.context(
      "../../public/atomico/lanzarote/",
      false,
      /\.(png|jpe?g|svg|JPG|JPEG)$/
    )
  );
  images = images.map((x) => imageContext + x);
  console.log(images);
  return (
    <AtomicSection
      id={"lanzarote"}
      title={LanzaroteContent.title}
      subtitle={LanzaroteContent.subtitle}
      description={LanzaroteContent.description1}
      srcImages={images}
      landing={Landing}
      tag={LanzaroteContent.tag}
    />
  );
};

export default Lanzarote;
