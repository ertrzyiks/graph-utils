import { useTheme } from '@material-ui/core/styles'

export function useDefaultConfig() {
  const theme = useTheme()

  return {
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
      color: {
        color: theme.palette.secondary.main,
        opacity: 0.7
      }
    },
    interaction: {
      dragView: false,
      dragNodes: false,
      zoomView: false
    }
  }
}
