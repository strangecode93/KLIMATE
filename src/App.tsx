import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout"
import { ThemeProvider } from "./components/theme-provider"
import WeatherDashboard from "./pages/weather-dashboard"
import CityPage from "./pages/city-page"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: false,
      refetchOnWindowFocus: false,
    },
  }
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <Layout>
      <Routes>
        <Route path="/" element={<WeatherDashboard/>} />
        <Route path="/city/:cityName" element={<CityPage/>} />
      </Routes>
     </Layout>
     </ThemeProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App