import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {Link} from 'react-router-dom'

import Row from 'client/components/Row'
import Separator from 'client/components/Separator'

class Home extends React.Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                {/*<div className={classes.topLineOne}></div>*/}
                <div className={classes.topLine}></div>
                <Row style={{
                        backgroundColor: '#e68966',
                        paddingTop: 0,
                        position: 'fixed',
                        zIndex: -100,
                        width: '100%',
                        height: 650,
                        top: 0,
                        borderBottom: 'none',
                        boxShadow: 'inset rgba(50, 50, 50, 0.22) 0px 20px 150px 20px',
                    }}
                >
                    <div className={classes.center}>
                        <div style={{
                            padding: 50,
                            paddingTop: 75,
                            paddingBottom: 24,
                        }}>
                            <h1 className={classes.headH1}>ШИКИН</h1>                        
                            <h2 className={classes.headH2}>АЛЕКСАНДР</h2>
                            <Separator type='big'/>
                            <h3 className={classes.phone}>8 912 448 33 40</h3>
                            <Separator 
                                type='big' 
                                style={{
                                    marginTop: -20,
                                }}
                            />
                            <h4 className={classes.headTags}>javascript | react | node.js</h4>
                        </div>
                    </div>
                </Row>
                <Row style={{
                        boxShadow: '0px -20px 25px -10px rgba(50, 50, 50, 0.22), 1px -24px 100px -10px rgba(50, 50, 50, 0.12)',
                        marginTop: 520,
                        zIndex: 10,
                        borderTop: '1px solid rgba(0,0,0,0.2)',
                    }}
                >
                    <div className={classes.center}>
                        <h1>ДОМАШНЯЯ СТРАНИЦА</h1>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                        <p>Домашняя страница</p>
                    </div>
                </Row>
            </div>
        )
    }
}    



const styles = () => ({
    root: {        
               
    },    
    center: {
        textAlign: 'center',
    },
    headH1: {
        fontSize: 90,
        marginBottom: -10,
    },
    headH2: {
        fontSize: 56,
        fontWeight: 600,
        marginBottom: 0,
    },
    phone: {
        fontSize: 50,
        textShadow: '1px 2px #FCFAF7, 2px 4px #484A4D',
        fontWeight: 700,
        marginTop: -10,
    },

    topLineOne: {
        height: 10,
        backgroundColor: '#343739',
    },
    topLine: {
        width: '100%',
        height: 50,
        backgroundImage: 'url(/assets/imgs/design/tailsTop3.png)',
        backgroundRepeat: 'repeat-x',
        marginBottom: -20,
        position: 'fixed',
        top: 0,
        boxShadow: 'inset 0px 35px 20px -10px rgba(50, 50, 50, 0.43), inset 0px 25px 33px -10px rgba(50, 50, 50, 0.12)',
        zIndex: -10,
    },
    headTags: {
        textTransform: 'uppercase',
        fontSize: 29,
        marginTop: -3,
        //textShadow: '1px 2px #FCFAF7, 1px 4px #484A4D',
        textShadow: '1px 1px #FCFAF7, 1px 2.5px #484A4D',
    },
})

export default withStyles(styles)(Home)