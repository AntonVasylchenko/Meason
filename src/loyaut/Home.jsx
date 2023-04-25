import React from 'react'
import Banner from '../components/banner/Banner'
import ScrollText from "../components/scrollText/ScrollText"
import Collection from '../components/collection/Collection'
import Types from '../components/types of pring/Types'


function Home({ items }) {
    return (
        <>
            <Banner />
            <ScrollText> WE PRINTING ON</ScrollText>
            <Collection items={items} />
            <ScrollText> Types of PRINTING</ScrollText>
            <Types />
        </>
    )
}

export default Home