import '@testing-library/jest-dom/extend-expect'

jest.mock('./hooks/useResizeObserver', () => () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
}))
