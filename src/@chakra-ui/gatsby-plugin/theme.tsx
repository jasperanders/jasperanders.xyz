import { extendTheme } from "@chakra-ui/react"
import "@fontsource/playfair-display/900.css" // Weight 500 with all styles included.
import "@fontsource/fira-code/600.css" // Weight 500 with all styles included.
import "@fontsource/dosis/700.css" // Weight 500 with all styles included.

const theme = extendTheme({
  fonts: {
    heading: "Dosis",
    mono: "Fira Code"
  },
  colors: {
    primary: "#247bfc",
    secondary: "#0ed9a7",
    secondaryLight: "#79D9C1",
    // lightGradient: "rgba(14, 217, 167, 0.1)",
    lightGradient: "rgba(36, 123, 252, 0.05)",
    warning: "#fc533d",
    backgroundLight: "#fcffea",
    black: "#444444"
  },
  borders: {
    base: "0.5rem solid #333"
  },
  components: {
    Heading: {
      baseStyle: {
        color: "primary",
        my: "2rem"
      },
      variants: {
        subHeading: {
          fontFamily: "mono",
          fontStyle: "italic",
          textAlign: "center",
          fontSize: "4xl"
        },
        blogTitle: {
          mb: "1rem"
        },
        dateHeading: {
          fontSize: "3xl",
          color: "warning",
          fontFamily: "mono"
        }
      }
    },
    Box: {
      baseStyle: {
        color: "backgroundLight"
      }
    },
    Text: {
      baseStyle: {
        fontSize: "lg",
        marginTop: "1rem",
        [`strong`]: {
          color: "warning"
        }
      },
      variants: {
        mdxText: {
          mb: "1rem"
        }
      }
    },
    Link: {
      baseStyle: {
        fontSize: "lg",
        color: "secondary",
        fontWeight: "bold"
      }
    },
    Table: {
      variants: {
        scrollTable: {
          minWidth: "900px",
          overflow: "scroll"
        }
      }
    }
  }
})

export default theme
