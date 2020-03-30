import React from 'react'
import MenuItem from '../menu-item/menu-item-component'
import './directory-styles.css'
import SECTIONS_DATA from './directory-data';
class DirectoryMenu extends React.Component{

    constructor(){
        super()

        this.state = SECTIONS_DATA
}


    render(){
        const SECTIONS_DATA = this.state;
        return (
            <div className='directory-menu'>
                {SECTIONS_DATA.map(({id ,...otherSectionProps})=>{
                    return <MenuItem key={id} {...otherSectionProps}/>   //you can use section.title and section.imageURl etc)
                })}
            </div> 
        )
    }
}



export default DirectoryMenu