import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}

            {/* 3가지 방식 */}
            {/* <CoreConcept 
              title="Components" 
              description='The core UI building block - compose the user interface by combining multiple components.'
              image={componentsImg}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}
          </ul>
        </section>
    );
}