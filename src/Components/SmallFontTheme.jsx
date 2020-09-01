import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const SmallFontTheme = createMuiTheme({
    typography: {
        // Use the system font instead of the default Roboto font.
        "fontFamily": [
          'Courier New',
          'Courier', 
          'monospace'
        ].join(','),
        "fontSize": 13
    }
});

export default SmallFontTheme;