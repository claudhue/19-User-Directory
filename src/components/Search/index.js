import React from 'react'

export default function Search() {
    return (
        <div className="container searchbox-wrapper ml-auto">
            <input type="text"  placeholder="Search Here" className="searchbox"/>
            <input type="submit" value="search" className="searchbutton"></input>
        </div>
    )
}
