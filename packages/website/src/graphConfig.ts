import { useTheme } from '@material-ui/core/styles'

export function useDefaultConfig() {
  const theme = useTheme()

  return {
    layout: {
      randomSeed: 1000
    },
    physics: {
      enabled: false
    },
    nodes: {
      borderWidth: 2,
      size: 10,
      color: {
        background: theme.palette.primary.main,
        border: theme.palette.primary.main
      },
      font: {
        color: theme.palette.grey.A400,
        size: 16
      },
      shape: 'dot'
    },
    edges: {
      arrows: {
        to: {
          enabled: true
        },
        from: {
          enabled: false
        }
      },
      labelHighlightBold: false,
      color: {
        color: theme.palette.secondary.main,
        highlight: theme.palette.secondary.main,
        opacity: 0.7
      },
      selectionWidth: 0
    },
    interaction: {
      selectConnectedEdges: false,
      dragView: false,
      dragNodes: false,
      zoomView: false
    }
  }
}
