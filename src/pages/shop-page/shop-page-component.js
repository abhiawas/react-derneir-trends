import React from 'react';
import './shop-page-styles.scss';
import SHOP_DATA from './shop-page-data'
import CollectionPreview from "../../components/collection-preview/collection-preview-component"
class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        return(
            <div>
               {
                   this.state.collections.map(({id , ...otherCollectionProps})=>{
                       return (<div>
                           <CollectionPreview key={id} {...otherCollectionProps}/>
                        </div>)
                   })
               } 
             </div>
        )
    }
}




export default ShopPage;