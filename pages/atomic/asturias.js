import AtomicSection from "../presetAtomic.js"
import { AsturiasContent } from "../../components/content/atomico.js"

import Landing from '../../public/atomico/asturias/landingAsturias.jpg'

function importAll(r) {
    return r.keys().map(r);
}

const Asturias = () => {
    return (
        <AtomicSection
            id={"Asturias"}
            title={AsturiasContent.title}
            subtitle={AsturiasContent.subtitle}
            description={AsturiasContent.description1}
            srcImages={importAll(require.context("../../public/atomico/asturias/", false, /\.(png|jpe?g|svg)$/))}
            landing={Landing}
            tag={AsturiasContent.tag}>
        </AtomicSection>
    )
}

export default Asturias;