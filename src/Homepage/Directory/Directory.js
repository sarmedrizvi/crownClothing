import React from 'react'
import  HomepageCard  from '../Menu/homepage-component.js'
import './directory.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../Redux/Directory/Directory.Selector.js';
import { connect } from 'react-redux';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {
            sections.map(sample => (
                <HomepageCard key={sample.id} title={sample.title} picture={sample.imageUrl} size={sample.size} link={sample.linkUrl} />
            ))
        }
    </div>
)

const mapStateToProp = createStructuredSelector({
    sections: selectDirectorySection
})

export default connect(mapStateToProp)(Directory)
