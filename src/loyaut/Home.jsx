import React from 'react'
import Banner from '../components/banner/Banner'
import ScrollText from "../components/scrollText/ScrollText"
import Collection from '../components/collection/Collection'

function Home({items}) {
    return (
        <>
            <Banner />
            <ScrollText> WE PRINTING ON</ScrollText>
            <Collection items={items} />
        </>
    )
}

export default Home