import React, { Component } from 'react';

import folioLists from "../../data/folio"

import styles from "./Work.module.css"
class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log(folioLists)
        return (
            <>
            <h1 style={{
    margin: 0,
    textAlign: 'center',
    padding: '1rem',
    paddingTop: '2rem',
    textDecoration: 'underline',
    fontSize: '3rem',
            }}>My Work</h1>
            <div className={styles.section_wrapper}>
                {folioLists.map((curr, index) => {
                    return (
                        <div key={index} className={styles.folio_card}>
                            <img src={curr.thumbnail} alt={curr.name} />
                            <div className={styles.folio_title_descr}>
                                <h3>{curr.name}</h3>
                    <span>{curr.type}</span>
                                <p>{curr.descr}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            </>
        )
       
    }
}

export default Work;