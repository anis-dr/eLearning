import React from "react";
import { Zoom } from "react-slideshow-image";

const images = [
  "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/118731966/original/b59ec49c9ad6cc74144bd368047e920e039bd4e0/do-creative-web-development.jpg",
  "https://inteng-storage.s3.amazonaws.com/img/iea/V0OyRR5JGQ/sizes/cprogrammingbundle_resize_md.jpg",

  "https://upload.wikimedia.org/wikipedia/commons/c/c8/Logo-java-830x460.jpg",
  "https://www.python.org/static/community_logos/python-logo-master-v3-TM.png"
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

const Slideshow = () => {
  return (
    <div>
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => (
            <img
              key={index}
              style={{ width: "100%", height: "75%" }}
              src={each}
              alt=""
            />
          ))}
        </Zoom>
      </div>
      <br />
      <p>
        N react-mdl@1.11.0 requires a peer of react@0.14.x || ^15.0.0-rc but
        none is installed. You must install peer dependencies yourself. npm WARN
        react-mdl@1.11.0 requires a peer of react-dom@0.14.x || ^15.0.0-rc but
        none is installed. You must install peer dependencies yourself. npm WARN
        tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev ||
        >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >=
        3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You
        must install peer dependencies yourself. npm WARN slick-carousel@1.8.1
        requires a peer of jquery@>=1.8.0 but none is installed. You must
        install peer dependencies yourself. npm WARN optional SKIPPING OPTIONAL
        DEPENDENCY: fsevents@1.2.11
        (node_modules\jest-haste-map\node_modules\fsevents): npm WARN notsup
        SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11:
        wanted npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11
        (node_modules\chokidar\node_modules\fsevents): npm WARN notsup SKIPPING
        OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11:
        wanted(current: npm WARN optional SKIPPING OPTIONAL DEPENDENCY:
        fsevents@2.1.2 (node_modules\fsevents): npm WARN notsup SKIPPING
        OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted +
        slick-carousel@1.8.1 added 1 package from 6 contributors and audited
        906584 packages in 37.131s 31 packages are looking for funding run `npm
        fund` for details found 0 vulnerabilities
      </p>
    </div>
  );
};

export default Slideshow;
