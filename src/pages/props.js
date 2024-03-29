import React, { useState } from "react";

function Panel({title, children , isActive, onShow}){
    return (
        <section>
            <h3>{title}</h3>
            {isActive ? (<p>{children}</p>) : (<button onClick={onShow}>Show</button>)}
        </section>
    )
}

const Props = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <h2>Almaty , Qazaqstan</h2>
            <Panel
            title = "About"
            isActive={activeIndex === 0}
            onShow={() => setActiveIndex(0)}
            >
                With a population of about 2 million, Almaty is Qazaqstan's largest city. From 1929 to 1997, it was its capital city.
            </Panel>
            <Panel
            title="Etymology"
            isActive={activeIndex === 1}
            onShow={() => setActiveIndex(1)}>
            The name comes from алма, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild Malus sieversii is considered a likely candidate for the ancestor of the modern domestic apple.
            </Panel>                
        </>
    )
}

export default Props;