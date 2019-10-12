import React,{Component} from 'react'
import {sections} from './Section.js'
import {HomepageCard} from '../Menu/homepage-component.js'
import  './directory.styles.scss';

export class Directory extends Component{
    constructor()
    {
        super();
        this.state={
            sections: sections
        }
    }
    render()
    {
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(sample=>(
                        <HomepageCard key={sample.id} title={sample.title} picture={sample.imageUrl} size={sample.size}/>
                    ))
                }
            </div>
        )
    }
}