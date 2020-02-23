import React from 'react'
import HomepageCard from '../Menu/homepage-component.js'
import './directory.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../Redux/Directory/Directory.Selector.js';
import { connect } from 'react-redux';
import { AddCategories } from '../../Redux/Directory/Directory.Action.js';
import { Spinner } from '../../Spinner/Spinner.component.js';

class Directory extends React.Component {
    componentDidMount() {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => this.props.AddCategories(data))

    }
    render() {

        const { sections } = this.props
        return (
            <div className="directory-menu">
                {sections.length !== 0 ?
                    sections.map(sample => (
                        <HomepageCard key={sample.categoryid} title={sample.categoryname} picture={`https://i.picsum.photos/id/${sample.categoryid + 20}/200/200.jpg`} link={sample.link} />
                    ))
                    :
                    <div className='spinner'>
                        <Spinner />
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProp = createStructuredSelector({
    sections: selectDirectorySection
})


const mapDispatchToProps = dispatch => ({
    AddCategories: user => dispatch(AddCategories(user)),
})

export default connect(mapStateToProp, mapDispatchToProps)(Directory)
