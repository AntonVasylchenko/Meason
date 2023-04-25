import React from 'react'
import "./collection.scss"
import { getCategory } from '../../util/getCategory'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Collection = ({ items }) => {
    const [type, setType] = React.useState([]);
    const [collection, setCollection] = React.useState([]);
    const [active, setActive] = React.useState(false)
    const showCollection = (name, event = false) => {
        let filterArray = items.filter(el => el.type === name);
        setCollection(getCategory(filterArray, "category"));
        if (event) {
            setActive(event.target.id);
        }
    }

    React.useEffect(() => {
        setType(getCategory(items, "type"))
    }, [items])


    React.useEffect(() => {
        showCollection(type[0])
    }, [type])

    return (
        <section>
            <div className='collection'>
                <div className="collection_wrap page-width">
                    <div className="collection-navigator">
                        <h2>PRINTING ON</h2>
                        <div className='collection-navigator_button'>
                            {type.map((el, index) => {
                                return <div
                                    className={Number(active) === index ? "isActive main-button" : "main-button"}
                                    onClick={(event) => showCollection(el, event)}
                                    id={index}
                                    key={el + index}
                                >
                                    {el}
                                </div>
                            })}
                        </div>
                    </div>
                    <div className='collection-names'>
                        <TransitionGroup>
                            {collection.map((el, index) => {
                                return (
                                    <CSSTransition
                                        key={el + index}
                                        timeout={500}
                                        classNames="item"
                                    >
                                        <p  className='collection-name'>{el}</p>
                                    </CSSTransition>
                                )
                            })}
                        </TransitionGroup>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Collection