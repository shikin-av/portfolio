import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import grey from '@material-ui/core/colors/grey'

export default createMuiTheme({
    palette: {
        primary:   {main: grey[500]},
        secondary: {main: grey[300]},
        background:       grey[50],
        contrast:         grey[700],
        menuBackground:   grey[100],
        menuText:         grey[700],
    },
})