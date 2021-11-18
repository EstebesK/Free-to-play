import { createTheme } from '@material-ui/core/styles'

const greyMain = "#343A40";
const arcOrange = "#FFBA60";

export default createTheme({
    palette: {
        common: {
            blue: `${greyMain}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${greyMain}`
        },
    },
    typography: {
        ftpLogo: {
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.5,
            color: '#EEEEEE'
        }
    }
})