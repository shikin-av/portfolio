import React from 'react'
import Work from 'client/components/Work/Work'

const WorkAdmin = Work => 
    class extends React.Component {
        
        save = work => this.props.save(work)

        render() {
            return (
                <Work 
                    {...this.props}
                    save={this.save}     //TODO + this.edit , this.delete 
                />
            )
        }
    }

export default WorkAdmin(Work)